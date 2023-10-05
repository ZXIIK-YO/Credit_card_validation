document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('creditCardForm');
    const successIcon = document.getElementById('successIcon');
    const failureIcon = document.getElementById('failureIcon');
  
    // Hide the icons initially
    successIcon.style.display = 'none';
    failureIcon.style.display = 'none';
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const cardNumber = document.getElementById('cardNumber').value;
      const expiryDate = document.getElementById('expiryDate').value;
      const cvv = document.getElementById('cvv').value;
  
      // Send a POST request to the backend API
      const response = await fetch('/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cardNumber, expiryDate, cvv }),
      });
  
      const result = await response.json();
  
      // Display validation result
      if (result.success) {
        successIcon.style.display = 'block';
        failureIcon.style.display = 'none';
      } else {
        successIcon.style.display = 'none';
        failureIcon.style.display = 'block';
      }
    });
});
