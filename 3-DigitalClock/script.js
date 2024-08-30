const clock = document.getElementById('clock');
const dateElement = document.getElementById('Date');

setInterval(function() {
  let currentDate = new Date();
  clock.innerHTML = currentDate.toLocaleTimeString();
  dateElement.innerHTML = currentDate.toLocaleDateString();
}, 1000);