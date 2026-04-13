
// Validation middleware for staff data
const validateStaff = (req, res, next) => {
  const {
    staff_id,
    first_name,
    last_name,
    email,
    number,
    department,
    employee_type
  } = req.body;

  const errors = {};

  if (!staff_id || staff_id.trim() === '') {
    errors.staff_id = ['Staff ID is required.'];
  }
  if (!first_name || first_name.trim() === '') {
    errors.first_name = ['First name is required.'];
  }
  if (!last_name || last_name.trim() === '') {
    errors.last_name = ['Last name is required.'];
  }
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = ['A valid email is required.'];
  }
  if (!number || number.trim() === '') {
    errors.number = ['Number is required.'];
  }
  const allowedDepartments = ['IT', 'HR', 'Finance & Accounts', 'Operations'];
  if (!department || !allowedDepartments.includes(department)) {
    errors.department = ['Department must be one of: IT, HR, Finance & Accounts, Operations.'];
  }
  const allowedTypes = ['Full-Time', 'Part-Time'];
  if (!employee_type || !allowedTypes.includes(employee_type)) {
    errors.employee_type = ['Employee type must be Full-Time or Part-Time.'];
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }
  next();
};

// Email validation helper
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

module.exports = {
  validateStaff
};
