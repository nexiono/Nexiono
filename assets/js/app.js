// Basic JS helper for the Nexiono site
console.log('Nexiono assets loaded');

// Simple form validation demo for contact form
document.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    var name = form.querySelector('[name="name"]').value.trim();
    var email = form.querySelector('[name="email"]').value.trim();
    if(!name || !email){
      e.preventDefault();
      alert('Please enter your name and email before sending.');
    }
  });
});
