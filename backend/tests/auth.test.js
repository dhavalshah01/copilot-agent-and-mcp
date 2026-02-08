const request = require('supertest');
const express = require('express');
const createApiRouter = require('../routes');
const path = require('path');

const app = express();
app.use(express.json());
app.use('/api', createApiRouter({
  usersFile: path.join(__dirname, '../data/test-users.json'),
  booksFile: path.join(__dirname, '../data/test-books.json'),
  readJSON: (file) => require('fs').existsSync(file) ? JSON.parse(require('fs').readFileSync(file, 'utf-8')) : [],
  writeJSON: (file, data) => require('fs').writeFileSync(file, JSON.stringify(data, null, 2)),
  authenticateToken: (req, res, next) => next(),
  SECRET_KEY: 'test_secret',
  // generated-by-copilot: Disable rate limiting for regular tests
  loginRateLimiter: (req, res, next) => next(),
}));

describe('Auth API', () => {
  const testUser = { username: 'testuser', password: 'testpass' };

  it('POST /api/register should fail with missing fields', async () => {
    const res = await request(app).post('/api/register').send({ username: '' });
    expect(res.statusCode).toBe(400);
  });

  it('POST /api/register should succeed with valid data', async () => {
    const res = await request(app).post('/api/register').send(testUser);
    // 201 or 409 if already exists
    expect([201, 409]).toContain(res.statusCode);
  });

  // generated-by-copilot: Test userType defaults to "member"
  it('POST /api/register should default userType to "member"', async () => {
    const uniqueUser = { username: 'testuser_' + Date.now(), password: 'testpass' };
    await request(app).post('/api/register').send(uniqueUser);
    const loginRes = await request(app).post('/api/login').send(uniqueUser);
    expect(loginRes.statusCode).toBe(200);
    expect(loginRes.body.userType).toBe('member');
  });

  // generated-by-copilot: Test userType can be set to "administrator"
  it('POST /api/register should accept userType "administrator"', async () => {
    const adminUser = { username: 'admin_' + Date.now(), password: 'testpass', userType: 'administrator' };
    await request(app).post('/api/register').send(adminUser);
    const loginRes = await request(app).post('/api/login').send(adminUser);
    expect(loginRes.statusCode).toBe(200);
    expect(loginRes.body.userType).toBe('administrator');
  });

  it('POST /api/register should fail if user already exists', async () => {
    await request(app).post('/api/register').send(testUser); // ensure exists
    const res = await request(app).post('/api/register').send(testUser);
    expect(res.statusCode).toBe(409);
  });

  it('POST /api/login should succeed with correct credentials', async () => {
    await request(app).post('/api/register').send(testUser); // ensure exists
    const res = await request(app).post('/api/login').send(testUser);
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  // generated-by-copilot: Test login response includes userType
  it('POST /api/login should return userType in response', async () => {
    await request(app).post('/api/register').send(testUser);
    const res = await request(app).post('/api/login').send(testUser);
    expect(res.statusCode).toBe(200);
    expect(res.body.userType).toBeDefined();
  });

  it('POST /api/login should fail with wrong password', async () => {
    const res = await request(app).post('/api/login').send({ username: testUser.username, password: 'wrong' });
    expect(res.statusCode).toBe(401);
  });

  it('POST /api/login should fail with missing fields', async () => {
    const res = await request(app).post('/api/login').send({ username: '' });
    expect(res.statusCode).toBe(401);
  });
});
