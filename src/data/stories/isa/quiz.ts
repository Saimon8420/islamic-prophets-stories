import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'isa-q1',
    question: {
      en: 'When Maryam asked how she could have a child, what did the angel say about Allah?',
      bn: 'মারইয়াম যখন জিজ্ঞেস করলেন তাঁর সন্তান কীভাবে হবে, ফেরেশতা আল্লাহ সম্পর্কে কী বললেন?',
      ar: 'حين سألت مريم كيف يكون لها ولد، ماذا قال الملَك عن الله؟',
    },
    options: [
      { en: 'When He decrees a matter, He only says to it "Be," and it is', bn: 'তিনি কোনো বিষয়ের সিদ্ধান্ত নিলে শুধু বলেন "হও", আর তা হয়ে যায়', ar: 'إذا قضى أمراً فإنما يقول له كن فيكون' },
      { en: 'She would have to wait many years', bn: 'তাঁকে অনেক বছর অপেক্ষা করতে হবে', ar: 'عليها أن تنتظر سنوات طويلة' },
      { en: 'She would adopt a child from the Temple', bn: 'তিনি মসজিদ থেকে একটি শিশু দত্তক নেবেন', ar: 'ستتبنّى طفلاً من المعبد' },
      { en: 'The child would be given to Zakariya', bn: 'শিশুটি যাকারিয়াকে দেওয়া হবে', ar: 'سيُعطى الطفل لزكريا' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"Such is Allah; He creates what He wills. When He decrees a matter, He only says to it \'Be,\' and it is." [Quran 3:47]',
      bn: '"এভাবেই আল্লাহ যা ইচ্ছা সৃষ্টি করেন। তিনি যখন কোনো বিষয়ের সিদ্ধান্ত নেন, তখন শুধু বলেন \'হও\' আর তা হয়ে যায়।" [কুরআন ৩:৪৭]',
      ar: '"قَالَ كَذَٰلِكِ اللَّهُ يَخْلُقُ مَا يَشَاءُ ۚ إِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُن فَيَكُونُ" [آل عمران: 47]',
    },
  },
  {
    id: 'isa-q2',
    question: {
      en: 'What did Allah provide for Maryam under the palm tree?',
      bn: 'খেজুর গাছের নিচে আল্লাহ মারইয়ামের জন্য কী ব্যবস্থা করেছিলেন?',
      ar: 'ماذا رزق الله مريم تحت النخلة؟',
    },
    options: [
      { en: 'A house and servants', bn: 'একটি ঘর ও খাদেম', ar: 'بيتاً وخدماً' },
      { en: 'Bread and milk brought by travellers', bn: 'মুসাফিরদের আনা রুটি ও দুধ', ar: 'خبزاً ولبناً أحضره المسافرون' },
      { en: 'A camel to ride home', bn: 'বাড়ি ফেরার জন্য একটি উট', ar: 'ناقة تركبها إلى بيتها' },
      { en: 'A stream beneath her and fresh ripe dates', bn: 'নিচে একটি ঝরনা আর তাজা পাকা খেজুর', ar: 'نهراً صغيراً تحتها ورطباً جنياً' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"Do not grieve; your Lord has provided beneath you a stream. And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates." [Quran 19:24-25]',
      bn: '"দুঃখ করো না; তোমার রব তোমার পায়ের নিচে একটি ঝরনা প্রবাহিত করেছেন। আর খেজুর গাছের কাণ্ড তোমার দিকে নাড়াও, তা থেকে তাজা পাকা খেজুর তোমার উপর পড়বে।" [কুরআন ১৯:২৪-২৫]',
      ar: '"أَلَّا تَحْزَنِي قَدْ جَعَلَ رَبُّكِ تَحْتَكِ سَرِيًّا وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا" [مريم: 24-25]',
    },
  },
  {
    id: 'isa-q3',
    question: {
      en: 'What were the first words baby Isa (AS) spoke from the cradle?',
      bn: 'দোলনা থেকে শিশু ঈসা (আ.) প্রথম কী বলেছিলেন?',
      ar: 'ما أول ما قاله عيسى عليه السلام وهو في المهد؟',
    },
    options: [
      { en: '"I am a king from heaven"', bn: '"আমি আসমানের রাজা"', ar: '"أنا ملك من السماء"' },
      { en: '"Leave my mother alone"', bn: '"আমার মাকে ছেড়ে দাও"', ar: '"اتركوا أمي"' },
      { en: '"Indeed, I am the servant of Allah"', bn: '"নিশ্চয়ই আমি আল্লাহর বান্দা"', ar: '"إني عبد الله"' },
      { en: '"I will be your leader"', bn: '"আমি তোমাদের নেতা হব"', ar: '"سأكون قائدكم"' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet." [Quran 19:30]',
      bn: '"নিশ্চয়ই আমি আল্লাহর বান্দা। তিনি আমাকে কিতাব দিয়েছেন এবং আমাকে নবী করেছেন।" [কুরআন ১৯:৩০]',
      ar: '"قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا" [مريم: 30]',
    },
  },
  {
    id: 'isa-q4',
    question: {
      en: 'Isa (AS) made a clay bird fly, healed the blind and the leper, and gave life to the dead. By whose permission?',
      bn: 'ঈসা (আ.) মাটির পাখি উড়িয়েছেন, অন্ধ ও কুষ্ঠরোগীকে সুস্থ করেছেন, মৃতকে জীবিত করেছেন — কার অনুমতিতে?',
      ar: 'جعل عيسى عليه السلام طير الطين يطير، وأبرأ الأكمه والأبرص، وأحيا الموتى — بإذن مَن؟',
    },
    options: [
      { en: 'By his own power', bn: 'নিজের ক্ষমতায়', ar: 'بقدرته الذاتية' },
      { en: 'By the permission of Allah', bn: 'আল্লাহর অনুমতিতে', ar: 'بإذن الله' },
      { en: 'By the help of the disciples', bn: 'হাওয়ারীদের সাহায্যে', ar: 'بمساعدة الحواريين' },
      { en: 'By the order of the king', bn: 'রাজার আদেশে', ar: 'بأمر الملك' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"...then I breathe into it and it becomes a bird by permission of Allah. And I cure the blind and the leper, and I give life to the dead — by permission of Allah." [Quran 3:49]',
      bn: '"...তারপর তাতে ফুঁ দিই, আর তা আল্লাহর অনুমতিতে পাখি হয়ে যায়। আমি জন্মান্ধ ও কুষ্ঠরোগীকে সুস্থ করি এবং আল্লাহর অনুমতিতে মৃতকে জীবিত করি।" [কুরআন ৩:৪৯]',
      ar: '"فَأَنفُخُ فِيهِ فَيَكُونُ طَيْرًا بِإِذْنِ اللَّهِ ۖ وَأُبْرِئُ الْأَكْمَهَ وَالْأَبْرَصَ وَأُحْيِي الْمَوْتَىٰ بِإِذْنِ اللَّهِ" [آل عمران: 49]',
    },
  },
  {
    id: 'isa-q5',
    question: {
      en: 'What was the central message Isa (AS) gave to the Children of Israel?',
      bn: 'বনী ইসরাঈলকে দেওয়া ঈসা (আ.)-এর মূল বার্তা কী ছিল?',
      ar: 'ما الرسالة الأساسية التي دعا إليها عيسى عليه السلام بني إسرائيل؟',
    },
    options: [
      { en: '"Worship me and my mother"', bn: '"আমার ও আমার মায়ের ইবাদত করো"', ar: '"اعبدوني أنا وأمي"' },
      { en: '"Leave the Torah completely"', bn: '"তাওরাত পুরোপুরি ছেড়ে দাও"', ar: '"اتركوا التوراة كلياً"' },
      { en: '"Gather wealth for the Temple"', bn: '"মসজিদের জন্য সম্পদ জমাও"', ar: '"اجمعوا المال للمعبد"' },
      { en: '"Indeed, Allah is my Lord and your Lord, so worship Him"', bn: '"নিশ্চয়ই আল্লাহ আমার রব এবং তোমাদের রব, সুতরাং তাঁর ইবাদত করো"', ar: '"إن الله ربي وربكم فاعبدوه"' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"Indeed, Allah is my Lord and your Lord, so worship Him. That is a straight path." [Quran 3:51]',
      bn: '"নিশ্চয়ই আল্লাহ আমার রব এবং তোমাদের রব, সুতরাং তাঁর ইবাদত করো। এটাই সরল পথ।" [কুরআন ৩:৫১]',
      ar: '"إِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ ۗ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ" [آل عمران: 51]',
    },
  },
  {
    id: 'isa-q6',
    question: {
      en: 'When Isa (AS) asked, "Who are my supporters for Allah?", what did the disciples answer?',
      bn: 'ঈসা (আ.) যখন জিজ্ঞেস করলেন, "আল্লাহর পথে কারা আমার সাহায্যকারী?" — হাওয়ারীরা কী উত্তর দিলেন?',
      ar: 'حين قال عيسى عليه السلام: "من أنصاري إلى الله؟" بماذا أجاب الحواريون؟',
    },
    options: [
      { en: '"We need more miracles first"', bn: '"আগে আমাদের আরও মুজিযা দরকার"', ar: '"نحتاج إلى معجزات أكثر أولاً"' },
      { en: '"We will think about it"', bn: '"আমরা ভেবে দেখব"', ar: '"سنفكّر في الأمر"' },
      { en: '"We are supporters for Allah. We have believed in Allah"', bn: '"আমরা আল্লাহর সাহায্যকারী। আমরা আল্লাহর প্রতি ঈমান এনেছি"', ar: '"نحن أنصار الله، آمنّا بالله"' },
      { en: '"Ask the priests instead"', bn: '"বরং পুরোহিতদের জিজ্ঞেস করুন"', ar: '"اسأل الأحبار بدلاً منا"' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"The disciples said, \'We are supporters for Allah. We have believed in Allah and testify that we are Muslims [submitting to Him].\'" [Quran 3:52]',
      bn: '"হাওয়ারীরা বলল, \'আমরা আল্লাহর সাহায্যকারী। আমরা আল্লাহর প্রতি ঈমান এনেছি, আর তুমি সাক্ষী থাকো যে আমরা মুসলিম।\'" [কুরআন ৩:৫২]',
      ar: '"قَالَ الْحَوَارِيُّونَ نَحْنُ أَنصَارُ اللَّهِ آمَنَّا بِاللَّهِ وَاشْهَدْ بِأَنَّا مُسْلِمُونَ" [آل عمران: 52]',
    },
  },
  {
    id: 'isa-q7',
    question: {
      en: 'According to the Quran, what happened when the disbelievers plotted against Isa (AS)?',
      bn: 'কুরআন অনুযায়ী অবিশ্বাসীরা যখন ঈসা (আ.)-এর বিরুদ্ধে ষড়যন্ত্র করল, তখন কী হয়েছিল?',
      ar: 'بحسب القرآن، ماذا حدث حين مكر الكافرون بعيسى عليه السلام؟',
    },
    options: [
      { en: 'They did not kill him nor crucify him; Allah raised him to Himself', bn: 'তারা তাঁকে হত্যা করেনি, ক্রুশবিদ্ধও করেনি; আল্লাহ তাঁকে নিজের কাছে তুলে নিয়েছেন', ar: 'ما قتلوه وما صلبوه، بل رفعه الله إليه' },
      { en: 'They killed him', bn: 'তারা তাঁকে হত্যা করেছিল', ar: 'قتلوه' },
      { en: 'He escaped by ship to a far land', bn: 'তিনি জাহাজে করে দূর দেশে পালিয়ে যান', ar: 'هرب بسفينة إلى أرض بعيدة' },
      { en: 'He hid in a cave until old age', bn: 'বৃদ্ধ বয়স পর্যন্ত এক গুহায় লুকিয়ে ছিলেন', ar: 'اختبأ في كهف حتى شاخ' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And they did not kill him, nor did they crucify him; but [another] was made to resemble him to them... Rather, Allah raised him to Himself." [Quran 4:157-158]',
      bn: '"অথচ তারা তাকে হত্যা করেনি এবং তাকে ক্রুশবিদ্ধও করেনি; বরং তাদের কাছে সদৃশ করা হয়েছিল... বরং আল্লাহ তাকে নিজের কাছে তুলে নিয়েছেন।" [কুরআন ৪:১৫৭-১৫৮]',
      ar: '"وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ ۚ ... بَل رَّفَعَهُ اللَّهُ إِلَيْهِ" [النساء: 157-158]',
    },
  },
];

export default quiz;
