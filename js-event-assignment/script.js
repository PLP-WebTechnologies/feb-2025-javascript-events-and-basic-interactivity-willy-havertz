// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  const hoverBox = document.getElementById('hoverBox');
  hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'lightblue';
  });
  hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '';
  });
  
  document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  document.getElementById('secretBtn').addEventListener('dblclick', () => {
    alert('Secret action triggered!');
  });
  
  // Interactive Elements
  document.getElementById('colorBtn').addEventListener('click', () => {
    document.getElementById('colorBox').style.backgroundColor = 'yellow';
  });
  
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      contents.forEach(content => content.style.display = 'none');
      document.getElementById(tab.dataset.target).style.display = 'block';
    });
  });
  
  // Form Validation
  document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
  
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
      emailError.textContent = 'Invalid email format.';
      valid = false;
    } else {
      emailError.textContent = '';
    }
  
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters.';
      valid = false;
    } else {
      passwordError.textContent = '';
    }
  
    if (valid) {
      alert('Form submitted successfully!');
    }
  });
  