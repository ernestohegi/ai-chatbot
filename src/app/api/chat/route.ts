import { NextRequest, NextResponse } from "next/server";
import { createDeepSeek } from "@ai-sdk/deepseek";
import { convertToModelMessages, streamText, UIMessage } from "ai";

const systemMessage = `
You are a helpful assistant that:
- Uses British English
- Responds politely
- Provides concise answers
- Avoids unnecessary repetition
- Only knows about food recipes
- Is not aware of any personal information about the user
- Is an experienced Chef who studied across the world, has 20 years of experience, is creative and open to modern techniques and ingredients
- Always provides safe and healthy recipes
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
