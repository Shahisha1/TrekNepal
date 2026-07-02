const navToggle = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-items");

if (navToggle) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}

document.querySelectorAll(".nav-items a").forEach((link) => {
  if (link.href === window.location.href) link.classList.add("active");
});

const getRoutes = (cb) => {
  fetch("data/routes.json")
    .then((res) => res.json())
    .then(cb);
};

const getGallery = (cb) => {
  getRoutes((routes) => {
    const items = [];
    routes.forEach((r) => {
      if (r.gallery) {
        r.gallery.forEach((img) => {
          items.push({ ...img, region: r.region });
        });
      }
    });
    cb(items);
  });
};

const buildBadge = (difficulty) => {
  const map = {
    Easy: "tag-easy",
    Moderate: "tag-medium",
    Hard: "tag-hard",
    Extreme: "tag-extreme",
  };
  return `<span class="tag ${map[difficulty] || "tag-medium"}">${difficulty}</span>`;
};

const buildCard = (route) => `
    <div class="trek-box" data-difficulty="${route.difficulty}" data-region="${route.region}">
        <div class="trek-img" style="background-image:url('${route.img || "asset/Logo.svg"}')"></div>
        <div class="trek-info">
            <div class="trek-labels">${buildBadge(route.difficulty)}<span class="tag tag-area">${route.region}</span></div>
            <h3 class="trek-name">${route.name}</h3>
            <div class="trek-stats">
                <span>${route.duration}</span><span>${route.maxAltitude}</span><span>${route.bestSeason}</span>
            </div>
            <p class="trek-desc">${route.description.substring(0, 115)}...</p>
            <a href="contact.html" class="trek-btn">Learn More</a>
        </div>
    </div>`;

function initRoutesPage(routes) {
  const grid = document.getElementById("routes-list");
  const searchInput = document.getElementById("route-search");
  const filterBtns = document.querySelectorAll("[data-filter]");
  let activeFilter = "all",
    searchTerm = "";

  const showRoutes = () => {
    const filtered = routes.filter(
      (r) =>
        (activeFilter === "all" || r.difficulty === activeFilter) &&
        (r.name.toLowerCase().includes(searchTerm) ||
          r.region.toLowerCase().includes(searchTerm)),
    );
    grid.innerHTML = filtered.length
      ? filtered.map(buildCard).join("")
      : '<p class="placeholder-text">No routes found.</p>';
  };

  filterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      showRoutes();
    }),
  );

  if (searchInput)
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.toLowerCase();
      showRoutes();
    });
  showRoutes();
}

function initContactForm() {
  const form = document.getElementById("contact-block");
  if (!form) return;

  const fields = [
    "contact-name",
    "contact-email",
    "contact-phone",
    "contact-route",
    "contact-experience",
    "message-box",
  ];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    fields.forEach((id) => {
      const el = document.getElementById(id);
      const err = document.getElementById(`${id}-error`);
      el.classList.remove("has-error");
      if (err) err.style.display = "none";

      if (
        !el.value.trim() ||
        (id === "contact-email" && !el.value.includes("@")) ||
        (id === "message-box" && el.value.length < 10)
      ) {
        el.classList.add("has-error");
        if (err) err.style.display = "block";
        isValid = false;
      }
    });

    if (isValid) {
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = "Message sent";
      btn.style.backgroundColor = "#2d6a4f";
      form.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = "";
      }, 3500);
    }
  });
}

const buildGalleryCard = (item) => `
    <article class="photo-item" data-region="${item.region}">
        <div class="photo-img" style="background-image:url('${item.img || "asset/Logo.svg"}')"></div>
        <div class="photo-info">
            <span class="tag tag-area">${item.region}</span>
            <h3 class="photo-name">${item.title}</h3>
        </div>
    </article>`;

function initGalleryPage(items) {
  const grid = document.getElementById("gallery-grid");
  const toolbar = document.getElementById("gallery-toolbar");
  if (!grid) return;

  let activeRegion = "all";

  const render = () => {
    const filtered = items.filter(
      (i) => activeRegion === "all" || i.region === activeRegion,
    );
    grid.innerHTML = filtered.length
      ? filtered.map(buildGalleryCard).join("")
      : '<p class="placeholder-text">No photos found.</p>';
  };

  if (toolbar) {
    const regions = ["all", ...new Set(items.map((i) => i.region))].sort();
    toolbar.innerHTML = regions
      .map(
        (r) =>
          `<button class="filter-btn ${r === "all" ? "active" : ""}" data-region="${r}">${r === "all" ? "All regions" : r}</button>`,
      )
      .join("");
    toolbar.querySelectorAll(".filter-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        toolbar
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeRegion = btn.dataset.region;
        render();
      }),
    );
  }
  render();
}

function initCompareButtonState() {
  const btn = document.getElementById("compare-action");
  if (!btn) return;
  const selects = ["pick-one", "pick-two", "pick-three"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const update = () => {
    const count = selects.filter((s) => s.value).length;
    btn.disabled = count < 2;
    btn.classList.toggle("btn-disabled", count < 2);
  };
  selects.forEach((s) => s.addEventListener("change", update));
  update();
}

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
//STATIC USER DATA 
const DEFAULT_USER = {
  name: "Shahisha Adhikari",
  email: "shahisha123adh@gmail.com",
  level: "Intermediate Trekker",
  joined: "June 2025",
  savedIds: [2, 7, 8],
  enquiries: [
    { name: "Annapurna Circuit Trek", date: "12 June 2025", status: "Active" },
    { name: "Langtang Valley Trek", date: "05 June 2025", status: "Resolved" },
    { name: "Everest Base Camp", date: "20 May 2025", status: "Resolved" },
  ],
  topRegion: "Annapurna",
};

//PROFILE PAGE

function initProfilePage() {
  let user = JSON.parse(localStorage.getItem("trekUser")) || DEFAULT_USER;

  const render = () => {
    
    const nameDisplay = document.getElementById("profile-name-display");
    const subDisplay = document.getElementById("profile-sub-display");
    const avatarDisplay = document.getElementById("profile-avatar-display");
    if (nameDisplay) nameDisplay.textContent = user.name;
    if (subDisplay)
      subDisplay.innerHTML = `${user.level}. Joined ${user.joined}`;
    if (avatarDisplay) avatarDisplay.textContent = user.name.charAt(0);

    
    const savedCount = document.getElementById("stat-saved-count");
    const enquiryCount = document.getElementById("stat-enquiry-count");
    const topRegion = document.getElementById("stat-top-region");
    if (savedCount) savedCount.textContent = user.savedIds.length;
    if (enquiryCount) enquiryCount.textContent = user.enquiries.length;
    if (topRegion) topRegion.textContent = user.topRegion;



    const nameInput = document.getElementById("profile-name");
    const emailInput = document.getElementById("profile-email");
    if (nameInput) nameInput.value = user.name;
    if (emailInput) emailInput.value = user.email;

    getRoutes(function (routes) {
      const saved = routes.filter((r) => user.savedIds.includes(r.id));
      const grid = document.getElementById("saved-routes-grid");
      if (grid) {
        grid.innerHTML = saved.length
          ? saved.map(buildCard).join("")
          : '<p class="placeholder-text">You haven\'t saved any routes yet.</p>';
      }
    });

    const enquiryContainer = document.getElementById("enquiry-list-container");
    if (enquiryContainer) {
      enquiryContainer.innerHTML = user.enquiries
        .map(
          (e) => `
        <div class="enquiry-item">
          <div class="enquiry-info">
            <span class="enquiry-name">${e.name}</span>
            <span class="enquiry-date">Requested on ${e.date}</span>
          </div>
          <span class="enquiry-status">${e.status}</span>
        </div>
      `,
        )
        .join("");
    }
  };

  render();
}
document.addEventListener("DOMContentLoaded", () => {
  initCompareButtonState();
});