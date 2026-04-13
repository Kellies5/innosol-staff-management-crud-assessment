const request = require('supertest');
const app = require('../server');

describe('Staff API Integration Tests', () => {
  let staffId;

  // Test GET /api/staff
  describe('GET /api/staff', () => {
    it('should return all staff members', async () => {
      const response = await request(app)
        .get('/api/staff')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });

  // Test POST /api/staff
  describe('POST /api/staff', () => {
    it('should create a new staff member', async () => {
      const staffData = {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        position: 'Developer',
        department: 'IT',
        salary: 50000
      };

      const response = await request(app)
        .post('/api/staff')
        .send(staffData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.firstName).toBe('Test');
      staffId = response.body.data.id;
    });

    it('should fail with missing required fields', async () => {
      const staffData = {
        firstName: 'Test'
      };

      const response = await request(app)
        .post('/api/staff')
        .send(staffData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(Array.isArray(response.body.errors)).toBe(true);
    });
  });

  // Test GET /api/staff/:id
  describe('GET /api/staff/:id', () => {
    it('should return a specific staff member', async () => {
      const response = await request(app)
        .get(`/api/staff/${staffId}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe(staffId);
    });

    it('should return 404 for non-existent staff', async () => {
      await request(app)
        .get('/api/staff/99999')
        .expect(404);
    });
  });

  // Test PUT /api/staff/:id
  describe('PUT /api/staff/:id', () => {
    it('should update a staff member', async () => {
      const updatedData = {
        firstName: 'Updated',
        lastName: 'Name',
        email: 'updated@example.com',
        position: 'Senior Developer',
        department: 'IT',
        salary: 60000
      };

      const response = await request(app)
        .put(`/api/staff/${staffId}`)
        .send(updatedData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.firstName).toBe('Updated');
    });
  });

  // Test DELETE /api/staff/:id
  describe('DELETE /api/staff/:id', () => {
    it('should delete a staff member', async () => {
      const response = await request(app)
        .delete(`/api/staff/${staffId}`)
        .expect(200);

      expect(response.body.success).toBe(true);
    });
  });

  // Test health check
  describe('GET /api/health', () => {
    it('should return server status', async () => {
      const response = await request(app)
        .get('/api/health')
        .expect(200);

      expect(response.body.status).toBe('Server is running');
    });
  });
});
