export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const grid = document.createElement('ul');
  grid.className = 'product-shelf-grid';

  rows.forEach((row) => {
    const cells = [...row.children];
    const li = document.createElement('li');
    li.className = 'product-shelf-tile';

    // column order: eyebrow | title | subtitle | links | image
    const [eyebrowCell, titleCell, subtitleCell, linksCell, imageCell] = cells;

    if (eyebrowCell?.textContent.trim()) {
      const tag = document.createElement('p');
      tag.className = 'product-shelf-eyebrow';
      tag.textContent = eyebrowCell.textContent.trim();
      li.append(tag);
    }

    if (titleCell) {
      const h = document.createElement('h2');
      h.className = 'product-shelf-title';
      h.textContent = titleCell.textContent.trim();
      li.append(h);
    }

    if (subtitleCell?.textContent.trim()) {
      const p = document.createElement('p');
      p.className = 'product-shelf-subtitle';
      p.textContent = subtitleCell.textContent.trim();
      li.append(p);
    }

    if (linksCell) {
      const links = [...linksCell.querySelectorAll('a')];
      if (links.length) {
        const nav = document.createElement('p');
        nav.className = 'product-shelf-links';
        links.forEach((a) => {
          a.className = 'product-shelf-link';
          nav.append(a);
        });
        li.append(nav);
      }
    }

    if (imageCell) {
      const pic = imageCell.querySelector('picture') || imageCell.querySelector('img')?.parentElement;
      const img = imageCell.querySelector('img');
      if (pic) {
        pic.className = 'product-shelf-image';
        li.append(pic);
      } else if (img) {
        img.className = 'product-shelf-image';
        li.append(img);
      }
    }

    grid.append(li);
  });

  block.append(grid);
}
