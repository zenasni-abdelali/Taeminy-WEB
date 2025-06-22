// script.js

// Object to store translations for different languages
const translations = {
  // French translations (default)
  fr: {
    "page-title": "Taeminy",
    "nav-home": "Accueil",
    "nav-about": "À Propos",
    "nav-why-choose": "Pourquoi Choisir",
    "nav-our-insurances": "Nos Assurances",
    "nav-how-it-works": "Comment ça marche",
    "nav-contact": "Contact",
    "language-label": "🌐",
    "lang-french": "Français",
    "lang-arabic": "Arabe",
    "hero-title-part1": "Nouvelle expérience",
    "hero-title-part2": "d’assurance en Algérie",
    "hero-description": "Taeminy simplifie vos démarches d’assurance en Algérie. Comparez les offres, choisissez la meilleure couverture, et souscrivez facilement, le tout depuis une seule plateforme.",
    "hero-download-app": "Télécharger l’app",
    "about-us-title": "Qui sommes-nous ?",
    "about-us-p1": "Taeminy est une startup algérienne spécialisée dans les solutions numériques pour le secteur de l’assurance. Nous avons pour objectif de simplifier le processus de souscription à une assurance auto ou voyage, tout en mettant en avant la transparence, la rapidité et la liberté de choix.",
    "about-us-p2": "Grâce à notre plateforme intuitive, les utilisateurs peuvent comparer instantanément les offres d’assurance de plusieurs compagnies partenaires, sélectionner celle qui leur convient, et souscrire en quelques minutes, sans avoir à se déplacer.",
    "about-us-p3": "Nous croyons que chaque Algérien mérite un accès simple et rapide à une protection adaptée à ses besoins. Taeminy est bien plus qu’une simple application — c’est une passerelle entre vous et les meilleures compagnies d’assurance du pays.",
    "why-choose-title": "Pourquoi Choisir Taeminy ?",
    "why-choose-description": "Des avantages pensés pour vous simplifier l’assurance automobile et voyage.",
    "feature-fast-title": "Rapide",
    "feature-fast-description": "Comparez et souscrivez en quelques clics, sans déplacement.",
    "feature-transparent-title": "Transparent",
    "feature-transparent-description": "Visualisez clairement les prix et les garanties.",
    "feature-trusted-insurers-title": "Assureurs de confiance",
    "feature-trusted-insurers-description": "Comparez des offres provenant de compagnies fiables et agréées.",
    "feature-secure-payment-title": "Paiement électronique",
    "feature-secure-payment-description": "Paiement sécurisé via carte Dahabia pour plus de commodité.",
    "insurance-types-title": "Types d’assurances disponibles",
    "insurance-types-description": "Découvrez la gamme complète de nos couvertures pour répondre à tous vos besoins.",
    "insurance-auto-title": "Assurance Auto",
    "insurance-auto-description": "Assurez votre voiture avec les meilleures offres.",
    "insurance-travel-title": "Assurance Voyage",
    "insurance-travel-description": "Voyagez en toute sérénité, partout dans le monde.",
    "how-it-works-title": "Comment ça Marche ?",
    "how-it-works-description": "Suivez ces étapes simples pour obtenir votre assurance en quelques minutes.",
    "step1-title": "Remplissez votre Demande",
    "step1-description": "Saisissez vos informations personnelles et celles de votre véhicule ou voyage.",
    "step2-title": "Comparez les Offres",
    "step2-description": "Accédez aux offres proposées par nos partenaires et comparez facilement.",
    "step3-title": "Choisissez l’Offre Idéale",
    "step3-description": "Choisissez l’assurance la mieux adaptée à vos besoins et à votre budget.",
    "step4-title": "Recevez votre Attestation",
    "step4-description": "Votre attestation d’assurance est générée et envoyée immédiatement par email.",
    "footer-about-text": "Taeminy vous aide à comparer et souscrire aux meilleures assurances en Algérie, simplement.",
    "footer-our-insurances-title": "Nos Assurances",
    "footer-auto-insurance": "Assurance Auto",
    "footer-travel-insurance": "Assurance Voyage",
    "footer-contact-title": "Contact",
    "footer-email": "Email : assurance@taeminy.dz",
    "footer-phone": "Téléphone : +213 123 456 789",
    "footer-social-media-title": "Suivez-nous",
    "footer-copyright": "© 2025 Taeminy. Tous droits réservés."
  },
  // Arabic translations
  ar: {
    "page-title": "تأميني",
    "nav-home": "الرئيسية",
    "nav-about": "من نحن",
    "nav-why-choose": "لماذا تختارنا",
    "nav-our-insurances": "تأمينتنا",
    "nav-how-it-works": "كيف يعمل",
    "nav-contact": "اتصل بنا",
    "language-label": "🌐",
    "lang-french": "فرنسي",
    "lang-arabic": "عربي",
    "hero-title-part1": "تجربة جديدة",
    "hero-title-part2": "للتأمين في الجزائر",
    "hero-description": "تيميني تبسط إجراءات التأمين الخاصة بك في الجزائر. قارن العروض، اختر أفضل تغطية، واشترك بسهولة، كل ذلك من منصة واحدة.",
    "hero-download-app": "تحميل التطبيق",
    "about-us-title": "من نحن؟",
    "about-us-p1": "تأميني هي شركة ناشئة جزائرية متخصصة في الحلول الرقمية لقطاع التأمين. نهدف إلى تبسيط عملية الحصول على تأمين السيارة أو السفر، مع التركيز على الشفافية والسرعة وحرية الاختيار.",
    "about-us-p2": "من خلال منصتنا البديهية، يمكن للمستخدمين مقارنة عروض التأمين من عدة شركات شريكة فورًا، واختيار ما يناسبهم، والاشتراك في بضع دقائق، دون الحاجة إلى التنقل.",
    "about-us-p3": "نؤمن بأن كل جزائري يستحق وصولاً سهلاً وسريعًا إلى حماية تتناسب مع احتياجاته. تيميني هي أكثر بكثير من مجرد تطبيق – إنها بوابة بينك وبين أفضل شركات التأمين في البلاد.",
    "why-choose-title": "لماذا تختار تيميني؟",
    "why-choose-description": "مزايا مصممة لتبسيط تأمين السيارات والسفر الخاص بك.",
    "feature-fast-title": "سريع",
    "feature-fast-description": "قارن واشترك في بضع نقرات، دون الحاجة للتنقل.",
    "feature-transparent-title": "شفاف",
    "feature-transparent-description": "عرض الأسعار والضمانات بوضوح.",
    "feature-trusted-insurers-title": "شركات تأمين موثوقة",
    "feature-trusted-insurers-description": "قارن العروض من شركات موثوقة ومعتمدة.",
    "feature-secure-payment-title": "الدفع الإلكتروني",
    "feature-secure-payment-description": "دفع آمن عبر بطاقة الذهبية لمزيد من الراحة.",
    "insurance-types-title": "أنواع التأمين المتاحة",
    "insurance-types-description": "اكتشف مجموعتنا الكاملة من التغطيات لتلبية جميع احتياجاتك.",
    "insurance-auto-title": "تأمين السيارات",
    "insurance-auto-description": "أمن سيارتك بأفضل العروض.",
    "insurance-travel-title": "تأمين السفر",
    "insurance-travel-description": "سافر براحة بال تامة، في أي مكان في العالم.",
    "how-it-works-title": "كيف يعمل؟",
    "how-it-works-description": "اتبع هذه الخطوات البسيطة للحصول على تأمينك في دقائق.",
    "step1-title": "املأ طلبك",
    "step1-description": "أدخل معلوماتك الشخصية ومعلومات سيارتك أو سفرك.",
    "step2-title": "قارن العروض",
    "step2-description": "احصل على العروض المقدمة من شركائنا وقارنها بسهولة.",
    "step3-title": "اختر العرض المثالي",
    "step3-description": "اختر التأمين الأنسب لاحتياجاتك وميزانيتك.",
    "step4-title": "استلم شهادتك",
    "step4-description": "يتم إنشاء شهادة التأمين الخاصة بك وإرسالها فورًا عبر البريد الإلكتروني.",
    "footer-about-text": "تيميني تساعدك على مقارنة والاشتراك في أفضل التأمينات في الجزائر، بكل بساطة.",
    "footer-our-insurances-title": "تأمينتنا",
    "footer-auto-insurance": "تأمين السيارات",
    "footer-travel-insurance": "تأمين السفر",
    "footer-contact-title": "اتصل بنا",
    "footer-email": "البريد الإلكتروني: assurance@taeminy.dz",
    "footer-phone": "الهاتف: +213 123 456 789",
    "footer-social-media-title": "تابعنا",
    "footer-copyright": "© 2025 تأميني. جميع الحقوق محفوظة."
  }
};

// Function to set the language of the website
const setLanguage = (lang) => {
  // Get all elements with a data-key attribute
  document.querySelectorAll('[data-key]').forEach(element => {
    // Get the data-key value
    const key = element.getAttribute('data-key');
    // Check if the key exists in the current language translations
    if (translations[lang] && translations[lang][key]) {
      // Update the text content of the element
      element.textContent = translations[lang][key];
    }
  });

  // Handle specific elements that might need attribute changes (like option text)
  const langFrenchOption = document.querySelector('option[value="fr"]');
  const langArabicOption = document.querySelector('option[value="ar"]');

  if (langFrenchOption) {
    langFrenchOption.textContent = translations[lang]["lang-french"];
  }
  if (langArabicOption) {
    langArabicOption.textContent = translations[lang]["lang-arabic"];
  }

  // Set the HTML lang attribute for accessibility and proper rendering
  document.documentElement.setAttribute('lang', lang);

  // For Arabic, set text direction to RTL
  if (lang === 'ar') {
    document.body.style.direction = 'rtl';
  } else {
    document.body.style.direction = 'ltr';
  }
};

// Function to toggle dark mode
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  // Save user preference to localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  // Update icon based on dark mode state
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    const icon = darkModeToggle.querySelector('i');
    if (isDarkMode) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
};

// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // --- Language Switcher Logic ---
  const languageSwitcher = document.getElementById('language-switcher');

  // Set initial language based on the default selected option or browser language
  const initialLang = languageSwitcher.value || 'fr'; // Default to French if nothing selected
  setLanguage(initialLang);

  // Add an event listener to the language switcher for change events
  languageSwitcher.addEventListener('change', (event) => {
    // Call setLanguage with the newly selected language value
    setLanguage(event.target.value);
  });

  // --- Dark Mode Logic ---
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  // Load dark mode preference from localStorage
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    // Update icon immediately
    if (darkModeToggle) {
      const icon = darkModeToggle.querySelector('i');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }

  // Add event listener to the dark mode toggle button
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
});
