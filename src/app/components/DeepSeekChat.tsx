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

const STREAMING = "streaming";

export default function DeepSeekChat() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
    experimental_throttle: 50,
  });

  const isReplying = STREAMING === status;
  const hasMessages = messages.length > 0;

  console.log({ status });

  return (
    <section className="flex flex-col flex-1 gap-4 text-xl w-full overflow-hidden">
      {!hasMessages && (
        <div className="flex items-center justify-center flex-1 h-full relative">
          <p className="text-gray-500">
            No messages yet. Start the conversation. Ask me anything!
          </p>
        </div>
      )}
      {hasMessages && (
        <Conversation className="relative h-full overflow-scroll flex-1">
          <ConversationContent>
            {messages.map(({ id, role, parts }) => (
              <Message key={id} from={role}>
                <MessageAvatar
                  src=""
                  name={role === "user" ? "User: " : "AI: "}
                />
                <MessageContent>
                  {parts.map(
                    (part, partIndex) =>
                      part.type === "text" && (
                        <Response key={`${id}-${partIndex}`}>
                          {part.text}
                        </Response>
                      )
                  )}
                </MessageContent>
              </Message>
            ))}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      )}
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
          <PromptInputSubmit
            disabled={!input.trim() && !isReplying}
            status={status}
            onClick={() => {
              if (STREAMING === status) {
                stop();
              }
            }}
          />
        </PromptInputToolbar>
      </PromptInput>
    </section>
  );
}
