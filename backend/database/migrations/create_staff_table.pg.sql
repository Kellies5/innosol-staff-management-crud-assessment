-- PostgreSQL migration for staff table
DROP TABLE IF EXISTS staff;
CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    staff_id VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    number VARCHAR(30) NOT NULL,
    department VARCHAR(50) NOT NULL CHECK (department IN ('IT', 'HR', 'Finance & Accounts', 'Operations')),
    employee_type VARCHAR(20) NOT NULL CHECK (employee_type IN ('Full-Time', 'Part-Time')),
    deleted_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for active staff
CREATE INDEX idx_staff_active ON staff (deleted_at);
