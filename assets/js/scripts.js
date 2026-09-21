(() => {
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#site-navigation');
  if (!toggle || !navigation) return;

  const desktop = window.matchMedia('(min-width: 800px)');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('opened', open);
  };

  document.documentElement.classList.add('navigation-ready');
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  desktop.addEventListener('change', () => setOpen(false));
})();
