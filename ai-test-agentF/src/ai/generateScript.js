import axios from "axios";
import fs from "fs";
import dotenv from "dotenv";
import { buildPrompt } from "./promptTemplate.js";

dotenv.config();


const scenario = process.env.SCENARIO || process.argv[2];

if (!scenario) {
  console.error("No scenario provided");
  process.exit(1);
}

async function generateTest() {
  console.log("🚀 Generating test using Ollama...");

  const response = await axios.post("http://localhost:11434/api/generate", {
    model: "llama3",
    prompt: buildPrompt(scenario),
    stream: false
  });

  const code = response.data.response;

  fs.mkdirSync("tests/generated", { recursive: True });
  fs.writeFileSync("tests/generated/test.spec.js", code);
}

generateTest();
