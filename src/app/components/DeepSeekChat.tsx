"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import { MemoisedMarkdown } from "./MemoisedMarkdown";

const SUBMITTED = "submitted";
const STREAMING = "streaming";

export default function DeepSeekChat() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
    // Throttle the messages and data updates to 50ms:
    experimental_throttle: 50,
  });

  let conversationStatus = "";

  switch (status) {
    case STREAMING:
      conversationStatus = "AI is typing...";
      break;
    case SUBMITTED:
      conversationStatus = "AI is thinking...";
      break;
  }

  return (
    <section className="flex flex-col flex-1 gap-4 text-xl w-full h-full overflow-scroll">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (input.trim()) {
            sendMessage({ text: input });
            setInput("");
          }
        }}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={status !== "ready"}
          placeholder="Say something..."
          className="border-2 border-gray-300 rounded-md py-2 px-4 flex-grow disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status !== "ready"}
          className="border-2 py-2 px-4 rounded-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-inherit"
        >
          Submit
        </button>
      </form>

      {[SUBMITTED, STREAMING].includes(status) && (
        <button
          type="button"
          onClick={() => stop()}
          className="border-2 py-2 px-4 rounded-md border-red-500 text-red-500 hover:bg-red-500 hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-inherit"
        >
          Stop
        </button>
      )}

      <article className="flex flex-col gap-4 overflow-scroll">
        {messages.map(({ id, role, parts }) => (
          <div key={id} className="flex gap-2">
            <span className="font-bold">
              {role === "user" ? "User: " : "AI: "}
            </span>
            <div className="flex flex-col gap-4">
              {parts.map(
                (part) =>
                  part.type === "text" && (
                    <MemoisedMarkdown
                      key={`${id}`}
                      id={id}
                      content={part.text}
                    />
                  )
              )}
            </div>
          </div>
        ))}
      </article>

      {conversationStatus && <p>{conversationStatus}</p>}
    </section>
  );
}
