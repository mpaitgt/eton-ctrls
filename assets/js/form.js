let 
  submitBtn = document.querySelector('#submit-btn'),  
  fields = document.querySelectorAll('.field-lockup input'),
  submitted = false;

const submitForm = e => {
  e.preventDefault();
  let form = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    phone: document.querySelector('#phone').value,
    message: document.querySelector('#message').value
  }

  for (field in form) {
    if (!form[field]) {
      let msg = `You need to fill in the ${field} field.`;
      document.getElementById(field).style.borderBottom = '1px solid red';
      document.getElementById(field).placeholder = msg;
    } else {
      emailjs.send('gmail', 'eton-controls', form, 'user_hj9lyTMwrU1mbY0EF1xh0')
      .then(res => {
        submitted = true;
        console.log('SUCCESS!', res.status, res.text);
        document.getElementById('contact-form').style.display = 'none';
        thankYouMessage();
      })
    }
  }
}

const thankYouMessage = () => {
  let thankYou = document.createElement('h2');
  thankYou.innerHTML = 'Thank you so much for reaching out. We\'ll get back to you as soon as we can.';
  thankYou.classList.add('thank-you');
  if (submitted) {
    document.getElementById('contact-form')
      .appendChild(thankYou);
  }
}

submitBtn.addEventListener('click', submitForm);