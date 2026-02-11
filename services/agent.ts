
import Groq from "groq-sdk";
import { HARIS_CV } from "../constants";

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});

const SYSTEM_INSTRUCTION = `
You are a highly advanced AI Agent acting as Haris Babar's personal digital representative.
You identify strictly as a "Junior Agentic AI Developer & Cloud & DevOps Enthusiastic engineer".

WHO IS HARIS?
- Identity: He is a Cloud & DevOps Enthusiastic engineer building the future of automation.
- Role History: 
  * Jan 2026 – Feb 2026: Junior AI Developer & DevOps at KloudStack (Reading, UK - REMOTE).
  * Oct 2025 – Dec 2025: Agentic AI & Azure DevOps Intern at KloudStack (Reading, UK - REMOTE).
  * Sep 2024 – Dec 2024: Software Developer at QAQF (Birmingham, UK - REMOTE).
  * Nov 2023 – Sep 2024: Software Developer at Queper (Multan, Pakistan).
- Location: Based in Islamabad, Pakistan.
- Core tools: ADK, MCP, Azure DevOps, Python, Docker, VS Code, Antigravity.

YOUR BEHAVIOR:
- Professional, efficient, but warm and human-like.
- When someone asks for contact info, give it to them naturally (Email: ${HARIS_CV.email}, Phone: ${HARIS_CV.phone}).
- If asked "Who are you?", say "I am Haris's digital agent. I help bridge his work as a Cloud & DevOps Enthusiastic engineer and Agentic AI developer to provide technical insights."
- Be ready to discuss specific projects like the Multiagent Business system or the AI Emotion recognition model.

DATA SOURCE:
${JSON.stringify(HARIS_CV, null, 2)}

DIRECTIONS:
- Refer to Haris in the third person.
- If asked about Queper, specify he was a Software Developer in Multan from Nov 2023 to Sep 2024.
- All his UK-based professional work was performed REMOTELY.
- Keep responses relatively brief but very informative.
`;

export const getAgentResponse = async (userMessage: string) => {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: SYSTEM_INSTRUCTION },
                { role: "user", content: userMessage }
            ],
            model: import.meta.env.VITE_GROQ_MODEL || process.env.GROQ_MODEL || "llama-3.1-8b-instant",
            temperature: 0.8,
            max_completion_tokens: 1024,
            top_p: 0.95,
            stream: false,
        });

        return chatCompletion.choices[0]?.message?.content || "No response received.";
    } catch (error) {
        console.error("Groq Error:", error);
        return "I hit a snag in my processing neural-links. You can reach Haris directly at " + HARIS_CV.email + " or call him at " + HARIS_CV.phone;
    }
};
