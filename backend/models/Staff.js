const pool = require('../database/pg');
const MemoryDB = require('./MemoryDB');

// Check if we should use memory database
const useMemoryDB = () => process.env.USE_MEMORY_DB === 'true';

class Staff {
  static async getAll() {
    try {
      if (useMemoryDB()) return MemoryDB.getAll();
      const query = `SELECT * FROM staff WHERE deleted_at IS NULL ORDER BY id DESC`;
      const { rows } = await pool.query(query);
      return rows;
    } catch (err) {
      console.log('Database query failed, using in-memory database:', err.message);
      process.env.USE_MEMORY_DB = 'true';
      return MemoryDB.getAll();
    }
  }

  static async getById(id) {
    try {
      if (useMemoryDB()) return MemoryDB.getById(id);
      const query = `SELECT * FROM staff WHERE id = $1 AND deleted_at IS NULL`;
      const { rows } = await pool.query(query, [id]);
      return rows[0];
    } catch (err) {
      console.log('Database query failed, using in-memory database:', err.message);
      process.env.USE_MEMORY_DB = 'true';
      return MemoryDB.getById(id);
    }
  }

  static async create(staffData) {
    try {
      if (useMemoryDB()) return MemoryDB.create(staffData);
      const {
        staff_id,
        first_name,
        last_name,
        email,
        number,
        department,
        employee_type
      } = staffData;
      const query = `INSERT INTO staff (staff_id, first_name, last_name, email, number, department, employee_type)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
      const values = [staff_id, first_name, last_name, email, number, department, employee_type];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (err) {
      console.log('Database query failed, using in-memory database:', err.message);
      process.env.USE_MEMORY_DB = 'true';
      return MemoryDB.create(staffData);
    }
  }

  static async update(id, staffData) {
    try {
      if (useMemoryDB()) return MemoryDB.update(id, staffData);
      const fields = [];
      const values = [];
      let idx = 1;
      for (const key of [
        'staff_id',
        'first_name',
        'last_name',
        'email',
        'number',
        'department',
        'employee_type']) {
        if (staffData[key] !== undefined) {
          fields.push(`${key} = $${idx}`);
          values.push(staffData[key]);
          idx++;
        }
      }
      if (fields.length === 0) return null;
      values.push(id);
      const query = `UPDATE staff SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = $${idx} AND deleted_at IS NULL RETURNING *`;
      const { rows } = await pool.query(query, values);
      return rows[0] || null;
    } catch (err) {
      console.log('Database query failed, using in-memory database:', err.message);
      process.env.USE_MEMORY_DB = 'true';
      return MemoryDB.update(id, staffData);
    }
  }

  static async delete(id) {
    try {
      if (useMemoryDB()) return MemoryDB.delete(id);
      // Soft delete: set deleted_at
      const query = `UPDATE staff SET deleted_at = CURRENT_TIMESTAMP WHERE id = $1 AND deleted_at IS NULL RETURNING *`;
      const { rows } = await pool.query(query, [id]);
      return rows[0] !== undefined;
    } catch (err) {
      console.log('Database query failed, using in-memory database:', err.message);
      process.env.USE_MEMORY_DB = 'true';
      return MemoryDB.delete(id);
    }
  }

}

module.exports = Staff;
