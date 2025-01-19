import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { generateResponse } from "./modules/openAI.mjs";
import { lipSync } from "./modules/lip-sync.mjs";
import {
  sendDefaultMessages,
  defaultResponse,
} from "./modules/defaultMessages.mjs";
import { convertAudioToText } from "./modules/whisper.mjs";
import { mapping } from "./constants/promptsMapping.js";

dotenv.config();

const elevenLabsApiKey = process.env.ELEVEN_LABS_API_KEY;

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get("/voices", async (req, res) => {
  res.send(await voice.getVoices(elevenLabsApiKey));
});

app.post("/tts", async (req, res) => {
  const userMessage = await req.body.message;
  const personality = await req.body.personality;
  console.log(personality);
  console.log(mapping[personality]);
  const defaultMessages = await sendDefaultMessages({ userMessage });
  if (defaultMessages) {
    res.send({ messages: defaultMessages });
    return;
  }
  let openAImessages;
  try {
    openAImessages = await generateResponse({
      question: userMessage,
      systemPrompt: mapping[personality],
    });
  } catch (error) {
    openAImessages = defaultResponse;
  }

  openAImessages = await lipSync({
    messages: openAImessages.messages,
    personality: personality,
  });
  res.send({ messages: openAImessages });
});

app.post("/sts", async (req, res) => {
  const base64Audio = req.body.audio;
  const personality = await req.body.personality;
  console.log("Audio requested for", personality);
  const audioData = Buffer.from(base64Audio, "base64");
  const userMessage = await convertAudioToText({ audioData });
  let openAImessages;
  try {
    openAImessages = await generateResponse({
      question: userMessage,
      systemPrompt: mapping[personality],
    });
  } catch (error) {
    openAImessages = defaultResponse;
  }
  openAImessages = await lipSync({
    messages: openAImessages.messages,
    personality: personality,
  });
  res.send({ messages: openAImessages });
});

app.listen(port, () => {
  console.log(`Jack are listening on port ${port}`);
});
