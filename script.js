fetch('screenshots.json')
  .then(res => res.json())
  .then(images => {
    const gallery = document.getElementById('gallery');

    // Newest first
    images.reverse().forEach(path => {
      const filenameWithExt = path.split('/').pop();
      const filename = filenameWithExt.replace(/\.[^/.]+$/, '');

      const item = document.createElement('div');
      item.className = 'item';

      const img = document.createElement('img');
      img.src = path;
      img.loading = 'lazy';
      img.alt = filename;

      const caption = document.createElement('p');
      caption.textContent = filename;

      item.appendChild(img);
      item.appendChild(caption);
      gallery.appendChild(item);

      // Lightbox functionality
      img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = path;
        lightbox.style.display = 'flex';
      });
    });
  });

// Close lightbox
document.getElementById('lightbox-close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});
document.getElementById('lightbox').addEventListener('click', e => {
  if(e.target.id === 'lightbox') document.getElementById('lightbox').style.display = 'none';
});


// Cursor trail
const trailContainer = document.createElement('div');
trailContainer.style.position = 'fixed';
trailContainer.style.top = 0;
trailContainer.style.left = 0;
trailContainer.style.pointerEvents = 'none';
trailContainer.style.zIndex = 10000;
document.body.appendChild(trailContainer);

const trailSymbols = [];

document.addEventListener('mousemove', e => {
  const symbol = document.createElement('div');
  symbol.textContent = '☘︎';
  symbol.style.position = 'absolute';
  symbol.style.left = e.clientX + 'px';
  symbol.style.top = e.clientY + 'px';
  symbol.style.fontSize = Math.random() * 16 + 8 + 'px';
  symbol.style.color = '#c1ff72';
  symbol.style.pointerEvents = 'none';
  symbol.style.opacity = 1;
  trailContainer.appendChild(symbol);

  trailSymbols.push(symbol);

  // Fade out and remove after 0.6s
  setTimeout(() => {
    symbol.style.transition = 'opacity 0.6s, transform 0.6s';
    symbol.style.opacity = 0;
    symbol.style.transform = 'translateY(-20px)';
    setTimeout(() => symbol.remove(), 600);
    trailSymbols.shift();
  }, 50);
});

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Optional: show button only when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.opacity = 1;
    scrollBtn.style.pointerEvents = 'auto';
  } else {
    scrollBtn.style.opacity = 0;
    scrollBtn.style.pointerEvents = 'none';
  }
});

// Initial state
scrollBtn.style.opacity = 0;
scrollBtn.style.pointerEvents = 'none';
