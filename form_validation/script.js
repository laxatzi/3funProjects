const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const rep_password = document.querySelector('#rep_password');
const form_div = document.querySelector('form');

function showError(input, message) {
  const form_control = input.parentElement;
  form_control.className = 'form-control error';
  const err = form_control.querySelector('.err');
  err.innerText = message;
}

function showSuccess(input) {
  const form_control = input.parentElement;
  form_control.className = 'form-control success';
}


 const isEmailValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

form_div.addEventListener('submit', (evt) => {

   evt.preventDefault();


  if (username.value === '') {
    showError(username, "Username is required!");
  } else {
    showSuccess(username);
  }

  if (password.value === '') {
    showError(password, "Password is required!");
  } else {
    showSuccess(password);
  }

  if (email.value === '') {
     showError(email, "Email is required!");
  } else if (!isEmailValid(email.value)) {
     showError(email, "Please enter a valid email address!");
  } else {
    showSuccess(email);
  }
  if (rep_password.value === '' || rep_password.value !== password.value) {
           showError(rep_password, "Password validation is required!");
  } else {
    showSuccess(rep_password);
  }
});