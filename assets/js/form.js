let submitBtn = document.querySelector('#submit-btn');
let submitted = false;

const submitForm = e => {
  e.preventDefault();
  let form = {
    name: document.querySelector('#name-input').value,
    email: document.querySelector('#email-input').value,
    phone: document.querySelector('#phone-input').value,
    message: document.querySelector('#message-input').value
  }
  emailjs.send('gmail', 'eton-controls', form, 'user_hj9lyTMwrU1mbY0EF1xh0')
    .then(res => {
      submitted = true;
      console.log('SUCCESS!', res.status, res.text);
      document.getElementById('contact-form').style.display = 'none';
      thankYouMessage();
    })
}

const thankYouMessage = () => {
  let thankYou = document.createElement('h2');
  thankYou.innerHTML = 'Thank you so much for reaching out. We\'ll get back to you as soon as we can.';
  thankYou.classList.add('thank-you');
  if (submitted) {
    document.getElementById('form-container')
      .appendChild(thankYou);
  }
}

submitBtn.addEventListener('click', submitForm);