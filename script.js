document.addEventListener('DOMContentLoaded', function() {
    // Emergency SOS Modal
    const sosModal = document.getElementById('sosModal');
    const sosBtn = document.getElementById('sosBtn');
    const closeBtn = document.querySelector('.close');
    const sosForm = document.getElementById('sosForm');

    // Function to show modal
    function showSOSModal() {
        if (sosModal) {
            sosModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Function to hide modal
    function hideSOSModal() {
        if (sosModal) {
            sosModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // NEW FUNCTION: Clear storage and show popup
    function resetAndShowSOS() {
        // Clear all emergency-related localStorage
        localStorage.removeItem('sosContact');
        localStorage.removeItem('sosSymptoms');
        localStorage.removeItem('sosLocationAccess');
        localStorage.removeItem('sosDismissed');
        
        // Clear sessionStorage
        sessionStorage.removeItem('sosDismissed');
        
        // Show after 500ms (remove setTimeout if you want it instant)
        setTimeout(showSOSModal, 500);
    }

    // Event listeners
    if (sosBtn) {
        sosBtn.addEventListener('click', function(e) {
            e.preventDefault();
            resetAndShowSOS(); // Use new function instead
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            hideSOSModal();
            sessionStorage.setItem('sosDismissed', 'true');
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === sosModal) {
            hideSOSModal();
            sessionStorage.setItem('sosDismissed', 'true');
        }
    });

    // Form submission
    if (sosForm) {
        sosForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const contact = document.getElementById('emergencyContact').value;
            const symptoms = document.getElementById('symptoms').value;
            const locationAccess = document.getElementById('locationAccess').checked;
            
            localStorage.setItem('sosContact', contact);
            localStorage.setItem('sosSymptoms', symptoms);
            localStorage.setItem('sosLocationAccess', locationAccess);
            
            alert('Emergency information saved!');
            hideSOSModal();
        });
    }

    // Initial check (optional - remove if you don't want auto-show)
    if (!sessionStorage.getItem('sosDismissed')) {
        setTimeout(showSOSModal, 5000);
    }
});
