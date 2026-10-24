import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'sulayman-q1',
    question: {
      en: 'Whose language did Sulayman (AS) say he had been taught?',
      bn: 'সুলাইমান (আ.) বলেছিলেন তাঁকে কাদের ভাষা শেখানো হয়েছে?',
      ar: 'منطق من قال سليمان عليه السلام إنه عُلِّمه؟',
    },
    options: [
      { en: 'The fish', bn: 'মাছের', ar: 'الحيتان' },
      { en: 'The angels', bn: 'ফেরেশতাদের', ar: 'الملائكة' },
      { en: 'The horses', bn: 'ঘোড়ার', ar: 'الخيل' },
      { en: 'The birds', bn: 'পাখির', ar: 'الطير' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And Sulayman inherited Dawud. He said, \'O people, we have been taught the language of birds, and we have been given from all things.\'" [Quran 27:16]',
      bn: '"সুলাইমান দাউদের উত্তরাধিকারী হলেন। তিনি বললেন, \'হে মানুষ, আমাদেরকে পাখির ভাষা শেখানো হয়েছে এবং সবকিছু থেকে আমাদের দান করা হয়েছে।\'" [কুরআন ২৭:১৬]',
      ar: '"وَوَرِثَ سُلَيْمَانُ دَاوُودَ ۖ وَقَالَ يَا أَيُّهَا النَّاسُ عُلِّمْنَا مَنطِقَ الطَّيْرِ وَأُوتِينَا مِن كُلِّ شَيْءٍ" [النمل: 16]',
    },
  },
  {
    id: 'sulayman-q2',
    question: {
      en: 'What did Sulayman (AS) do when he heard the ant warn her colony?',
      bn: 'পিঁপড়াকে তার দলকে সতর্ক করতে শুনে সুলাইমান (আ.) কী করেছিলেন?',
      ar: 'ماذا فعل سليمان عليه السلام حين سمع النملة تحذّر قومها؟',
    },
    options: [
      { en: 'He smiled and prayed to Allah to make him grateful', bn: 'মুচকি হাসলেন এবং কৃতজ্ঞ হওয়ার তাওফিক চেয়ে আল্লাহর কাছে দোয়া করলেন', ar: 'تبسّم ودعا الله أن يوزعه شكر نعمته' },
      { en: 'He ordered the army to march faster', bn: 'বাহিনীকে আরও দ্রুত চলতে আদেশ দিলেন', ar: 'أمر الجيش أن يسرع' },
      { en: 'He became angry with the ant', bn: 'পিঁপড়ার উপর রাগ করলেন', ar: 'غضب من النملة' },
      { en: 'He ignored it and kept walking', bn: 'পাত্তা না দিয়ে হাঁটতে থাকলেন', ar: 'لم يلتفت إليها وواصل السير' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"So he smiled, amused at her speech, and said, \'My Lord, enable me to be grateful for Your favour which You have bestowed upon me and upon my parents...\'" [Quran 27:19]',
      bn: '"তখন তিনি তার কথায় মুচকি হাসলেন এবং বললেন, \'হে আমার রব, আমাকে সামর্থ্য দাও যেন আমি তোমার সেই নেয়ামতের শুকরিয়া আদায় করতে পারি যা তুমি আমাকে ও আমার পিতামাতাকে দান করেছ...\'" [কুরআন ২৭:১৯]',
      ar: '"فَتَبَسَّمَ ضَاحِكًا مِّن قَوْلِهَا وَقَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ" [النمل: 19]',
    },
  },
  {
    id: 'sulayman-q3',
    question: {
      en: 'Which bird was missing when Sulayman (AS) inspected the birds, and later brought news of Saba (Sheba)?',
      bn: 'সুলাইমান (আ.) পাখিদের খোঁজ নেওয়ার সময় কোন পাখি অনুপস্থিত ছিল, যে পরে সাবার খবর নিয়ে এসেছিল?',
      ar: 'أيّ طائر غاب حين تفقّد سليمان عليه السلام الطير، ثم جاء بنبأ سبأ؟',
    },
    options: [
      { en: 'The crow', bn: 'কাক', ar: 'الغراب' },
      { en: 'The dove', bn: 'কবুতর', ar: 'الحمامة' },
      { en: 'The hoopoe', bn: 'হুদহুদ', ar: 'الهدهد' },
      { en: 'The eagle', bn: 'ঈগল', ar: 'النسر' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And he inspected the birds and said, \'Why do I not see the hoopoe — or is he among the absent?\'" [Quran 27:20]',
      bn: '"তিনি পাখিদের পরিদর্শন করলেন এবং বললেন, \'আমি হুদহুদকে দেখছি না কেন — নাকি সে অনুপস্থিতদের মধ্যে আছে?\'" [কুরআন ২৭:২০]',
      ar: '"وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ أَمْ كَانَ مِنَ الْغَائِبِينَ" [النمل: 20]',
    },
  },
  {
    id: 'sulayman-q4',
    question: {
      en: 'What did the hoopoe find the queen of Saba and her people worshipping?',
      bn: 'হুদহুদ সাবার রানি ও তাঁর লোকদের কীসের উপাসনা করতে দেখেছিল?',
      ar: 'ماذا وجد الهدهد ملكة سبأ وقومها يعبدون؟',
    },
    options: [
      { en: 'The moon', bn: 'চাঁদ', ar: 'القمر' },
      { en: 'The sun', bn: 'সূর্য', ar: 'الشمس' },
      { en: 'A golden calf', bn: 'সোনার বাছুর', ar: 'عجلاً من ذهب' },
      { en: 'Fire', bn: 'আগুন', ar: 'النار' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The hoopoe said he found a woman ruling them with a great throne, and that she and her people were prostrating to the sun instead of Allah. [Quran 27:23-24]',
      bn: 'হুদহুদ জানাল, সে দেখেছে একজন নারী তাদের উপর রাজত্ব করছে, যার আছে বিশাল সিংহাসন, আর সে ও তার জাতি আল্লাহকে ছেড়ে সূর্যকে সিজদা করছে। [কুরআন ২৭:২৩-২৪]',
      ar: 'أخبر الهدهد أنه وجد امرأة تملكهم ولها عرش عظيم، ووجدها وقومها يسجدون للشمس من دون الله. [النمل: 23-24]',
    },
  },
  {
    id: 'sulayman-q5',
    question: {
      en: 'With what words did Sulayman\'s letter to the queen begin?',
      bn: 'রানির কাছে পাঠানো সুলাইমানের চিঠি কোন কথা দিয়ে শুরু হয়েছিল?',
      ar: 'بماذا بدأت رسالة سليمان إلى الملكة؟',
    },
    options: [
      { en: '"Surrender or face my army"', bn: '"আত্মসমর্পণ করো, নয়তো আমার বাহিনীর মুখোমুখি হও"', ar: '"استسلمي أو واجهي جيشي"' },
      { en: '"From the greatest king on earth"', bn: '"পৃথিবীর সবচেয়ে বড় রাজার পক্ষ থেকে"', ar: '"من أعظم ملوك الأرض"' },
      { en: '"Send me your treasures"', bn: '"তোমার ধনসম্পদ আমার কাছে পাঠাও"', ar: '"أرسلي إليّ كنوزك"' },
      { en: '"In the name of Allah, the Most Gracious, the Most Merciful"', bn: '"পরম করুণাময় অতি দয়ালু আল্লাহর নামে"', ar: '"بسم الله الرحمن الرحيم"' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"Indeed, it is from Sulayman, and indeed, it reads: \'In the name of Allah, the Most Gracious, the Most Merciful. Be not haughty with me but come to me in submission.\'" [Quran 27:30-31]',
      bn: '"এটি সুলাইমানের পক্ষ থেকে এবং এতে লেখা আছে: \'পরম করুণাময় অতি দয়ালু আল্লাহর নামে। আমার বিরুদ্ধে অহংকার করো না এবং আত্মসমর্পণকারী হয়ে আমার কাছে এসো।\'" [কুরআন ২৭:৩০-৩১]',
      ar: '"إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ" [النمل: 30-31]',
    },
  },
  {
    id: 'sulayman-q6',
    question: {
      en: 'How did the jinn find out that Sulayman (AS) had died?',
      bn: 'জিনেরা কীভাবে জানতে পারল যে সুলাইমান (আ.) মারা গেছেন?',
      ar: 'كيف علم الجن بموت سليمان عليه السلام؟',
    },
    options: [
      { en: 'A creature of the earth ate his staff and he fell', bn: 'মাটির এক কীট তাঁর লাঠি খেয়ে ফেলল এবং তিনি পড়ে গেলেন', ar: 'أكلت دابة الأرض منسأته فخرّ' },
      { en: 'They knew the unseen and sensed it', bn: 'তারা গায়েব জানত, তাই টের পেয়েছিল', ar: 'كانوا يعلمون الغيب فعرفوا' },
      { en: 'The hoopoe told them', bn: 'হুদহুদ তাদের বলে দিয়েছিল', ar: 'أخبرهم الهدهد' },
      { en: 'The wind stopped blowing', bn: 'বাতাস থেমে গিয়েছিল', ar: 'توقفت الريح' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"Nothing indicated to the jinn his death except a creature of the earth eating his staff. But when he fell, it became clear to the jinn that if they had known the unseen, they would not have remained in humiliating punishment." [Quran 34:14]',
      bn: '"জিনদেরকে তাঁর মৃত্যু সম্পর্কে জানাল শুধু মাটির কীট যে তাঁর লাঠি খাচ্ছিল। যখন তিনি পড়ে গেলেন, তখন জিনদের কাছে স্পষ্ট হলো যে, তারা যদি অদৃশ্যের জ্ঞান রাখত, তাহলে অপমানকর শাস্তিতে থাকত না।" [কুরআন ৩৪:১৪]',
      ar: '"مَا دَلَّهُمْ عَلَىٰ مَوْتِهِ إِلَّا دَابَّةُ الْأَرْضِ تَأْكُلُ مِنسَأَتَهُ ۖ فَلَمَّا خَرَّ تَبَيَّنَتِ الْجِنُّ أَن لَّوْ كَانُوا يَعْلَمُونَ الْغَيْبَ مَا لَبِثُوا فِي الْعَذَابِ الْمُهِينِ" [سبأ: 14]',
    },
  },
  {
    id: 'sulayman-q7',
    question: {
      en: 'How far did the wind carry Sulayman (AS) in a single morning?',
      bn: 'এক সকালে বাতাস সুলাইমান (আ.)-কে কতদূর নিয়ে যেত?',
      ar: 'كم كانت تقطع الريح بسليمان عليه السلام في غدوة واحدة؟',
    },
    options: [
      { en: 'A day\'s journey', bn: 'এক দিনের পথ', ar: 'مسيرة يوم' },
      { en: 'A week\'s journey', bn: 'এক সপ্তাহের পথ', ar: 'مسيرة أسبوع' },
      { en: 'A month\'s journey', bn: 'এক মাসের পথ', ar: 'مسيرة شهر' },
      { en: 'A year\'s journey', bn: 'এক বছরের পথ', ar: 'مسيرة سنة' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And to Sulayman [We subjected] the wind — its morning [journey was that of] a month — and its afternoon [journey was that of] a month." [Quran 34:12]',
      bn: '"আর সুলাইমানের অধীন করে দিলাম বাতাসকে, যার সকালের গতি ছিল এক মাসের পথ এবং সন্ধ্যার গতি এক মাসের পথ।" [কুরআন ৩৪:১২]',
      ar: '"وَلِسُلَيْمَانَ الرِّيحَ غُدُوُّهَا شَهْرٌ وَرَوَاحُهَا شَهْرٌ" [سبأ: 12]',
    },
  },
];

export default quiz;
