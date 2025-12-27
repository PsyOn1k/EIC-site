
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for "Ост Индийская Компания" (East India Company - eicgrup.ru).
Your focus is exclusively on providing personnel (staffing/recruitment).
Company strengths:
- Free for employers (commission from employee salary).
- Full integration of candidates.
- Fast and honest recruitment without headaches.
- Individual approach to every business.
- Specializing in sourcing talent for Russian companies.

Current phone: +7 812 996 86 78.
Be professional, welcoming, and emphasize the "No payment upfront for employers" model.
`;

export const getGeminiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Извините, сейчас я не могу ответить. Пожалуйста, позвоните нам по номеру +7 812 996 86 78.";
  }
};
