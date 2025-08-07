import { GoogleGenAI } from "@google/genai";
import { OPENAI_API_KEY } from "./constants";
const ai = new GoogleGenAI({
    apiKey:OPENAI_API_KEY
});


export default ai;