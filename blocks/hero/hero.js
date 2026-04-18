export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;

  const cells = [...row.children];

  if (cells.length === 2) {
    // two-column: left = text, right = image
    const [textCell, imageCell] = cells;
    textCell.className = 'hero-text';
    imageCell.className = 'hero-image';
    block.classList.add('hero-split');
  } else {
    // single column: just text (or text + background image)
    const pic = cells[0]?.querySelector('picture');
    if (pic && cells[0].children.length === 1) {
      pic.className = 'hero-bg';
      block.prepend(pic);
    }
    cells[0].className = 'hero-text';
    block.classList.add('hero-centered');
  }

  // remove placeholder note paragraphs added for da.live guidance
  block.querySelectorAll('p').forEach((p) => {
    if (p.textContent.includes('Replace with') || p.textContent.includes('⬆')) {
      p.remove();
    }
  });
}
