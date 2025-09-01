import { generateText } from "ai";
 import { google } from "@ai-sdk/google";


export async function POST(req: Request) {
    try {
      const { prompt } = await req.json();
  
      const { text } = await generateText({
        model: google("models/gemini-2.0-flash-exp"),
        prompt,
      });
  
      return Response.json({ text });
    } catch (error) {
      console.error("Error generating text:", error);
      return Response.json({ error: "Failed to generate text" }, { status: 500 });
    }
  }

// model: google("models/gemini-2.0-flash-exp"),
