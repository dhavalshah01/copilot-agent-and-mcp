# Demo 5: Using GitHub Copilot Chat in Agent Mode to add a (medium) new feature

> [!NOTE]
> This is a demo so it means that the trainer has to run the demo himself

In this demo, we'll use GitHub Copilot Chat in Agent Mode with MCP to add more information about a book (date, summary, and author).

We will be using an MCP server to collect information from multiple sources to update the book details in the database.

This will demonstrate how GitHub Copilot Chat in Agent Mode understands context, suggests solutions, and helps test the changes and interact with the MCP server.

## Prerequisites

- A GitHub account with Copilot enabled and access to the Agent Mode.
- An IDE with GitHub Copilot Chat enabled and configured to use Agent Mode.
- A GitHub account and an IDE with access to MCP server.

## Environment configuration

- Main repository
  - Create a new repository from [ps-copilot-sandbox/copilot-agent-and-mcp](https://github.com/ps-copilot-sandbox/copilot-agent-and-mcp) which is a template repository or reuse the repository created in the previous demo
  - Clone the repository on your laptop
  - Use the instructions in the [`README.md` file](/README.md) to setup your development environment and to start the application
  - Quickly explain and demo the application to the audience
- MCP server repository
  - Clone the [ps-copilot-sandbox/copilot-mcp](https://github.com/ps-copilot-sandbox/copilot-mcp) which contains the MCP server code for this demo
  - Open the MCP server repository in a different IDE window
  - Use the instructions in the [`README.md` file](https://github.com/ps-copilot-sandbox/copilot-mcp/blob/main/README.md) to setup your development environment (don't start the MCP server yet, you'll do it during the demo)
  - Quickly explain the MCP server to the audience
    - `GET /books?titles` to retrieve basic books information by titles.
    - `GET /books/?isbn={isbnList}` to retrieve books details by ISBNs.
    - `new McpServer`
    - `function formatBook`
    - `server.tool`

## Setup Steps

These items are already configured. You have to go through them and explain the content:

- [`.github/copilot-instructions.md`](/.github/copilot-instructions.md)

These items are partially configured. You have to go through them, modify them and explain the content:

- MCP server configuration in [`.vscode/mcp.json`](/.vscode/mcp.json)
  - Update the path to the MCP server code in the `book-database` configuration
  - Explain that this configuration file is used by GitHub Copilot Chat in Agent Mode to interact with the MCP server

## Feature Request: Add and display more information about a book

We'll use this feature request to demonstrate Copilot Agent's capabilities with MCP:

1. Go to your IDE and open the window containing the MCP server repository
2. Don't start it from here, it will be started by the webapp repository [configuration](/.vscode/mcp.json)
3. Go to your other IDE window, the one with the webapp repository
4. Start the MCP server 'book-database' with the command palette (`ctrl+shift+p` or `cmd+shift+p`) and the command `MCP: Start MCP server` then select `book-database`. You should see the MCP server starting in the terminal panel (`Starting server book-database` and `Book database MCP Server running on stdio`)
5. Open GitHub Copilot Chat in Agent Mode, add the entire codebase (`#codebase`) in the context as we are working on a small application and then ask Copilot:

```prompt
can you update #file:books.json (without any script) to add the date and a description by using the information provided by the book-database MCP server?
```

6. Let's Copilot work on it and explain what is happening in the chat pannel.
7. Explore the code changes that Copilot has made.
8. If needed ask Copilot to make changes or improvements to the code.
9. Then ask Copilot:

```prompt
Can you display more information about a book (date, summary, and author)? We can maybe use a new component to display the book details outside the list.
```

10. Let's Copilot work on it and explain what is happening in the chat pannel.
11. Explore the code changes that Copilot has made.
12. If needed ask Copilot to make changes or improvements to the code.
