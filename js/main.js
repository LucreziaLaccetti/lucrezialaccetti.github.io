// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }
})();

// Publications filter
(function () {
  var buttons = document.querySelectorAll('.pubfilter button');
  if (!buttons.length) return;
  // each category sits in its own .pubgroup, so whole groups (heading included) are toggled
  var groups = document.querySelectorAll('.pubgroup');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      groups.forEach(function (g) {
        var cat = g.getAttribute('data-cat') || '';
        g.style.display = (f === 'all' || cat === f) ? '' : 'none';
      });
    });
  });
})();
