// Modal functionality

const Modal = {
  viewModal: null,
  editModal: null,
  deleteModal: null,
  currentStaffId: null,

  init: function () {
    this.viewModal = document.getElementById('viewModal');
    this.editModal = document.getElementById('editModal');
    this.deleteModal = document.getElementById('deleteModal');

    this.setupEventListeners();
  },

  setupEventListeners: function () {
    // Close buttons for modals
    document.querySelectorAll('.close').forEach(closeBtn => {
      closeBtn.onclick = (e) => {
        const modal = e.target.closest('.modal');
        this.closeModal(modal);
      };
    });

    // View modal buttons
    document.getElementById('closeViewBtn').onclick = () => this.closeModal(this.viewModal);
    document.getElementById('editFromViewBtn').onclick = () => this.switchToEditModal();

    // Edit modal buttons
    document.getElementById('closeEditBtn').onclick = () => this.closeModal(this.editModal);

    // Delete modal buttons
    document.getElementById('cancelDeleteBtn').onclick = () => this.closeModal(this.deleteModal);

    // Close modal when clicking outside of it
    window.onclick = (event) => {
      if (event.target.classList.contains('modal')) {
        this.closeModal(event.target);
      }
    };
  },

  openModal: function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
    }
  },

  closeModal: function (modal) {
    if (modal) {
      modal.classList.remove('show');
    }
  },

  showViewModal: function (staff) {
    const modalBody = document.getElementById('viewModalBody');
    modalBody.innerHTML = `
      <div class="staff-details">
        <div class="detail-row">
          <span class="detail-label">Staff ID:</span>
          <span class="detail-value">${staff.staffId || 'N/A'}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Name:</span>
          <span class="detail-value">${staff.firstName} ${staff.lastName}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span class="detail-value">${staff.email}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Number:</span>
          <span class="detail-value">${staff.number || 'N/A'}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Department:</span>
          <span class="detail-value">${staff.department}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Employee Type:</span>
          <span class="detail-value">${staff.employeeType}</span>
        </div>
      </div>
    `;
    this.currentStaffId = staff.id;
    this.openModal('viewModal');
  },

  switchToEditModal: function () {
    this.closeModal(this.viewModal);
    Form.loadStaffData(this.currentStaffId);
    this.openModal('editModal');
  },

  showEditModal: function (staff = null) {
    const title = document.getElementById('editModalTitle');
    title.textContent = staff ? 'Edit Staff Member' : 'Add New Staff';
    if (staff) {
      this.currentStaffId = staff.id;
      Form.populateForm(staff);
    } else {
      this.currentStaffId = null;
      document.getElementById('staffForm').reset();
    }
    this.openModal('editModal');
  },

  showDeleteConfirmation: function (staffId) {
    this.currentStaffId = staffId;
    this.openModal('deleteModal');
  }
};

// Initialize modals when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  Modal.init();
});
