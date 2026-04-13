// Main application logic

const App = {
  staffData: [],

  init: function () {
    this.setupEventListeners();
    this.loadStaff();
  },

  setupEventListeners: function () {
    // Add staff button
    document.getElementById('addStaffBtn').onclick = () => {
      Modal.showEditModal();
    };

    // Search functionality
    document.getElementById('searchInput').oninput = () => this.filterStaff();

    // Department filter
    document.getElementById('departmentFilter').onchange = () => this.filterStaff();

    // Employee type filter
    document.getElementById('employeeTypeFilter').onchange = () => this.filterStaff();

    // Delete confirmation
    document.getElementById('confirmDeleteBtn').onclick = () => this.confirmDelete();
  },

  loadStaff: async function () {
    try {
      const data = await API.getAllStaff();
      this.staffData = data;
      this.renderTable(data);
    } catch (error) {
      console.error('Error loading staff:', error);
      alert('Failed to load staff data. Please refresh the page.');
    }
  },

  renderTable: function (staff) {
    const tbody = document.getElementById('staffTableBody');
    const emptyState = document.getElementById('emptyState');

    if (staff.length === 0) {
      tbody.innerHTML = '';
      emptyState.classList.add('show');
      return;
    }

    emptyState.classList.remove('show');

    tbody.innerHTML = staff.map(member => `
      <tr>
        <td>${member.id}</td>
        <td>${member.staffId || 'N/A'}</td>
        <td>${member.firstName}</td>
        <td>${member.lastName}</td>
        <td>${member.email}</td>
        <td>${member.number || 'N/A'}</td>
        <td>${member.department}</td>
        <td><span class="badge badge-${member.employeeType === 'Full-Time' ? 'primary' : 'secondary'}">${member.employeeType}</span></td>
        <td>
          <div class="action-buttons">
            <button class="action-btn view" onclick="App.viewStaff(${member.id})" title="View">👁</button>
            <button class="action-btn edit" onclick="App.editStaff(${member.id})" title="Edit">✏️</button>
            <button class="action-btn delete" onclick="App.deleteStaff(${member.id})" title="Delete">🗑</button>
          </div>
        </td>
      </tr>
    `).join('');
  },

  filterStaff: function () {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const department = document.getElementById('departmentFilter').value;
    const employeeType = document.getElementById('employeeTypeFilter').value;

    const filtered = this.staffData.filter(staff => {
      const matchesSearch = !searchTerm || 
        staff.firstName.toLowerCase().includes(searchTerm) ||
        staff.lastName.toLowerCase().includes(searchTerm) ||
        staff.email.toLowerCase().includes(searchTerm) ||
        (staff.staffId && staff.staffId.toLowerCase().includes(searchTerm));

      const matchesDepartment = !department || staff.department === department;
      const matchesType = !employeeType || staff.employeeType === employeeType;

      return matchesSearch && matchesDepartment && matchesType;
    });

    this.renderTable(filtered);
  },

  viewStaff: function (id) {
    const staff = this.staffData.find(s => s.id === id);
    if (staff) {
      Modal.showViewModal(staff);
    }
  },

  editStaff: function (id) {
    const staff = this.staffData.find(s => s.id === id);
    if (staff) {
      Modal.showEditModal(staff);
    }
  },

  deleteStaff: function (id) {
    Modal.currentStaffId = id;
    Modal.showDeleteConfirmation(id);
  },

  confirmDelete: async function () {
    try {
      await API.deleteStaff(Modal.currentStaffId);
      Modal.closeModal(Modal.deleteModal);
      this.loadStaff();
      alert('Staff member deleted successfully!');
    } catch (error) {
      console.error('Error deleting staff:', error);
      alert('Error deleting staff member. Please try again.');
    }
  }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
