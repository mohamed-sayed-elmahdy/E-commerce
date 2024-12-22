// header And Navbars Content
const headerAndNavbarsContent = {
  english: {
    aboutUs: "About us",
    myAccount: "My account",
    wishlist: "Wishlist",
    orderTracking: "Order Tracking",
    contactUs: "Contact us",
    deliveryTo: "Delivery to",
    login: "Login",
    account: "Account",
    searchPlaceholder: "Search for products...",
    searchBtn: "Search",
    products: "Products",
    whatsNew: "What's New",
    delivery: "Delivery",
    dealsOffers: "Deals & Offers",
    blog: "Blog",
    contact: "Contact",
    yourCart: "Your cart",
    languageToggle: "Arabic",
    currencyToggle: "USD",
    locations: ["Abu Dhabi", "Dubai", "Sharjah"],
  },
  arabic: {
    aboutUs: "من نحن",
    myAccount: "حسابي",
    wishlist: "قائمة الرغبات",
    orderTracking: "تتبع الطلب",
    contactUs: "تواصل معنا",
    deliveryTo: "التوصيل إلى",
    login: "تسجيل الدخول",
    account: "الحساب",
    searchPlaceholder: "ابحث عن المنتجات...",
    searchBtn: "بحث",
    products: "المنتجات",
    whatsNew: "ما الجديد",
    delivery: "التوصيل",
    dealsOffers: "العروض والصفقات",
    blog: "المدونة",
    contact: "اتصل بنا",
    yourCart: "عربة التسوق",
    languageToggle: "English",
    currencyToggle: "درهم إماراتي",
    locations: ["أبو ظبي", "دبي", "الشارقة"],
  },
};

// Update Content language
function UpdateContent(lang) {
  const content = headerAndNavbarsContent[lang];

  // header And Navbars Content
  document.querySelector(".desktop-links a:nth-child(1)").textContent =
    content.aboutUs;
  document.querySelector(".desktop-links a:nth-child(2)").textContent =
    content.myAccount;
  document.querySelector(".desktop-links a:nth-child(3)").textContent =
    content.wishlist;
  document.querySelector(".desktop-links a:nth-child(4)").textContent =
    content.orderTracking;

  document.querySelector(".contact-link").textContent = content.contactUs;
  document
    .querySelectorAll(".labelContainer span:first-child")
    .forEach((ele) => {
      ele.textContent = content.deliveryTo;
    });

  document.querySelectorAll(".profile .textIcon").forEach((ele) => {
    ele.innerHTML = `${content.login} <br /> ${content.account}`;
  });

  document.querySelector(".search-bar input").placeholder =
    content.searchPlaceholder;
  document.querySelector(".search-bar button").textContent = content.searchBtn;
  let verseLng = lang === "english" ? "arabic" : "english";
  const currentLocation = document.querySelector(
    ".navbar .custom-menu .labelContainer .menu-label"
  ).innerHTML;

  const index = headerAndNavbarsContent[verseLng].locations.findIndex(
    (location) => location === currentLocation
  );

  document
    .querySelectorAll(".navbar .custom-menu .labelContainer .menu-label")
    .forEach((ele) => {
      ele.innerHTML = headerAndNavbarsContent[lang].locations[index];
    });

  const navLinks = document.querySelectorAll(".nav__list .nav__link span");
  const navIcons = [
    content.products,
    content.whatsNew,
    content.delivery,
    content.dealsOffers,
    content.blog,
    content.contact,
  ];
  navLinks.forEach((link, index) => (link.textContent = navIcons[index]));

  document.querySelector(".totalPrice .textIcon").textContent =
    content.yourCart;

  const locationOptions = document.querySelectorAll(
    ".custom-menu .menu-options"
  );
  locationOptions.forEach((menu, index) => {
    menu.querySelectorAll("li").forEach((li, index) => {
      if (content.locations[index]) {
        li.textContent = content.locations[index];
      }
    });
  });

  document.querySelector(".navbar .right-section a #Wishlist").textContent =
    content.wishlist;

  //
}

// Toggle Button Logic for Language
const languageToggle = document.getElementById("languageToggle");
// Fix Border-radius
const input = document.querySelector('.navbar .search-bar input[type="text"]');
const button = document.querySelector(".navbar .search-bar button");

languageToggle.addEventListener("click", () => {
  if (languageToggle.textContent === "عربي") {
    UpdateContent("arabic");
    document.body.style.direction = "rtl";
    languageToggle.textContent = "English";
    input.style.borderRadius = "0 8px 8px 0";
    button.style.borderRadius = "5px 0 0 5px";
  } else {
    UpdateContent("english");
    document.body.style.direction = "ltr";
    languageToggle.textContent = "عربي";
    input.style.borderRadius = "8px 0 0 8px";
    button.style.borderRadius = "0 5px 5px 0";
  }
});

// Toggle Button Logic for Currency
const currencyToggle = document.getElementById("currencyToggle");
currencyToggle.addEventListener("click", () => {
  if (currencyToggle.textContent === "USD") {
    currencyToggle.textContent = "JOD";
    console.log("Currency toggled to JOD");
    updatePrices("JOD"); // Update prices to JOD
  } else {
    currencyToggle.textContent = "USD";
    console.log("Currency toggled to USD");
    updatePrices("USD"); // Update prices to USD
  }
});

// Example Function to Update Prices
function updatePrices(currency) {
  console.log(`Updating prices to ${currency}...`);
  // Add logic to fetch or update displayed prices
}

/* Show Menu */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const menus = document.querySelectorAll(".navbar .custom-menu");
menus.forEach((menu, index) => {
  const label = menu.querySelector(".menu-label");
  const options = menu.querySelector(".menu-options");

  // Toggle menu visibility when clicking anywhere on the parent menu
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
    options.style.display =
      options.style.display === "block" ? "none" : "block";
  });

  // Select an option and close the menu
  options.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.stopPropagation();
      label.textContent = e.target.textContent;
      options.style.display = "none";

      // Update another menu label based on selection
      if (index === 0) {
        const secondMenu = menus[1];
        const secondLabel = secondMenu.querySelector(".menu-label");
        secondLabel.textContent = e.target.textContent;
      } else {
        const secondMenu = menus[0];
        const secondLabel = secondMenu.querySelector(".menu-label");
        secondLabel.textContent = e.target.textContent;
      }
    }
  });

  // Close menu on outside click
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
      options.style.display = "none";
    }
  });
});

// Slider
let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
// let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  // clearInterval(refreshInterval);
  // refreshInterval = setInterval(()=> {next.click()}, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};

// Login popup
const popup = document.getElementById("loginpopup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("show");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});
