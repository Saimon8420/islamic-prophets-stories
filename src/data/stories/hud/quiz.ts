import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'hud-q1',
    question: {
      en: 'To which people did Allah send Hud (AS)?',
      bn: 'আল্লাহ হুদ (আ.)-কে কোন জাতির কাছে পাঠিয়েছিলেন?',
      ar: 'إلى أي قوم أرسل الله هوداً عليه السلام؟',
    },
    options: [
      { en: 'Thamud', bn: 'সামূদ', ar: 'ثمود' },
      { en: 'The people of Madyan', bn: 'মাদইয়ানবাসী', ar: 'أهل مدين' },
      { en: '\'Ad', bn: 'আদ', ar: 'عاد' },
      { en: 'The people of Lut', bn: 'লূতের জাতি', ar: 'قوم لوط' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And to \'Ad [We sent] their brother Hud. He said, \'O my people, worship Allah; you have no deity other than Him.\'" [Quran 11:50]',
      bn: '"আর আদ জাতির কাছে তাদের ভাই হুদকে পাঠালাম। সে বলল, \'হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই।\'" [কুরআন ১১:৫০]',
      ar: '"وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ" [هود: 50]',
    },
  },
  {
    id: 'hud-q2',
    question: {
      en: 'What did the people of \'Ad boast about themselves?',
      bn: 'আদ জাতি নিজেদের নিয়ে কী বলে অহংকার করত?',
      ar: 'بماذا تفاخر قوم عاد؟',
    },
    options: [
      { en: '"Who is greater than us in strength?"', bn: '"আমাদের চেয়ে শক্তিশালী কে?"', ar: '"مَنْ أَشَدُّ مِنَّا قُوَّةً"' },
      { en: '"We have the largest ships"', bn: '"আমাদের জাহাজই সবচেয়ে বড়"', ar: '"سفننا هي الأكبر"' },
      { en: '"We have the most gold"', bn: '"আমাদের কাছেই সবচেয়ে বেশি সোনা"', ar: '"عندنا أكثر الذهب"' },
      { en: '"We are the oldest nation"', bn: '"আমরাই সবচেয়ে পুরোনো জাতি"', ar: '"نحن أقدم الأمم"' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"As for \'Ad, they were arrogant upon the earth without right and said, \'Who is greater than us in strength?\' Did they not consider that Allah who created them was greater than them in strength?" [Quran 41:15]',
      bn: '"আর আদ — তারা পৃথিবীতে অন্যায়ভাবে অহংকার করেছিল এবং বলেছিল, \'আমাদের চেয়ে শক্তিশালী কে?\' তারা কি দেখেনি যে যিনি তাদের সৃষ্টি করেছেন তিনি তাদের চেয়ে অনেক বেশি শক্তিশালী?" [কুরআন ৪১:১৫]',
      ar: '"فَأَمَّا عَادٌ فَاسْتَكْبَرُوا فِي الْأَرْضِ بِغَيْرِ الْحَقِّ وَقَالُوا مَنْ أَشَدُّ مِنَّا قُوَّةً ۖ أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَهُمْ هُوَ أَشَدُّ مِنْهُمْ قُوَّةً" [فصلت: 15]',
    },
  },
  {
    id: 'hud-q3',
    question: {
      en: 'What reward did Hud (AS) ask from his people for his message?',
      bn: 'বার্তা পৌঁছানোর বিনিময়ে হুদ (আ.) তাঁর জাতির কাছে কী চেয়েছিলেন?',
      ar: 'ما الأجر الذي طلبه هود عليه السلام من قومه على رسالته؟',
    },
    options: [
      { en: 'A share of their crops', bn: 'তাদের ফসলের একটি অংশ', ar: 'نصيباً من زروعهم' },
      { en: 'To be made their king', bn: 'তাঁকে রাজা বানানো', ar: 'أن يجعلوه ملكاً عليهم' },
      { en: 'A palace in Iram', bn: 'ইরামে একটি প্রাসাদ', ar: 'قصراً في إرم' },
      { en: 'Nothing — his reward was only from Allah who created him', bn: 'কিছুই না — তাঁর প্রতিদান কেবল আল্লাহর কাছে, যিনি তাঁকে সৃষ্টি করেছেন', ar: 'لا شيء — أجره على الذي فطره' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"O my people, I do not ask you for any reward. My reward is only from the One who created me. Then will you not reason?" [Quran 11:51]',
      bn: '"হে আমার জাতি, আমি তোমাদের কাছে কোনো পারিশ্রমিক চাই না। আমার পুরস্কার কেবল তাঁর কাছে যিনি আমাকে সৃষ্টি করেছেন। তোমরা কি বুঝবে না?" [কুরআন ১১:৫১]',
      ar: '"يَا قَوْمِ لَا أَسْأَلُكُمْ عَلَيْهِ أَجْرًا ۖ إِنْ أَجْرِيَ إِلَّا عَلَى الَّذِي فَطَرَنِي ۚ أَفَلَا تَعْقِلُونَ" [هود: 51]',
    },
  },
  {
    id: 'hud-q4',
    question: {
      en: 'What did Hud (AS) promise his people if they sought Allah\'s forgiveness and repented?',
      bn: 'হুদ (আ.) বলেছিলেন, তারা ক্ষমা চাইলে ও তওবা করলে আল্লাহ কী দেবেন?',
      ar: 'بماذا وعد هود عليه السلام قومه إن استغفروا ربهم وتابوا إليه؟',
    },
    options: [
      { en: 'Ships to cross the sea', bn: 'সাগর পাড়ি দেওয়ার জাহাজ', ar: 'سفناً لعبور البحر' },
      { en: 'Abundant rain and more strength added to their strength', bn: 'মুষলধারে বৃষ্টি এবং তাদের শক্তির সাথে আরও শক্তি', ar: 'المطر الغزير وقوة إلى قوتهم' },
      { en: 'Victory over the people of Nuh', bn: 'নূহের জাতির ওপর বিজয়', ar: 'النصر على قوم نوح' },
      { en: 'Taller buildings', bn: 'আরও উঁচু দালান', ar: 'أبنية أعلى' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And O my people, ask forgiveness of your Lord and then repent to Him. He will send [rain from] the sky upon you in showers and increase you in strength added to your strength." [Quran 11:52]',
      bn: '"হে আমার জাতি, তোমাদের রবের কাছে ক্ষমা চাও এবং তাঁর কাছে তওবা করো। তিনি তোমাদের উপর আকাশ থেকে মুষলধারে বৃষ্টি পাঠাবেন এবং তোমাদের শক্তির সাথে আরও শক্তি বাড়িয়ে দেবেন।" [কুরআন ১১:৫২]',
      ar: '"وَيَا قَوْمِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا وَيَزِدْكُمْ قُوَّةً إِلَىٰ قُوَّتِكُمْ" [هود: 52]',
    },
  },
  {
    id: 'hud-q5',
    question: {
      en: 'What did the people of \'Ad think when they saw the cloud approaching their valleys?',
      bn: 'আদ জাতি যখন দেখল মেঘ তাদের উপত্যকার দিকে আসছে, তারা কী ভেবেছিল?',
      ar: 'ماذا ظن قوم عاد حين رأوا السحاب مقبلاً نحو أوديتهم؟',
    },
    options: [
      { en: 'That it was smoke from a fire', bn: 'এটা আগুনের ধোঁয়া', ar: 'أنه دخان نار' },
      { en: 'That an army was coming', bn: 'একটি সেনাবাহিনী আসছে', ar: 'أن جيشاً قادم' },
      { en: 'That it was a cloud bringing them rain', bn: 'এটা বৃষ্টি নিয়ে আসা মেঘ', ar: 'أنه عارض ممطرهم' },
      { en: 'That it was a sign from Hud', bn: 'এটা হুদের কোনো নিদর্শন', ar: 'أنه آية من هود' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"Then when they saw it as a cloud approaching their valleys, they said, \'This is a cloud bringing us rain.\' Rather, it is that for which you were impatient — a wind within it is a painful punishment." [Quran 46:24]',
      bn: '"অতঃপর যখন তারা দেখল মেঘমালা তাদের উপত্যকার দিকে এগিয়ে আসছে, তারা বলল, \'এটা তো মেঘ, আমাদের বৃষ্টি দেবে।\' বরং এটা তো সেই জিনিস যা তোমরা তাড়াতাড়ি চাইছিলে — এতে আছে বেদনাদায়ক শাস্তির ঝড়।" [কুরআন ৪৬:২৪]',
      ar: '"فَلَمَّا رَأَوْهُ عَارِضًا مُّسْتَقْبِلَ أَوْدِيَتِهِمْ قَالُوا هَٰذَا عَارِضٌ مُّمْطِرُنَا ۚ بَلْ هُوَ مَا اسْتَعْجَلْتُم بِهِ ۖ رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ" [الأحقاف: 24]',
    },
  },
  {
    id: 'hud-q6',
    question: {
      en: 'For how long did the furious wind blow upon \'Ad?',
      bn: 'আদ জাতির ওপর প্রচণ্ড বাতাস কতদিন ধরে বয়েছিল?',
      ar: 'كم دامت الريح الصرصر العاتية على عاد؟',
    },
    options: [
      { en: 'Three days', bn: 'তিন দিন', ar: 'ثلاثة أيام' },
      { en: 'Forty days', bn: 'চল্লিশ দিন', ar: 'أربعين يوماً' },
      { en: 'One night', bn: 'এক রাত', ar: 'ليلة واحدة' },
      { en: 'Seven nights and eight days', bn: 'সাত রাত ও আট দিন', ar: 'سبع ليال وثمانية أيام' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And as for \'Ad, they were destroyed by a screaming, violent wind which Allah imposed upon them for seven nights and eight days in succession." [Quran 69:6-7]',
      bn: '"আর আদ — তাদের ধ্বংস করা হয়েছিল প্রচণ্ড ঝড়ো বাতাস দিয়ে যা আল্লাহ তাদের উপর চাপিয়ে দিয়েছিলেন একটানা সাত রাত আট দিন।" [কুরআন ৬৯:৬-৭]',
      ar: '"وَأَمَّا عَادٌ فَأُهْلِكُوا بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ سَخَّرَهَا عَلَيْهِمْ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ حُسُومًا" [الحاقة: 6-7]',
    },
  },
  {
    id: 'hud-q7',
    question: {
      en: 'What was the city of \'Ad known for, according to Surah Al-Fajr?',
      bn: 'সূরা আল-ফজর অনুযায়ী আদ জাতির ইরাম কিসের জন্য বিখ্যাত ছিল?',
      ar: 'بماذا وُصفت إرم مدينة عاد في سورة الفجر؟',
    },
    options: [
      { en: 'Its great harbour', bn: 'বিশাল বন্দর', ar: 'مرفئها العظيم' },
      { en: 'Lofty pillars, unlike anything created in the land', bn: 'সুউচ্চ স্তম্ভ, যার মতো কোনো দেশে সৃষ্টি হয়নি', ar: 'ذات العماد التي لم يُخلق مثلها في البلاد' },
      { en: 'Homes carved out of mountains', bn: 'পাহাড় কেটে বানানো ঘর', ar: 'بيوت منحوتة في الجبال' },
      { en: 'Gardens hanging from its walls', bn: 'দেয়াল থেকে ঝুলন্ত বাগান', ar: 'حدائق معلقة على أسوارها' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"Have you not considered how your Lord dealt with \'Ad — [with] Iram, who had lofty pillars, the likes of whom had never been created in the land?" [Quran 89:6-8]',
      bn: '"তুমি কি দেখনি তোমার রব কী করেছিলেন আদ জাতির সাথে — ইরামের সাথে, যাদের ছিল সুউচ্চ স্তম্ভ, যাদের মতো কোনো দেশে সৃষ্টি হয়নি?" [কুরআন ৮৯:৬-৮]',
      ar: '"أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ إِرَمَ ذَاتِ الْعِمَادِ الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ" [الفجر: 6-8]',
    },
  },
];

export default quiz;
