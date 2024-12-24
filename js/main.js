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

// Categories Content
const categoriesData = {
  english: {
    header: {
      title: "Shop by categories",
      seeAll: "See All",
    },
    categories: [
      { name: "Soft Drinks", imageAlt: "Soft Drinks" },
      { name: "Chocolate", imageAlt: "Chocolate" },
      { name: "Chips", imageAlt: "Chips" },
      { name: "Biscuits & Snacks", imageAlt: "Biscuits & Snacks" },
      { name: "Breads & Bakery", imageAlt: "Breads & Bakery" },
      { name: "Frozen Foods", imageAlt: "Frozen Foods" },
    ],
  },
  arabic: {
    header: {
      title: "تسوق حسب الفئات", // Arabic for "Shop by categories"
      seeAll: "عرض الكل", // Arabic for "See All"
    },
    categories: [
      { name: "مشروبات غازية", imageAlt: "مشروبات غازية" }, // Arabic for "Soft Drinks"
      { name: "الشوكولاتة", imageAlt: "الشوكولاتة" }, // Arabic for "Chocolate"
      { name: "رقائق", imageAlt: "رقائق" }, // Arabic for "Chips"
      { name: "بسكويت ووجبات خفيفة", imageAlt: "بسكويت ووجبات خفيفة" }, // Arabic for "Biscuits & Snacks"
      { name: "خبز ومخبوزات", imageAlt: "خبز ومخبوزات" }, // Arabic for "Breads & Bakery"
      { name: "الأطعمة المجمدة", imageAlt: "الأطعمة المجمدة" }, // Arabic for "Frozen Foods"
    ],
  },
};

// featuredProducts Four cards Section
const featuredProducts = {
  english: {
    sectionHeader: {
      title: "Featured Products",
      seeAll: "See All",
    },
    cards: [
      {
        badges: { sale: "Sale 8%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Apple Juice - 64 fl oz Bottle",
      },
      {
        badges: { sale: "Sale 5%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Orange Juice - 64 fl oz Bottle",
      },
      {
        badges: { sale: "Sale 10%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Grape Juice - 64 fl oz Bottle",
      },
      {
        badges: { sale: "Sale 12%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Cranberry Juice - 64 fl oz Bottle",
      },
    ],
  },
  arabic: {
    sectionHeader: {
      title: "المنتجات المميزة",
      seeAll: "عرض الكل",
    },
    cards: [
      {
        badges: { sale: "تخفيض 8%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير تفاح 100 بالمئة - زجاجة 64 أوقية",
      },
      {
        badges: { sale: "تخفيض 5%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير برتقال 100 بالمئة - زجاجة 64 أوقية",
      },
      {
        badges: { sale: "تخفيض 10%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير عنب 100 بالمئة - زجاجة 64 أوقية",
      },
      {
        badges: { sale: "تخفيض 12%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير توت بري 100 بالمئة - زجاجة 64 أوقية",
      },
    ],
  },
};

const overlayContent = {
  english: {
    card1: {
      title: "A smart store for every people",
      description: "Feed your family the best",
      buttonText: "Shop Now",
    },
    card2: {
      title: "A smart store for every people",
      description: "Feed your family the best",
      buttonText: "Shop Now",
    },
    card3: {
      title: "A smart store for every people",
      description: "Feed your family the best",
      buttonText: "Shop Now",
    },
    card4: {
      title: "A smart store for every people",
      description: "Feed your family the best",
      buttonText: "Shop Now",
    },
  },
  arabic: {
    card1: {
      title: "متجر ذكي لكل الناس",
      description: "قم بإطعام عائلتك الأفضل",
      buttonText: "تسوق الآن",
    },
    card2: {
      title: "متجر ذكي لكل الناس",
      description: "قم بإطعام عائلتك الأفضل",
      buttonText: "تسوق الآن",
    },
    card3: {
      title: "متجر ذكي لكل الناس",
      description: "قم بإطعام عائلتك الأفضل",
      buttonText: "تسوق الآن",
    },
    card4: {
      title: "متجر ذكي لكل الناس",
      description: "قم بإطعام عائلتك الأفضل",
      buttonText: "تسوق الآن",
    },
  },
};

// featuredProducts Eight cards Section
const featuredProductsEightCards = {
  english: {
    EightCardssectionHeader: {
      title: "Featured Products",
      seeAll: "See All",
    },
    EightCards: [
      {
        badges: { sale: "Sale 8%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Apple Juice - 64 fl oz Bottle",
      },
      {
        badges: { sale: "Sale 5%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Orange Juice - 64 fl oz Bottle",
      },
      {
        badges: { sale: "Sale 10%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Grape Juice - 64 fl oz Bottle",
      },
      {
        badges: { sale: "Sale 12%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Cranberry Juice - 64 fl oz Bottle",
      },
      {
        badges: { sale: "Sale 8%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Apple Juice - 64 fl oz Bottle",
      },
      {
        badges: { sale: "Sale 5%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Orange Juice - 64 fl oz Bottle",
      },
      {
        badges: { sale: "Sale 10%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Grape Juice - 64 fl oz Bottle",
      },
      {
        badges: { sale: "Sale 12%", new: "New" },
        altText: "Soft Drinks",
        category: "Soft Drinks",
        productName: "100 Percent Cranberry Juice - 64 fl oz Bottle",
      },
    ],
  },
  arabic: {
    EightCardssectionHeader: {
      title: "المنتجات المميزة",
      seeAll: "عرض الكل",
    },
    EightCards: [
      {
        badges: { sale: "تخفيض 8%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير تفاح 100 بالمئة - زجاجة 64 أوقية",
      },
      {
        badges: { sale: "تخفيض 5%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير برتقال 100 بالمئة - زجاجة 64 أوقية",
      },
      {
        badges: { sale: "تخفيض 10%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير عنب 100 بالمئة - زجاجة 64 أوقية",
      },
      {
        badges: { sale: "تخفيض 12%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير توت بري 100 بالمئة - زجاجة 64 أوقية",
      },
      {
        badges: { sale: "تخفيض 8%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير تفاح 100 بالمئة - زجاجة 64 أوقية",
      },
      {
        badges: { sale: "تخفيض 5%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير برتقال 100 بالمئة - زجاجة 64 أوقية",
      },
      {
        badges: { sale: "تخفيض 10%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير عنب 100 بالمئة - زجاجة 64 أوقية",
      },
      {
        badges: { sale: "تخفيض 12%", new: "جديد" },
        altText: "مشروبات غازية",
        category: "مشروبات غازية",
        productName: "عصير توت بري 100 بالمئة - زجاجة 64 أوقية",
      },
    ],
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

  // Update categories
  const data = categoriesData[lang];

  // Update header
  const headerTitle = document.querySelector(".categories-header h2");
  const seeAllLink = document.querySelector(".categories-header .see-all span");
  if (headerTitle) headerTitle.textContent = data.header.title;
  if (seeAllLink) seeAllLink.textContent = data.header.seeAll;

  // Update category cards
  const categoryCards = document.querySelectorAll(
    ".categories-container .category-card"
  );

  if (categoryCards.length < data.categories.length) {
    console.error("Not enough category cards in the DOM to match the data.");
    return;
  }

  data.categories.forEach((category, index) => {
    const card = categoryCards[index];
    if (!card) return;

    // Update product name
    const productName = card.querySelector("p");
    if (productName) productName.textContent = category.name;

    // Update image alt text
    const productImage = card.querySelector("img");
    if (productImage) {
      productImage.alt = category.imageAlt;
    }
  });

  const arrowIcon = document.querySelectorAll(".see-all i");
  if (lang === "arabic") {
    arrowIcon.forEach((ele) => {
      ele.style.transform = "rotate(180deg)";
    });
  } else if (lang === "english") {
    arrowIcon.forEach((ele) => {
      ele.style.transform = "rotate(0deg)";
    });
  }

  // featured-products four cards section
  const featuredProductsSection = document.querySelector(
    ".featured-products.small-section"
  );
  const { sectionHeader, cards } = featuredProducts[lang];
  console.log(featuredProductsSection, sectionHeader, cards);

  // Update section header
  const sectionTitle =
    featuredProductsSection.querySelector(".section-header h2");
  const seeAllLinkfeaturedProduct = featuredProductsSection.querySelector(
    ".section-header .see-all span"
  );

  sectionTitle.textContent = sectionHeader.title;
  seeAllLinkfeaturedProduct.textContent = sectionHeader.seeAll;

  // Update product cards
  const productGrid = featuredProductsSection.querySelector(".product-grid");
  const productCards = productGrid.querySelectorAll(".product-card");

  cards.forEach((card, index) => {
    if (productCards[index]) {
      // Update badges
      const badgeSale = productCards[index].querySelector(".badge.sale");
      const badgeNew = productCards[index].querySelector(".badge.new");

      badgeSale.textContent = card.badges.sale;
      badgeNew.textContent = card.badges.new;

      // Update image alt text
      const productImage = productCards[index].querySelector(".product-image");
      productImage.alt = card.altText;

      // Update category
      const productCategory = productCards[index].querySelector(
        ".product-info .category"
      );
      productCategory.textContent = card.category;

      // Update product name
      const productName = productCards[index].querySelector(
        ".product-info .product-name"
      );
      productName.textContent = card.productName;
    }
  });

  // Update "Add to Cart" button text
  const addToCartButton = document.querySelectorAll(".add-to-cart");
  addToCartButton.forEach((ele) => {
    ele.innerHTML =
      lang === "english"
        ? `<i class="fas fa-shopping-cart"></i> Add`
        : `<i class="fas fa-shopping-cart"></i> أضف`;
  });
  // Reverse border-radius for badges based on language
  const allBadges = document.querySelectorAll(
    ".featured-products .product-grid .badge"
  );
  const newBadges = document.querySelectorAll(
    ".featured-products .product-grid .badge.new"
  );

  allBadges.forEach((badge) => {
    if (lang === "arabic") {
      // Reversed border-radius for Arabic
      badge.style.borderRadius = "0 18px 0 10px";
    } else {
      // Default border-radius for English
      badge.style.borderRadius = "18px 0 10px 0";
    }
  });

  newBadges.forEach((badge) => {
    if (lang === "arabic") {
      badge.style.borderRadius = "18px 0 10px 0 ";
    } else {
      // Default border-radius for English
      badge.style.borderRadius = "18px 0 10px 0";
    }
  });

  // Overlay section
  const overlayCards = document.querySelectorAll(".overlaysection .card");

  // Loop through each card and update its content
  overlayCards.forEach((overlayCard, index) => {
    const overlayElement = overlayCard.querySelector(".overlay");
    const overlayTitle = overlayElement.querySelector("h3");
    const overlayDescription = overlayElement.querySelector("p");
    const overlayButton = overlayElement.querySelector(".shop-button span");
    const overlayCardKey = `card${index + 1}`;

    overlayTitle.textContent = overlayContent[lang][overlayCardKey].title;
    overlayDescription.textContent =
      overlayContent[lang][overlayCardKey].description;
    overlayButton.textContent = overlayContent[lang][overlayCardKey].buttonText;
  });

  // featured-products eight cards section

  const featuredProductsBiggerSection = document.querySelector(
    ".featured-products.bigger-sectionProduct"
  );
  const { EightCardssectionHeader, EightCards } =
    featuredProductsEightCards[lang];
  console.log(
    featuredProductsBiggerSection,
    EightCardssectionHeader,
    EightCards
  );

  // Update section header
  const bigSectionTitle =
    featuredProductsBiggerSection.querySelector(".section-header h2");
  const bigseeAllLinkfeaturedProduct =
    featuredProductsBiggerSection.querySelector(
      ".section-header .see-all span"
    );

  bigSectionTitle.textContent = EightCardssectionHeader.title;
  bigseeAllLinkfeaturedProduct.textContent = EightCardssectionHeader.seeAll;

  // Update product EightCards
  const EightCardsproductGrid =
    featuredProductsBiggerSection.querySelector(".product-grid");
  const EightCardsproductCards =
    EightCardsproductGrid.querySelectorAll(".product-card");

  EightCards.forEach((card, index) => {
    if (EightCardsproductCards[index]) {
      // Update badges
      const badgeSale =
        EightCardsproductCards[index].querySelector(".badge.sale");
      const badgeNew =
        EightCardsproductCards[index].querySelector(".badge.new");

      badgeSale.textContent = card.badges.sale;
      badgeNew.textContent = card.badges.new;

      // Update image alt text
      const productImage =
        EightCardsproductCards[index].querySelector(".product-image");
      productImage.alt = card.altText;

      // Update category
      const productCategory = EightCardsproductCards[index].querySelector(
        ".product-info .category"
      );
      productCategory.textContent = card.category;

      // Update product name
      const productName = EightCardsproductCards[index].querySelector(
        ".product-info .product-name"
      );
      productName.textContent = card.productName;
    }
  });

  // translate Brands Section
  const BrandssectionHeader = document.querySelector(
    ".Brands-Section .section-header"
  );
  const BrandssectionTitle = BrandssectionHeader.querySelector("h2");
  const BrandsseeAllLink = BrandssectionHeader.querySelector(".see-all span");
  if (lang === "arabic") {
    BrandssectionTitle.textContent = "المنتجات المميزة";
    BrandsseeAllLink.textContent = "عرض الكل";
  } else {
    BrandssectionTitle.textContent = "Featured Products";
    BrandsseeAllLink.textContent = "See All";
  }

  // translate download Section
  const downloadSection = document.querySelector(".download-section .content");
  const heading = downloadSection.querySelector("h1");
  const paragraph = downloadSection.querySelector("p");

  if (lang === "arabic") {
    heading.innerHTML =
      "قم بتحميل <br/> <span class='highlight'>تطبيق الهاتف</span>";
    paragraph.textContent = "قم بالتحميل الآن:";
  } else {
    heading.innerHTML =
      "Download Our <span class='highlight'>Mobile App</span>";
    paragraph.textContent = "Download Now:";
  }

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
const prices = {
  product1: { USD: 48.85, JOD: 34.65 },
  product2: { USD: 48.85, JOD: 34.65 },
  product3: { USD: 48.85, JOD: 34.65 },
  product4: { USD: 48.85, JOD: 34.65 },
  product5: { USD: 48.85, JOD: 34.65 },
  product6: { USD: 48.85, JOD: 34.65 },
  product7: { USD: 48.85, JOD: 34.65 },
  product8: { USD: 48.85, JOD: 34.65 },
  product9: { USD: 48.85, JOD: 34.65 },
  product10: { USD: 48.85, JOD: 34.65 },
  product11: { USD: 48.85, JOD: 34.65 },
  product12: { USD: 48.85, JOD: 34.65 },
};

// Toggle Button Logic for Currency
const currencyToggle = document.getElementById("currencyToggle");
currencyToggle.addEventListener("click", () => {
  if (currencyToggle.textContent === "JOD") {
    updatePrices("JOD"); // Update prices to JOD
    currencyToggle.textContent = "USD";
    console.log("Currency toggled to JOD");
  } else {
    currencyToggle.textContent = "JOD";
    updatePrices("USD"); // Update prices to USD
    console.log("Currency toggled to USD");
  }
});

// Function to Update Prices
function updatePrices(currency) {
  // Update the prices for each product
  Object.keys(prices).forEach((product, index) => {
    const currentPriceEl = document.querySelector(
      `.product${index + 1}CurrentPrice`
    );
    const oldPriceEl = document.querySelector(`.product${index + 1}OldPrice`);
    if (currentPriceEl && oldPriceEl) {
      currentPriceEl.textContent = `${currency === "USD" ? "$" : "JD"} ${prices[
        product
      ][currency].toFixed(2)}`;
      oldPriceEl.textContent = `${currency === "USD" ? "$" : "JD"} ${(
        prices[product][currency] * 1.1
      ).toFixed(2)}`; // Example for old price
    }
  });
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
const openPopup = document.getElementById("openLogingPopup");
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
