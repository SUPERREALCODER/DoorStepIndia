
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiChatResponse = async (userMessage: string, history: {role: 'user' | 'model', text: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    You are 'Dora', the Expert AI Assistant for DoorStep Essentials.
    Our brand is ultra-specialized. We ONLY do:
    1. AC & Cooling Systems
    2. Large Appliances (Fridge, Washing Machines, Microwaves)
    3. Essential Plumbing (Leaks, Taps, Tanks)
    4. Electrical Safety & Repairs
    
    CRITICAL BRAND GUIDELINES:
    - We are NOT a generic aggregator. If asked for salon, cleaning, or pest control, explain: "To ensure the highest standard of craftsmanship, we niche down exclusively to Home Systems. We believe your home's lifelines deserve specialists, not generalists."
    - Highlight our 'Gold Standard Guarantee': 30-day free re-service and transparent digital billing.
    - HYBRID SUPPORT MODEL: For complex issues, disputes, or emergency leaks, tell the user they can call our human 'Trust Advocates' at 1800-419-544.
    - VIBE: Highly professional, reassuring, and technical. You know how an AC compressor works, but you speak with the empathy of a neighbor.
    - Be concise. Use formatting (bullet points) for clarity.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: `System instruction for this interaction: ${systemInstruction}` }] },
        ...history.map(h => ({
          role: h.role,
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        temperature: 0.5,
        topP: 0.8,
      }
    });

    return response.text || "I'm sorry, I'm having trouble connecting right now. Please call our support line for immediate assistance.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Please reach out to our team directly at +91-8851701544.";
  }
};
