import type { Lesson } from '../../../types/prophet';

const lessons: Lesson[] = [
  {
    id: 'harun-lesson-1',
    title: {
      en: 'Ask Allah for Good Helpers',
      bn: 'আল্লাহর কাছে ভালো সঙ্গী চাও',
      ar: 'اسأل الله أعواناً صالحين',
    },
    description: {
      en: 'Facing a huge task, Musa did not rely on himself alone — he asked Allah for an open heart, an easy path and his brother Harun as a partner. Big responsibilities are easier with righteous helpers, and the best way to find them is to ask Allah.',
      bn: 'বিশাল দায়িত্বের সামনে মূসা (আ.) শুধু নিজের উপর ভরসা করেননি — আল্লাহর কাছে প্রশস্ত হৃদয়, সহজ পথ আর সঙ্গী হিসেবে ভাই হারূনকে চেয়েছেন। নেককার সঙ্গী থাকলে বড় দায়িত্বও সহজ হয়, আর এমন সঙ্গী পাওয়ার সবচেয়ে ভালো উপায় আল্লাহর কাছে চাওয়া।',
      ar: 'أمام مهمة عظيمة لم يعتمد موسى على نفسه وحدها، بل سأل الله شرح الصدر وتيسير الأمر وأن يجعل أخاه هارون شريكاً له. فالمسؤوليات الكبيرة تهون بالأعوان الصالحين، وخير طريق إليهم أن نسأل الله.',
    },
    references: [
      {
        type: 'quran',
        surah: 20,
        surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
        ayahStart: 25,
        ayahEnd: 36,
        translation: {
          en: '[Musa] said, "My Lord, expand for me my chest and ease for me my task and untie the knot from my tongue that they may understand my speech. And appoint for me a minister from my family — Harun, my brother. Increase through him my strength and let him share my task, that we may exalt You much and remember You much. Indeed, You are of us ever Seeing." [Allah] said, "You have been granted your request, O Musa."',
          bn: 'মূসা বলল, "হে আমার রব, আমার বক্ষ প্রশস্ত করে দাও, আমার কাজ সহজ করে দাও, আমার জিহ্বার জড়তা দূর করে দাও যাতে তারা আমার কথা বুঝতে পারে। আমার পরিবার থেকে একজন সাহায্যকারী নিযুক্ত কর — আমার ভাই হারূন। তার দ্বারা আমার শক্তি বৃদ্ধি কর এবং তাকে আমার কাজে শরীক কর।" আল্লাহ বললেন, "তোমার প্রার্থনা মঞ্জুর হলো, হে মূসা।"',
          ar: 'قَالَ رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي وَاجْعَل لِّي وَزِيرًا مِّنْ أَهْلِي هَارُونَ أَخِي اشْدُدْ بِهِ أَزْرِي وَأَشْرِكْهُ فِي أَمْرِي كَيْ نُسَبِّحَكَ كَثِيرًا وَنَذْكُرَكَ كَثِيرًا إِنَّكَ كُنتَ بِنَا بَصِيرًا قَالَ قَدْ أُوتِيتَ سُؤْلَكَ يَا مُوسَىٰ',
        },
      },
    ],
  },
  {
    id: 'harun-lesson-2',
    title: {
      en: 'Gentle Words Even With the Harsh',
      bn: 'কঠোর মানুষের সাথেও নরম কথা',
      ar: 'القول الليّن ولو مع القاسي',
    },
    description: {
      en: 'Allah sent Musa and Harun to the worst tyrant of their time, yet told them to speak to him gently. If gentleness was commanded with Pharaoh, then our parents, spouses, colleagues and those we disagree with deserve soft, respectful words even more.',
      bn: 'আল্লাহ মূসা ও হারূনকে তাঁদের যুগের সবচেয়ে বড় জালিমের কাছে পাঠিয়েছিলেন, তবুও নরম ভাষায় কথা বলতে বলেছিলেন। ফিরাউনের সাথেই যদি নম্রতার হুকুম থাকে, তাহলে মা-বাবা, স্বামী-স্ত্রী, সহকর্মী আর যাদের সাথে মতের অমিল — তারা তো আরও বেশি নরম ও সম্মানজনক কথার হকদার।',
      ar: 'أرسل الله موسى وهارون إلى أطغى طغاة زمانهما، ومع ذلك أمرهما أن يقولا له قولاً ليّناً. فإذا أُمرنا باللين مع فرعون، فالوالدان والأزواج والزملاء ومن نخالفهم أولى بالكلمة اللينة المحترمة.',
    },
    references: [
      {
        type: 'quran',
        surah: 20,
        surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
        ayahStart: 44,
        translation: {
          en: 'And speak to him with gentle speech that perhaps he may be reminded or fear [Allah].',
          bn: 'তার সাথে নম্রভাবে কথা বলো, হয়তো সে উপদেশ গ্রহণ করবে অথবা ভয় করবে।',
          ar: 'فَقُولَا لَهُ قَوْلًا لَّيِّنًا لَّعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَىٰ',
        },
      },
    ],
  },
  {
    id: 'harun-lesson-3',
    title: {
      en: 'Speak the Truth, Guard the Unity',
      bn: 'সত্য বলো, ঐক্য রক্ষা করো',
      ar: 'قل الحق واحفظ الوحدة',
    },
    description: {
      en: 'When people turned to the calf, Harun clearly told them it was a test and called them back to Allah — but he also avoided splitting the community until Musa returned. A good leader speaks the truth plainly while weighing the harm of division, and answers criticism calmly.',
      bn: 'মানুষ যখন বাছুরের দিকে ঝুঁকে পড়ল, হারূন (আ.) স্পষ্ট বলে দিলেন এটা একটা পরীক্ষা, আর তাদের আল্লাহর দিকে ডাকলেন — কিন্তু মূসা ফেরা পর্যন্ত জাতিকে ভাগ হতে দেননি। ভালো নেতা সত্য পরিষ্কার করে বলেন, বিভেদের ক্ষতিও মাথায় রাখেন, আর সমালোচনার জবাব দেন শান্তভাবে।',
      ar: 'حين مال الناس إلى العجل بيّن لهم هارون بوضوح أنها فتنة ودعاهم إلى الله، لكنه تجنّب تفريق الجماعة حتى يرجع موسى. فالقائد الصالح يصدع بالحق ويزن ضرر الفرقة، ويرد على اللوم بهدوء.',
    },
    references: [
      {
        type: 'quran',
        surah: 20,
        surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
        ayahStart: 90,
        ayahEnd: 91,
        translation: {
          en: 'And Harun had already told them, "O my people, you are only being tested by it, and indeed, your Lord is the Most Merciful, so follow me and obey my command." They said, "We will never cease being devoted to it until Musa returns to us."',
          bn: 'হারূন তাদেরকে আগেই বলেছিল, "হে আমার জাতি, এর দ্বারা তোমাদের পরীক্ষা করা হচ্ছে। নিশ্চয়ই তোমাদের রব পরম দয়ালু, সুতরাং আমাকে অনুসরণ করো এবং আমার আদেশ মানো।" তারা বলল, "মূসা আমাদের কাছে ফিরে না আসা পর্যন্ত আমরা এর পূজা থেকে বিরত হব না।"',
          ar: 'وَلَقَدْ قَالَ لَهُمْ هَارُونُ مِن قَبْلُ يَا قَوْمِ إِنَّمَا فُتِنتُم بِهِ ۖ وَإِنَّ رَبَّكُمُ الرَّحْمَٰنُ فَاتَّبِعُونِي وَأَطِيعُوا أَمْرِي قَالُوا لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ حَتَّىٰ يَرْجِعَ إِلَيْنَا مُوسَىٰ',
        },
      },
      {
        type: 'quran',
        surah: 20,
        surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
        ayahStart: 92,
        ayahEnd: 94,
        translation: {
          en: '[Musa] said, "O Harun, what prevented you, when you saw them going astray, from following me? Did you then disobey my order?" [Harun] said, "O son of my mother, do not seize me by my beard or by my head. Indeed, I feared that you would say, \'You caused division among the Children of Israel, and you did not observe my word.\'"',
          bn: 'মূসা বলল, "হে হারূন, তুমি যখন দেখলে তারা পথভ্রষ্ট হয়েছে, তখন কিসে তোমাকে আমাকে অনুসরণ করা থেকে বিরত রাখল? তুমি কি আমার আদেশ অমান্য করলে?" হারূন বলল, "হে আমার মায়ের পুত্র, আমার দাড়ি বা মাথা ধরো না। আমি ভয় করেছিলাম তুমি বলবে, \'তুমি বনী ইসরাঈলের মধ্যে বিভেদ সৃষ্টি করেছ এবং আমার কথা রক্ষা করোনি।\'"',
          ar: 'قَالَ يَا هَارُونُ مَا مَنَعَكَ إِذْ رَأَيْتَهُمْ ضَلُّوا أَلَّا تَتَّبِعَنِ ۖ أَفَعَصَيْتَ أَمْرِي قَالَ يَا ابْنَ أُمَّ لَا تَأْخُذْ بِلِحْيَتِي وَلَا بِرَأْسِي ۖ إِنِّي خَشِيتُ أَن تَقُولَ فَرَّقْتَ بَيْنَ بَنِي إِسْرَائِيلَ وَلَمْ تَرْقُبْ قَوْلِي',
        },
      },
    ],
  },
  {
    id: 'harun-lesson-4',
    title: {
      en: 'Honour in Supporting Others',
      bn: 'পাশে থাকাতেও সম্মান',
      ar: 'الشرف في المؤازرة',
    },
    description: {
      en: 'Harun spent his mission standing beside his brother, yet Allah sent peace upon him by name alongside Musa, and the Prophet (SAW) used their bond as the model of closeness. Being the loyal helper behind someone else\'s good work is itself a great honour with Allah.',
      bn: 'হারূন (আ.) তাঁর দাওয়াতি জীবন কাটিয়েছেন ভাইয়ের পাশে দাঁড়িয়ে, তবুও আল্লাহ মূসার সাথে নাম ধরে তাঁর উপর সালাম পাঠিয়েছেন, আর নবী ﷺ তাঁদের সম্পর্ককে ঘনিষ্ঠতার আদর্শ হিসেবে উল্লেখ করেছেন। অন্যের ভালো কাজে বিশ্বস্ত সাহায্যকারী হওয়াও আল্লাহর কাছে বড় সম্মানের বিষয়।',
      ar: 'قضى هارون رسالته سنداً لأخيه، ومع ذلك سلّم الله عليه باسمه مع موسى، وجعل النبي ﷺ علاقتهما مثلاً للقرب. فأن تكون العون الوفيّ وراء عمل صالح يقوم به غيرك شرف عظيم عند الله.',
    },
    references: [
      {
        type: 'quran',
        surah: 37,
        surahName: { en: 'As-Saffat', bn: 'আস-সাফফাত', ar: 'الصافات' },
        ayahStart: 114,
        ayahEnd: 122,
        translation: {
          en: 'And We certainly conferred favor upon Musa and Harun. And We saved them and their people from the great affliction. And We supported them so it was they who were predominant. And We gave them the clear Scripture. And We guided them on the straight path. And We left for them favorable mention among later generations: "Peace upon Musa and Harun." Indeed, We thus reward the doers of good. Indeed, they were of Our believing servants.',
          bn: 'আমি মূসা ও হারূনের উপর অনুগ্রহ করেছিলাম। তাদের ও তাদের জাতিকে মহাসংকট থেকে উদ্ধার করেছিলাম। তাদের সাহায্য করেছিলাম, ফলে তারাই বিজয়ী হয়েছিল। তাদের সুস্পষ্ট কিতাব দিয়েছিলাম এবং সরল পথে পরিচালিত করেছিলাম। পরবর্তীদের মাঝে তাদের সুনাম রেখেছিলাম: "মূসা ও হারূনের উপর শান্তি বর্ষিত হোক।" নিশ্চয়ই তারা ছিল আমার মুমিন বান্দাদের অন্তর্ভুক্ত।',
          ar: 'وَلَقَدْ مَنَنَّا عَلَىٰ مُوسَىٰ وَهَارُونَ وَنَجَّيْنَاهُمَا وَقَوْمَهُمَا مِنَ الْكَرْبِ الْعَظِيمِ وَنَصَرْنَاهُمْ فَكَانُوا هُمُ الْغَالِبِينَ وَآتَيْنَاهُمَا الْكِتَابَ الْمُسْتَبِينَ وَهَدَيْنَاهُمَا الصِّرَاطَ الْمُسْتَقِيمَ وَتَرَكْنَا عَلَيْهِمَا فِي الْآخِرِينَ سَلَامٌ عَلَىٰ مُوسَىٰ وَهَارُونَ إِنَّا كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ إِنَّهُمَا مِنْ عِبَادِنَا الْمُؤْمِنِينَ',
        },
      },
      {
        type: 'hadith',
        collection: 'Sahih al-Bukhari',
        hadithNumber: '4416',
        narrator: 'Sa\'d ibn Abi Waqqas',
        text: {
          en: 'The Prophet (SAW) said to Ali: "Are you not pleased that you are to me as Harun was to Musa, except that there is no prophet after me?"',
          bn: 'নবী (সা.) আলীকে বললেন: "তুমি কি এতে সন্তুষ্ট নও যে তুমি আমার কাছে সেই মর্যাদায় আছ যেমন হারূন ছিলেন মূসার কাছে, তবে আমার পরে কোনো নবী নেই?"',
          ar: 'قال النبي ﷺ لعلي: "أَلَا تَرْضَى أَنْ تَكُونَ مِنِّي بِمَنْزِلَةِ هَارُونَ مِنْ مُوسَى إِلَّا أَنَّهُ لَا نَبِيَّ بَعْدِي"',
        },
        grade: 'sahih',
      },
    ],
  },
];

export default lessons;
