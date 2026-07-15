document.documentElement.classList.add('is-ready');

document.querySelectorAll('.scene-tile, .credit-card').forEach((card) => {
  const link = card.querySelector('a[href]');

  if (!link) {
    return;
  }

  card.classList.add('is-clickable');
  card.tabIndex = 0;
  card.setAttribute('role', 'link');
  card.setAttribute('aria-label', link.textContent.trim());

  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      return;
    }

    if (link.target === '_blank') {
      window.open(link.href, '_blank', 'noopener');
    } else {
      window.location.href = link.href;
    }
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      link.click();
    }
  });
});
