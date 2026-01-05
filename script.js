fetch('screenshots.json')
  .then(response => response.json())
  .then(images => {
    const gallery = document.getElementById('gallery');

    images.forEach(path => {
      const filenameWithExt = path.split('/').pop();
      const filename = filenameWithExt.replace(/\.[^/.]+$/, '');

      const item = document.createElement('div');
      item.className = 'item';

      const img = document.createElement('img');
      img.src = path;
      img.loading = 'lazy';

      const caption = document.createElement('p');
      caption.textContent = filename;

      item.appendChild(img);
      item.appendChild(caption);
      gallery.appendChild(item);
    });
  });