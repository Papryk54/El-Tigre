function showSection(sectionId) {
  const sections = document.querySelectorAll('.products-section, .about-us, .contact');
  sections.forEach(section => section.style.display = 'none');
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'flex';
  }
}

document.querySelector('.menu').addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const target = event.target.textContent.trim();
    if (target === 'Home') {
      showSection('products-section');
      document.getElementById('about-us-section').style.display = 'flex';
    } else if (target === 'Product') {
      showSection('products-section');
    } else if (target === 'Contact') {
      showSection('contact-section');
    }
  }
});

showSection('products-section');
document.getElementById('about-us-section').style.display = 'flex';

const discoverButton = document.getElementById('discover');
discoverButton.addEventListener('click', function(event) {
  event.preventDefault();
  const heroSection = document.querySelector('.hero');
  const heroHeight = heroSection.offsetHeight;
  window.scrollTo({
    top: heroSection.offsetTop + heroHeight,
    behavior: 'smooth',
  });
});



document.getElementById('submit').addEventListener('click', function () {
  // Pobierz wartości z formularza
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const message = document.getElementById('message').value;

  // Utwórz obiekt z danymi
  const formData = {
    name: name,
    title: title,
    message: message
  };

  // Wyślij dane na serwer
  fetch('http://localhost:4000/formData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to send message');
      }
    })
    .then(data => {
      console.log('Success:', data);
      alert('Message sent successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message');
    });
});

























// przycisk discover powinien przenośić pod sekcje hero

// przycisk submit pewnie będzie musiał na serwer wysłać dane

//postawić serwer

//umieścić w internet

//Hamburger menu

//zrobić wygląd strony na mniejszych rozdzielczościach

//pobierać dane do handelebarsów z api

//Zobaczyć co jest w zakładce lighthouse w chromie devtools