export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const cells = [...row.children];
    cells.forEach((cell) => {
      const pic = cell.querySelector('picture');
      if (pic && cell.children.length === 1 && cell.textContent.trim() === '') {
        // standalone image row = product image
        const wrapper = document.createElement('div');
        wrapper.className = 'hero-product-image';
        wrapper.append(pic);
        block.append(wrapper);
        row.remove();
      } else if (pic) {
        // image with other content = background
        pic.classList.add('hero-bg');
        block.prepend(pic);
        row.remove();
      }
    });
  });

  // flatten remaining rows directly into block
  [...block.children].forEach((row) => {
    if (row.classList.contains('hero-product-image')) return;
    [...row.children].forEach((cell) => {
      [...cell.childNodes].forEach((node) => block.insertBefore(node, row));
    });
    row.remove();
  });
}
