//NAVBAR
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links.mobile');  // Utilise .mobile ici

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open'); // Ajoute la classe 'open' ici
  });
});



//ACCUEIL
document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carouselImages = document.querySelector('.carousel-images');
  let currentSlide = 0;
  const totalSlides = document.querySelectorAll('.carousel-slide').length;

  // Fonction pour changer l'image du carrousel
  const changeSlide = (direction) => {
      currentSlide += direction;

      // S'assurer que currentSlide reste dans la plage de l'index des slides
      if (currentSlide < 0) {
          currentSlide = totalSlides - 1; // Si on va en arrière, revenir à la dernière slide
      } else if (currentSlide >= totalSlides) {
          currentSlide = 0; // Une fois arrivé à la fin, repartir du début sans aller en arrière
      }

      // Animer la transition
      carouselImages.style.transform = `translateX(-${currentSlide * 100}vw)`; // Déplace le carrousel
  };

  // Fonction pour détecter la visibilité des projets et animer lors du défilement
  const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
  };

  // Ajouter l'effet de visibilité et animation au scroll
  const handleScroll = () => {
      const slides = document.querySelectorAll('.carousel-slide');
      slides.forEach((slide, index) => {
          if (isInViewport(slide)) {
              slide.style.opacity = '1'; // Rendre visible
              slide.style.animationDelay = `${index * 0.2}s`; // Délai d'animation pour chaque projet
          }
      });
  };

  // Vérification initiale et lors du scroll
  handleScroll();
  window.addEventListener('scroll', handleScroll);

  // Écouteurs d'événements pour les boutons
  prevButton.addEventListener('click', () => changeSlide(-1));
  nextButton.addEventListener('click', () => changeSlide(1));

  // Changement automatique toutes les 5 secondes
  setInterval(() => {
      changeSlide(1);
  }, 5000);
});



//PREV ET NEXT
document.querySelector('.prev-btn').addEventListener('click', function() {
  window.location.href = 'page-prev.html'; // Remplacer avec le lien précédent
});

document.querySelector('.next-btn').addEventListener('click', function() {
  window.location.href = 'page-next.html'; // Remplacer avec le lien suivant
});
