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

 // Clean AI output (remove markdown if present)
    code = code.replace(/```javascript/g, "")
               .replace(/```/g, "")
               .trim();

    fs.mkdirSync("tests/generated", { recursive: true });
    fs.writeFileSync("tests/generated/test.spec.js", code);

    console.log("✅ Test generated successfully!");
  } catch (error) {
    console.error("❌ Error generating test:", error.message);
    process.exit(1);
  }
}

generateTest();
