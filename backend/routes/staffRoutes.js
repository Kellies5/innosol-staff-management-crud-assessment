const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const validation = require('../middleware/validation');

// Get all staff
router.get('/', staffController.getAllStaff);

// Get staff by ID
router.get('/:id', staffController.getStaffById);

// Create new staff
router.post('/', validation.validateStaff, staffController.createStaff);

// Update staff
router.put('/:id', validation.validateStaff, staffController.updateStaff);

// Delete staff
router.delete('/:id', staffController.deleteStaff);

module.exports = router;
