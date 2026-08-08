
const translations = {
  'en': {
    'nav_home': 'Home',
    'nav_gallery': 'Gallery',
    'nav_albums': 'Projects',
    'nav_about': 'About Us',
    'nav_contact': 'Contact',
    'nav_share': 'Share',
    'theme_toggle': 'Toggle theme',
    'filter_all': 'All',
    'nav_favorites': 'Favorites',
    'search_placeholder': 'Find a category…',
    'subfeature_label': 'Filter:',
    'lang_en': 'EN',
    'lang_ar': 'AR',
    'lang_ku': 'KU',
    'connect_us': 'Connect With Us',
    'category_KitchenCabinetWood': 'Kitchen Cabinet Wood',
    'category_AluminumKitchenCabinet': 'Aluminum Kitchen Cabinet',
    'category_AluminumWindows': 'Aluminum Windows',
    'category_Doors': 'Doors',
    'category_Decorations': 'Decorations',
    'category_SoffitAwning': 'Soffit / Awning',
    'category_DressingRooms': 'Dressing Rooms',
    'category_Videos': 'Videos',
    'hero_title': `DAR AL AMEER Factory`,
    'hero_subtitle': `Premium Aluminum &amp; Kitchen Cabinet Manufacturing`,
    'about_us': `Welcome to Dar Al Ameer Factory. We specialize in high quality materials and flawless engineering.`
  },
  'ar': {
    'nav_home': 'الرئيسية',
    'nav_gallery': 'معرض الصور',
    'nav_albums': 'مشاريع',
    'nav_about': 'من نحن',
    'nav_contact': 'اتصل بنا',
    'nav_share': 'مشاركة',
    'theme_toggle': 'تبديل الوضع',
    'filter_all': 'الكل',
    'nav_favorites': 'المفضلة',
    'search_placeholder': 'ابحث عن قسم…',
    'subfeature_label': 'تصفية:',
    'lang_en': 'EN',
    'lang_ar': 'AR',
    'lang_ku': 'KU',
    'connect_us': 'تواصل معنا',
    'category_KitchenCabinetWood': 'خزائن مطبخ خشب',
    'category_AluminumKitchenCabinet': 'خزائن مطبخ ألمنيوم',
    'category_AluminumWindows': 'نوافذ ألمنيوم',
    'category_Doors': 'أبواب',
    'category_Decorations': 'ديكورات',
    'category_SoffitAwning': 'مظلات وسقوف',
    'category_DressingRooms': 'غرف ملابس',
    'category_Videos': 'فيديوهات',
    'hero_title': `مصنع دار الأمير`,
    'hero_subtitle': `تصنيع الألمنيوم وخزائن المطابخ الفاخرة`,
    'about_us': `مرحباً بكم في مصنع دار الأمير. نحن متخصصون في المواد عالية الجودة والهندسة العيوب.`
  },
  'ku': {
    'nav_home': 'سەرەکی',
    'nav_gallery': 'پێشانگا',
    'nav_albums': 'پڕۆژەکان',
    'nav_about': 'دەربارەی ئێمە',
    'nav_contact': 'پەیوەندی',
    'theme_toggle': 'گۆڕینی ڕووکار',
    'filter_all': 'هەموو',
    'nav_favorites': 'دڵخوازەکان',
    'search_placeholder': 'بەشێک بدۆزەرەوە…',
    'subfeature_label': 'پاڵاوتن:',
    'lang_en': 'EN',
    'lang_ar': 'AR',
    'lang_ku': 'KU',
    'connect_us': 'پەیوەندیمان پێوە بکە',
    'category_KitchenCabinetWood': 'کابینەی چێشتخانە دار',
    'category_AluminumKitchenCabinet': 'کابینەی چێشتخانە ئەلەمنیۆم',
    'category_AluminumWindows': 'پەنجەرەی ئەلەمنیۆم',
    'category_Doors': 'دەرگا',
    'category_Decorations': 'دیکۆرات',
    'category_SoffitAwning': 'سەقف و سابات',
    'category_DressingRooms': 'ژووری جلگۆڕین',
    'category_Videos': 'ڤیدیۆ',
    'hero_title': `کارگەی دار ئەمیر`,
    'hero_subtitle': `دروستکردنی ئەلەمنیۆم و کەوانتەری چێشتخانەی نایاب`,
    'about_us': `بەخێربێن بۆ کارگەی دار ئەمیر. ئێمە پسپۆڕین لە مادەی کوالێتی بەرز و  بێ کەموکوڕی.`
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
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
}

function setLanguage(lang) {
  localStorage.setItem('site_lang', lang);
  applyTranslations();
}

// Run on load
document.addEventListener('DOMContentLoaded', applyTranslations);
applyTranslations(); // Run immediately for fast render
