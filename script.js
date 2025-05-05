// Booking button navigation
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', () => {
      const service = button.getAttribute('data-service');
      window.location.href = `barbershopbooking.html?service=${encodeURIComponent(service)}`;
    });
  });
  
  // Contact form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('contactForm').reset();
  });
  
  // Scroll-to-top button
  let scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.onscroll = function () {
    scrollToTopBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? 'block' : 'none';
  };
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.scrollToTop = scrollToTop;
  
  // Chatbot functions
  function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender + '-message');
    messageElement.textContent = message;
    const chatbox = document.getElementById('chatbox');
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
  }
  
  function getChatbotResponse(input) {
    const lower = input.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi')) return "Hey there! 👋 Ready for a fresh cut or trim?";
    if (lower.includes('services')) return "We offer a variety of services including haircuts, beard trims, and more.";
    if (lower.includes('pricing')) return "Our prices range from 10 to 45 Euros. Check the services section for more details.";
    if (lower.includes('book')) return "Visit our booking page to schedule your appointment.";
    if (lower.includes('location')) return "We are located at Blanchardstown Centre, Dublin.";
    if (lower.includes('hours')) return "Open Mon–Sat 10 AM – 6 PM. Closed on Sundays.";
    if (lower.includes('products')) return "We sell hair wax, beard oil, shampoos, and more!";
    if (lower.includes('complaint')) return "We're sorry! Please let us know the issue and we'll assist.";
    return "Sorry, I didn't quite catch that! Ask about services, pricing, or booking.";
  }
  
  // Handle chatbot icon toggle
  document.getElementById('chatbot-icon').addEventListener('click', () => {
    document.getElementById('chatbot-container').classList.toggle('hidden');
  });
  
  // Handle minimize button
  document.getElementById('minimize-button').addEventListener('click', () => {
    const chatbox = document.getElementById('chatbox');
    const inputSection = document.getElementById('input-section');
    const btn = document.getElementById('minimize-button');
    chatbox.classList.toggle('hidden');
    inputSection.classList.toggle('hidden');
    btn.textContent = chatbox.classList.contains('hidden') ? '+' : '–';
  });
  
  // Send button
  document.getElementById('sendBtn').addEventListener('click', function() {
    const input = document.getElementById('userInput').value;
    if (input.trim() === "") return;
    addMessage(input, 'user');
    setTimeout(() => addMessage(getChatbotResponse(input), 'bot'), 1000);
    document.getElementById('userInput').value = "";
  });
  
  // Quick Actions
  document.getElementById('view-services').addEventListener('click', () => {
    addMessage("We offer haircuts, trims, fades and more. Want to know about a specific one?", "bot");
    document.getElementById('quickActions').style.display = 'none';
  });
  document.getElementById('check-prices').addEventListener('click', () => {
    addMessage("Prices range from 10 to 45 Euros. Ask me for a specific service price!", "bot");
    document.getElementById('quickActions').style.display = 'none';
  });
  document.getElementById('book-appointment').addEventListener('click', () => {
    addMessage("To book, go to our booking page. Want help choosing a service?", "bot");
    document.getElementById('quickActions').style.display = 'none';
  });
  
  // Reset Chat
  document.getElementById('reset-chat-btn').addEventListener('click', () => {
    document.getElementById('chatbox').innerHTML = '';
    document.getElementById('quickActions').style.display = 'flex';
  });
  
  // Show quick actions on load
  window.onload = () => {
    setTimeout(() => {
      document.getElementById('quickActions').style.display = 'flex';
    }, 2000);
  };
  