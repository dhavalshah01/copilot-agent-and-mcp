const express = require('express');

function createBooksRouter({ booksFile, readJSON, writeJSON, authenticateToken }) {
  const router = express.Router();

  router.get('/', (req, res) => {
    const books = readJSON(booksFile);
    res.json(books);
  });

  // POST /books removed: adding books is not allowed

  return router;
}

module.exports = createBooksRouter;
