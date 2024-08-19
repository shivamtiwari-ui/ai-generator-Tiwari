// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
  
//   const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  

//     export const chatSession = model.startChat({
//       generationConfig,
//    // safetySettings: Adjust safety settings
//    // See https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [
//       ],
//     });
  
 
  
  
// utils/AiModal.tsx
// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// export const chatSession = model.startChat({
//   generationConfig,
//   history: [],
// });


// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;

// if (!apiKey) {
//   throw new Error("API key is missing. Please set NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY in your environment variables.");
// }

// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// // Initialize chat session with empty history; you might want to manage history based on your use case
// const chatSession = model.startChat({
//   generationConfig,
//   history: [],
// });

// module.exports = { chatSession };

// AiModal.tsx
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("API key is missing. Please set NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY in your environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Initialize chat session with empty history; you might want to manage history based on your use case
const chatSession = model.startChat({
  generationConfig,
  history: [],
});

export { chatSession };


