  (function () {
      var stage = document.querySelector('.hwc-stage');
      if (!stage) return;
      var slots = stage.querySelectorAll('.hwc-slot');
      var data = [
          { href: 'kopi-print.html', src: './assets/img/printers/ecosysp2040dn.jpg', caption: 'Kopi, Print & Scan' },
   { href: 'av.html', src: './assets/img/av-moderum-skaerm-hero.jpg', caption: 'AV & Møderumslösninger' },
   { href: 'lyd.html', src: './assets/img/lyd-hoejtaler.jpg', caption: 'Lydanlæg & Højtalere' },
   { href: 'akustik.html', src: './assets/img/akustik-kontor.webp', caption: 'Akustikregulering' },
   { href: 'intranet.html', src: './assets/img/intranet-dashboard.png', caption: 'Intranet' },
   { href: 'betaling.html', src: './assets/img/betalingsløsninger.jpeg', caption: 'Betalingsløsninger & Terminaler' },
   { href: 'web.html', src: './assets/img/webshop-dashboard.jpg', caption: 'Hjemmesider & Webshops' },
   { href: 'myselfie.html', src: './assets/img/myselfie-carousel.jpg', caption: 'Myselfie' }
      ];
      var start = 0, timer;
      function render() {
          slots.forEach(function (slot, i) {
              var item = data[(start + i + data.length) % data.length];
              slot.setAttribute('href', item.href);
              slot.querySelector('img').src = item.src;
              slot.querySelector('img').alt = item.caption;
              slot.querySelector('.hwc-caption').textContent = item.caption;
          });
      }
      function shift(dir) {
          slots.forEach(function (s) { s.style.opacity = 0; });
          setTimeout(function () {
              start = (start + dir + data.length) % data.length;
              render();
              slots.forEach(function (s) { s.style.opacity = 1; });
          }, 220);
      }
      function restart() {
          clearInterval(timer);
          timer = setInterval(function () { shift(1); }, 3000);
      }
      stage.querySelector('.hwc-arrow-prev').addEventListener('click', function (e) {
          e.preventDefault(); e.stopPropagation(); shift(-1); restart();
      });
      stage.querySelector('.hwc-arrow-next').addEventListener('click', function (e) {
          e.preventDefault(); e.stopPropagation(); shift(1); restart();
      });
      restart();
  })();
