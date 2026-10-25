import type { Lesson } from '../../../types/prophet';

const lessons: Lesson[] = [
  {
    id: 'hud-lesson-1',
    title: {
      en: 'Strength and Wealth Are No Shield',
      bn: 'শক্তি ও সম্পদ কোনো রক্ষাকবচ নয়',
      ar: 'القوة والثراء ليسا درعاً من أمر الله',
    },
    description: {
      en: '\'Ad asked, "Who is greater than us in strength?" — forgetting that Allah who created them is far stronger. Whatever talents, money or power we have are gifts, and they should make us humble, not proud.',
      bn: 'আদ জাতি বলেছিল, "আমাদের চেয়ে শক্তিশালী কে?" — ভুলে গিয়েছিল যে যিনি তাদের সৃষ্টি করেছেন তিনি অনেক বেশি শক্তিশালী। আমাদের যত মেধা, টাকা বা ক্ষমতাই থাকুক, সবই আল্লাহর দান — এগুলো আমাদের বিনয়ী করার কথা, অহংকারী নয়।',
      ar: 'قالت عاد: "من أشد منا قوة؟" ونسوا أن الله الذي خلقهم أشد منهم قوة. فكل ما عندنا من مواهب أو مال أو سلطة هبة من الله، ينبغي أن تزيدنا تواضعاً لا كبراً.',
    },
    references: [
      {
        type: 'quran',
        surah: 41,
        surahName: { en: 'Fussilat', bn: 'ফুসসিলাত', ar: 'فصلت' },
        ayahStart: 15,
        translation: {
          en: 'As for \'Ad, they were arrogant upon the earth without right and said, "Who is greater than us in strength?" Did they not consider that Allah who created them was greater than them in strength?',
          bn: 'আর আদ — তারা পৃথিবীতে অন্যায়ভাবে অহংকার করেছিল এবং বলেছিল, "আমাদের চেয়ে শক্তিশালী কে?" তারা কি দেখেনি যে যিনি তাদের সৃষ্টি করেছেন তিনি তাদের চেয়ে অনেক বেশি শক্তিশালী?',
          ar: 'فَأَمَّا عَادٌ فَاسْتَكْبَرُوا فِي الْأَرْضِ بِغَيْرِ الْحَقِّ وَقَالُوا مَنْ أَشَدُّ مِنَّا قُوَّةً ۖ أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَهُمْ هُوَ أَشَدُّ مِنْهُمْ قُوَّةً',
        },
      },
    ],
  },
  {
    id: 'hud-lesson-2',
    title: {
      en: 'Repentance Brings Real Strength',
      bn: 'তওবাই আসল শক্তি এনে দেয়',
      ar: 'التوبة مصدر القوة الحقيقية',
    },
    description: {
      en: 'Hud promised that asking Allah\'s forgiveness and turning back to Him would bring rain and "strength added to your strength". When we feel weak or stuck, istighfar and sincere repentance are the first doors to knock on.',
      bn: 'হুদ (আ.) বলেছিলেন, আল্লাহর কাছে ক্ষমা চাইলে আর তাঁর দিকে ফিরে এলে বৃষ্টি আসবে এবং "শক্তির সাথে আরও শক্তি" বাড়বে। যখন নিজেকে দুর্বল বা আটকে পড়া মনে হয়, তখন প্রথমে ইস্তিগফার আর আন্তরিক তওবার দরজায় কড়া নাড়া উচিত।',
      ar: 'وعد هود قومه أن الاستغفار والتوبة يجلبان المطر و"قوة إلى قوتكم". فإذا شعرنا بالضعف أو الحيرة، فأول باب نطرقه هو الاستغفار والتوبة الصادقة.',
    },
    references: [
      {
        type: 'quran',
        surah: 11,
        surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
        ayahStart: 52,
        translation: {
          en: '"And O my people, ask forgiveness of your Lord and then repent to Him. He will send [rain from] the sky upon you in showers and increase you in strength added to your strength."',
          bn: '"হে আমার জাতি, তোমাদের রবের কাছে ক্ষমা চাও এবং তাঁর কাছে তওবা করো। তিনি তোমাদের উপর আকাশ থেকে মুষলধারে বৃষ্টি পাঠাবেন এবং তোমাদের শক্তির সাথে আরও শক্তি বাড়িয়ে দেবেন।"',
          ar: 'وَيَا قَوْمِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا وَيَزِدْكُمْ قُوَّةً إِلَىٰ قُوَّتِكُمْ',
        },
      },
    ],
  },
  {
    id: 'hud-lesson-3',
    title: {
      en: 'Trust in Allah Gives Courage',
      bn: 'আল্লাহর ওপর ভরসা সাহস জোগায়',
      ar: 'التوكل على الله يمنح الشجاعة',
    },
    description: {
      en: 'Facing a whole nation, Hud said, "I have relied upon Allah, my Lord and your Lord. There is no creature but that He holds its forelock." When standing up for what is right feels scary, remembering that everything is in Allah\'s hands gives us calm courage.',
      bn: 'পুরো একটা জাতির সামনে দাঁড়িয়ে হুদ (আ.) বলেছিলেন, "আমি আল্লাহর উপর ভরসা করেছি — আমার রব এবং তোমাদের রব। এমন কোনো জীব নেই যার কপাল তাঁর মুঠোয় নেই।" সত্যের পক্ষে দাঁড়াতে ভয় লাগলে মনে রাখি — সবকিছু আল্লাহর হাতে; এই বিশ্বাসই শান্ত সাহস দেয়।',
      ar: 'وقف هود أمام قومه جميعاً وقال: "إني توكلت على الله ربي وربكم، ما من دابة إلا هو آخذ بناصيتها." فإذا خفنا من قول الحق، فإن تذكّر أن كل شيء بيد الله يمنحنا شجاعة هادئة.',
    },
    references: [
      {
        type: 'quran',
        surah: 11,
        surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
        ayahStart: 54,
        ayahEnd: 56,
        translation: {
          en: '"I call Allah to witness, and you bear witness, that I am free of what you associate with Him. So plot against me all together; then do not give me respite. Indeed, I have relied upon Allah, my Lord and your Lord. There is no creature but that He holds its forelock. Indeed, my Lord is on a path that is straight."',
          bn: '"আমি আল্লাহকে সাক্ষী রাখছি, এবং তোমরাও সাক্ষী থাকো, নিশ্চয়ই তোমরা তাঁর পরিবর্তে যাদের শরীক করো আমি তাদের থেকে মুক্ত। সুতরাং তোমরা সবাই মিলে আমার বিরুদ্ধে ষড়যন্ত্র করো; তারপর আমাকে অবকাশ দিও না। আমি আল্লাহর উপর ভরসা করেছি — আমার রব এবং তোমাদের রব। এমন কোনো জীব নেই যার কপাল তাঁর মুঠোয় নেই। নিশ্চয়ই আমার রব সরল পথে আছেন।"',
          ar: 'إِنِّي أُشْهِدُ اللَّهَ وَاشْهَدُوا أَنِّي بَرِيءٌ مِّمَّا تُشْرِكُونَ مِن دُونِهِ ۖ فَكِيدُونِي جَمِيعًا ثُمَّ لَا تُنظِرُونِ إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم ۚ مَّا مِن دَابَّةٍ إِلَّا هُوَ آخِذٌ بِنَاصِيَتِهَا ۚ إِنَّ رَبِّي عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ',
        },
      },
    ],
  },
  {
    id: 'hud-lesson-4',
    title: {
      en: 'Remember Allah\'s Favours',
      bn: 'আল্লাহর নিয়ামতগুলো মনে রাখো',
      ar: 'تذكّر نعم الله',
    },
    description: {
      en: 'Hud reminded his people to "remember the favours of Allah that you might succeed". Taking a moment each day to count our blessings keeps the heart grateful and protects it from arrogance.',
      bn: 'হুদ (আ.) তাঁর জাতিকে মনে করিয়ে দিয়েছিলেন, "আল্লাহর অনুগ্রহসমূহ স্মরণ করো যাতে তোমরা সফল হতে পারো।" প্রতিদিন একটু সময় নিয়ে নিজের নিয়ামতগুলো গুনে দেখলে মন কৃতজ্ঞ থাকে, অহংকার থেকে বাঁচে।',
      ar: 'ذكّر هود قومه قائلاً: "فاذكروا آلاء الله لعلكم تفلحون." فإن أخذنا لحظة كل يوم نعدّ فيها نعم الله علينا، بقي القلب شاكراً وسلم من الكبر.',
    },
    references: [
      {
        type: 'quran',
        surah: 7,
        surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
        ayahStart: 69,
        translation: {
          en: '"Then do you wonder that there has come to you a reminder from your Lord through a man from among you, that he may warn you? And remember when He made you successors after the people of Nuh and increased you in stature extensively. So remember the favours of Allah that you might succeed."',
          bn: '"তোমরা কি আশ্চর্য হচ্ছ যে তোমাদের রবের পক্ষ থেকে তোমাদের মধ্য থেকেই একজনের মাধ্যমে তোমাদের কাছে উপদেশ এসেছে, তোমাদের সতর্ক করতে? আর স্মরণ করো যখন তিনি তোমাদের নূহের জাতির পর উত্তরাধিকারী করলেন এবং তোমাদের গঠনে প্রশস্ততা দিলেন। সুতরাং আল্লাহর অনুগ্রহসমূহ স্মরণ করো যাতে তোমরা সফল হতে পারো।"',
          ar: 'أَوَعَجِبْتُمْ أَن جَاءَكُمْ ذِكْرٌ مِّن رَّبِّكُمْ عَلَىٰ رَجُلٍ مِّنكُمْ لِيُنذِرَكُمْ ۚ وَاذْكُرُوا إِذْ جَعَلَكُمْ خُلَفَاءَ مِن بَعْدِ قَوْمِ نُوحٍ وَزَادَكُمْ فِي الْخَلْقِ بَسْطَةً',
        },
      },
    ],
  },
];

export default lessons;
