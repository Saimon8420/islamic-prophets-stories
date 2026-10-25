import type { Lesson } from '../../../types/prophet';

const lessons: Lesson[] = [
  {
    id: 'isa-lesson-1',
    title: {
      en: 'Worship Allah Alone',
      bn: 'শুধু আল্লাহর ইবাদত করো',
      ar: 'اعبد الله وحده',
    },
    description: {
      en: 'Isa\'s very first words were "I am the servant of Allah," and his message was "Allah is my Lord and your Lord, so worship Him." Honouring Isa truly means following what he taught: that worship belongs to Allah alone.',
      bn: 'ঈসার প্রথম কথাই ছিল "আমি আল্লাহর বান্দা", আর তাঁর বার্তা ছিল "আল্লাহ আমার রব এবং তোমাদের রব, সুতরাং তাঁর ইবাদত করো।" ঈসাকে সত্যিকার সম্মান করা মানে তাঁর শিক্ষা মেনে চলা — ইবাদত একমাত্র আল্লাহর জন্য।',
      ar: 'كانت أول كلمات عيسى "إني عبد الله"، وكانت رسالته "إن الله ربي وربكم فاعبدوه". فتوقير عيسى حقاً هو اتباع ما علّمه: أن العبادة لله وحده.',
    },
    references: [
      {
        type: 'quran',
        surah: 3,
        surahName: { en: 'Al-Imran', bn: 'আলে-ইমরান', ar: 'آل عمران' },
        ayahStart: 50,
        ayahEnd: 51,
        arabicText: 'وَمُصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَلِأُحِلَّ لَكُم بَعْضَ الَّذِي حُرِّمَ عَلَيْكُمْ ۚ وَجِئْتُكُم بِآيَةٍ مِّن رَّبِّكُمْ فَاتَّقُوا اللَّهَ وَأَطِيعُونِ إِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ ۗ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ',
        translation: {
          en: '"And [I have come] confirming what was before me of the Torah and to make lawful for you some of what was forbidden to you. And I have come to you with a sign from your Lord, so fear Allah and obey me. Indeed, Allah is my Lord and your Lord, so worship Him. That is a straight path."',
          bn: '"আর আমার পূর্বের তাওরাতের সত্যায়নকারী হিসেবে এবং তোমাদের জন্য যা হারাম করা হয়েছিল তার কিছু হালাল করতে এসেছি। আমি তোমাদের কাছে তোমাদের রবের পক্ষ থেকে নিদর্শন নিয়ে এসেছি, সুতরাং আল্লাহকে ভয় করো এবং আমার আনুগত্য করো। নিশ্চয়ই আল্লাহ আমার রব এবং তোমাদের রব, সুতরাং তাঁর ইবাদত করো। এটাই সরল পথ।"',
          ar: 'وَمُصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَلِأُحِلَّ لَكُم بَعْضَ الَّذِي حُرِّمَ عَلَيْكُمْ ۚ وَجِئْتُكُم بِآيَةٍ مِّن رَّبِّكُمْ فَاتَّقُوا اللَّهَ وَأَطِيعُونِ إِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ فَاعْبُدُوهُ ۗ هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ',
        },
      },
    ],
  },
  {
    id: 'isa-lesson-2',
    title: {
      en: 'Allah Only Says "Be"',
      bn: 'আল্লাহ শুধু বলেন "হও"',
      ar: 'إنما يقول له كن فيكون',
    },
    description: {
      en: 'Isa was born of Maryam without a father, by Allah\'s command "Be." When something seems impossible to us, remember that Allah creates what He wills — so trust Him and turn to Him in every need.',
      bn: 'ঈসা পিতা ছাড়াই মারইয়ামের গর্ভে জন্মেছেন — আল্লাহর আদেশ "হও"-এর মাধ্যমে। আমাদের কাছে কিছু অসম্ভব মনে হলে মনে রাখি, আল্লাহ যা চান তা-ই সৃষ্টি করেন — তাই প্রতিটি প্রয়োজনে তাঁর উপর ভরসা করো, তাঁর কাছেই চাও।',
      ar: 'وُلد عيسى من مريم بلا أب، بأمر الله "كن". فإذا بدا لنا أمر مستحيلاً فلنتذكّر أن الله يخلق ما يشاء، فتوكّل عليه والجأ إليه في كل حاجة.',
    },
    references: [
      {
        type: 'quran',
        surah: 3,
        surahName: { en: 'Al-Imran', bn: 'আলে-ইমরান', ar: 'آل عمران' },
        ayahStart: 45,
        ayahEnd: 47,
        arabicText: 'إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ اسْمُهُ الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ وَجِيهًا فِي الدُّنْيَا وَالْآخِرَةِ وَمِنَ الْمُقَرَّبِينَ وَيُكَلِّمُ النَّاسَ فِي الْمَهْدِ وَكَهْلًا وَمِنَ الصَّالِحِينَ قَالَتْ رَبِّ أَنَّىٰ يَكُونُ لِي وَلَدٌ وَلَمْ يَمْسَسْنِي بَشَرٌ ۖ قَالَ كَذَٰلِكِ اللَّهُ يَخْلُقُ مَا يَشَاءُ ۚ إِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُن فَيَكُونُ',
        translation: {
          en: '[Mention] when the angels said, "O Maryam, indeed Allah gives you good tidings of a word from Him, whose name will be the Messiah, Isa, the son of Maryam — distinguished in this world and the Hereafter and among those brought near [to Allah]. He will speak to the people in the cradle and in maturity and will be of the righteous." She said, "My Lord, how will I have a child when no man has touched me?" [The angel] said, "Such is Allah; He creates what He wills. When He decrees a matter, He only says to it \'Be,\' and it is."',
          bn: 'যখন ফেরেশতারা বলল, "হে মারইয়াম, নিশ্চয়ই আল্লাহ তোমাকে তাঁর পক্ষ থেকে একটি কালিমার সুসংবাদ দিচ্ছেন, যার নাম হবে মাসীহ ঈসা ইবনে মারইয়াম — দুনিয়া ও আখিরাতে সম্মানিত এবং নৈকট্যপ্রাপ্তদের অন্তর্ভুক্ত। সে মানুষের সাথে দোলনায় ও পরিণত বয়সে কথা বলবে এবং সে সৎকর্মশীলদের অন্তর্ভুক্ত হবে।" সে বলল, "হে আমার রব, কীভাবে আমার সন্তান হবে যখন কোনো মানুষ আমাকে স্পর্শ করেনি?" তিনি বললেন, "এভাবেই আল্লাহ যা ইচ্ছা সৃষ্টি করেন। তিনি যখন কোনো বিষয়ের সিদ্ধান্ত নেন, তখন শুধু বলেন \'হও\' আর তা হয়ে যায়।"',
          ar: 'إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ اسْمُهُ الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ وَجِيهًا فِي الدُّنْيَا وَالْآخِرَةِ وَمِنَ الْمُقَرَّبِينَ وَيُكَلِّمُ النَّاسَ فِي الْمَهْدِ وَكَهْلًا وَمِنَ الصَّالِحِينَ قَالَتْ رَبِّ أَنَّىٰ يَكُونُ لِي وَلَدٌ وَلَمْ يَمْسَسْنِي بَشَرٌ ۖ قَالَ كَذَٰلِكِ اللَّهُ يَخْلُقُ مَا يَشَاءُ ۚ إِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُن فَيَكُونُ',
        },
      },
    ],
  },
  {
    id: 'isa-lesson-3',
    title: {
      en: 'Allah Does Not Abandon the Faithful in Hardship',
      bn: 'কষ্টের সময় আল্লাহ মুমিনকে একা ফেলে দেন না',
      ar: 'الله لا يخذل المؤمن في الشدة',
    },
    description: {
      en: 'Alone and in pain under the palm tree, Maryam was comforted, given water and fresh dates, and told not to grieve. In our hardest moments, Allah\'s help is close — keep faith, and take the means He places near you.',
      bn: 'খেজুর গাছের নিচে একা আর যন্ত্রণায় থাকা মারইয়ামকে আল্লাহ সান্ত্বনা দিয়েছেন, পানি আর তাজা খেজুর দিয়েছেন, দুঃখ করতে নিষেধ করেছেন। আমাদের কঠিনতম মুহূর্তেও আল্লাহর সাহায্য কাছেই — ঈমান ধরে রাখো, আর তিনি যে উপায় হাতের কাছে রেখেছেন তা কাজে লাগাও।',
      ar: 'كانت مريم وحيدة تتألم عند جذع النخلة، فواساها الله ورزقها الماء والرطب الجني وقيل لها ألّا تحزن. ففي أشد لحظاتنا يكون عون الله قريباً، فاثبت على الإيمان وخذ بالأسباب التي يضعها بين يديك.',
    },
    references: [
      {
        type: 'quran',
        surah: 19,
        surahName: { en: 'Maryam', bn: 'মারইয়াম', ar: 'مريم' },
        ayahStart: 22,
        ayahEnd: 26,
        arabicText: 'فَحَمَلَتْهُ فَانتَبَذَتْ بِهِ مَكَانًا قَصِيًّا فَأَجَاءَهَا الْمَخَاضُ إِلَىٰ جِذْعِ النَّخْلَةِ قَالَتْ يَا لَيْتَنِي مِتُّ قَبْلَ هَٰذَا وَكُنتُ نَسْيًا مَّنسِيًّا فَنَادَاهَا مِن تَحْتِهَا أَلَّا تَحْزَنِي قَدْ جَعَلَ رَبُّكِ تَحْتَكِ سَرِيًّا وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا فَكُلِي وَاشْرَبِي وَقَرِّي عَيْنًا',
        translation: {
          en: 'So she conceived him, and she withdrew with him to a remote place. And the pains of childbirth drove her to the trunk of a palm tree. She said, "Oh, I wish I had died before this and was in oblivion, forgotten." But he called her from below her, "Do not grieve; your Lord has provided beneath you a stream. And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates. So eat and drink and be contented."',
          bn: 'অতঃপর সে তাকে গর্ভে ধারণ করল এবং তাকে নিয়ে একটি দূরবর্তী স্থানে চলে গেল। প্রসব বেদনা তাকে একটি খেজুর গাছের কাণ্ডের কাছে নিয়ে গেল। সে বলল, "হায়, এর আগেই যদি আমি মরে যেতাম এবং সম্পূর্ণ বিস্মৃত হতাম।" তখন নিচ থেকে তাকে ডেকে বলা হলো, "দুঃখ করো না; তোমার রব তোমার পায়ের নিচে একটি ঝরনা প্রবাহিত করেছেন। আর খেজুর গাছের কাণ্ড তোমার দিকে নাড়াও, তা থেকে তাজা পাকা খেজুর তোমার উপর পড়বে। সুতরাং খাও, পান করো এবং চোখ জুড়াও।"',
          ar: 'فَحَمَلَتْهُ فَانتَبَذَتْ بِهِ مَكَانًا قَصِيًّا فَأَجَاءَهَا الْمَخَاضُ إِلَىٰ جِذْعِ النَّخْلَةِ قَالَتْ يَا لَيْتَنِي مِتُّ قَبْلَ هَٰذَا وَكُنتُ نَسْيًا مَّنسِيًّا فَنَادَاهَا مِن تَحْتِهَا أَلَّا تَحْزَنِي قَدْ جَعَلَ رَبُّكِ تَحْتَكِ سَرِيًّا وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ عَلَيْكِ رُطَبًا جَنِيًّا فَكُلِي وَاشْرَبِي وَقَرِّي عَيْنًا',
        },
      },
    ],
  },
  {
    id: 'isa-lesson-4',
    title: {
      en: 'Be Supporters of Allah',
      bn: 'আল্লাহর সাহায্যকারী হও',
      ar: 'كونوا أنصار الله',
    },
    description: {
      en: 'When many turned away, the disciples stood up and said, "We are supporters of Allah." Allah then called on the believers of every age to be like them. Standing for what is right, even when few do, is a calling for us too.',
      bn: 'অনেকে যখন মুখ ফিরিয়ে নিল, তখন হাওয়ারীরা দাঁড়িয়ে বললেন, "আমরা আল্লাহর সাহায্যকারী।" এরপর আল্লাহ সব যুগের মুমিনদের তাঁদের মতো হতে আহ্বান করেছেন। কম মানুষ পাশে থাকলেও সত্যের পক্ষে দাঁড়ানো — এই আহ্বান আমাদের জন্যও।',
      ar: 'حين أعرض كثيرون قام الحواريون وقالوا: "نحن أنصار الله". ثم دعا الله المؤمنين في كل زمان أن يكونوا مثلهم. فالوقوف مع الحق ولو قلّ أنصاره دعوة لنا نحن أيضاً.',
    },
    references: [
      {
        type: 'quran',
        surah: 61,
        surahName: { en: 'As-Saff', bn: 'আস-সফ', ar: 'الصف' },
        ayahStart: 14,
        arabicText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا أَنصَارَ اللَّهِ كَمَا قَالَ عِيسَى ابْنُ مَرْيَمَ لِلْحَوَارِيِّينَ مَنْ أَنصَارِي إِلَى اللَّهِ ۖ قَالَ الْحَوَارِيُّونَ نَحْنُ أَنصَارُ اللَّهِ',
        translation: {
          en: 'O you who have believed, be supporters of Allah, as when Isa, the son of Maryam, said to the disciples, "Who are my supporters for Allah?" The disciples said, "We are supporters of Allah."',
          bn: 'হে মুমিনগণ, তোমরা আল্লাহর সাহায্যকারী হও, যেমন ঈসা ইবনে মারইয়াম হাওয়ারীদের বলেছিল, "আল্লাহর পথে কারা আমার সাহায্যকারী?" হাওয়ারীরা বলেছিল, "আমরা আল্লাহর সাহায্যকারী।"',
          ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا أَنصَارَ اللَّهِ كَمَا قَالَ عِيسَى ابْنُ مَرْيَمَ لِلْحَوَارِيِّينَ مَنْ أَنصَارِي إِلَى اللَّهِ ۖ قَالَ الْحَوَارِيُّونَ نَحْنُ أَنصَارُ اللَّهِ',
        },
      },
    ],
  },
  {
    id: 'isa-lesson-5',
    title: {
      en: 'Allah Protects His Messengers',
      bn: 'আল্লাহ তাঁর রাসূলদের রক্ষা করেন',
      ar: 'الله يحفظ رسله',
    },
    description: {
      en: 'The enemies plotted against Isa, but they did not kill him nor crucify him — Allah raised him to Himself. However strong a plot against the truth may look, Allah\'s plan prevails; so hold firmly to the truth and trust Him.',
      bn: 'শত্রুরা ঈসার বিরুদ্ধে ষড়যন্ত্র করেছিল, কিন্তু তারা তাঁকে হত্যাও করেনি, ক্রুশবিদ্ধও করেনি — আল্লাহ তাঁকে নিজের কাছে তুলে নিয়েছেন। সত্যের বিরুদ্ধে ষড়যন্ত্র যত শক্তিশালীই মনে হোক, আল্লাহর পরিকল্পনাই জয়ী হয়; তাই সত্যকে আঁকড়ে ধরো, তাঁর উপর ভরসা রাখো।',
      ar: 'مكر الأعداء بعيسى، لكنهم ما قتلوه وما صلبوه، بل رفعه الله إليه. فمهما بدا المكر بالحق قوياً فإن تدبير الله هو الغالب، فتمسّك بالحق وتوكّل عليه.',
    },
    references: [
      {
        type: 'quran',
        surah: 4,
        surahName: { en: 'An-Nisa', bn: 'আন-নিসা', ar: 'النساء' },
        ayahStart: 157,
        ayahEnd: 158,
        arabicText: 'وَقَوْلِهِمْ إِنَّا قَتَلْنَا الْمَسِيحَ عِيسَى ابْنَ مَرْيَمَ رَسُولَ اللَّهِ وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ ۚ وَإِنَّ الَّذِينَ اخْتَلَفُوا فِيهِ لَفِي شَكٍّ مِّنْهُ ۚ مَا لَهُم بِهِ مِنْ عِلْمٍ إِلَّا اتِّبَاعَ الظَّنِّ ۚ وَمَا قَتَلُوهُ يَقِينًا بَل رَّفَعَهُ اللَّهُ إِلَيْهِ ۚ وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا',
        translation: {
          en: 'And [for] their saying, "Indeed, we have killed the Messiah, Isa, the son of Maryam, the messenger of Allah." And they did not kill him, nor did they crucify him; but [another] was made to resemble him to them. And indeed, those who differ over it are in doubt about it. They have no knowledge of it except the following of assumption. And they did not kill him, for certain. Rather, Allah raised him to Himself. And ever is Allah Exalted in Might and Wise.',
          bn: 'আর তাদের এই বলার কারণে যে, "আমরা আল্লাহর রাসূল মারইয়ামের পুত্র মাসীহ ঈসাকে হত্যা করেছি।" অথচ তারা তাকে হত্যা করেনি এবং তাকে ক্রুশবিদ্ধও করেনি; বরং তাদের কাছে সদৃশ করা হয়েছিল। যারা এ বিষয়ে মতভেদ করেছে তারা সন্দেহের মধ্যে রয়েছে। ধারণার অনুসরণ ছাড়া এ বিষয়ে তাদের কোনো জ্ঞান নেই। তারা তাকে নিশ্চিতভাবে হত্যা করেনি। বরং আল্লাহ তাকে নিজের কাছে তুলে নিয়েছেন। আল্লাহ পরাক্রমশালী, প্রজ্ঞাময়।',
          ar: 'وَقَوْلِهِمْ إِنَّا قَتَلْنَا الْمَسِيحَ عِيسَى ابْنَ مَرْيَمَ رَسُولَ اللَّهِ وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَٰكِن شُبِّهَ لَهُمْ ۚ وَإِنَّ الَّذِينَ اخْتَلَفُوا فِيهِ لَفِي شَكٍّ مِّنْهُ ۚ مَا لَهُم بِهِ مِنْ عِلْمٍ إِلَّا اتِّبَاعَ الظَّنِّ ۚ وَمَا قَتَلُوهُ يَقِينًا بَل رَّفَعَهُ اللَّهُ إِلَيْهِ ۚ وَكَانَ اللَّهُ عَزِيزًا حَكِيمًا',
        },
      },
    ],
  },
];

export default lessons;
