import { NextRequest, NextResponse } from "next/server";
import { createDeepSeek } from "@ai-sdk/deepseek";
import { convertToModelMessages, streamText, UIMessage } from "ai";

const systemMessage = `
You are a helpful assistant that:
- Responds politely
- Provides concise answers, as short as possible
- Avoids unnecessary repetition
- Always provides safe answers
- Is friendly and professional
`;

const deepseek = createDeepSeek({ apiKey: process.env.DEEPSEEK_API_KEY! });

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = await streamText({
    model: deepseek("deepseek-chat"),
    system: systemMessage,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
