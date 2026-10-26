// ===== اسلایدر =====
const slides = document.getElementById("slides");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
const totalSlides = 3;

function updateSlider(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  currentIndex = index;
  slides.style.transform = `translateX(${currentIndex * 100}%)`;

  // به‌روزرسانی نقطه‌ها
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-white/50", i === currentIndex);
    dot.classList.toggle("bg-white/30", i !== currentIndex);
  });
}

prevBtn.addEventListener("click", () => updateSlider(currentIndex - 1));
nextBtn.addEventListener("click", () => updateSlider(currentIndex + 1));

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => updateSlider(index));
});

// اسلاید خودکار هر ۵ ثانیه
// setInterval(() => updateSlider(currentIndex + 1), 5000);

// // ===== منوی موبایل =====
// const menuBtn = document.getElementById("menu-btn");
// const mobileMenu = document.getElementById("mobile-menu");

// menuBtn.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
// });

// //////////////////////////////////////////////////////////////
// ۱. منوی دسکتاپ (همون کد خودت)
const btn = document.getElementById("categoryBtn");
const menu = document.getElementById("megaMenu");

if (btn && menu) {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
  });

  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  });
}

// ۲. تب‌های دسکتاپ (همون کد خودت)
const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.stopPropagation();

    const parent = document.getElementById("megaMenu");
    const contents = parent.querySelectorAll("#tab1, #tab2, #tab3, #tab4, #tab5, #tab6, #tab7, #tab8, #tab9, #tab10, #tab11");

    tabs.forEach((t) => t.classList.remove("bg-gray-100"));
    tab.classList.add("bg-gray-100");

    contents.forEach((c) => c.classList.add("hidden"));

    const id = tab.dataset.tab;
    const active = document.getElementById(id);
    if (active) active.classList.remove("hidden");
  });
});

// ۳. منوی موبایل (همون کد خودت)
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
}

if (closeBtn && mobileMenu) {
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    document.body.style.overflow = "";
  });
}

// ===== ۴. اضافه کردن مدیریت تب‌های موبایل (جدید) =====
const tabButtonsMobile = document.querySelectorAll(".tab-btn-mobile");
const tabContentsMobile = document.querySelectorAll(".tab-content");

tabButtonsMobile.forEach((button) => {
  button.addEventListener("click", function () {
    // غیرفعال کردن همه تب‌ها
    tabButtonsMobile.forEach((btn) => {
      btn.classList.remove("bg-blue-100", "text-blue-600");
      btn.classList.add("hover:bg-gray-200");
    });

    // فعال کردن تب جاری
    this.classList.add("bg-blue-100", "text-blue-600");
    this.classList.remove("hover:bg-gray-200");

    // مخفی کردن همه محتواها
    tabContentsMobile.forEach((content) => {
      content.classList.add("hidden");
    });

    // نمایش محتوای مربوطه
    const tabId = this.dataset.tab;
    const content = document.getElementById(tabId + "-content");
    if (content) {
      content.classList.remove("hidden");
    }
  });
});

// فعال کردن اولین تب موبایل به‌صورت پیش‌فرض
if (tabButtonsMobile.length > 0) {
  tabButtonsMobile[0].click();
}

// برای جستجو دکمه در حالت موبایل

function openSearch() {
  // باز کردن مودال جستجو
  const modal = document.getElementById("searchModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.getElementById("searchInput")?.focus();
    }, 100);
  } else {
    // اگر مودال وجود نداشت، به صفحه جستجو برو
    window.location.href = "./search.html";
  }
}

function closeSearch() {
  const modal = document.getElementById("searchModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}
