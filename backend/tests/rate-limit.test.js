// generated-by-copilot: Test rate limiting on login endpoint
const request = require('supertest');
const express = require('express');
const createApiRouter = require('../routes');
const path = require('path');

describe('Rate Limiting', () => {
  let app;

  beforeEach(() => {
    // generated-by-copilot: Create a new app for each test to reset rate limiting
    app = express();
    app.use(express.json());
    app.use('/api', createApiRouter({
      usersFile: path.join(__dirname, '../data/test-users.json'),
      booksFile: path.join(__dirname, '../data/test-books.json'),
      readJSON: (file) => require('fs').existsSync(file) ? JSON.parse(require('fs').readFileSync(file, 'utf-8')) : [],
      writeJSON: (file, data) => require('fs').writeFileSync(file, JSON.stringify(data, null, 2)),
      authenticateToken: (req, res, next) => next(),
      SECRET_KEY: 'test_secret',
      // generated-by-copilot: Enable rate limiting for these tests
    }));
  });

  it('POST /api/login should rate limit after 5 failed attempts', async () => {
    const wrongCreds = { username: 'testuser', password: 'wrongpassword' };
    
    // generated-by-copilot: Make 5 failed login attempts (should be allowed)
    for (let i = 0; i < 5; i++) {
      const res = await request(app).post('/api/login').send(wrongCreds);
      expect(res.statusCode).toBe(401);
    }
    
    // generated-by-copilot: The 6th attempt should be rate limited
    const res = await request(app).post('/api/login').send(wrongCreds);
    expect(res.statusCode).toBe(429);
    expect(res.text).toContain('Too many login attempts');
  });

  it('POST /api/login should rate limit after 5 successful logins', async () => {
    const testUser = { username: 'ratelimituser_' + Date.now(), password: 'testpass' };
    
    // generated-by-copilot: Register a test user first
    await request(app).post('/api/register').send(testUser);
    
    // generated-by-copilot: Make 5 successful login attempts (should be allowed)
    for (let i = 0; i < 5; i++) {
      const res = await request(app).post('/api/login').send(testUser);
      expect(res.statusCode).toBe(200);
    }
    
    // generated-by-copilot: The 6th attempt should be rate limited
    const res = await request(app).post('/api/login').send(testUser);
    expect(res.statusCode).toBe(429);
    expect(res.text).toContain('Too many login attempts');
  });
});
