const form = document.getElementById('form-subscribe');
const error = document.getElementById('input-error');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    const errorEmail = isErrorEmail(data.email);

    console.log(data);
    console.log(errorEmail);
    if (!errorEmail) {
      sessionStorage.setItem('email', data.email);
      window.location.href = 'success.html';
    } else {
      error.innerHTML = errorEmail;
      error.closest('.input-group').classList.add('error');
    }
  })
}

function isErrorEmail(text) {
  if (!text) {
    return "Email is required";
  }
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isEmail.test(text)) {
    return "Valid email required";
  }

  return false;
}