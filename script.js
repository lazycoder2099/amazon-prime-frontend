// FAQ Toggle Animation
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const q = item.querySelector('.faq-question');
  const ans = item.querySelector('.faq-answer');

  q.addEventListener('click', () => {
    const isOpen = ans.style.maxHeight;

    if (isOpen) {
      ans.style.maxHeight = null;
      q.querySelector('span').textContent = '+';
    } else {
      ans.style.maxHeight = ans.scrollHeight + 'px';
      q.querySelector('span').textContent = '-';
    }
  });
});

// Smooth fade-in animation for hero + cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.hero, .card, .plan, .faq-item').forEach(el => observer.observe(el));
