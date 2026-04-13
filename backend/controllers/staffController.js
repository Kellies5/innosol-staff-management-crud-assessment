const Staff = require('../models/Staff');
const { sendSuccess, sendError } = require('../utils/response');

// Get all staff members
exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.getAll();
    sendSuccess(res, 200, 'Staff members retrieved successfully', staff);
  } catch (err) {
    sendError(res, 500, 'Error retrieving staff members', err.message);
  }
};

// Get staff member by ID
exports.getStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.getById(id);
    if (!staff) {
      return sendError(res, 404, 'Staff member not found');
    }
    sendSuccess(res, 200, 'Staff member retrieved successfully', staff);
  } catch (err) {
    sendError(res, 500, 'Error retrieving staff member', err.message);
  }
};

// Create new staff member
exports.createStaff = async (req, res) => {
  try {
    const newStaff = await Staff.create(req.body);
    sendSuccess(res, 201, 'Staff member created successfully', newStaff);
  } catch (err) {
    if (err.code === '23505') {
      // Unique violation
      let field = err.detail && err.detail.includes('email') ? 'email' : 'staff_id';
      return sendError(res, 400, 'Duplicate value', { [field]: [`${field} already exists.`] });
    }
    sendError(res, 400, 'Error creating staff member', err.message);
  }
};

// Update staff member
exports.updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStaff = await Staff.update(id, req.body);
    if (!updatedStaff) {
      return sendError(res, 404, 'Staff member not found');
    }
    sendSuccess(res, 200, 'Staff member updated successfully', updatedStaff);
  } catch (err) {
    if (err.code === '23505') {
      let field = err.detail && err.detail.includes('email') ? 'email' : 'staff_id';
      return sendError(res, 400, 'Duplicate value', { [field]: [`${field} already exists.`] });
    }
    sendError(res, 400, 'Error updating staff member', err.message);
  }
};

// Soft delete staff member
exports.deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Staff.delete(id);
    if (!deleted) {
      return sendError(res, 404, 'Staff member not found');
    }
    sendSuccess(res, 200, 'Staff member deleted successfully', null);
  } catch (err) {
    sendError(res, 500, 'Error deleting staff member', err.message);
  }
};
