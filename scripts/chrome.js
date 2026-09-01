/* ==========================================================================
   ITP — shared chrome behaviour.
   Mobile menu, footer newsletter, and the shared scroll-reveal used by the
   Problem Mirror and other on-scroll highlights. Progressive: every block
   no-ops when its canonical markup is absent.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------- 1 · MOBILE MENU */
  var toggle = document.querySelector('[data-itp-menu-toggle]');
  var panel = document.getElementById('itp-menu-panel');
  if (!toggle || !panel) return menu_done();


  var labelOpen = toggle.getAttribute('data-label-open') || 'Otwórz menu';
  var labelClose = toggle.getAttribute('data-label-close') || 'Zamknij menu';

  function setOpen(open) {
    panel.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? labelClose : labelOpen);
    if (open) {
      var first = panel.querySelector('a, button');
      if (first) first.focus();
    }
  }

  function isOpen() {
    return panel.classList.contains('is-open');
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  panel.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('focusin', function (event) {
    if (!isOpen()) return;
    if (panel.contains(event.target) || toggle.contains(event.target)) return;
    setOpen(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1080 && isOpen()) setOpen(false);
  });

  menu_done();

  /* -------------------------------------------- 2 · FOOTER NEWSLETTER */
  function menu_done() {
    var forms = document.querySelectorAll('[data-itp-newsletter]');
    Array.prototype.forEach.call(forms, function (form) {
      var input = form.querySelector('input[type="email"]');
      var msg = form.querySelector('[data-itp-newsletter-msg]');
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!input || !msg) return;
        var value = (input.value || '').trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
          msg.textContent = 'Podaj poprawny adres e-mail.';
          msg.style.color = 'var(--f3-inflam)';
          input.setAttribute('aria-invalid', 'true');
          input.focus();
          return;
        }
        input.removeAttribute('aria-invalid');
        msg.textContent = 'Zapisano. Makieta etapu I — wiadomość nie zostaje wysłana.';
        msg.style.color = 'var(--cyan)';
        form.reset();
      });
    });

    reveal();
  }

  /* ------------------------------------------------ 3 · SCROLL REVEAL */
  function reveal() {
    var targets = document.querySelectorAll('[data-itp-reveal]');
    if (!targets.length) return;

    function show(el) { el.setAttribute('data-itp-revealed', 'true'); }
    function showAll() { Array.prototype.forEach.call(targets, show); }

    var reduce = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // A hidden document never services requestAnimationFrame, so an observer
    // callback may never run and the page would screenshot half-faded. Reduced
    // motion resolves the same way: straight to the revealed state.
    var hidden = document.visibilityState === 'hidden';

    if (reduce || hidden || typeof IntersectionObserver !== 'function') {
      showAll();
      return;
    }

    // Anything already on screen at load is content, not an entrance. Reveal it
    // synchronously: headline facts must never sit faded at the fold.
    var pending = [];
    Array.prototype.forEach.call(targets, function (el) {
      var rect = el.getBoundingClientRect();
      var vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh && rect.bottom > 0) show(el);
      else pending.push(el);
    });
    if (!pending.length) return;

    var fired = false;
    var io = new IntersectionObserver(function (entries) {
      fired = true;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });

    pending.forEach(function (el) { io.observe(el); });

    // Belt and braces. A throttled or offscreen tab can report itself visible
    // while never servicing requestAnimationFrame, in which case the observer
    // never delivers and the page renders permanently half-faded. If a frame
    // never arrives, there is no animation to preserve: settle everything.
    var rafOk = false;
    if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(function () { rafOk = true; });
    }
    window.setTimeout(function () {
      if (!rafOk && !fired) showAll();
    }, 800);
  }
})();
