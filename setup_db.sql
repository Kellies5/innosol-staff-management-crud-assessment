-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS staff_management;
USE staff_management;

-- Create staff table
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

-- Insert sample data
INSERT INTO staff (firstName, lastName, email, position, department, salary, joinDate) VALUES
('John', 'Doe', 'john.doe@example.com', 'Software Engineer', 'IT', 75000, '2023-01-15'),
('Jane', 'Smith', 'jane.smith@example.com', 'Product Manager', 'IT', 85000, '2023-02-20'),
('Bob', 'Johnson', 'bob.johnson@example.com', 'Sales Manager', 'Sales', 65000, '2023-03-10'),
('Alice', 'Williams', 'alice.williams@example.com', 'HR Manager', 'HR', 60000, '2023-04-05'),
('Charlie', 'Brown', 'charlie.brown@example.com', 'Marketing Executive', 'Marketing', 55000, '2023-05-12');

SELECT 'Database setup completed!' as Status;
