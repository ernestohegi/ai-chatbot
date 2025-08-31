"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ui/shadcn-io/ai/conversation";
import {
  Message,
  MessageContent,
  MessageAvatar,
} from "@/components/ui/shadcn-io/ai/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputSubmit,
} from "@/components/ui/shadcn-io/ai/prompt-input";
import { Response } from "@/components/ui/shadcn-io/ai/response";
import { Loader } from "@/components/ui/shadcn-io/ai/loader";

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
    <section className="flex flex-col flex-1 gap-4 text-xl w-full overflow-hidden">
      <Conversation className="relative h-full overflow-scroll">
        <ConversationContent>
          {messages.map(({ id, role, parts }) => (
            <Message from={role}>
              <MessageAvatar
                src=""
                name={role === "user" ? "User: " : "AI: "}
              />
              <MessageContent>
                {parts.map(
                  (part) =>
                    part.type === "text" && (
                      <Response key={id}>{part.text}</Response>
                    )
                )}
              </MessageContent>
            </Message>
          ))}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>
      {conversationStatus && <Loader className="text-blue-500" />}
      <PromptInput
        onSubmit={(e) => {
          e.preventDefault();

          if (input.trim()) {
            sendMessage({ text: input });
            setInput("");
          }
        }}
      >
        <PromptInputTextarea
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          placeholder="Type your message..."
        />
        <PromptInputToolbar>
          <PromptInputSubmit disabled={!input.trim()} status={status} />
        </PromptInputToolbar>
      </PromptInput>
    </section>
  );
}
