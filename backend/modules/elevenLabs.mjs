import ElevenLabs from "elevenlabs-node";
import dotenv from "dotenv";
import { mapping } from "../constants/voiceMapping.js";
dotenv.config();

const elevenLabsApiKey = process.env.ELEVEN_LABS_API_KEY;
const modelID = process.env.ELEVEN_LABS_MODEL_ID;

const voice = new ElevenLabs({
  apiKey: elevenLabsApiKey,
});

async function convertTextToSpeech({ text, fileName, personality }) {
  await voice.textToSpeech({
    fileName: fileName,
    textInput: text,
    voiceId: mapping[personality],
    stability: 0.5,
    similarityBoost: 0.5,
    modelId: modelID,
    style: 1,
    speakerBoost: true,
  });
}

export { convertTextToSpeech, voice };
