function toggleMenu(){
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// // Your WhatsApp number in international format (without +, spaces, or dashes)
// const phoneNumber = '+91 9932845443'; 

// // Pre-filled message (URL-encoded)
// const message = encodeURIComponent("Hi, I'm interested in your work!");

// // Handle the click event
// document.getElementById('whatsapp-btn').addEventListener('click', () => {
//     const url = `https://wa.me/${phoneNumber}?text=${message}`;
//     window.open(url, '_blank');
// });
