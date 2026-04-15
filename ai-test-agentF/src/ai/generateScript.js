import axios from "axios";
import fs from "fs";
import { buildPrompt } from "./promptTemplate.js";

const scenario = process.env.SCENARIO || process.argv[2];

if (!scenario) {
  console.error("❌ No scenario provided");
  process.exit(1);
}

async function generateTest() {
  console.log("🚀 Generating test using Ollama...");

  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3",
      prompt: buildPrompt(scenario),
      stream: false
    });

    let code = response.data.response;

    // Clean markdown if present
    if (code.includes("```")) {
      code = code.replace(/```[a-zA-Z]*/g, "").replace(/```/g, "").trim();
    }

    fs.mkdirSync("tests/generated", { recursive: true });
    fs.writeFileSync("tests/generated/test.spec.js", code);

    console.log("✅ Test generated successfully!");

  } catch (error) {
    console.error("❌ Error generating test:");
    console.error(error.message);
    process.exit(1);
  }
}

generateTest();
