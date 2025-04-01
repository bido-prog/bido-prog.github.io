// form-handler.js - Form submission handling for HR Consultancy Website

document.addEventListener('DOMContentLoaded', function() {
    const consultationForm = document.getElementById('consultationForm');
    const formMessage = document.getElementById('formMessage');
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                formMessage.textContent = 'Please fill in all required fields.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this example, we'll simulate a successful submission
            setTimeout(() => {
                formMessage.textContent = 'Thank you for your request! We will contact you shortly.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                
                // Reset form
                consultationForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1000);
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            // Simulate newsletter subscription
            setTimeout(() => {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }, 500);
        });
    }
});