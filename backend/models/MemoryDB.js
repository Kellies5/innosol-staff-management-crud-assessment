// In-memory database for development when PostgreSQL is not available

let staffMemory = [
  {
    id: 1,
    staff_id: 'EMP001',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    number: '+1-555-0101',
    department: 'IT',
    employee_type: 'Full-Time'
  },
  {
    id: 2,
    staff_id: 'EMP002',
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'jane.smith@example.com',
    number: '+1-555-0102',
    department: 'IT',
    employee_type: 'Full-Time'
  },
  {
    id: 3,
    staff_id: 'EMP003',
    first_name: 'Bob',
    last_name: 'Johnson',
    email: 'bob.johnson@example.com',
    number: '+1-555-0103',
    department: 'Operations',
    employee_type: 'Full-Time'
  },
  {
    id: 4,
    staff_id: 'EMP004',
    first_name: 'Alice',
    last_name: 'Williams',
    email: 'alice.williams@example.com',
    number: '+1-555-0104',
    department: 'HR',
    employee_type: 'Full-Time'
  },
  {
    id: 5,
    staff_id: 'EMP005',
    first_name: 'Charlie',
    last_name: 'Brown',
    email: 'charlie.brown@example.com',
    number: '+1-555-0105',
    department: 'Finance & Accounts',
    employee_type: 'Part-Time'
  }
];

let nextId = 6;

class MemoryDB {
  static async getAll() {
    return new Promise(resolve => {
      resolve([...staffMemory]);
    });
  }

  static async getById(id) {
    return new Promise(resolve => {
      const staff = staffMemory.find(s => s.id === parseInt(id));
      resolve(staff || null);
    });
  }

  static async create(staffData) {
    return new Promise(resolve => {
      const newStaff = {
        id: nextId++,
        ...staffData
      };
      staffMemory.push(newStaff);
      resolve(newStaff);
    });
  }

  static async update(id, staffData) {
    return new Promise(resolve => {
      const index = staffMemory.findIndex(s => s.id === parseInt(id));
      if (index === -1) {
        resolve(null);
      } else {
        staffMemory[index] = {
          ...staffMemory[index],
          ...staffData,
          id: staffMemory[index].id
        };
        resolve(staffMemory[index]);
      }
    });
  }

  static async delete(id) {
    return new Promise(resolve => {
      const index = staffMemory.findIndex(s => s.id === parseInt(id));
      if (index === -1) {
        resolve(false);
      } else {
        staffMemory.splice(index, 1);
        resolve(true);
      }
    });
  }
}

module.exports = MemoryDB;
