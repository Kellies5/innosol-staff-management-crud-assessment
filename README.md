# Staff Management System

A comprehensive web application for managing staff information with full CRUD (Create, Read, Update, Delete) operations. Built with Node.js/Express backend and vanilla JavaScript frontend.

## Overview

This application provides a professional, user-friendly interface for:
- Viewing staff directory in a sortable table
- Adding new staff members
- Viewing detailed staff information
- Editing staff details
- Deleting staff members
- Searching and filtering staff by various criteria

## Features

### Core Features
✅ **Staff Management**
- Add new staff members
- View staff details
- Update staff information
- Delete staff members
- View complete staff directory

✅ **Search & Filter**
- Real-time search by name, email, or position
- Filter staff by department
- Combined search and filter capabilities

✅ **User Interface**
- Clean, enterprise-style design
- Responsive modal dialogs
- Professional table layout
- Intuitive action buttons

✅ **API**
- RESTful API endpoints
- Standardized response format
- Comprehensive error handling
- Input validation

### Technical Features
- MySQL database with proper schema
- Input validation middleware
- CORS support
- Environment configuration
- Comprehensive documentation
- Integration and E2E tests

## Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **Environment**: dotenv

### Frontend
- **HTML/CSS/JavaScript**: Vanilla
- **jQuery**: AJAX calls (jQuery included)
- **Styling**: Clean, professional CSS

### Testing
- **Framework**: Jest
- **HTTP**: Supertest
- **Coverage**: Built-in

## Project Structure

```
staff-management-app/
├── backend/
│   ├── controllers/        # Business logic
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   ├── middleware/        # Input validation
│   ├── database/          # DB connection & migrations
│   ├── utils/             # Helper functions
│   └── server.js          # Express setup
├── frontend/
│   ├── index.html         # Main page
│   ├── api-docs.html      # API documentation
│   ├── styles/            # CSS files
│   ├── scripts/           # JavaScript files
│   └── assets/            # jQuery library
├── tests/
│   ├── integration/       # API tests
│   └── e2e/              # End-to-end tests
├── docs/                  # Documentation
├── package.json           # Dependencies
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Quick Start

### Prerequisites
- Node.js v14+
- npm v6+
- MySQL 5.7+

### Installation

1. **Clone the repository**
```bash
cd staff-management-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
Create `.env` file with database credentials:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=staff_management
```

4. **Set up database**
```bash
# Create database
mysql -u root -p < backend/database/migrations/create_staff_table.sql
```

5. **Start the server**
```bash
npm start
```

6. **Open frontend**
Open `frontend/index.html` in your browser or run a local server:
```bash
npx http-server frontend -p 8000
```

## API Documentation

Complete API documentation available at `frontend/api-docs.html` or see [docs/api.md](docs/api.md)

### Quick API Reference

| Method | Endpoint | Action |
|--------|----------|--------|
| GET | `/api/staff` | Get all staff |
| GET | `/api/staff/:id` | Get staff by ID |
| POST | `/api/staff` | Create new staff |
| PUT | `/api/staff/:id` | Update staff |
| DELETE | `/api/staff/:id` | Delete staff |

## Documentation

- [Setup Guide](docs/setup.md) - Detailed installation and setup instructions
- [API Documentation](docs/api.md) - Complete API reference
- [Database Schema](docs/database.md) - Database structure and queries

## Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run in watch mode
npm run test:watch
```

## Development

```bash
# Run with auto-restart (requires nodemon)
npm run dev

# Run linter
npm run lint
```

## Usage Guide

### Adding a Staff Member
1. Click "Add New Staff" button
2. Fill in required fields (First Name, Last Name, Email, Position, Department)
3. Optionally add Salary and Join Date
4. Click "Save"

### Viewing Staff Details
1. Find the staff member in the table
2. Click "View" button
3. Details modal appears with all information

### Editing Staff Information
1. Click "Edit" button for the staff member
2. Modify the information
3. Click "Save"

### Deleting a Staff Member
1. Click "Delete" button
2. Confirm deletion in the popup
3. Staff member is removed

### Searching
1. Use the search box to find by name, email, or position
2. Results update in real-time

### Filtering
1. Select a department from the dropdown
2. Table filters to show only that department
3. Can combine with search

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Considerations

For production deployment:
- Add authentication and authorization
- Implement rate limiting
- Use HTTPS
- Validate and sanitize all inputs
- Add SQL injection protection
- Implement CSRF protection
- Add proper error handling without exposing sensitive data

## Performance Optimizations

- Database indexes on commonly filtered fields
- Frontend pagination for large datasets (recommended)
- API response caching (recommended)
- Database query optimization

## Contributing

To submit changes:
1. Create a feature branch
2. Make your changes
3. Ensure tests pass
4. Submit a pull request

## License

MIT License - See LICENSE file for details

## Support

For issues or questions:
1. Check the documentation files
2. Review the API documentation
3. Check test files for usage examples

## Future Enhancements

- [ ] User authentication
- [ ] Role-based access control
- [ ] Pagination for large datasets
- [ ] Export to CSV/Excel
- [ ] Staff photos
- [ ] Department management
- [ ] Performance reviews
- [ ] Leave management
- [ ] Audit logging
- [ ] Advanced reporting

## Changelog

### Version 1.0.0
- Initial release
- Full CRUD operations
- Search and filter functionality
- Comprehensive API
- Documentation and tests
