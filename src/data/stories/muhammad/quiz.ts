import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'muhammad-q1',
    question: {
      en: 'What title does the Quran give Prophet Muhammad ﷺ in Surah Al-Ahzab, showing no prophet comes after him?',
      bn: 'সূরা আল-আহযাবে কুরআন নবী মুহাম্মাদ ﷺ-কে কোন উপাধি দিয়েছে, যা বোঝায় তাঁর পরে আর কোনো নবী নেই?',
      ar: 'ما اللقب الذي وصف به القرآن النبي محمداً ﷺ في سورة الأحزاب، دلالةً على أنه لا نبي بعده؟',
    },
    options: [
      { en: 'The Friend of Allah', bn: 'আল্লাহর বন্ধু', ar: 'خليل الله' },
      { en: 'The One Spoken To by Allah', bn: 'আল্লাহর সাথে কথোপকথনকারী', ar: 'كليم الله' },
      { en: 'The Seal of the Prophets', bn: 'শেষ নবী (খাতামুন নাবিয়্যীন)', ar: 'خاتم النبيين' },
      { en: 'The King of Arabia', bn: 'আরবের রাজা', ar: 'ملك العرب' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"Muhammad is not the father of [any] one of your men, but [he is] the Messenger of Allah and last of the prophets." [Quran 33:40]',
      bn: '"মুহাম্মাদ তোমাদের পুরুষদের মধ্যে কারো পিতা নন, বরং তিনি আল্লাহর রাসূল এবং শেষ নবী।" [কুরআন ৩৩:৪০]',
      ar: '"مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ" [الأحزاب: 40]',
    },
  },
  {
    id: 'muhammad-q2',
    question: {
      en: 'Allah says He sent Prophet Muhammad ﷺ as what?',
      bn: 'আল্লাহ বলেছেন, তিনি নবী মুহাম্মাদ ﷺ-কে কী হিসেবে পাঠিয়েছেন?',
      ar: 'يقول الله إنه أرسل النبي محمداً ﷺ بماذا؟',
    },
    options: [
      { en: 'A mercy to the worlds', bn: 'সমগ্র জগতের জন্য রহমত', ar: 'رحمة للعالمين' },
      { en: 'A ruler over one tribe', bn: 'এক গোত্রের শাসক', ar: 'حاكماً على قبيلة واحدة' },
      { en: 'A messenger to Makkah only', bn: 'শুধু মক্কার জন্য রাসূল', ar: 'رسولاً إلى مكة وحدها' },
      { en: 'A poet for the Arabs', bn: 'আরবদের জন্য কবি', ar: 'شاعراً للعرب' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And We have not sent you, [O Muhammad], except as a mercy to the worlds." [Quran 21:107]',
      bn: '"আর আমি তোমাকে সমগ্র বিশ্বের জন্য রহমত হিসেবেই প্রেরণ করেছি।" [কুরআন ২১:১০৭]',
      ar: '"وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ" [الأنبياء: 107]',
    },
  },
  {
    id: 'muhammad-q3',
    question: {
      en: 'What were the first words of the Quran revealed to Prophet Muhammad ﷺ in the Cave of Hira?',
      bn: 'হেরা গুহায় নবী মুহাম্মাদ ﷺ-এর উপর কুরআনের প্রথম কোন কথাগুলো নাযিল হয়েছিল?',
      ar: 'ما أول ما نزل من القرآن على النبي ﷺ في غار حراء؟',
    },
    options: [
      { en: '"In the name of Allah, the Most Merciful"', bn: '"পরম করুণাময় আল্লাহর নামে"', ar: '"بسم الله الرحمن الرحيم"' },
      { en: '"Say, He is Allah, the One"', bn: '"বলো, তিনি আল্লাহ, এক"', ar: '"قل هو الله أحد"' },
      { en: '"All praise is for Allah, Lord of the worlds"', bn: '"সব প্রশংসা জগতসমূহের রব আল্লাহর"', ar: '"الحمد لله رب العالمين"' },
      { en: '"Read in the name of your Lord who created"', bn: '"পড়ো তোমার রবের নামে, যিনি সৃষ্টি করেছেন"', ar: '"اقرأ باسم ربك الذي خلق"' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"Read in the name of your Lord who created — created man from a clinging substance." [Quran 96:1-2]. Aisha (RA) narrated that these were the words Jibril brought in the Cave of Hira. [Sahih al-Bukhari 3]',
      bn: '"পড়ো তোমার রবের নামে যিনি সৃষ্টি করেছেন — মানুষকে জমাট রক্ত থেকে সৃষ্টি করেছেন।" [কুরআন ৯৬:১-২]। আয়েশা (রা.) বর্ণনা করেছেন, হেরা গুহায় জিবরীল এই কথাগুলোই নিয়ে এসেছিলেন। [সহীহ বুখারী ৩]',
      ar: '"اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ" [العلق: 1-2]. وروت عائشة رضي الله عنها أن جبريل جاء بها في غار حراء. [صحيح البخاري 3]',
    },
  },
  {
    id: 'muhammad-q4',
    question: {
      en: 'During the hard years in Makkah, what did Allah promise comes with hardship?',
      bn: 'মক্কার কঠিন দিনগুলোতে আল্লাহ ওয়াদা দিয়েছিলেন — কষ্টের সাথে কী আছে?',
      ar: 'في سنوات الشدة بمكة، ماذا وعد الله أنه يكون مع العسر؟',
    },
    options: [
      { en: 'More hardship', bn: 'আরও কষ্ট', ar: 'عسر أكبر' },
      { en: 'Ease', bn: 'স্বস্তি', ar: 'يسر' },
      { en: 'Wealth for everyone', bn: 'সবার জন্য সম্পদ', ar: 'مال للجميع' },
      { en: 'An end to all tests', bn: 'সব পরীক্ষার শেষ', ar: 'نهاية كل ابتلاء' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease." [Quran 94:5-6]',
      bn: '"নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে। নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে।" [কুরআন ৯৪:৫-৬]',
      ar: '"فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا" [الشرح: 5-6]',
    },
  },
  {
    id: 'muhammad-q5',
    question: {
      en: 'What gift for the whole Ummah was given during the Mi\'raj (ascension)?',
      bn: 'মেরাজে সমগ্র উম্মতের জন্য কোন উপহার দেওয়া হয়েছিল?',
      ar: 'ما الهدية التي فُرضت للأمة كلها في المعراج؟',
    },
    options: [
      { en: 'The fast of Ramadan', bn: 'রমজানের রোজা', ar: 'صيام رمضان' },
      { en: 'The pilgrimage of Hajj', bn: 'হজ', ar: 'الحج' },
      { en: 'The five daily prayers', bn: 'পাঁচ ওয়াক্ত নামাজ', ar: 'الصلوات الخمس' },
      { en: 'The giving of zakah', bn: 'যাকাত', ar: 'الزكاة' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'The prayers were first enjoined as fifty a day, and on Musa\'s advice the Prophet ﷺ kept returning to his Lord until they were reduced to five. [Sahih al-Bukhari 3887]',
      bn: 'প্রথমে প্রতিদিন পঞ্চাশ ওয়াক্ত নামাজ ফরজ হয়েছিল; মূসার পরামর্শে নবী ﷺ বারবার রবের কাছে ফিরে যান, শেষে পাঁচ ওয়াক্তে কমানো হয়। [সহীহ বুখারী ৩৮৮৭]',
      ar: 'فُرضت الصلاة أولاً خمسين صلاة كل يوم، فلم يزل النبي ﷺ يرجع إلى ربه بنصيحة موسى حتى فُرضت خمس صلوات. [صحيح البخاري 3887]',
    },
  },
  {
    id: 'muhammad-q6',
    question: {
      en: 'Hiding in the cave during the Hijrah, what did the Prophet ﷺ say to his companion?',
      bn: 'হিজরতের সময় গুহায় লুকিয়ে থাকার সময় নবী ﷺ তাঁর সঙ্গীকে কী বলেছিলেন?',
      ar: 'ماذا قال النبي ﷺ لصاحبه وهما في الغار أثناء الهجرة؟',
    },
    options: [
      { en: '"Do not grieve; indeed Allah is with us"', bn: '"দুঃখ করো না; নিশ্চয়ই আল্লাহ আমাদের সাথে আছেন"', ar: '"لا تحزن إن الله معنا"' },
      { en: '"Let us go back to Makkah"', bn: '"চলো মক্কায় ফিরে যাই"', ar: '"لنرجع إلى مكة"' },
      { en: '"We must fight them now"', bn: '"এখনই আমাদের লড়তে হবে"', ar: '"يجب أن نقاتلهم الآن"' },
      { en: '"Run as fast as you can"', bn: '"যত দ্রুত পারো দৌড়াও"', ar: '"اركض بأسرع ما تستطيع"' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"...when they were in the cave and he said to his companion, \'Do not grieve; indeed Allah is with us.\' And Allah sent down His tranquillity upon him." [Quran 9:40]',
      bn: '"...যখন তারা গুহায় ছিলেন এবং তিনি তাঁর সঙ্গীকে বললেন, \'দুঃখ করো না; নিশ্চয়ই আল্লাহ আমাদের সাথে আছেন।\' আর আল্লাহ তাঁর উপর প্রশান্তি নাযিল করলেন।" [কুরআন ৯:৪০]',
      ar: '"إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا ۖ فَأَنزَلَ اللَّهُ سَكِينَتَهُ عَلَيْهِ" [التوبة: 40]',
    },
  },
  {
    id: 'muhammad-q7',
    question: {
      en: 'How does Allah describe the character of Prophet Muhammad ﷺ in Surah Al-Qalam?',
      bn: 'সূরা আল-কলমে আল্লাহ নবী মুহাম্মাদ ﷺ-এর চরিত্রকে কীভাবে বর্ণনা করেছেন?',
      ar: 'كيف وصف الله خُلق النبي محمد ﷺ في سورة القلم؟',
    },
    options: [
      { en: 'Strict and stern', bn: 'কঠোর ও রূঢ়', ar: 'صارماً شديداً' },
      { en: 'Quiet and shy', bn: 'চুপচাপ ও লাজুক', ar: 'هادئاً خجولاً' },
      { en: 'Wealthy and powerful', bn: 'ধনী ও ক্ষমতাশালী', ar: 'غنياً قوياً' },
      { en: 'Of a great moral character', bn: 'মহান চরিত্রের অধিকারী', ar: 'على خلق عظيم' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And indeed, you are of a great moral character." [Quran 68:4]',
      bn: '"আর নিশ্চয়ই তুমি মহান চরিত্রের উপর অধিষ্ঠিত।" [কুরআন ৬৮:৪]',
      ar: '"وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ" [القلم: 4]',
    },
  },
];

export default quiz;
