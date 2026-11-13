document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('orderModal');
  const openBtn = document.querySelector('.js-open-modal');
  const closeBtn = document.querySelector('.js-close-modal');

  if (modal && openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault(); 
      modal.classList.add('modal--active');
      document.body.style.overflow = 'hidden'; 
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
      }
    });
  }
});