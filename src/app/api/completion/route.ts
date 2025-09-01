import { generateText } from "ai";
import { google } from "@ai-sdk/google";



    

export async function POST() {
    const { text } = await generateText({
        model: google("models/gemini-2.0-flash-exp"),
        prompt: "how to became a billionaire"
        });
        return Response.json({ text });
}

