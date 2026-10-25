import type { Lesson } from '../../../types/prophet';

const lessons: Lesson[] = [
  {
    id: 'nuh-lesson-1',
    title: {
      en: 'Patience in Calling to Good',
      bn: 'ভালোর দিকে ডাকতে ধৈর্য',
      ar: 'الصبر في الدعوة إلى الخير',
    },
    description: {
      en: 'Nuh called his people for nine hundred and fifty years without giving up. When we advise family or friends and they do not listen at first, we keep being kind and keep trying, and leave the results to Allah.',
      bn: 'নূহ (আ.) সাড়ে নয়শো বছর ধরে হাল না ছেড়ে তাঁর জাতিকে ডেকেছেন। পরিবার বা বন্ধুদের ভালো কথা বললে তারা প্রথমে না শুনলেও আমরা নরম থাকব, চেষ্টা চালিয়ে যাব, আর ফলাফল আল্লাহর হাতে ছেড়ে দেব।',
      ar: 'دعا نوح عليه السلام قومه تسعمئة وخمسين سنة دون أن ييأس. فإذا نصحنا أهلنا أو أصدقاءنا فلم يستجيبوا أول الأمر، نبقى لطفاء ونواصل المحاولة، ونترك النتائج لله.',
    },
    references: [
      {
        type: 'quran',
        surah: 29,
        surahName: { en: 'Al-Ankabut', bn: 'আল-আনকাবুত', ar: 'العنكبوت' },
        ayahStart: 14,
        translation: {
          en: 'And We certainly sent Nuh to his people, and he remained among them a thousand years minus fifty years, and the flood seized them while they were wrongdoers.',
          bn: 'আমি নূহকে তাঁর জাতির কাছে পাঠিয়েছিলাম এবং সে তাদের মধ্যে পঞ্চাশ কম এক হাজার বছর অবস্থান করেছিল। অতঃপর তাদেরকে প্লাবন গ্রাস করল, তারা ছিল জালিম।',
          ar: 'وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ',
        },
      },
    ],
  },
  {
    id: 'nuh-lesson-2',
    title: {
      en: 'Seeking Forgiveness Opens Doors of Blessing',
      bn: 'ইস্তিগফার বরকতের দরজা খুলে দেয়',
      ar: 'الاستغفار يفتح أبواب البركة',
    },
    description: {
      en: 'Nuh told his people that asking Allah\'s forgiveness would bring rain, wealth, children, gardens and rivers. Making istighfar a daily habit cleans the heart and brings good into our lives.',
      bn: 'নূহ (আ.) তাঁর জাতিকে বলেছিলেন, আল্লাহর কাছে ক্ষমা চাইলে তিনি বৃষ্টি, সম্পদ, সন্তান, বাগান আর নদী দেবেন। প্রতিদিন ইস্তিগফারের অভ্যাস মনকে পরিষ্কার রাখে এবং জীবনে কল্যাণ নিয়ে আসে।',
      ar: 'أخبر نوح عليه السلام قومه أن الاستغفار يجلب المطر والمال والأولاد والجنات والأنهار. فجعل الاستغفار عادة يومية يطهّر القلب ويجلب الخير إلى حياتنا.',
    },
    references: [
      {
        type: 'quran',
        surah: 71,
        surahName: { en: 'Nuh', bn: 'নূহ', ar: 'نوح' },
        ayahStart: 10,
        ayahEnd: 12,
        translation: {
          en: 'And said, "Ask forgiveness of your Lord. Indeed, He is ever a Perpetual Forgiver. He will send rain to you in abundance, and give you increase in wealth and children, and provide for you gardens and provide for you rivers."',
          bn: 'এবং বললাম, "তোমাদের রবের কাছে ক্ষমা চাও। নিশ্চয়ই তিনি মহা ক্ষমাশীল। তিনি তোমাদের উপর মুষলধারে বৃষ্টি বর্ষণ করবেন, তোমাদের ধন-সম্পদ ও সন্তান-সন্ততি বাড়িয়ে দেবেন এবং তোমাদের জন্য বাগান ও নদী সৃষ্টি করবেন।"',
          ar: 'فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ وَيَجْعَل لَّكُمْ جَنَّاتٍ وَيَجْعَل لَّكُمْ أَنْهَارًا',
        },
      },
    ],
  },
  {
    id: 'nuh-lesson-3',
    title: {
      en: 'Faith, Not Family Ties, Saves a Person',
      bn: 'বংশ নয়, ঈমানই মানুষকে বাঁচায়',
      ar: 'الإيمان لا النسب هو ما ينجّي',
    },
    description: {
      en: 'Even the son of a prophet was not saved because he refused to believe. Allah told Nuh, "He is not of your family; his work was other than righteous." Each of us must build our own faith and good deeds — no one else can do it for us.',
      bn: 'নবীর ছেলে হয়েও সে বাঁচেনি, কারণ সে ঈমান আনতে রাজি হয়নি। আল্লাহ নূহ (আ.)-কে বললেন, "সে তোমার পরিবারের নয়; তার কাজ ছিল অসৎ।" আমাদের প্রত্যেককে নিজের ঈমান আর নেক আমল নিজেকেই গড়তে হবে — অন্য কেউ তা করে দিতে পারবে না।',
      ar: 'حتى ابن النبي لم ينجُ لأنه رفض الإيمان. وقال الله لنوح: "إنه ليس من أهلك، إنه عمل غير صالح." فعلى كل واحد منا أن يبني إيمانه وعمله الصالح بنفسه، ولا يستطيع أحد أن يفعل ذلك عنه.',
    },
    references: [
      {
        type: 'quran',
        surah: 11,
        surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
        ayahStart: 45,
        ayahEnd: 46,
        translation: {
          en: 'And Nuh called to his Lord and said, "My Lord, indeed my son is of my family; and indeed, Your promise is true; and You are the most just of judges!" He said, "O Nuh, indeed he is not of your family; indeed, he is one whose work was other than righteous, so ask Me not for that about which you have no knowledge."',
          bn: 'নূহ তাঁর রবকে ডেকে বলল, "হে আমার রব, আমার পুত্র তো আমার পরিবারের; আর আপনার প্রতিশ্রুতি সত্য; আর আপনি বিচারকদের মধ্যে শ্রেষ্ঠ বিচারক!" তিনি বললেন, "হে নূহ, সে তোমার পরিবারের নয়; তার কাজ ছিল অসৎ। সুতরাং আমাকে এমন বিষয়ে জিজ্ঞাসা করো না যে বিষয়ে তোমার জ্ঞান নেই।"',
          ar: 'وَنَادَىٰ نُوحٌ رَّبَّهُ فَقَالَ رَبِّ إِنَّ ابْنِي مِنْ أَهْلِي وَإِنَّ وَعْدَكَ الْحَقُّ وَأَنتَ أَحْكَمُ الْحَاكِمِينَ قَالَ يَا نُوحُ إِنَّهُ لَيْسَ مِنْ أَهْلِكَ ۖ إِنَّهُ عَمَلٌ غَيْرُ صَالِحٍ',
        },
      },
    ],
  },
  {
    id: 'nuh-lesson-4',
    title: {
      en: 'Truth Is Not Decided by the Majority',
      bn: 'সত্য সংখ্যাগরিষ্ঠতা দিয়ে নির্ধারিত হয় না',
      ar: 'الحق لا يُعرف بكثرة أتباعه',
    },
    description: {
      en: 'After centuries of preaching, only a few believed with Nuh — yet they were the ones who were saved. Doing what is right matters more than following the crowd, even when we feel alone.',
      bn: 'শত শত বছর দাওয়াতের পরও নূহ (আ.)-এর সাথে অল্প কয়েকজনই ঈমান এনেছিলেন — অথচ তাঁরাই রক্ষা পেয়েছিলেন। নিজেকে একা মনে হলেও ভিড়ের পেছনে না ছুটে সঠিক কাজটা করাই বেশি জরুরি।',
      ar: 'بعد قرون من الدعوة لم يؤمن مع نوح إلا قليل، ومع ذلك كانوا هم الناجين. ففعل الصواب أهم من اتباع الكثرة، حتى لو شعرنا بأننا وحدنا.',
    },
    references: [
      {
        type: 'quran',
        surah: 11,
        surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
        ayahStart: 40,
        translation: {
          en: 'Until when Our command came and the oven overflowed, We said, "Load upon the ship of each creature two mates and your family, except those about whom the word has preceded, and include whoever has believed." But none had believed with him, except a few.',
          bn: 'অবশেষে যখন আমার আদেশ এলো এবং চুলা উথলে উঠল, আমি বললাম, "নৌকায় প্রতিটি প্রাণীর এক জোড়া এবং তোমার পরিবার — যাদের বিরুদ্ধে পূর্বে সিদ্ধান্ত হয়েছে তারা ব্যতীত — এবং যারা ঈমান এনেছে তাদের তুলে নাও।" কিন্তু অল্প কয়েকজন ছাড়া তাঁর সাথে কেউ ঈমান আনেনি।',
          ar: 'حَتَّىٰ إِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ قُلْنَا احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ وَأَهْلَكَ إِلَّا مَن سَبَقَ عَلَيْهِ الْقَوْلُ وَمَنْ آمَنَ ۚ وَمَا آمَنَ مَعَهُ إِلَّا قَلِيلٌ',
        },
      },
    ],
  },
  {
    id: 'nuh-lesson-5',
    title: {
      en: 'Be a Grateful Servant',
      bn: 'কৃতজ্ঞ বান্দা হও',
      ar: 'كن عبداً شكوراً',
    },
    description: {
      en: 'Out of everything in Nuh\'s long life, Allah praised him as "a grateful servant". Thanking Allah in hard times and easy times — with our tongue and our actions — is a quality Allah loves.',
      bn: 'নূহ (আ.)-এর দীর্ঘ জীবনের সবকিছুর মধ্যে আল্লাহ তাঁকে প্রশংসা করেছেন "কৃতজ্ঞ বান্দা" বলে। সুখে-দুঃখে মুখে ও কাজে আল্লাহর শুকরিয়া আদায় করা এমন একটি গুণ, যা আল্লাহ ভালোবাসেন।',
      ar: 'من بين كل ما في حياة نوح الطويلة، أثنى الله عليه بأنه "عبد شكور". فشكر الله في الشدة والرخاء، بألسنتنا وأعمالنا، صفة يحبها الله.',
    },
    references: [
      {
        type: 'quran',
        surah: 17,
        surahName: { en: 'Al-Isra', bn: 'আল-ইসরা', ar: 'الإسراء' },
        ayahStart: 3,
        translation: {
          en: 'O descendants of those We carried [in the ship] with Nuh. Indeed, he was a grateful servant.',
          bn: 'হে তাদের বংশধর যাদেরকে আমি নূহের সাথে [নৌকায়] বহন করেছিলাম। নিশ্চয়ই তিনি ছিলেন কৃতজ্ঞ বান্দা।',
          ar: 'ذُرِّيَّةَ مَنْ حَمَلْنَا مَعَ نُوحٍ ۚ إِنَّهُ كَانَ عَبْدًا شَكُورًا',
        },
      },
    ],
  },
];

export default lessons;
