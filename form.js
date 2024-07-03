document.getElementById('sampleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const userId = document.getElementById('userId').value;
  
    // Simple form validation
    if (title === '' || body === '' || userId === '') {
      alert('All fields are required!');
      return;
    }
  
    // Display the form data (for demonstration purposes)
    alert(Title: ${title}\nBody: ${body}\nUser ID: ${userId});
  });