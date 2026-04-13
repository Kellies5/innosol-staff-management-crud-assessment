# Database Schema Documentation

## Database Name
```
staff_management
```

## Tables

### staff

Main table for storing staff member information.

#### Table Structure

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | Unique staff identifier |
| firstName | VARCHAR(100) | NOT NULL | Staff member's first name |
| lastName | VARCHAR(100) | NOT NULL | Staff member's last name |
| email | VARCHAR(100) | NOT NULL, UNIQUE | Staff member's email address |
| position | VARCHAR(100) | NOT NULL | Job position |
| department | VARCHAR(100) | NOT NULL | Department name |
| salary | DECIMAL(10, 2) | NULLABLE | Annual salary |
| joinDate | DATE | NULLABLE | Date when staff joined |
| createdAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Record creation timestamp |
| updatedAt | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP, ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

#### Indexes

- `idx_department` on `department` column - Improves filtering by department
- `idx_position` on `position` column - Improves filtering by position

#### Constraints

- **Primary Key**: `id` - Ensures each staff member has a unique identifier
- **Unique Key**: `email` - Ensures no duplicate email addresses
- **Not Null**: `firstName`, `lastName`, `email`, `position`, `department` - Required fields

## SQL Migration Script

```sql
CREATE TABLE IF NOT EXISTS staff (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  position VARCHAR(100) NOT NULL,
  department VARCHAR(100) NOT NULL,
  salary DECIMAL(10, 2),
  joinDate DATE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_department (department),
  INDEX idx_position (position)
);
```

## Sample Queries

### Insert Sample Data
```sql
INSERT INTO staff (firstName, lastName, email, position, department, salary, joinDate)
VALUES 
  ('John', 'Doe', 'john.doe@example.com', 'Software Engineer', 'IT', 75000, '2023-01-15'),
  ('Jane', 'Smith', 'jane.smith@example.com', 'Product Manager', 'IT', 85000, '2023-02-20'),
  ('Bob', 'Johnson', 'bob.johnson@example.com', 'Sales Manager', 'Sales', 65000, '2023-03-10');
```

### Query All Staff
```sql
SELECT * FROM staff;
```

### Query by Department
```sql
SELECT * FROM staff WHERE department = 'IT';
```

### Count Staff by Department
```sql
SELECT department, COUNT(*) as count FROM staff GROUP BY department;
```

### Find Highest Paid Employees
```sql
SELECT * FROM staff ORDER BY salary DESC LIMIT 10;
```

## Performance Considerations

1. **Indexes**: Indexes on `department` and `position` improve filtering performance
2. **Email Uniqueness**: UNIQUE constraint prevents duplicate emails
3. **Pagination**: Consider adding pagination for large result sets
4. **Archiving**: Consider archiving old records periodically

## Future Enhancements

- Add `phoneNumber` and `address` fields
- Add role-based access control with user permissions
- Add salary history tracking
- Add performance reviews table
- Add leave management table
