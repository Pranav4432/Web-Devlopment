document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const toggleButton = document.getElementById('togglePassword');
  
    toggleButton.addEventListener('click', () => {
      // Toggle the input type between password and text
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      // Update button text
      toggleButton.textContent = type === 'password' ? 'Show' : 'Hide';
    });
  });