// ── Data: local image files ────────────────────────────────────────────────
const roses = [
  { color: 'Yellow', src: 'Rose-yellow.jpg', badge: '#c8a800' },
  { color: 'Red',    src: 'Rose-red.jpg',    badge: '#9b1c1c' },
  { color: 'Pink',   src: 'Rose-pink.jpg',   badge: '#c2607a' }
];

// ── Elements ───────────────────────────────────────────────────────────────
const select     = document.getElementById('colorSelect');
const img        = document.getElementById('roseImage');
const badge      = document.getElementById('colorBadge');
const noticeList = document.getElementById('noticeList');

// ── 1) Build dropdown dynamically ─────────────────────────────────────────
roses.forEach(function(rose, i) {
  const opt = document.createElement('option');
  opt.value = i;
  opt.textContent = rose.color;
  select.appendChild(opt);
});

// ── Helper: update image and badge ────────────────────────────────────────
function applyRose(index) {
  const rose = roses[index];
  img.src = rose.src;
  img.alt = rose.color + ' rose';
  badge.textContent = rose.color;
  badge.style.background = rose.badge;
}

// Initial render
applyRose(0);

// ── 1) Dropdown change → change picture ───────────────────────────────────
select.addEventListener('change', function() {
  applyRose(parseInt(this.value));
  img.classList.remove('zoomed');
  noticeList.innerHTML = '';
});

// ── 3) mouseover → smooth zoom (JS controls the class) ────────────────────
img.addEventListener('mouseover', function() {
  img.classList.add('zoomed');
});

// ── 4) click → add item to notice list ────────────────────────────────────
img.addEventListener('click', function() {
  const rose = roses[parseInt(select.value)];
  const li = document.createElement('li');
  li.textContent = 'You clicked: ' + rose.color + ' rose';
  noticeList.appendChild(li);
});

// ── 5) mouseleave → reset zoom + clear list ───────────────────────────────
img.addEventListener('mouseleave', function() {
  img.classList.remove('zoomed');
  noticeList.innerHTML = '';
});
