export function buildPrompt(scenario) {
  return `
You are a QA Automation Engineer.

Convert the below scenario into Playwright JavaScript test.

Rules:
- Use @playwright/test
- Use proper selectors
- Add assertions
- Use async/await

Scenario:
${scenario}

Output only code.
`;
}
