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