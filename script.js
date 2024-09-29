
const scriptURL = 'https://script.google.com/macros/s/AKfycbxjTwZQjcb7vakNmC-WbEMOEtb7aQzmgsE7Wa-OcOGj1-b0AovkHAmvXK17_POOMsoN2w/exec';
const form = document.forms['submit-to-google-sheet'];
let responseMsg = document.querySelector('#response-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json()) // Parse JSON response
    .then(data => console.log('Success!', data))
    .catch(error => console.error('Error!', error.message));
    responseMsg.innerHTML = 'Form Submitted Successfully'

    setTimeout(() => {
        responseMsg.style.display = 'none'
    }, 5000);
    form.reset();
});

