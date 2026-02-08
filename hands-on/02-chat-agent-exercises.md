# GitHub Copilot Chat Agent Mode with MCP Exercises

> [!NOTE]
> This is an hands-on workshop so it has to be done by the participants. The instructions below are to be used by the workshop participants themselves.

## Prerequisites

- A GitHub account with Copilot enabled and access to the Agent Mode.
- An IDE with GitHub Copilot Chat enabled and configured to use Agent Mode.
- A GitHub account and an IDE with access to MCP server.

## Environment configuration

- Create a new repository from [ps-copilot-sandbox/copilot-agent-and-mcp](https://github.com/ps-copilot-sandbox/copilot-agent-and-mcp) which is a template repository or reuse the repository created in the previous demo
- Clone the repository on your laptop
- Use the instructions in the [`README.md` file](/README.md) to setup your development environment and to start the application
- Explore the application and the codebase
- All the following instructions have to be done on your IDE

## Exercise 4: Implementing Book Search

### Task (Exercise 4)

Add a search functionality to the book list that allows users to search by title or author in real-time.

### Steps (Exercise 4)

1. Go to your IDE
2. Open the newly created repository
3. Open GitHub Copilot Chat in Agent Mode

4. Create a prompt like this:
   ```prompt
   I want to add a search feature to the book list that filters books by title or author.
   The search should work in real-time as the user types.

   Help me create a SearchInput component that:
   - Has a clean, modern design
   - Shows a search icon
   - Has a clear button
   - Updates in real-time

   Help me implement the filter logic to:
   - Search in both title and author fields
   - Be case-insensitive
   - Handle special characters
   - Update the list in real-time

   Help me integrate the search state with Redux:
   - Add search term to the store
   - Update the book list selector
   - Persist search state during navigation

   Help me write tests for:
   - The SearchInput component
   - The filter logic
   ```
5. Let's Copilot work on it
6. Explore the code changes that Copilot has made
7. If needed ask Copilot to make changes or improvements to the code

### Learning Objectives (Exercise 4)

- Using Copilot Chat in Agent Mode effectively

## Exercise 5: Adding Book Categories

### Task (Exercise 5)

Use the GitHub MCP server to create a detailed issue for adding book categories, then implement the feature using Copilot Chat in Agent Mode.

### Steps (Exercise 5)

1. Go to your IDE

2. Open the newly created repository

2. Configure the GitHub MCP server to allow Copilot to create issues by following the setup instructions [here](https://github.com/github/github-mcp-server?tab=readme-ov-file#usage-with-vs-code).

3. Open GitHub Copilot Chat in Agent Mode

4. Create a prompt like this:
   ```prompt
   I want to add a book categories feature

   I want to track my changes in a GitHub Issue: can you help me write a detailed description for implementing book categories in our application?
     - Technical requirements
     - UI/UX considerations
     - Testing requirements
     - Acceptance criteria

   Don't forget to add tests.
   ```
5. Review the issue created by Copilot on GitHub.com on your repository
6. In GitHub Copilot Chat in Agent Mode, create a prompt like this:
   ```prompt
   Can you implement the book categories feature as described in the issue [issue_link]?
   ```
7. Let's Copilot work on it
8. Explore the code changes that Copilot has made
9. If needed ask Copilot to make changes or improvements to the code

### Learning Objectives (Exercise 5)

- Using GitHub MCP server for issue creation
- Using Copilot Chat in Agent Mode effectively