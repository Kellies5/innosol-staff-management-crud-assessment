// API communication functions using jQuery/AJAX

const API_BASE_URL = window.location.origin + '/api';

const API = {
  // Get all staff
  getAllStaff: function() {
    return $.ajax({
      url: `${API_BASE_URL}/staff`,
      type: 'GET',
      dataType: 'json',
      error: function(err) {
        console.error('Error fetching staff:', err);
      }
    }).then(function(response) {
      return response.data || [];
    });
  },

  // Get staff by ID
  getStaffById: function(id) {
    return $.ajax({
      url: `${API_BASE_URL}/staff/${id}`,
      type: 'GET',
      dataType: 'json',
      error: function(err) {
        console.error('Error fetching staff:', err);
      }
    }).then(function(response) {
      return response.data;
    });
  },

  // Create new staff
  createStaff: function(staffData) {
    return $.ajax({
      url: `${API_BASE_URL}/staff`,
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(staffData),
      error: function(err) {
        console.error('Error creating staff:', err);
      }
    }).then(function(response) {
      return response.data;
    });
  },

  // Update staff
  updateStaff: function(id, staffData) {
    return $.ajax({
      url: `${API_BASE_URL}/staff/${id}`,
      type: 'PUT',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(staffData),
      error: function(err) {
        console.error('Error updating staff:', err);
      }
    }).then(function(response) {
      return response.data;
    });
  },

  // Delete staff
  deleteStaff: function(id) {
    return $.ajax({
      url: `${API_BASE_URL}/staff/${id}`,
      type: 'DELETE',
      dataType: 'json',
      error: function(err) {
        console.error('Error deleting staff:', err);
      }
    }).then(function() {
      return true;
    });
  }
};
