# Demo 3: Using GitHub Copilot Chat in Agent Mode to add a (basic) new feature

> [!NOTE]
> This is a demo so it means that the trainer has to run the demo himself

In this demo, we'll use GitHub Copilot Chat in Agent Mode to add a new feature that allows users to add a comment on one of their favorite book. This will demonstrate how GitHub Copilot Chat in Agent Mode understands context, suggests solutions, and helps test the changes.

## Prerequisites

- A GitHub account with Copilot enabled and access to the Agent Mode.
- An IDE with GitHub Copilot Chat enabled and configured to use Agent Mode.

## Environment configuration

- Create a new repository from [ps-copilot-sandbox/copilot-agent-and-mcp](https://github.com/ps-copilot-sandbox/copilot-agent-and-mcp) which is a template repository or reuse the repository created in the previous demo
- Clone the repository on your laptop
- Use the instructions in the [`README.md` file](/README.md) to setup your development environment and to start the application
- Quickly explain and demo the application to the audience

## Setup Steps

These items are already configured. You have to go through them and explain the content:

- [`.github/copilot-instructions.md`](/.github/copilot-instructions.md)

## Feature Request: Add comment on a favorite book

We'll use this feature request to demonstrate Copilot Agent's capabilities:

1. Go to your IDE
2. Open the newly created repository
3. Open GitHub Copilot Chat in Agent Mode, add the entire codebase (`#codebase`) in the context as we are working on a small application and then ask Copilot:

```prompt
Can you add a new feature that allows users to add a comment on a favorite?
```

4. Let's Copilot work on it and explain what is happening in the chat pannel.
5. Explore the code changes that Copilot has made.
6. If needed ask Copilot to make changes or improvements to the code.
