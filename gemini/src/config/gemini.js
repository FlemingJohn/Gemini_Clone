import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API key from environment variables or a secure place
const API_KEY = import.meta.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export async function run(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}