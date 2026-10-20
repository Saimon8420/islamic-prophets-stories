import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'nuh-q1',
    question: {
      en: 'How long did Nuh (AS) remain among his people, calling them to Allah?',
      bn: 'নূহ (আ.) তাঁর জাতির মধ্যে কত বছর অবস্থান করে তাদের আল্লাহর দিকে ডেকেছিলেন?',
      ar: 'كم لبث نوح عليه السلام في قومه يدعوهم إلى الله؟',
    },
    options: [
      { en: '500 years', bn: '৫০০ বছর', ar: 'خمسمئة سنة' },
      { en: 'A thousand years minus fifty (950 years)', bn: 'পঞ্চাশ কম এক হাজার বছর (৯৫০ বছর)', ar: 'ألف سنة إلا خمسين عاماً' },
      { en: 'A full thousand years', bn: 'পুরো এক হাজার বছর', ar: 'ألف سنة كاملة' },
      { en: '120 years', bn: '১২০ বছর', ar: 'مئة وعشرين سنة' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And We certainly sent Nuh to his people, and he remained among them a thousand years minus fifty years." [Quran 29:14]',
      bn: '"আমি নূহকে তাঁর জাতির কাছে পাঠিয়েছিলাম এবং সে তাদের মধ্যে পঞ্চাশ কম এক হাজার বছর অবস্থান করেছিল।" [কুরআন ২৯:১৪]',
      ar: '"وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا" [العنكبوت: 14]',
    },
  },
  {
    id: 'nuh-q2',
    question: {
      en: 'What did Nuh\'s people do whenever he invited them so that Allah would forgive them?',
      bn: 'নূহ (আ.) যখনই তাঁর জাতিকে ক্ষমার দিকে ডাকতেন, তারা কী করত?',
      ar: 'ماذا كان قوم نوح يفعلون كلما دعاهم ليغفر الله لهم؟',
    },
    options: [
      { en: 'They listened and believed', bn: 'তারা শুনত ও ঈমান আনত', ar: 'كانوا يستمعون ويؤمنون' },
      { en: 'They asked him for a miracle', bn: 'তারা তাঁর কাছে মুজিযা চাইত', ar: 'كانوا يطلبون منه معجزة' },
      { en: 'They put their fingers in their ears and covered themselves with their garments', bn: 'তারা কানে আঙুল দিত এবং কাপড়ে নিজেদের ঢেকে নিত', ar: 'جعلوا أصابعهم في آذانهم واستغشوا ثيابهم' },
      { en: 'They left the city', bn: 'তারা শহর ছেড়ে চলে যেত', ar: 'كانوا يغادرون المدينة' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"Every time I invited them that You may forgive them, they put their fingers in their ears, covered themselves with their garments, persisted, and were arrogant with great arrogance." [Quran 71:7]',
      bn: '"আমি যখনই তাদের ডেকেছি যাতে আপনি তাদের ক্ষমা করেন, তারা কানে আঙুল দিয়েছে, কাপড়ে নিজেদের ঢেকে নিয়েছে, অবাধ্যতায় অটল থেকেছে এবং চরম অহংকার করেছে।" [কুরআন ৭১:৭]',
      ar: '"وَإِنِّي كُلَّمَا دَعَوْتُهُمْ لِتَغْفِرَ لَهُمْ جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ وَاسْتَغْشَوْا ثِيَابَهُمْ وَأَصَرُّوا وَاسْتَكْبَرُوا اسْتِكْبَارًا" [نوح: 7]',
    },
  },
  {
    id: 'nuh-q3',
    question: {
      en: 'What did the chiefs of Nuh\'s people do when they passed by him building the ship?',
      bn: 'নূহ (আ.) যখন নৌকা বানাচ্ছিলেন, তাঁর জাতির নেতারা পাশ দিয়ে যাওয়ার সময় কী করত?',
      ar: 'ماذا كان يفعل الملأ من قوم نوح حين يمرّون به وهو يصنع الفلك؟',
    },
    options: [
      { en: 'They ridiculed him', bn: 'তারা তাঁকে নিয়ে ঠাট্টা করত', ar: 'كانوا يسخرون منه' },
      { en: 'They helped him build it', bn: 'তারা তাঁকে নৌকা বানাতে সাহায্য করত', ar: 'كانوا يساعدونه في صنعها' },
      { en: 'They asked to board it', bn: 'তারা নৌকায় উঠতে চাইত', ar: 'كانوا يطلبون ركوبها' },
      { en: 'They paid him for it', bn: 'তারা এর জন্য তাঁকে টাকা দিত', ar: 'كانوا يدفعون له أجراً' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And he constructed the ship, and whenever an assembly of the eminent of his people passed by him, they ridiculed him." [Quran 11:38]',
      bn: '"আর সে নৌকা তৈরি করতে লাগল। যখনই তার জাতির নেতারা তার পাশ দিয়ে যেত, তারা তাকে নিয়ে ঠাট্টা করত।" [কুরআন ১১:৩৮]',
      ar: '"وَيَصْنَعُ الْفُلْكَ وَكُلَّمَا مَرَّ عَلَيْهِ مَلَأٌ مِّن قَوْمِهِ سَخِرُوا مِنْهُ" [هود: 38]',
    },
  },
  {
    id: 'nuh-q4',
    question: {
      en: 'What was Nuh (AS) commanded to load onto the ship?',
      bn: 'নূহ (আ.)-কে নৌকায় কী তুলে নিতে আদেশ করা হয়েছিল?',
      ar: 'بماذا أُمر نوح عليه السلام أن يحمل في السفينة؟',
    },
    options: [
      { en: 'Only his own family', bn: 'শুধু তাঁর নিজের পরিবার', ar: 'أهله فقط' },
      { en: 'All the people of his town', bn: 'তাঁর শহরের সব মানুষ', ar: 'جميع أهل قريته' },
      { en: 'Gold and food for many years', bn: 'বহু বছরের সোনা ও খাবার', ar: 'الذهب والطعام لسنين طويلة' },
      { en: 'Two mates of each creature, his family, and whoever believed', bn: 'প্রতিটি প্রাণীর এক জোড়া, তাঁর পরিবার এবং যারা ঈমান এনেছে', ar: 'من كل زوجين اثنين وأهله ومن آمن' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"Load upon the ship of each creature two mates and your family, except those about whom the word has preceded, and include whoever has believed." But none had believed with him, except a few. [Quran 11:40]',
      bn: '"নৌকায় প্রতিটি প্রাণীর এক জোড়া এবং তোমার পরিবার — যাদের বিরুদ্ধে পূর্বে সিদ্ধান্ত হয়েছে তারা ব্যতীত — এবং যারা ঈমান এনেছে তাদের তুলে নাও।" কিন্তু অল্প কয়েকজন ছাড়া তাঁর সাথে কেউ ঈমান আনেনি। [কুরআন ১১:৪০]',
      ar: '"قُلْنَا احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ وَأَهْلَكَ إِلَّا مَن سَبَقَ عَلَيْهِ الْقَوْلُ وَمَنْ آمَنَ ۚ وَمَا آمَنَ مَعَهُ إِلَّا قَلِيلٌ" [هود: 40]',
    },
  },
  {
    id: 'nuh-q5',
    question: {
      en: 'What did Nuh\'s son say when his father called him to board the ship?',
      bn: 'নূহ (আ.) যখন ছেলেকে নৌকায় উঠতে ডাকলেন, ছেলে কী বলেছিল?',
      ar: 'ماذا قال ابن نوح حين دعاه أبوه إلى ركوب السفينة؟',
    },
    options: [
      { en: '"I will take refuge on a mountain to protect me from the water"', bn: '"আমি একটি পাহাড়ে আশ্রয় নেব, সেটা আমাকে পানি থেকে বাঁচাবে"', ar: '"سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ"' },
      { en: '"I will build my own ship"', bn: '"আমি নিজের নৌকা বানাব"', ar: '"سأصنع سفينتي بنفسي"' },
      { en: '"I will come with you, O my father"', bn: '"আমি আপনার সাথে আসছি, হে আমার পিতা"', ar: '"سآتي معك يا أبتِ"' },
      { en: '"I can swim across the flood"', bn: '"আমি সাঁতরে বন্যা পার হতে পারব"', ar: '"أستطيع أن أسبح في الطوفان"' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'He said, "I will take refuge on a mountain to protect me from the water." Nuh said, "There is no protector today from the decree of Allah, except for whom He gives mercy." [Quran 11:43]',
      bn: 'সে বলল, "আমি একটি পাহাড়ে আশ্রয় নেব, সেটা আমাকে পানি থেকে বাঁচাবে।" নূহ বললেন, "আজ আল্লাহর হুকুম থেকে কোনো রক্ষাকারী নেই, তবে যাকে তিনি দয়া করেন।" [কুরআন ১১:৪৩]',
      ar: '"قَالَ سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ ۚ قَالَ لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللَّهِ إِلَّا مَن رَّحِمَ" [هود: 43]',
    },
  },
  {
    id: 'nuh-q6',
    question: {
      en: 'Where did the ship of Nuh (AS) come to rest after the flood?',
      bn: 'প্লাবনের পর নূহ (আ.)-এর নৌকা কোথায় গিয়ে থেমেছিল?',
      ar: 'أين استقرت سفينة نوح عليه السلام بعد الطوفان؟',
    },
    options: [
      { en: 'Mount Tur (Sinai)', bn: 'তূর পাহাড়', ar: 'جبل الطور' },
      { en: 'Mount Uhud', bn: 'উহুদ পাহাড়', ar: 'جبل أحد' },
      { en: 'Mount Judi', bn: 'জুদী পাহাড়', ar: 'الجودي' },
      { en: 'The hill of Safa', bn: 'সাফা পাহাড়', ar: 'الصفا' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And the water subsided, and the matter was accomplished, and the ship came to rest on [Mount] Judi." [Quran 11:44]',
      bn: '"আর পানি কমে গেল, বিষয়টি সম্পন্ন হলো, এবং নৌকা জুদী পর্বতে স্থির হলো।" [কুরআন ১১:৪৪]',
      ar: '"وَغِيضَ الْمَاءُ وَقُضِيَ الْأَمْرُ وَاسْتَوَتْ عَلَى الْجُودِيِّ" [هود: 44]',
    },
  },
  {
    id: 'nuh-q7',
    question: {
      en: 'How does Allah describe Nuh (AS) in Surah Al-Isra?',
      bn: 'সূরা আল-ইসরায় আল্লাহ নূহ (আ.)-কে কীভাবে বর্ণনা করেছেন?',
      ar: 'بماذا وصف الله نوحاً عليه السلام في سورة الإسراء؟',
    },
    options: [
      { en: 'A mighty king', bn: 'এক শক্তিশালী রাজা', ar: 'ملكاً عظيماً' },
      { en: 'A skilled sailor', bn: 'এক দক্ষ নাবিক', ar: 'بحّاراً ماهراً' },
      { en: 'A wealthy merchant', bn: 'এক ধনী ব্যবসায়ী', ar: 'تاجراً غنياً' },
      { en: 'A grateful servant', bn: 'এক কৃতজ্ঞ বান্দা', ar: 'عبداً شكوراً' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"O descendants of those We carried [in the ship] with Nuh. Indeed, he was a grateful servant." [Quran 17:3]',
      bn: '"হে তাদের বংশধর যাদেরকে আমি নূহের সাথে [নৌকায়] বহন করেছিলাম। নিশ্চয়ই তিনি ছিলেন কৃতজ্ঞ বান্দা।" [কুরআন ১৭:৩]',
      ar: '"ذُرِّيَّةَ مَنْ حَمَلْنَا مَعَ نُوحٍ ۚ إِنَّهُ كَانَ عَبْدًا شَكُورًا" [الإسراء: 3]',
    },
  },
];

export default quiz;
