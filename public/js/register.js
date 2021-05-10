const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmPassword = document.querySelector('#confirm-pass').value.trim();
  
    if (username && email && password && confirmPassword) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password, confirmPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('main');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);  