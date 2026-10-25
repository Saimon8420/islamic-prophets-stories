import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'ibrahim-q1',
    question: {
      en: 'What did Ibrahim (AS) say when the star he had seen set?',
      bn: 'ইবরাহীম (আ.) যে তারাটি দেখেছিলেন, তা অস্ত গেলে তিনি কী বলেছিলেন?',
      ar: 'ماذا قال إبراهيم عليه السلام حين أفل الكوكب الذي رآه؟',
    },
    options: [
      { en: '"This is my lord forever"', bn: '"এটাই চিরকাল আমার রব"', ar: '"هذا ربي إلى الأبد"' },
      { en: '"I do not like those that set"', bn: '"আমি অস্তগামীদের পছন্দ করি না"', ar: '"لَا أُحِبُّ الْآفِلِينَ"' },
      { en: '"Let us worship the moon instead"', bn: '"চলো, বরং চাঁদের পূজা করি"', ar: '"فلنعبد القمر بدلاً منه"' },
      { en: '"The stars control our fate"', bn: '"তারারাই আমাদের ভাগ্য নিয়ন্ত্রণ করে"', ar: '"النجوم تتحكم في مصائرنا"' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"So when the night covered him, he saw a star. He said, \'This is my lord.\' But when it set, he said, \'I like not those that set.\'" [Quran 6:76]',
      bn: '"যখন রাত তাকে ঢেকে ফেলল, সে একটি তারা দেখল। বলল, \'এটা আমার রব।\' কিন্তু যখন তা অস্তমিত হলো, বলল, \'আমি অস্তগামীদের পছন্দ করি না।\'" [কুরআন ৬:৭৬]',
      ar: '"فَلَمَّا جَنَّ عَلَيْهِ اللَّيْلُ رَأَىٰ كَوْكَبًا ۖ قَالَ هَٰذَا رَبِّي ۖ فَلَمَّا أَفَلَ قَالَ لَا أُحِبُّ الْآفِلِينَ" [الأنعام: 76]',
    },
  },
  {
    id: 'ibrahim-q2',
    question: {
      en: 'Which idol did Ibrahim (AS) leave unbroken?',
      bn: 'ইবরাহীম (আ.) কোন মূর্তিটি না ভেঙে রেখে দিয়েছিলেন?',
      ar: 'أي صنم ترك إبراهيم عليه السلام دون أن يكسره؟',
    },
    options: [
      { en: 'The largest of them', bn: 'তাদের মধ্যে সবচেয়ে বড়টি', ar: 'كبيرهم' },
      { en: 'The smallest of them', bn: 'সবচেয়ে ছোটটি', ar: 'أصغرهم' },
      { en: 'The one made of gold', bn: 'সোনার তৈরিটি', ar: 'الصنم الذهبي' },
      { en: 'He broke them all', bn: 'তিনি সবগুলোই ভেঙেছিলেন', ar: 'كسّرها كلها' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"So he made them into fragments, except a large one among them, that they might return to it." [Quran 21:58]',
      bn: '"সে সেগুলোকে টুকরো টুকরো করে ফেলল, তবে তাদের মধ্যে বড়টিকে রেখে দিল, যাতে তারা তার কাছে ফিরে আসে।" [কুরআন ২১:৫৮]',
      ar: '"فَجَعَلَهُمْ جُذَاذًا إِلَّا كَبِيرًا لَّهُمْ لَعَلَّهُمْ إِلَيْهِ يَرْجِعُونَ" [الأنبياء: 58]',
    },
  },
  {
    id: 'ibrahim-q3',
    question: {
      en: 'What did Allah command the fire when Ibrahim (AS) was thrown into it?',
      bn: 'ইবরাহীম (আ.)-কে আগুনে ফেলা হলে আল্লাহ আগুনকে কী আদেশ দিয়েছিলেন?',
      ar: 'بماذا أمر الله النار حين أُلقي فيها إبراهيم عليه السلام؟',
    },
    options: [
      { en: '"Go out completely"', bn: '"পুরোপুরি নিভে যাও"', ar: '"انطفئي تماماً"' },
      { en: '"Burn his enemies instead"', bn: '"বরং তার শত্রুদের পোড়াও"', ar: '"احرقي أعداءه بدلاً منه"' },
      { en: '"Rise up to the sky"', bn: '"আকাশে উঠে যাও"', ar: '"ارتفعي إلى السماء"' },
      { en: '"Be coolness and safety upon Ibrahim"', bn: '"ইবরাহীমের প্রতি শীতল ও নিরাপদ হয়ে যাও"', ar: '"كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ"' },
    ],
    correctIndex: 3,
    explanation: {
      en: 'We said, "O fire, be coolness and safety upon Ibrahim." And they intended for him a plan, but We made them the greatest losers. [Quran 21:69-70]',
      bn: 'আমি বললাম, "হে আগুন, ইবরাহীমের প্রতি শীতল ও নিরাপদ হয়ে যাও।" তারা তার বিরুদ্ধে ষড়যন্ত্র করেছিল, কিন্তু আমি তাদের সবচেয়ে বড় ক্ষতিগ্রস্ত করে দিলাম। [কুরআন ২১:৬৯-৭০]',
      ar: '"قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ وَأَرَادُوا بِهِ كَيْدًا فَجَعَلْنَاهُمُ الْأَخْسَرِينَ" [الأنبياء: 69-70]',
    },
  },
  {
    id: 'ibrahim-q4',
    question: {
      en: 'When Ibrahim (AS) told Hagar that Allah had commanded him to leave them in the valley, what did she say?',
      bn: 'ইবরাহীম (আ.) যখন হাজেরাকে জানালেন যে আল্লাহই তাঁকে উপত্যকায় রেখে যেতে আদেশ করেছেন, হাজেরা কী বলেছিলেন?',
      ar: 'حين أخبر إبراهيم عليه السلام هاجر أن الله أمره بتركهما في الوادي، ماذا قالت؟',
    },
    options: [
      { en: '"Then take us back with you"', bn: '"তাহলে আমাদের সাথে নিয়ে চলুন"', ar: '"إذن خذنا معك"' },
      { en: '"We will find another valley"', bn: '"আমরা অন্য উপত্যকা খুঁজে নেব"', ar: '"سنبحث عن وادٍ آخر"' },
      { en: '"Then He will not neglect us"', bn: '"তাহলে তিনি আমাদের অবহেলা করবেন না"', ar: '"إذاً لا يُضيّعنا"' },
      { en: '"Leave us more dates"', bn: '"আমাদের জন্য আরও খেজুর রেখে যান"', ar: '"اترك لنا مزيداً من التمر"' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'She asked, "Has Allah ordered you to do so?" He said, "Yes." She said, "Then He will not neglect us." [Sahih al-Bukhari 3364]',
      bn: 'তিনি জিজ্ঞাসা করলেন, "আল্লাহ কি আপনাকে এ আদেশ দিয়েছেন?" তিনি বললেন, "হ্যাঁ।" হাজেরা বললেন, "তাহলে তিনি আমাদের অবহেলা করবেন না।" [সহীহ বুখারী ৩৩৬৪]',
      ar: 'قالت: آلله أمرك بهذا؟ قال: نعم. قالت: إذاً لا يُضيّعنا. [صحيح البخاري 3364]',
    },
  },
  {
    id: 'ibrahim-q5',
    question: {
      en: 'How many times did Hagar run between Safa and Marwa searching for help?',
      bn: 'সাহায্যের খোঁজে হাজেরা সাফা ও মারওয়ার মধ্যে কতবার দৌড়েছিলেন?',
      ar: 'كم مرة سعت هاجر بين الصفا والمروة تبحث عن عون؟',
    },
    options: [
      { en: 'Three times', bn: 'তিনবার', ar: 'ثلاث مرات' },
      { en: 'Seven times', bn: 'সাতবার', ar: 'سبع مرات' },
      { en: 'Ten times', bn: 'দশবার', ar: 'عشر مرات' },
      { en: 'Once', bn: 'একবার', ar: 'مرة واحدة' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Hagar went on running between Safa and Marwa seven times, then she found the angel at the place of Zamzam, until water flowed. [Sahih al-Bukhari 3364]',
      bn: 'হাজেরা সাফা ও মারওয়ার মধ্যে সাতবার দৌড়ালেন, তারপর যমযমের স্থানে ফেরেশতাকে দেখতে পেলেন, এবং পানি প্রবাহিত হলো। [সহীহ বুখারী ৩৩৬৪]',
      ar: 'فجعلت تسعى بين الصفا والمروة سبع مرات، ثم وجدت الملك عند موضع زمزم حتى ظهر الماء. [صحيح البخاري 3364]',
    },
  },
  {
    id: 'ibrahim-q6',
    question: {
      en: 'How did Ibrahim\'s son respond when told about the dream of sacrifice?',
      bn: 'কোরবানির স্বপ্নের কথা শুনে ইবরাহীম (আ.)-এর পুত্র কী উত্তর দিয়েছিলেন?',
      ar: 'بماذا أجاب ابن إبراهيم حين أخبره أبوه برؤيا الذبح؟',
    },
    options: [
      { en: 'He ran away to the mountains', bn: 'তিনি পাহাড়ে পালিয়ে গেলেন', ar: 'هرب إلى الجبال' },
      { en: 'He asked to wait a few years', bn: 'তিনি কয়েক বছর অপেক্ষা করতে বললেন', ar: 'طلب أن ينتظر بضع سنين' },
      { en: 'He said it was only a dream', bn: 'তিনি বললেন এটা শুধুই স্বপ্ন', ar: 'قال إنها مجرد رؤيا' },
      { en: '"O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast."', bn: '"হে আমার পিতা, আপনাকে যা আদেশ করা হয়েছে তা করুন। ইনশাআল্লাহ আপনি আমাকে ধৈর্যশীলদের মধ্যে পাবেন।"', ar: '"يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ"' },
    ],
    correctIndex: 3,
    explanation: {
      en: 'He said, "O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast." [Quran 37:102]',
      bn: 'সে বলল, "হে আমার পিতা, আপনাকে যা আদেশ করা হয়েছে তা করুন। ইনশাআল্লাহ আপনি আমাকে ধৈর্যশীলদের মধ্যে পাবেন।" [কুরআন ৩৭:১০২]',
      ar: '"قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ" [الصافات: 102]',
    },
  },
  {
    id: 'ibrahim-q7',
    question: {
      en: 'What did Ibrahim and Ismail pray while raising the foundations of the Kaaba?',
      bn: 'কাবার ভিত্তি উঠানোর সময় ইবরাহীম ও ইসমাঈল (আ.) কী দোয়া করেছিলেন?',
      ar: 'بماذا دعا إبراهيم وإسماعيل عليهما السلام وهما يرفعان القواعد من البيت؟',
    },
    options: [
      { en: '"Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing."', bn: '"হে আমাদের রব, আমাদের কাছ থেকে কবুল করুন। নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ।"', ar: '"رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ"' },
      { en: '"Our Lord, make this house the tallest on earth."', bn: '"হে আমাদের রব, এই ঘরকে পৃথিবীর সবচেয়ে উঁচু করুন।"', ar: '"ربنا اجعل هذا البيت أعلى بيت في الأرض"' },
      { en: '"Our Lord, give us a great kingdom."', bn: '"হে আমাদের রব, আমাদের এক বিশাল রাজ্য দিন।"', ar: '"ربنا آتنا ملكاً عظيماً"' },
      { en: '"Our Lord, finish the building for us."', bn: '"হে আমাদের রব, আমাদের হয়ে নির্মাণ শেষ করে দিন।"', ar: '"ربنا أتمّ لنا البناء"' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And [mention] when Ibrahim was raising the foundations of the House and [with him] Ismail, [saying], \'Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing.\'" [Quran 2:127]',
      bn: '"আর স্মরণ করো, যখন ইবরাহীম ও ইসমাঈল কাবার ভিত্তি উঠাচ্ছিল, \'হে আমাদের রব, আমাদের কাছ থেকে কবুল করুন। নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ।\'" [কুরআন ২:১২৭]',
      ar: '"وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ" [البقرة: 127]',
    },
  },
];

export default quiz;
