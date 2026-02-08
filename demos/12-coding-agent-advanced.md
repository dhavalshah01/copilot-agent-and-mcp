# Demo 4: Using GitHub Copilot Coding Agent to fix a vulnerability detected by CodeQL

> [!NOTE]
> This is a demo so it means that the trainer has to run the demo himself

In this demo, we'll use GitHub Copilot Coding Agent with MCP to fix a vulnerability detected by CodeQL.

## Prerequisites

- A GitHub account with Copilot enabled and access to Copilot Coding Agent, GitHub Advanced Security and MCP.

## Environment configuration

- Create a new repository from [ps-copilot-sandbox/copilot-agent-and-mcp](https://github.com/ps-copilot-sandbox/copilot-agent-and-mcp) which is a template repository or reuse the repository created in the previous demo
- Clone the repository on your laptop
- Use the instructions in the [`README.md` file](/README.md) to setup your development environment and to start the application
- Quickly explain and demo the application to the audience
- Open the repository on GitHub.com
  - All the following instructions have to be done on this new repository and on GitHub.com

## Setup Steps

- Enable GitHub Advanced Security and Code Scanning with the CodeQL extended queries:
  - Go to the `Settings` tab of your repository
  - Click on `Advanced Security` in the left menu
  - Enable `GitHub Advanced Security`
  - Click `Set up` CodeQL analysis
  - Choose `Default` configuration
  - In the popup, click on `Edit`
  - For the `Query suite`, select `Extended`
  - Click on `Enable CodeQL`
- Wait for the first CodeQL analysis to be completed and a vulnerability to be detected
- Create a Personal Access Token (fine-grained) with: `Read` access to `code`, `issues`, `metadata`, and `security events`.

These items are already configured. You have to go through them and explain the content:

- [`copilot-setup-steps.yml`](/.github/workflows/copilot-setup-steps.yml)
- [`.github/copilot-instructions.md`](/.github/copilot-instructions.md)

## Security Alert Remediation

We'll use a security alert to demonstrate Copilot Coding Agent's capabilities with MCP:

1. Go to your newly created repository on GitHub.com
2. Open Copilot Chat and ask

```prompt
Create an issue to fix the security alert:
- Title: `Fix alert <alert title>`
- Body: `Fix <link-to-the-vulnerability-found>`
```

3. Assign the issue to Copilot.
4. Show the :eyes: emoji reaction to the issue.
5. Show the PR and the content of the body.
6. Open the Actions tab in the repository and find the workflow that was created.
7. Show the Copilot Coding Agent timeline: you should be able to see a step where Copilot Agent is using the GitHub MCP server to get information about the security alert.
8. Explain the setup workflow.
9. Explain the custom instructions.
10. It can take some time (~10 minutes) for Copilot Agent to process the request and create the PR, so be patient. It could be a good time to ask participants if they have any questions.
11. Show the PR and the content of the body.
12. Show the Copilot Coding Agent timeline.
13. Show the result of the PR.
14. Copilot might not give the correct answer the first time, so you can review the PR, add comments and ask Copilot to make changes. This will demonstrate how Copilot Agent can iterate on feedback and improve the solution.