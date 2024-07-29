document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('application-form');
  const successMessage = document.getElementById('success-message');
  const gmailInput = document.getElementById('gmail'); // Get the Gmail input field

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Check if the form is valid
    if (form.checkValidity()) {
      // Validate Gmail input separately
      const gmailValue = gmailInput.value.trim();
      const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

      if (!gmailPattern.test(gmailValue)) {
        // Display an error if Gmail is not valid
        alert('Please enter a valid Gmail address.');
        return; // Prevent form submission
      }

      // Display the success message
      successMessage.textContent = 'Application Successfully Submitted';
      successMessage.style.display = 'block';

      // Reset the form fields
      form.reset();

      // Optionally hide the success message after a few seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000); // Hide the message after 5 seconds
    } else {
      // Display validation errors
      form.reportValidity();
    }
  });
});
