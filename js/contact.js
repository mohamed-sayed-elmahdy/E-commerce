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

// Footer Content
const footerContent = {
  english: {
    logo: {
      alt: "Logo",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
    },
    links1: ["My account", "Log in", "Wish list", "My orders", "Book"],
    links2: ["My account", "Log in", "Wish list", "My orders", "Book"],
    links3: ["My account", "Log in", "Wish list", "My orders", "Book"],
    contact: {
      phone: "+977 564 5555 | +977 564 5555",
      email: "Email@domain.com",
      website: "www.domain.com",
    },
    paymentMethods: {
      text: "Available payment methods",
    },
  },
  arabic: {
    logo: {
      alt: "شعار",
      text: "لوريم إيبسوم هو نص وهمي في صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم النص الوهمي القياسي في الصناعة منذ الخمسينيات من القرن الخامس عشر، عندما أخذ طابع غير معروف مجموعة من الحروف وخلطها لإنشاء نوع.",
    },
    links1: ["حسابي", "تسجيل الدخول", "قائمة الرغبات", "طلباتي", "احجز"],
    links2: ["حسابي", "تسجيل الدخول", "قائمة الرغبات", "طلباتي", "احجز"],
    links3: ["حسابي", "تسجيل الدخول", "قائمة الرغبات", "طلباتي", "احجز"],
    contact: {
      phone: "+977 564 5555 | +977 564 5555",
      email: "Email@domain.com",
      website: "www.domain.com",
    },
    paymentMethods: {
      text: "طرق الدفع المتاحة",
    },
  },
};

// Contact Content
const contactContent = {
  english: {
    mainTitle: "Let's get in touch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!",
    address: "Amman, Jordan",
    email: "info@defense-me.com",
    phone: "+962 6 5526 227",
    socialMediaHeading: "Connect with us :",
    formTitle: "Contact us",
    formLabels: {
      username: "Username",
      email: "Email",
      phone: "Phone",
      message: "Message",
    },
    submitButton: "Send",
  },
  arabic: {
    mainTitle: "دعنا نتواصل",
    description:
      "هذا نص افتراضي لعرض النصوص في التصاميم. غالبًا ما يُستخدم للتوضيح.",
    address: "عمان، الأردن",
    email: "info@defense-me.com",
    phone: "+962 6 5526 227",
    socialMediaHeading: "تواصل معنا:",
    formTitle: "اتصل بنا",
    formLabels: {
      username: "اسم المستخدم",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      message: "الرسالة",
    },
    submitButton: "إرسال",
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

  document.querySelectorAll(
    ".thirdNav .nav__list .nav__link span"
  )[0].textContent = content.products;
  document.querySelectorAll(
    ".thirdNav .nav__list .nav__link span"
  )[1].textContent = content.whatsNew;
  document.querySelectorAll(
    ".thirdNav .nav__list .nav__link span"
  )[2].textContent = content.delivery;
  document.querySelectorAll(
    ".thirdNav .nav__list .nav__link span"
  )[3].textContent = content.dealsOffers;
  document.querySelectorAll(
    ".thirdNav .nav__list .nav__link span"
  )[4].textContent = content.blog;
  document.querySelectorAll(
    ".thirdNav .nav__list .nav__link span"
  )[5].textContent = content.contact;

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
  document.querySelector(
    ".navbar .right-section a .textIcon.cartText"
  ).textContent = content.yourCart;
  document.querySelector(".navbar  a #mobileWishlist").textContent =
    content.wishlist;
  // End Navbar and Header

  // Footer

  // Validate the provided language and retrieve content
  const FooterContent = footerContent[lang];
  if (!FooterContent) {
    console.error(`Language "${lang}" not found in footerContent.`);
    return;
  }

  // Update the logo section
  const logoText = document.querySelector(".footer-logo-section p");
  const logoImg = document.querySelector(".footer-logo-section img");
  if (logoText) logoText.textContent = FooterContent.logo.text;
  if (logoImg) logoImg.alt = FooterContent.logo.alt;

  // Update links in all columns
  const linkColumns = document.querySelectorAll(".footer-links ul");
  if (linkColumns.length >= 3) {
    FooterContent.links1.forEach((text, index) => {
      if (linkColumns[0].children[index]) {
        linkColumns[0].children[index].querySelector("a").textContent = text;
      }
    });

    FooterContent.links2.forEach((text, index) => {
      if (linkColumns[1].children[index]) {
        linkColumns[1].children[index].querySelector("a").textContent = text;
      }
    });

    FooterContent.links3.forEach((text, index) => {
      if (linkColumns[2].children[index]) {
        linkColumns[2].children[index].querySelector("a").textContent = text;
      }
    });
  }

  // Update contact information
  const contactItems = document.querySelectorAll(".footer-contact ul li");
  if (contactItems.length >= 3) {
    const [phone, email, website] = contactItems;
    phone.querySelector("span").textContent = FooterContent.contact.phone;
    email.querySelector("span").textContent = FooterContent.contact.email;
    website.querySelector("span").textContent = FooterContent.contact.website;
  }

  // Update payment methods text
  const paymentText = document.querySelector(".footer-payment p");
  if (paymentText) paymentText.textContent = FooterContent.paymentMethods.text;

  // End Footer

  // translate Login and Purchase Popup
  const loginPopup = document.querySelector("#loginpopup .popup-content");
  const loginTitle = loginPopup.querySelector(".LoginpopupTitle");
  const loginInputs = loginPopup.querySelectorAll(".input-field");
  const loginButton = loginPopup.querySelector(".login-btn");

  const purchasePopup = document.querySelector("#PurchasePopup .popup-content");
  const purchaseTitle = purchasePopup.querySelector(".Purchase-popup-title");
  const messageCart = purchasePopup.querySelector("p");
  const purchaseButtons = purchasePopup.querySelectorAll(".cartButtons button");

  if (lang === "arabic") {
    // Update Login Popup (Arabic)
    loginTitle.textContent = "تسجيل الدخول";
    loginInputs[0].setAttribute("placeholder", "اسم المستخدم");
    loginInputs[1].setAttribute("placeholder", "كلمة المرور");
    loginButton.textContent = "دخول";

    // Update Purchase Popup (Arabic)
    purchaseTitle.textContent = "أكمل عملية الشراء";
    messageCart.innerHTML = `<p> <span>لقد قمت بإضافة <span class="messageCart"> </span> إلى عربة التسوق</span><i
    class="fas fa-shopping-cart"></i> </p>
</p>`;
    purchaseButtons[0].textContent = "مواصلة التسوق";
    purchaseButtons[1].textContent = "إتمام الدفع";
  } else {
    // Update Login Popup (English)
    loginTitle.textContent = "Login";
    loginInputs[0].setAttribute("placeholder", "Username");
    loginInputs[1].setAttribute("placeholder", "Password");
    loginButton.textContent = "Login";

    // Update Purchase Popup (English)
    purchaseTitle.textContent = "Complete Your Purchase";
    messageCart.innerHTML = `<p> <span>You have added <span class="messageCart"> </span> to the shopping cart</span><i
                    class="fas fa-shopping-cart"></i> </p>
            </p>`;
    purchaseButtons[0].textContent = "Continue Shopping";
    purchaseButtons[1].textContent = "Complete Payment";
  }


  
  // Update contact section
  document.querySelector(".contact-info .title").textContent =
    contactContent[lang].mainTitle;
  document.querySelector(".contact-info .text").textContent =
    contactContent[lang].description;

  // Update address, email, and phone
  const infoElements = document.querySelectorAll(
    ".contact-info .information p"
  );
  infoElements[0].textContent = contactContent[lang].address;
  infoElements[1].textContent = contactContent[lang].email;
  infoElements[2].textContent = contactContent[lang].phone;

  // Update social media heading
  document.querySelector(".social-media p").textContent =
    contactContent[lang].socialMediaHeading;

  // Update form title
  document.querySelector(".contact-form .title").textContent =
    contactContent[lang].formTitle;

  // Update form labels
  const formLabels = document.querySelectorAll(".input-container label");
  formLabels[0].textContent =
    contactContent[lang].formLabels.username;
  formLabels[1].textContent = contactContent[lang].formLabels.email;
  formLabels[2].textContent = contactContent[lang].formLabels.phone;
  formLabels[3].textContent =
    contactContent[lang].formLabels.message;

  document.querySelector(".contact-form .btn").value =
    contactContent[lang].submitButton;
}

// Toggle Button Logic for Language
const languageToggle = document.getElementById("languageToggle");
// Fix Border-radius
const input = document.querySelector('.navbar .search-bar input[type="text"]');
const button = document.querySelector(".navbar .search-bar button");
// Select all nav__link elements
const navLinks = document.querySelectorAll(".nav__link");

languageToggle.addEventListener("click", () => {
  if (languageToggle.textContent === "عربي") {
    UpdateContent("arabic");
    document.body.style.direction = "rtl";
    languageToggle.textContent = "English";
    input.style.borderRadius = "0 8px 8px 0";
    button.style.borderRadius = "5px 0 0 5px";
    document.querySelector(
      ".thirdNav .thirdNavContainer .dropdownMenuContainer .dropdownMenu .dropdownMenuItem.subdropdown .subdropdownmenu"
    ).style.right = "100%";

    document.querySelector(
      ".thirdNav .thirdNavContainer .dropdownMenuContainer .dropdownMenu .dropdownMenuItem.subdropdown i"
    ).style.transform = "rotate(180deg)";

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const span = link.querySelector("span");
        if (span) {
          span.style.marginRight = "2.5rem";
        }
      });

      link.addEventListener("mouseleave", () => {
        const span = link.querySelector("span");
        if (span) {
          span.style.marginRight = "0";
        }
      });
    });
  } else {
    UpdateContent("english");
    document.body.style.direction = "ltr";
    languageToggle.textContent = "عربي";
    input.style.borderRadius = "8px 0 0 8px";
    button.style.borderRadius = "0 5px 5px 0";
    document.querySelector(
      ".thirdNav .thirdNavContainer .dropdownMenuContainer .dropdownMenu .dropdownMenuItem.subdropdown .subdropdownmenu"
    ).style.left = "100%";
    document.querySelector(
      ".thirdNav .thirdNavContainer .dropdownMenuContainer .dropdownMenu .dropdownMenuItem.subdropdown i"
    ).style.transform = "rotate(0deg)";

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const span = link.querySelector("span");
        if (span) {
          span.style.marginLeft = "2.5rem";
        }
      });

      link.addEventListener("mouseleave", () => {
        const span = link.querySelector("span");
        if (span) {
          span.style.marginLeft = "0";
        }
      });
    });
  }
});

// prices object

// Toggle Button Logic for Currency
const currencyToggle = document.getElementById("currencyToggle");
currencyToggle.addEventListener("click", () => {
  if (currencyToggle.textContent === "JOD") {
    updatePrices("JOD");
    currencyToggle.textContent = "USD";
  } else {
    currencyToggle.textContent = "JOD";
    updatePrices("USD");
  }
});

// Function to Update Prices
function updatePrices(currency) {
  // Update the prices for each product
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

// mobiledropdown

const productsLink = document.querySelector(
  ".navbar .nav__list .nav__item.dropdown"
);
const productsDropdown = document.querySelector(
  ".navbar .nav__list .nav__item.dropdown .dropdown__menu"
);

productsLink.addEventListener("click", (e) => {
  e.preventDefault();
  productsDropdown.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (
    !productsLink.contains(e.target) &&
    !productsDropdown.contains(e.target)
  ) {
    productsDropdown.classList.remove("show");
  }
});

// Login popup
const popup = document.getElementById("loginpopup");
const openPopup = document.querySelectorAll(".navbar .profile");
const closePopup = document.getElementById("closePopup");

openPopup.forEach(ele => 
  ele.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.add("show");
    navMenu.classList.remove("show-menu");
  })
)

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});


// Purchase popuup
const PurchasePopup = document.getElementById("PurchasePopup");
const openPurchasePopup = document.getElementById("openPurchasePopup");
const closePurchasePopup = document.getElementById("closePurchasePopup");

function addproductTocart(id) {
  PurchasePopup.classList.add("show");
  PurchasePopup.querySelector(".messageCart").textContent = id;
}

closePurchasePopup.addEventListener("click", () => {
  PurchasePopup.classList.remove("show");
});

window.addEventListener("click", (event) => {
  if (event.target === PurchasePopup) {
    PurchasePopup.classList.remove("show");
  }
});

// display the suggestions
const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

const products = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Watermelon",
  "Strawberry",
  "Blueberry",
  "Raspberry",
];

// Handle input
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = ""; // Clear previous suggestions

  if (query) {
    const filteredProducts = products.filter((product) =>
      product.toLowerCase().includes(query)
    );

    filteredProducts.forEach((product) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.textContent = product;
      suggestionItem.addEventListener("click", () => {
        searchInput.value = product; // Set input value
        suggestionsBox.classList.remove("active"); // Hide suggestions
      });
      suggestionsBox.appendChild(suggestionItem);
    });

    suggestionsBox.classList.add("active"); // Show suggestions
  } else {
    suggestionsBox.classList.remove("active"); // Hide suggestions
  }
});

// Hide suggestions when clicking outside
document.addEventListener("click", (event) => {
  if (
    !searchInput.contains(event.target) &&
    !suggestionsBox.contains(event.target)
  ) {
    suggestionsBox.classList.remove("active");
  }
});
