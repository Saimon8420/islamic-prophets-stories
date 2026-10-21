import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'ismail-q1',
    question: {
      en: 'When Ibrahim (AS) told Hajar that Allah had commanded him to leave them in the valley, what did she say?',
      bn: 'ইবরাহীম (আ.) যখন হাজেরাকে জানালেন যে আল্লাহই তাঁদের উপত্যকায় রেখে যেতে বলেছেন, তখন তিনি কী বলেছিলেন?',
      ar: 'لما أخبر إبراهيمُ عليه السلام هاجرَ أن الله أمره بتركهما في الوادي، ماذا قالت؟',
    },
    options: [
      { en: '"Then take us back with you"', bn: '"তাহলে আমাদেরও সঙ্গে নিয়ে চলুন"', ar: '"إذن خذنا معك"' },
      { en: '"We will die of thirst here"', bn: '"আমরা এখানে পিপাসায় মারা যাব"', ar: '"سنموت هنا عطشاً"' },
      { en: '"Then He will not neglect us"', bn: '"তাহলে তিনি আমাদের ধ্বংস হতে দেবেন না"', ar: '"إذن لا يضيّعنا"' },
      { en: 'She said nothing', bn: 'তিনি কিছুই বলেননি', ar: 'لم تقل شيئاً' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'Hajar asked, "Has Allah commanded you to do this?" He said, "Yes." She replied, "Then He will not neglect us." [Sahih al-Bukhari 3364]',
      bn: 'হাজেরা জিজ্ঞেস করলেন, "আল্লাহ কি আপনাকে এর আদেশ দিয়েছেন?" তিনি বললেন, "হ্যাঁ।" হাজেরা বললেন, "তাহলে তিনি আমাদের ধ্বংস হতে দেবেন না।" [সহীহ বুখারী ৩৩৬৪]',
      ar: 'سألت هاجر: "آلله أمرك بهذا؟" قال: "نعم." قالت: "إذن لا يضيّعنا." [صحيح البخاري 3364]',
    },
  },
  {
    id: 'ismail-q2',
    question: {
      en: 'How many times did Hajar go between Safa and Marwa searching for help?',
      bn: 'সাহায্যের খোঁজে হাজেরা সাফা ও মারওয়ার মাঝে কতবার যাওয়া-আসা করেছিলেন?',
      ar: 'كم مرة سعت هاجر بين الصفا والمروة تبحث عن العون؟',
    },
    options: [
      { en: 'Three times', bn: 'তিনবার', ar: 'ثلاث مرات' },
      { en: 'Seven times', bn: 'সাতবার', ar: 'سبع مرات' },
      { en: 'Ten times', bn: 'দশবার', ar: 'عشر مرات' },
      { en: 'Once', bn: 'একবার', ar: 'مرة واحدة' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Hajar completed seven rounds between Safa and Marwa — and that is why pilgrims walk between them in Hajj and Umrah. [Sahih al-Bukhari 3364]',
      bn: 'হাজেরা সাফা ও মারওয়ার মাঝে সাত চক্কর পূর্ণ করেছিলেন — এজন্যই হজ ও উমরায় মানুষ এ দুইয়ের মাঝে সাঈ করে। [সহীহ বুখারী ৩৩৬৪]',
      ar: 'أتمّت هاجر سبعة أشواط بين الصفا والمروة، ولذلك يسعى الناس بينهما في الحج والعمرة. [صحيح البخاري 3364]',
    },
  },
  {
    id: 'ismail-q3',
    question: {
      en: 'How did Ismail (AS) answer when his father told him about the dream of sacrifice?',
      bn: 'বাবা যখন কুরবানির স্বপ্নের কথা বললেন, ইসমাঈল (আ.) কী উত্তর দিয়েছিলেন?',
      ar: 'بماذا أجاب إسماعيل عليه السلام حين أخبره أبوه برؤيا الذبح؟',
    },
    options: [
      { en: '"Let us ask the people first"', bn: '"আগে লোকজনকে জিজ্ঞেস করে নিই"', ar: '"لنسأل الناس أولاً"' },
      { en: '"It is only a dream, father"', bn: '"আব্বা, এটা তো শুধুই স্বপ্ন"', ar: '"إنها مجرد رؤيا يا أبي"' },
      { en: '"Give me time to think"', bn: '"আমাকে ভাবার সময় দিন"', ar: '"أمهلني لأفكر"' },
      { en: '"O my father, do as you are commanded. You will find me, if Allah wills, of the patient"', bn: '"হে আমার পিতা, আপনাকে যা আদেশ করা হয়েছে তা করুন। ইনশাআল্লাহ আপনি আমাকে ধৈর্যশীলদের মধ্যে পাবেন"', ar: '"يا أبتِ افعل ما تؤمر، ستجدني إن شاء الله من الصابرين"' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"He said, \'O my father, do as you are commanded. You will find me, if Allah wills, of the patient.\'" [Quran 37:102]',
      bn: '"সে বলল, \'হে আমার পিতা, আপনাকে যা আদেশ করা হয়েছে তা করুন। ইনশাআল্লাহ আপনি আমাকে ধৈর্যশীলদের মধ্যে পাবেন।\'" [কুরআন ৩৭:১০২]',
      ar: '"قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ" [الصافات: 102]',
    },
  },
  {
    id: 'ismail-q4',
    question: {
      en: 'With what did Allah ransom Ismail (AS)?',
      bn: 'আল্লাহ ইসমাঈল (আ.)-কে কিসের বিনিময়ে মুক্ত করেছিলেন?',
      ar: 'بماذا فدى الله إسماعيل عليه السلام؟',
    },
    options: [
      { en: 'With a great sacrifice', bn: 'এক মহান কুরবানির বিনিময়ে', ar: 'بذبح عظيم' },
      { en: 'With gold and silver', bn: 'সোনা-রুপার বিনিময়ে', ar: 'بالذهب والفضة' },
      { en: 'With a year of fasting', bn: 'এক বছরের রোজার বিনিময়ে', ar: 'بصيام سنة' },
      { en: 'With a promise from Ibrahim', bn: 'ইবরাহীমের একটি প্রতিশ্রুতির বিনিময়ে', ar: 'بوعد من إبراهيم' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And We ransomed him with a great sacrifice." [Quran 37:107]',
      bn: '"আর আমি তাকে মুক্ত করলাম এক মহান কুরবানির বিনিময়ে।" [কুরআন ৩৭:১০৭]',
      ar: '"وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ" [الصافات: 107]',
    },
  },
  {
    id: 'ismail-q5',
    question: {
      en: 'What did Ibrahim and Ismail (AS) pray while raising the foundations of the Kaaba?',
      bn: 'কাবার ভিত্তি তোলার সময় ইবরাহীম ও ইসমাঈল (আ.) কী দোয়া করেছিলেন?',
      ar: 'بماذا دعا إبراهيم وإسماعيل عليهما السلام وهما يرفعان قواعد البيت؟',
    },
    options: [
      { en: '"Our Lord, make us kings of this land"', bn: '"হে আমাদের রব, আমাদের এই দেশের রাজা বানিয়ে দিন"', ar: '"ربنا اجعلنا ملوك هذه الأرض"' },
      { en: '"Our Lord, accept this from us. Indeed You are the Hearing, the Knowing"', bn: '"হে আমাদের রব, আমাদের থেকে কবুল করুন। নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ"', ar: '"ربنا تقبّل منا إنك أنت السميع العليم"' },
      { en: '"Our Lord, give us great wealth"', bn: '"হে আমাদের রব, আমাদের অনেক সম্পদ দিন"', ar: '"ربنا آتنا مالاً كثيراً"' },
      { en: '"Our Lord, let us finish quickly"', bn: '"হে আমাদের রব, তাড়াতাড়ি শেষ করিয়ে দিন"', ar: '"ربنا عجّل لنا الفراغ منه"' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And [mention] when Ibrahim was raising the foundations of the House and [with him] Ismail, [saying], \'Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing.\'" [Quran 2:127]',
      bn: '"আর স্মরণ করুন, যখন ইবরাহীম ও ইসমাঈল কাবার ভিত্তি উঠাচ্ছিলেন, [বলছিলেন], \'হে আমাদের রব, আমাদের থেকে কবুল করুন। নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ।\'" [কুরআন ২:১২৭]',
      ar: '"وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ" [البقرة: 127]',
    },
  },
  {
    id: 'ismail-q6',
    question: {
      en: 'For which quality does Allah especially praise Ismail (AS) in Surah Maryam?',
      bn: 'সূরা মারইয়ামে আল্লাহ ইসমাঈল (আ.)-এর কোন গুণের বিশেষ প্রশংসা করেছেন?',
      ar: 'بأي صفة خصّ الله إسماعيل عليه السلام بالثناء في سورة مريم؟',
    },
    options: [
      { en: 'His great strength', bn: 'তাঁর প্রচণ্ড শক্তি', ar: 'قوته العظيمة' },
      { en: 'His beautiful voice', bn: 'তাঁর সুন্দর কণ্ঠ', ar: 'صوته الجميل' },
      { en: 'His large wealth', bn: 'তাঁর অনেক সম্পদ', ar: 'ماله الكثير' },
      { en: 'He was true to his promise', bn: 'তিনি প্রতিশ্রুতিতে সত্যবাদী ছিলেন', ar: 'كان صادق الوعد' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And mention in the Book, Ismail. Indeed, he was true to his promise, and he was a messenger and a prophet." [Quran 19:54]',
      bn: '"আর কিতাবে ইসমাঈলের কথা উল্লেখ করুন। নিশ্চয়ই সে ছিল প্রতিশ্রুতিতে সত্যবাদী এবং সে ছিল একজন রাসূল ও নবী।" [কুরআন ১৯:৫৪]',
      ar: '"وَاذْكُرْ فِي الْكِتَابِ إِسْمَاعِيلَ ۚ إِنَّهُ كَانَ صَادِقَ الْوَعْدِ وَكَانَ رَسُولًا نَّبِيًّا" [مريم: 54]',
    },
  },
];

export default quiz;
