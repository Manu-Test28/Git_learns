import OpenAI from "openai";
import fs from "fs";
import dotenv from "dotenv";
import { buildPrompt } from "./promptTemplate.js";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const scenario = process.env.SCENARIO || process.argv[2];

if (!scenario) {
  console.error("No scenario provided");
  process.exit(1);
}

async function generateTest() {
  const response = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are an expert QA automation engineer." },
      { role: "user", content: buildPrompt(scenario) }
    ],
    temperature: 0.2
  });

  const code = response.choices[0].message.content;

  fs.mkdirSync("tests/generated", { recursive: True });
  fs.writeFileSync("tests/generated/test.spec.js", code);
}

generateTest();
