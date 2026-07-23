
const translations = {
  'en': {
    'nav_home': 'Home',
    'nav_gallery': 'Gallery',
    'nav_about': 'About Us',
    'nav_contact': 'Contact',
    'filter_all': 'All',
    'connect_us': 'Connect With Us',
    'category_KitchenCabinetWood': 'Kitchen Cabinet Wood',
    'category_AluminumKitchenCabinet': 'Aluminum Kitchen Cabinet',
    'category_AluminumWindows': 'Aluminum Windows',
    'category_Doors': 'Doors',
    'category_Decorations': 'Decorations',
    'category_SoffitAwning': 'Soffit / Awning',
    'category_Videos': 'Videos',
    'hero_title': `DAR AL AMEER Factory`,
    'hero_subtitle': `Premium Aluminum &amp; Ketchen Cabenet Manufacturing`,
    'about_us': `Welcome to Dar Al Ameer Factory. We specialize in high quality materials and flawless engineering.`
  },
  'ar': {
    'nav_home': 'الرئيسية',
    'nav_gallery': 'معرض الصور',
    'nav_about': 'من نحن',
    'nav_contact': 'اتصل بنا',
    'filter_all': 'الكل',
    'connect_us': 'تواصل معنا',
    'category_KitchenCabinetWood': 'خزائن مطبخ خشب',
    'category_AluminumKitchenCabinet': 'خزائن مطبخ ألمنيوم',
    'category_AluminumWindows': 'نوافذ ألمنيوم',
    'category_Doors': 'أبواب',
    'category_Decorations': 'ديكورات',
    'category_SoffitAwning': 'مظلات وسقوف',
    'category_Videos': 'فيديوهات',
    'hero_title': `DAR AL AMEER Factory`,
    'hero_subtitle': `Premium Aluminum &amp; Ketchen Cabenet Manufacturing`,
    'about_us': `Welcome to Dar Al Ameer Factory. We specialize in high quality materials and flawless engineering.`
  },
  'ku': {
    'nav_home': 'سەرەکی',
    'nav_gallery': 'پێشانگا',
    'nav_about': 'دەربارەی ئێمە',
    'nav_contact': 'پەیوەندی',
    'filter_all': 'هەموو',
    'connect_us': 'پەیوەندیمان پێوە بکە',
    'category_KitchenCabinetWood': 'کابینەی چێشتخانە دار',
    'category_AluminumKitchenCabinet': 'کابینەی چێشتخانە ئەلەمنیۆم',
    'category_AluminumWindows': 'پەنجەرەی ئەلەمنیۆم',
    'category_Doors': 'دەرگا',
    'category_Decorations': 'دیکۆرات',
    'category_SoffitAwning': 'سەقف و سابات',
    'category_Videos': 'ڤیدیۆ',
    'hero_title': `DAR AL AMEER Factory`,
    'hero_subtitle': `Premium Aluminum &amp; Ketchen Cabenet Manufacturing`,
    'about_us': `Welcome to Dar Al Ameer Factory. We specialize in high quality materials and flawless engineering.`
  }
};

function applyTranslations() {
  const lang = localStorage.getItem('site_lang') || 'en';
  document.documentElement.dir = (lang === 'ar' || lang === 'ku') ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function setLanguage(lang) {
  localStorage.setItem('site_lang', lang);
  applyTranslations();
}

// Run on load
document.addEventListener('DOMContentLoaded', applyTranslations);
applyTranslations(); // Run immediately for fast render
