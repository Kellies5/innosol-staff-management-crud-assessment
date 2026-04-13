// Form handling

const Form = {
  init: function () {
    document.getElementById('staffForm').onsubmit = (e) => this.submitForm(e);
  },

  populateForm: function (staff) {
    document.getElementById('staffId').value = staff.staffId || '';
    document.getElementById('firstName').value = staff.firstName || '';
    document.getElementById('lastName').value = staff.lastName || '';
    document.getElementById('email').value = staff.email || '';
    document.getElementById('number').value = staff.number || '';
    document.getElementById('department').value = staff.department || '';
    document.getElementById('employeeType').value = staff.employeeType || '';
  },

  loadStaffData: async function (id) {
    try {
      const staff = await API.getStaffById(id);
      this.populateForm(staff);
    } catch (error) {
      console.error('Error loading staff data:', error);
    }
  },

  getFormData: function () {
    return {
      staff_id: document.getElementById('staffId').value.trim(),
      first_name: document.getElementById('firstName').value.trim(),
      last_name: document.getElementById('lastName').value.trim(),
      email: document.getElementById('email').value.trim(),
      number: document.getElementById('number').value.trim(),
      department: document.getElementById('department').value.trim(),
      employee_type: document.getElementById('employeeType').value.trim()
    };
  },

  submitForm: async function (e) {
    e.preventDefault();

    const formData = this.getFormData();

    try {
      if (Modal.currentStaffId) {
        // Update
        await API.updateStaff(Modal.currentStaffId, formData);
        alert('Staff member updated successfully!');
      } else {
        // Create
        await API.createStaff(formData);
        alert('Staff member added successfully!');
      }

      Modal.closeModal(Modal.editModal);
      document.getElementById('staffForm').reset();
      App.loadStaff();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error saving staff member. Please try again.');
    }
  }
};

// Initialize form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  Form.init();
});
