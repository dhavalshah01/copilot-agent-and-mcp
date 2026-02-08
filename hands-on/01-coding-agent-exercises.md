# GitHub Copilot Coding Agent Exercises

> [!NOTE]
> This is an hands-on workshop so it has to be done by the participants. The instructions below are to be used by the workshop participants themselves.

## Prerequisites

- A GitHub account with Copilot enabled, access to Copilot Coding Agent and access to MCP server.

## Environment configuration

- Create a new repository from [ps-copilot-sandbox/copilot-agent-and-mcp](https://github.com/ps-copilot-sandbox/copilot-agent-and-mcp) which is a template repository
- Open the repository on GitHub.com
  - All the following instructions have to be done on this new repository and on GitHub.com

## Exercise 1: Clear All Favorites Button

### Task (Exercise 1)

Add a "Clear All Favorites" button that allows users to remove all books from their favorites list at once.

### Steps (Exercise 1)

1. Go to your newly created GitHub repository on GitHub.com
2. Create a new issue with the following content:
   ```prompt
   Title: Add Clear All Favorites button

   Description:
   As a user, I want to be able to clear all my favorite books at once with a single button click.

   Requirements:
   - Add a "Clear All" button in the Favorites section
   - Show a confirmation dialog before clearing
   - Update both frontend and backend to support this feature
   - Add appropriate error handling
   - Include tests for the new functionality
   ```
3. Assign the issue to Copilot
4. Check the 👀 reaction
5. Monitor the Actions tab for Copilot's progress
6. Review the generated PR:
   - Check the implementation approach
   - Review the test coverage
   - Examine UI/UX considerations

### Learning Objectives (Exercise 1)

- Understanding how Copilot Agent processes feature requests
- Observing multi-file changes
- Learning about test implementation
- Reviewing error handling approaches

## Exercise 2: Book List Sorting

### Task (Exercise 2)

Implement sorting options for the book list to allow users to sort by title or author.

### Steps (Exercise 2)

1. In the same repository on GitHub.Com, create a new issue with the following content:
   ```prompt
   Title: Add book list sorting options

   Description:
   As a user, I want to be able to sort the book list by different criteria (title, author) to better organize and find books.

   Requirements:
   - Add sorting options (dropdown or buttons) for title and author
   - Implement sorting on both frontend and backend
   - Maintain sort state when navigating
   - Add visual indication of current sort order
   - Include unit and integration tests
   ```
2. Follow the same process as Exercise 1
3. Review the changes:
   - Frontend UI components
   - Backend sorting implementation
   - State management updates
   - Test coverage

### Learning Objectives (Exercise 2)

- Understanding complex feature implementation
- Observing state management changes
- Learning about UI/UX considerations
- Reviewing full-stack implementation

## Exercise 3: Book Reviews - Complex Feature with Multiple Issues

### Task (Exercise 3)

Implement a book review system by breaking down the feature into multiple issues and using MCP to coordinate the implementation.

### Steps (Exercise 3)

1. In the same repository on GitHub.Com, create a Frontend Issue:
   ```prompt
   Title: Frontend Implementation - Book Reviews UI Components

   Description:
   Implement the frontend components for the book review system.

   Requirements:
   - Add a "Reviews" section to each book card
   - Create a form for submitting new reviews with:
     * Rating (1-5 stars)
     * Review text
     * Submit button
   - Display existing reviews in a scrollable list
   - Show average rating
   - Add loading states and error handling
   - Include frontend unit tests

   Technical Considerations:
   - Use existing styling patterns
   - Implement proper form validation
   - Consider responsive design
   ```

2. Then, create a Backend Issue:
   ```prompt
   Title: Backend Implementation - Book Reviews API

   Description:
   Implement the backend API and database changes for the book review system.

   Requirements:
   - Create new database schema for reviews
   - Implement REST API endpoints:
     * POST /api/books/{id}/reviews
     * GET /api/books/{id}/reviews
     * GET /api/books/{id}/average-rating
   - Add input validation
   - Implement error handling
   - Add backend unit tests
   - Update API documentation

   Technical Considerations:
   - Implement proper validation middleware
   - Add rate limiting for review submission
   ```

3. Finally, create a Main Feature Issue:
   ```prompt
   Title: Implement Book Review System

   Description:
   Add the ability for users to review books and see others' reviews.

   Requirements:
   This feature consists of two parts:
   - Frontend implementation: #[Link to Frontend Issue]
   - Backend implementation: #[Link to Backend Issue]
   ```

4. GitHub MCP Server: it has already access to your current repository and is already usable by default, so you have nothing to do here.

5. Assign to Copilot:
   1. Assign the Main Feature issue to Copilot
   2. Check the 👀 reaction
   3. Verify in the Coding Agent timeline that Copilot:
     - Has access to linked issues and reads their content via the GitHub MCP Server
     - Understand the full feature scope

6. Monitor Implementation:
   - Watch Actions tab for PR creation
   - Review changes as they come in
   - Verify that Copilot:
     - References linked issues
     - Implements frontend and backend correctly
     - Includes proper test coverage
     - Maintains code style consistency

7. Review the Complete Feature:
   - Check frontend components and styling
   - Verify API endpoints and database changes
   - Run all tests
   - Test the feature end-to-end
   - Review documentation updates

### Learning Objectives (Exercise 3)

- Breaking down complex features into manageable pieces
- Setting up and using MCP with Copilot Coding Agent
- Managing linked issues effectively
- Understanding full-stack feature implementation
- Reviewing comprehensive changes across multiple systems

### Common Challenges

- Ensure proper linking between issues
- Verify MCP server configuration
- Monitor Copilot's access to all necessary information
- Coordinate frontend and backend integration
- Maintain consistent code style across components