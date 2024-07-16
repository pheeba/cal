const scriptURL = 'https://script.google.com/macros/s/AKfycbwp1Z4ZDNRATgHjutnjSunU24eLQAH_YKYCB2sC9VjtrbA0Q4BbrQFGuy_Hn6AhyO5Fxw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 
})