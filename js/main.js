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
  var items = document.querySelectorAll('.publist .pub');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      items.forEach(function (it) {
        var cat = it.getAttribute('data-cat') || '';
        it.style.display = (f === 'all' || cat.indexOf(f) > -1) ? 'flex' : 'none';
      });
    });
  });
})();
