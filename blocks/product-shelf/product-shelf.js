export default function decorate(block) {
  const tiles = [...block.children];
  block.innerHTML = '';

  const grid = document.createElement('ul');
  grid.className = 'product-shelf-grid';

  tiles.forEach((tile) => {
    const li = document.createElement('li');
    li.className = 'product-shelf-tile';

    const [eyebrow, title, subtitle, ...rest] = [...tile.children];

    if (eyebrow) {
      const tag = document.createElement('p');
      tag.className = 'product-shelf-eyebrow';
      tag.textContent = eyebrow.textContent.trim();
      li.append(tag);
    }

    if (title) {
      const h = document.createElement('h2');
      h.className = 'product-shelf-title';
      h.innerHTML = title.innerHTML;
      li.append(h);
    }

    if (subtitle) {
      const sub = document.createElement('p');
      sub.className = 'product-shelf-subtitle';
      sub.innerHTML = subtitle.innerHTML;
      li.append(sub);
    }

    rest.forEach((cell) => {
      const links = cell.querySelectorAll('a');
      if (links.length) {
        const nav = document.createElement('p');
        nav.className = 'product-shelf-links';
        links.forEach((a) => {
          a.classList.add('product-shelf-link');
          nav.append(a);
        });
        li.append(nav);
      }
      const pic = cell.querySelector('picture');
      if (pic) {
        pic.classList.add('product-shelf-image');
        li.append(pic);
      }
    });

    grid.append(li);
  });

  block.append(grid);
}
