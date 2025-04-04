document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const sosModal = document.getElementById('sosModal');
    const sosBtn = document.getElementById('sosBtn');
    const closeBtn = document.querySelector('.close');
    
    // Show modal function
    function showModal() {
        sosModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Hide modal function
    function hideModal() {
        sosModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Event listeners
    if (sosBtn) {
        sosBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showModal();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', hideModal);
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === sosModal) {
            hideModal();
        }
    });
    
    // Form submission
    const sosForm = document.getElementById('sosForm');
    if (sosForm) {
        sosForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Emergency information saved!');
            hideModal();
        });
    }
    
    // Show on first visit after delay
    if (!localStorage.getItem('sosShown')) {
        setTimeout(() => {
            showModal();
            localStorage.setItem('sosShown', 'true');
        }, 7000);
    }
});