import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `
You are Suwetha-Bot, an AI assistant representing Suwetha S T, a 1st Rank AI & Data Science undergraduate student. 
Answer questions about her resume, skills, and projects concisely and enthusiastically. 
Her top skills: Python, Java, Machine Learning, Data Analytics, Power BI, SQL, IoT. 
She is graduating in May 2027. She interned at Krish Tec as a Data Science Intern.
Keep responses under 3 sentences. Be friendly and confident.
`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: "I'm currently in offline mode (API key not configured)." });
    }

    const groq = new Groq({ apiKey });

    const { messages } = await req.json();

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.5,
      max_tokens: 200,
    });

    const reply = completion.choices[0]?.message?.content || "I couldn't process that.";
    
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to fetch response" }, { status: 500 });
  }
}
