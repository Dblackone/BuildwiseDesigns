
// Add event listener to the form submission
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;
  
  // TODO: Send the form data to the architect's email address using an API endpoint

  // Clear the form after submission
  event.target.reset();

  // Display a success message
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Thank you for your message. We will be in touch soon!';
  form.appendChild(successMessage);
  setTimeout(() => {
    form.removeChild(successMessage);
  }, 5000);
}

// Display the gallery images
const gallery = document.querySelector('.gallery');
const images = [
  {
    src: 'img/gallery1.jpg',
    alt: 'Architectural Design 1'
  },
  {
    src: 'img/gallery2.jpg',
    alt: 'Architectural Design 2'
  },
  {
    src: 'img/gallery3.jpg',
    alt: 'Architectural Design 3'
  },
  {
    src: 'img/gallery4.jpg',
    alt: 'Architectural Design 4'
  },
  {
    src: 'img/gallery5.jpg',
    alt: 'Architectural Design 5'
  },
  {
    src: 'img/gallery6.jpg',
    alt: 'Architectural Design 6'
  }
];

images.forEach(image => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');
  gallery.appendChild(galleryItem);
  
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;
  galleryItem.appendChild(img);
});
