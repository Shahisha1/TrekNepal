var navToggle = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('.menu-links');


if (navToggle) {
  navToggle.addEventListener('click', function () { navLinks.classList.toggle('open'); });
}


var allNavLinks = document.querySelectorAll('.menu-links a');
allNavLinks.forEach(function (link) { if (link.href === window.location.href) { link.classList.add('active'); } });
function getRoutes(callback) { fetch('data/routes.json').then(function (response) { return response.json(); }).then(function (data) { callback(data); }); }
function buildBadge(difficulty) { var map = { 'Easy': 'badge-easy', 'Moderate': 'badge-medium', 'Hard': 'badge-hard', 'Extreme': 'badge-extreme' }; return '<span class="badge ' + (map[difficulty] || 'badge-medium') + '">' + difficulty + '</span>'; }
function getRouteImage(routeName) {
  var map = {
    'Everest Base Camp Trek': 'asset/EverestBaseCamp.jpg',
    'Annapurna Circuit': 'asset/AnnapurnaCircuitTrek.jpg',
    'Langtang Valley Trek': 'asset/LangtangValley.jpg',
    'Ghorepani Poon Hill Trek': 'asset/PoonHillSunrise.jpg',
    'Manaslu Circuit Trek': 'asset/ManasluTrek.jpg',
    'Upper Mustang Trek': 'asset/LoMustang.webp',
    'Mardi Himal Trek': 'asset/MardiHimal.jpg',
    'Gosaikunda Lake Trek': 'asset/GosaikundaLake.jpg',
    'Kanchenjunga Base Camp': 'asset/KanchenjuungaBaseCamp.jpg',
    'Khopra Ridge Trek': 'asset/KhopraRidge.jpg'
  }; return map[routeName] || 'asset/Logo.jpg';
}
function buildCard(route) { return '<div class="route-card" data-difficulty="' + route.difficulty + '" data-region="' + route.region + '"><div class="route-icon" style="background-image:url(\'' + getRouteImage(route.name) + '\');"></div><div class="route-body"><div class="route-tags">' + buildBadge(route.difficulty) + '<span class="badge badge-region">' + route.region + '</span></div><h3 class="route-title">' + route.name + '</h3><div class="route-details"><span>' + route.duration + '</span><span>' + route.maxAltitude + '</span><span>' + route.bestSeason + '</span></div><p class="route-summary">' + route.description.substring(0, 115) + 'â€¦</p><a href="contact.html" class="route-link">Enquire About This Route</a></div></div>'; }
function initRoutesPage(routes) {
  var grid = document.getElementById('routes-list'); var searchInput = document.getElementById('route-search'); var filterBtns = document.querySelectorAll('[data-filter]'); var activeFilter = 'all'; var searchTerm = '';
  function showRoutes() { var filtered = routes.filter(function (route) { var matchesDifficulty = activeFilter === 'all' || route.difficulty === activeFilter; var matchesSearch = route.name.toLowerCase().includes(searchTerm) || route.region.toLowerCase().includes(searchTerm); return matchesDifficulty && matchesSearch; }); if (filtered.length === 0) { grid.innerHTML = '<p class="placeholder-text">No routes found. Try a different search or filter.</p>'; } else { grid.innerHTML = filtered.map(buildCard).join(''); } }
  filterBtns.forEach(function (btn) { btn.addEventListener('click', function () { filterBtns.forEach(function (b) { b.classList.remove('active'); }); btn.classList.add('active'); activeFilter = btn.getAttribute('data-filter'); showRoutes(); }); });
  if (searchInput) { searchInput.addEventListener('input', function () { searchTerm = searchInput.value.toLowerCase(); showRoutes(); }); }
  showRoutes();
}
function initContactForm() {
  var form = document.getElementById('contact-block'); if (!form) return; function showError(fieldId, message) { var field = document.getElementById(fieldId); var error = document.getElementById(fieldId + '-error'); if (field) field.classList.add('has-error'); if (error) { error.textContent = message; error.style.display = 'block'; } } function clearError(fieldId) { var field = document.getElementById(fieldId); var error = document.getElementById(fieldId + '-error'); if (field) field.classList.remove('has-error'); if (error) error.style.display = 'none'; }
  form.addEventListener('submit', function (e) {
    e.preventDefault();['contact-name', 'contact-email', 'contact-phone', 'contact-route', 'contact-experience', 'message-box'].forEach(clearError);
    var name = document.getElementById('contact-name').value.trim(); var email = document.getElementById('contact-email').value.trim(); var phone = document.getElementById('contact-phone').value.trim(); var route = document.getElementById('contact-route').value; var experience = document.getElementById('contact-experience').value; var message = document.getElementById('message-box').value.trim(); var isValid = true;
    if (name.length < 2) { showError('contact-name', 'Please enter your full name.'); isValid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('contact-email', 'Enter a valid email address.'); isValid = false; }
    if (!/^\+?[0-9\s\-]{7,15}$/.test(phone)) { showError('contact-phone', 'Enter a valid phone number.'); isValid = false; }
    if (!route) { showError('contact-route', 'Please select a trekking route.'); isValid = false; }
    if (!experience) { showError('contact-experience', 'Please select your experience level.'); isValid = false; }
    if (message.length < 10) { showError('message-box', 'Please write a brief message.'); isValid = false; }
    if (!isValid) return; var submitBtn = form.querySelector('button[type="submit"]'); submitBtn.textContent = 'Enquiry sent'; submitBtn.style.backgroundColor = '#2d6a4f'; form.reset(); setTimeout(function () { submitBtn.textContent = 'Send enquiry'; submitBtn.style.backgroundColor = ''; }, 3500);
  });
}
function getGalleryImage(caption) {
  var map = {
    'Everest Base Camp': 'asset/EverestBaseCamp.jpg',
    'Tengboche Monastery': 'asset/TengbocheMonastery.png',
    'Khumbu Glacier': 'asset/KhumbuGlacier.jpg',
    'Poon Hill at sunrise': 'asset/PoonHillSunrise.jpg',
    'Annapurna Circuit': 'asset/AnnapurnaCircuitTrek.jpg',
    'Machhapuchhre (Fishtail)': 'asset/Machhapuchchhre.jpg',
    'Langtang Valley': 'asset/LangtangValley.jpg',
    'Gosaikunda Lake': 'asset/GosaikundaLake.jpg',
    'Lo Manthang': 'asset/LoMantang.jpg',
    'Mustang red cliffs': 'asset/LoMustang.webp',
    'Kanchenjunga Base Camp': 'asset/KanchenjuungaBaseCamp.jpg',
    'Eastern Nepal forests': 'asset/LoMantang.jpg'
  }; return map[caption] || 'asset/Logo.jpg';
}
function initGallery() { var items = document.querySelectorAll('.media-card'); items.forEach(function (item) { var caption = item.querySelector('.media-caption').textContent; item.style.backgroundImage = 'url("' + getGalleryImage(caption) + '")'; item.addEventListener('click', function () { var overlay = document.createElement('div'); overlay.style.cssText = 'position:fixed; inset:0; background:rgba(28,26,23,0.88); z-index:999; display:flex; align-items:center; justify-content:center; padding:20px; cursor:pointer;'; overlay.innerHTML = '<div style="max-width:640px; color:white; font-size:1.1rem; text-align:center;">' + caption + '</div>'; overlay.addEventListener('click', function () { overlay.remove(); }); document.body.appendChild(overlay); }); }); }
