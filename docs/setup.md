# Staff Management System - Setup Guide

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL Server (v5.7 or higher)

## Installation Steps

### 1. Clone/Navigate to the project directory
```bash
cd staff-management-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=staff_management
NODE_ENV=development
```

### 4. Database Setup

1. Create the MySQL database:
```sql
CREATE DATABASE staff_management;
```

2. Run the migration script to create tables:
```sql
USE staff_management;
SOURCE backend/database/migrations/create_staff_table.sql;
```

Or use MySQL Workbench to run the SQL file.

### 5. Start the Backend Server

```bash
npm start
```

The server will run on `http://localhost:5000`

### 6. Start the Frontend

Open `frontend/index.html` in your web browser or use a local server:

```bash
# Using Python (if available)
python -m http.server 8000 --directory frontend

# Or using Node http-server
npx http-server frontend -p 8000
```

Access the frontend at `http://localhost:8000`

## Getting Started

1. **View Staff**: The main page displays all staff members in a table
2. **Add Staff**: Click "Add New Staff" button to create a new staff member
3. **View Details**: Click "View" button to see full details in a modal
4. **Edit Staff**: Click "Edit" button to modify staff information
5. **Delete Staff**: Click "Delete" button to remove a staff member
6. **Search**: Use the search box to find staff by name, email, or position
7. **Filter**: Use the department dropdown to filter staff

## API Documentation

See `frontend/api-docs.html` for complete API documentation.

## Testing

### Run Integration Tests
```bash
npm test
```

### Run E2E Tests
```bash
npm run test:e2e
```

## Troubleshooting

### Database Connection Error
- Ensure MySQL server is running
- Check database credentials in `.env` file
- Verify database name is correct

### Port Already in Use
- Change the PORT in `.env` file
- Or kill the process using the port

### CORS Error
- Ensure backend is running on correct port
- Update API_BASE_URL in `frontend/scripts/api.js` if needed

## Project Structure

See the root `README.md` for detailed project structure.
