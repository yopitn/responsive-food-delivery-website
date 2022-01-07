// Change background header
(() => {
  "use strict";

  window.addEventListener('scroll', () => {
    var h = document.querySelector('header');
    (this.scrollY >= 80) ? h.classList.add('stck') : h.classList.remove('stck')
  })
})();

// Toggle for show up navbar in small device
(() => {
  "use strict";

  var t = document.querySelector('.navbar-toggle')
    , k = document.querySelector('.navbar-menu')
    , l = document.querySelectorAll('.navbar-menu .link');

  t.addEventListener('click', () => {
    t.classList.toggle('act');

    (t.classList.contains('act')) ? k.classList.add('act') : k.classList.remove('act');
  })

  l.forEach(e => e.addEventListener('click', () => {
    t.classList.remove('act')
    k.classList.remove('act');
  }))
})();

// Add class active to navbar text
(() => {
  "use strict";

  window.addEventListener('scroll', () => {
    var x = document.querySelectorAll('section[id]')
      , y = window.pageYOffset;

    x.forEach(e => {
      var a = e.offsetHeight
        , b = e.offsetTop - 58
        , c = e.getAttribute('id');
        
      if (y > b && y <= b + a) {
        document.querySelector('.navbar-menu .link[href*=' + c + ']').classList.add('act')
      } else {
        document.querySelector('.navbar-menu .link[href*=' + c + ']').classList.remove('act')
      }
    })
  })
})();

// Show up the back to top button
(() => {
  "use strict";

  var s = document.querySelector('.back-to-top');

  window.addEventListener('scroll', ()=> {
    (this.scrollY >= 400) ? s.classList.add('shw') : s.classList.remove('shw');
  })
})();