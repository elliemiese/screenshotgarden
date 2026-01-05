fetch('screenshots.json')
  .then(res => res.json())
  .then(images => {
    const gallery = document.getElementById('gallery');

    // Reverse the array so newest images appear first
    images.reverse().forEach(path => {
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