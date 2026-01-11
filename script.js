// ===== Hamburger menu pour mobile =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ===== Animation des sections au scroll =====
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// ===== Slider automatique pour la galerie =====
const slides = document.querySelector('.slides');
if (slides) {
    const totalSlides = slides.children.length;
    let index = 0;

    setInterval(() => {
        index++;
        if (index >= totalSlides) index = 0;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
}

// ===== Lightbox pour la galerie =====
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

const closeBtn = document.createElement('span');
closeBtn.innerHTML = '&times;';
closeBtn.style.position = 'absolute';
closeBtn.style.top = '30px';
closeBtn.style.right = '30px';
closeBtn.style.fontSize = '40px';
closeBtn.style.color = '#fff';
closeBtn.style.cursor = 'pointer';
lightbox.appendChild(closeBtn);

lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.background = 'rgba(0,0,0,0.85)';
lightbox.style.display = 'flex';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.opacity = '0';
lightbox.style.visibility = 'hidden';
lightbox.style.transition = 'opacity 0.3s';

// Ouvrir l'image dans la lightbox
document.querySelectorAll('.slides img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.opacity = '1';
        lightbox.style.visibility = 'visible';
    });
});

// Fermer la lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    lightbox.style.visibility = 'hidden';
});

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.opacity = '0';
        lightbox.style.visibility = 'hidden';
    }
});
