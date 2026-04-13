# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### Get All Staff
- **Endpoint**: `GET /staff`
- **Description**: Retrieve all staff members
- **Response**:
```json
{
  "success": true,
  "message": "Staff members retrieved successfully",
  "data": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "position": "Software Engineer",
      "department": "IT",
      "salary": 75000,
      "joinDate": "2023-01-15"
    }
  ]
}
```

### Get Staff by ID
- **Endpoint**: `GET /staff/:id`
- **Description**: Retrieve a specific staff member
- **Parameters**: 
  - `id` (path): Staff ID
- **Response**: Single staff object

### Create Staff
- **Endpoint**: `POST /staff`
- **Description**: Create a new staff member
- **Request Body**:
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com",
  "position": "Product Manager",
  "department": "IT",
  "salary": 85000,
  "joinDate": "2024-01-10"
}
```
- **Required Fields**: firstName, lastName, email, position, department
- **Response**: Created staff object with ID

### Update Staff
- **Endpoint**: `PUT /staff/:id`
- **Description**: Update an existing staff member
- **Parameters**: 
  - `id` (path): Staff ID
- **Request Body**: Same as create (all fields optional during update)
- **Response**: Updated staff object

### Delete Staff
- **Endpoint**: `DELETE /staff/:id`
- **Description**: Delete a staff member
- **Parameters**: 
  - `id` (path): Staff ID
- **Response**:
```json
{
  "success": true,
  "message": "Staff member deleted successfully",
  "data": null
}
```

## Error Responses

### 400 Bad Request (Validation Error)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "First name is required",
    "Valid email is required"
  ]
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Staff member not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Status Codes
- `200 OK` - Successful GET, PUT request
- `201 Created` - Successful POST request
- `400 Bad Request` - Validation error
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## Authentication
Currently, this API does not require authentication. Consider adding authentication in production.

## CORS
The API accepts requests from all origins (configured with `cors()` middleware).
