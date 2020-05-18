let 
  submitBtn = document.querySelector('#submit-btn'),  
  fields = document.querySelectorAll('.field-lockup input'),
  submitted = false;

const submitForm = e => {
  e.preventDefault();
  let 
    errors = [],
    form = {
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      phone: document.querySelector('#phone').value,
      message: document.querySelector('#message').value
    };

  for (field in form) {
    if (!form[field]) {
      let msg = `Please enter your ${field}.`;
      document.getElementById(field).style.borderBottom = '1px solid #f74b4b';
      document.getElementById(field).placeholder = msg;
      errors.push(msg);
    } else {
      document.getElementById(field).style.borderBottom = '1px solid #62c755';
    }
  }

  if (!validateEmail(form.email)) {
    let msg = 'Please enter a valid email.';
    document.getElementById('email').style.borderBottom = '1px solid #f74b4b';
    document.getElementById('email').placeholder = msg;
    errors.push(msg);
  }

  if (!validatePhone(form.phone)) {
    let msg = 'Please enter a valid phone number.';
    document.getElementById('phone').style.borderBottom = '1px solid #f74b4b';
    document.getElementById('contact-form').appendChild = msg;
    errors.push(msg);
  }

  if (errors.length === 0) {
    emailjs.send('gmail', 'eton-controls', form, 'user_hj9lyTMwrU1mbY0EF1xh0')
    .then(res => {
      submitted = true;
      document.getElementById('contact-form').classList.add('sent');
      thankYouMessage();
    })
  }
}

const thankYouMessage = () => {
  let thankYou = document.createElement('h4');
  thankYou.innerHTML = 'Thank you so much for reaching out. We\'ll get back to you as soon as we can.';
  thankYou.classList.add('thank-you');
  if (submitted) {
    document.querySelector('.column-two').appendChild(thankYou);
  }
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
  return false;
}

function validatePhone(phone) {
  if(phone.match(/^(1-)?\d{3}-\d{3}-\d{4}$/)) return true;
  return false;
}

submitBtn.addEventListener('click', submitForm);

// ^(1-)?\d{3}-\d{3}-\d{4}$
// /^\d{10}$/ // no dashes