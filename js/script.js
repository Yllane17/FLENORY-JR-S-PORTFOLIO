// Burger menu= document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  burgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
  closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      mobileMenu.classList.remove('open');
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Custom cursor
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Scroll snap + dot indicator sync
  const container = document.getElementById('scrollContainer');
  const sections = document.querySelectorAll('section');
  const dots = document.querySelectorAll('.dot');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach((d, i) => {
          d.classList.toggle('active', sections[i].id === id);
        });
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { root: container, threshold: 0.5 });

  sections.forEach(s => observer.observe(s));

  // Dot click navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      sections[i].scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Nav link smooth scroll inside snap container
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Skill card hover neon effect
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.background = 'rgba(0,212,255,0.06)';
      card.style.borderColor = 'rgba(0,212,255,0.18)';
    });
    card.addEventListener('mouseleave', () => {
      if (!card.classList.contains('featured')) {
        card.style.background = '';
        card.style.borderColor = '';
      }
    });
  });

  // Project card hover
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'rgba(0,212,255,0.25)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
    });
  });