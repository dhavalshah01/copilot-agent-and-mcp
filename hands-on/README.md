# GitHub Copilot Agents and MCP (training) - Hands-on instructions

> [!NOTE]
> This is an hands-on workshop so it has to be done by the participants. The instructions below are to be used by the workshop participants themselves.

Duration: 45-60 minutes

This document quickly describes the content of the hands-on workshop. It is written for the engineers that is delivering the training.

## Prerequisites

- GitHub account with Copilot access
- An IDE with GitHub Copilot Chat extension
- Access to GitHub Copilot Coding Agent
- Access to GitHub Copilot Chat in Agent Mode
- Access to MCP servers
- Node.js and npm installed

## Environment configuration

Everything is descripted step by step before each exercise.

## Part 1: GitHub Copilot Coding Agent (15-20 minutes)

### Exercise 1: Basic Feature Addition

1. Create an issue for adding a "Clear All Favorites" button
2. Use Copilot Agent to implement the feature by:
   - Assigning the issue to Copilot
   - Checking the 👀 reaction
   - Reviewing the generated PR
   - Understanding the changes made
   - Testing the implementation

### Exercise 2: Feature Enhancement

1. Create an issue to add sorting options for the book list (by title, author)
2. Follow the same process as Exercise 1
3. Review and discuss how Copilot Agent:
   - Understands the codebase
   - Makes changes across multiple files
   - Implements both frontend and backend changes
   - Adds appropriate tests

### Exercise 3: Complex Feature with Multiple Issues

1. Create three issues for implementing book reviews functionality:
   - Frontend issue: UI components for adding/displaying reviews
   - Backend issue: API endpoints and database changes for reviews
   - Main feature issue: Link to both frontend and backend issues
2. Use the MCP server for Copilot Coding Agent
3. Assign the main issue to Copilot:
   - Ensure Copilot
   - Watch how Copilot:
     * Has access to read linked issues
     * Reads and understands linked issues
     * Coordinates frontend and backend changes
     * Implements the complete feature
4. Review the generated PR and validate:
   - Frontend changes match the requirements
   - Backend API implementation
   - Test coverage for both layers
   - Integration between components

## Part 2: GitHub Copilot Chat Agent Mode with MCP (15-20 minutes)

### Exercise 4: Implementing Book Search

1. Open VS Code with Agent Mode enabled
2. Use Chat Agent Mode to implement a search feature in the books list that:
   - Allows users to search books by title or author
   - Adds a search input field in the UI
   - Filters the book list in real-time
   - Includes clear search functionality

### Exercise 5: Adding Book Categories

1. Use the GitHub MCP server to create an issue to describe the feature request
2. Have Copilot:
   - Create a detailed issue description
   - Suggest implementation approach in the issue
3. Implement the feature following the issue guidelines
4. Explore how Chat Agent Mode:
   - Creates well-structured issues
   - Handles the implementation
   - Adds necessary tests