import { useRef, useState } from "react";
import { useSpeech } from "../hooks/useSpeech";
import { Button, Menu, MenuItem } from "@mui/material";

export const ChatInterface = ({ hidden, ...props }) => {
  const input = useRef();
  const { tts, loading, message, startRecording, stopRecording, recording } =
    useSpeech();

  // State for the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null); // To control menu visibility
  const [selectedOption, setSelectedOption] = useState("Select Personality");
  const [buttonClicked, setButtonClicked] = useState(false);

  const sendMessage = () => {
    const text = input.current.value;
    if (!loading && !message) {
      tts(text);
      input.current.value = "";
    }
  };

  // Handle opening of dropdown menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setButtonClicked(true);
  };

  // Handle closing of dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle option selection in the dropdown
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleClose(); // Close the menu after selection
  };

  if (hidden) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-between p-4 flex-col pointer-events-none">
      <div className="self-start backdrop-blur-md bg-white bg-opacity-50 p-4 rounded-lg pointer-events-auto">
        <h1 className="font-black text-xl text-gray-700">Persona Palooza</h1>
        <p className="text-gray-600">
          {loading
            ? "Loading..."
            : "Type a message and press enter to chat with the AI."}
        </p>
        <div className="flex justify-start mt-4 p-2">
          <Button
            onClick={handleClick}
            className="mt-4 p-4 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-400 rounded-lg"
            variant="contained"
            color="primary"
            style={{ zIndex: 60 }} // Higher z-index to ensure it's on top
          >
            {selectedOption} {/* Display the selected option */}
          </Button>

          {/* Menu Component */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ zIndex: 60 }} // Higher z-index for dropdown menu
          >
            <MenuItem onClick={() => handleOptionSelect("Personality 1")}>
              Corporate Robot
            </MenuItem>
            <MenuItem onClick={() => handleOptionSelect("Personality 2")}>
              Thanos
            </MenuItem>
            <MenuItem onClick={() => handleOptionSelect("Personality 3")}>
              Sumanth
            </MenuItem>
          </Menu>
          <Button
            disabled={loading || message}
            onClick={sendMessage}
            className={`bg-gray-500 hover:bg-gray-800 text-white p-4 px-10 font-semibold uppercase rounded-md ${
              loading || message ? "cursor-not-allowed opacity-30" : ""
            }`}
          ></Button>
        </div>
      </div>

      <div className="w-full flex flex-col items-end justify-center gap-4"></div>

      <div className="flex items-center gap-2 pointer-events-auto max-w-screen-sm w-full mx-auto">
        <button
          onClick={recording ? stopRecording : startRecording}
          className={`bg-gray-500 hover:bg-gray-800 text-white p-4 px-4 font-semibold uppercase rounded-md ${
            recording ? "bg-red-500 hover:bg-red-600" : ""
          } ${loading || message ? "cursor-not-allowed opacity-30" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </button>

        {/* Input field with higher z-index */}
        <input
          className="w-full placeholder:text-gray-800 placeholder:italic p-4 rounded-md bg-opacity-50 bg-white backdrop-blur-md z-60"
          placeholder="Type a message..."
          ref={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button
          disabled={loading || message}
          onClick={sendMessage}
          className={`bg-gray-500 hover:bg-gray-800 text-white p-4 px-10 font-semibold uppercase rounded-md ${
            loading || message ? "cursor-not-allowed opacity-30" : ""
          }`}
        >
          Send
        </button>
      </div>
    </div>
  );
};
