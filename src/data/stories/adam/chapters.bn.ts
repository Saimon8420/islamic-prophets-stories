import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'adam-ch-01',
    title: 'আদম (আ.)-এর সৃষ্টি',
    summary: 'আল্লাহ ফেরেশতাদের জানান যে তিনি পৃথিবীতে একজন প্রতিনিধি (খলিফা) সৃষ্টি করবেন। আদমকে মাটি থেকে তৈরি করা হয়, তাঁর মধ্যে রূহ ফুঁকে দেওয়া হয় এবং তাঁকে সকল বস্তুর নাম শিক্ষা দেওয়া হয়।',
    order: 1,
    paragraphs: [
      {
        id: 'adam-ch01-p01',
        text: 'আদম (আ.)-কে সৃষ্টি করার পূর্বে আল্লাহ তাআলা ফেরেশতাদের তাঁর ঐশী পরিকল্পনা সম্পর্কে অবহিত করেন। তিনি বলেন, "নিশ্চয়ই আমি পৃথিবীতে একজন প্রতিনিধি (খলিফা) সৃষ্টি করতে যাচ্ছি।" ফেরেশতারা আপত্তি নয়, বরং উদ্বেগবশত জিজ্ঞাসা করলেন কেন তিনি এমন কাউকে সেখানে রাখবেন যে বিশৃঙ্খলা সৃষ্টি করবে এবং রক্তপাত করবে, যেখানে তারা তাঁর প্রশংসা ও পবিত্রতা ঘোষণা করে। আল্লাহ পরম প্রজ্ঞায় জবাব দিলেন: "নিশ্চয়ই আমি জানি যা তোমরা জানো না।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 30,
            arabicText: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً',
            translation: {
              en: 'And [mention, O Muhammad], when your Lord said to the angels, "Indeed, I will make upon the earth a successive authority."',
              bn: 'আর স্মরণ করুন, যখন আপনার রব ফেরেশতাদের বললেন, "নিশ্চয়ই আমি পৃথিবীতে একজন প্রতিনিধি সৃষ্টি করব।"',
              ar: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً',
            },
          },
        ],
      },
      {
        id: 'adam-ch01-p02',
        text: 'আল্লাহ তাআলা আদম (আ.)-কে মাটি থেকে সৃষ্টি করেন। কুরআনে এই প্রক্রিয়া বিভিন্ন ধাপে বর্ণিত হয়েছে: প্রথমে ধূলি (তুরাব), যা পানির সাথে মিশিয়ে কাদামাটি (তীন) করা হয়। এই কাদা পুরানো হয়ে পচা কালো কাদায় (হামা\' মাসনুন) পরিণত হয়। অবশেষে তা শুকনো ঠনঠনে মাটিতে (সালসাল কাল-ফাখখার) রূপ নেয়।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 15,
            surahName: { en: 'Al-Hijr', bn: 'আল-হিজর', ar: 'الحجر' },
            ayahStart: 26,
            ayahEnd: 27,
            arabicText: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن صَلْصَالٍ مِّنْ حَمَإٍ مَّسْنُونٍ',
            translation: {
              en: 'And We did certainly create man out of clay from an altered black mud.',
              bn: 'আর অবশ্যই আমি মানুষকে সৃষ্টি করেছি শুকনো ঠনঠনে মাটি থেকে, যা ছিল পচা কালো কাদা।',
              ar: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ مِن صَلْصَالٍ مِّنْ حَمَإٍ مَّسْنُونٍ',
            },
          },
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 71,
            ayahEnd: 72,
            arabicText: 'إِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي خَالِقٌ بَشَرًا مِّن طِينٍ',
            translation: {
              en: '[So mention] when your Lord said to the angels, "Indeed, I am going to create a human being from clay."',
              bn: 'যখন আপনার রব ফেরেশতাদের বললেন, "নিশ্চয়ই আমি মাটি থেকে একটি মানুষ সৃষ্টি করব।"',
              ar: 'إِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي خَالِقٌ بَشَرًا مِّن طِينٍ',
            },
          },
        ],
      },
      {
        id: 'adam-ch01-p03',
        text: 'আল্লাহ যখন আদমের দেহ পূর্ণাঙ্গ করলেন, তখন তাঁর মধ্যে নিজের রূহ থেকে ফুঁকে দিলেন। এই মুহূর্তেই একটি মাটির শরীর একজন জীবন্ত, সচেতন সত্তায় — প্রথম মানুষে — পরিণত হলো। এরপর আল্লাহ আদমকে এক অনন্য মর্যাদা দিলেন: তিনি তাঁকে সকল বস্তুর নাম শিক্ষা দিলেন। এই জ্ঞান ফেরেশতাদের দেওয়া হয়নি। আল্লাহ যখন ফেরেশতাদের সেই বস্তুগুলোর নাম বলতে বললেন, তারা তাদের অক্ষমতা স্বীকার করে বলল, "আপনি পবিত্র; আপনি আমাদের যা শিখিয়েছেন তা ছাড়া আমাদের কোনো জ্ঞান নেই।" তারপর আদমকে জিজ্ঞাসা করা হলো এবং তিনি সবগুলোর নাম বলে দিলেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 15,
            surahName: { en: 'Al-Hijr', bn: 'আল-হিজর', ar: 'الحجر' },
            ayahStart: 28,
            ayahEnd: 29,
            arabicText: 'فَإِذَا سَوَّيْتُهُ وَنَفَخْتُ فِيهِ مِن رُّوحِي فَقَعُوا لَهُ سَاجِدِينَ',
            translation: {
              en: 'So when I have proportioned him and breathed into him of My [created] soul, then fall down to him in prostration.',
              bn: 'অতঃপর যখন আমি তাকে পূর্ণাঙ্গ করব এবং তাতে আমার রূহ ফুঁকে দেব, তখন তোমরা তার সামনে সিজদায় পড়ে যাবে।',
              ar: 'فَإِذَا سَوَّيْتُهُ وَنَفَخْتُ فِيهِ مِن رُّوحِي فَقَعُوا لَهُ سَاجِدِينَ',
            },
          },
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 31,
            ayahEnd: 33,
            translation: {
              en: 'And He taught Adam the names — all of them. Then He showed them to the angels and said, "Inform Me of the names of these, if you are truthful."',
              bn: 'আর তিনি আদমকে সকল নাম শিক্ষা দিলেন। তারপর সেগুলো ফেরেশতাদের সামনে উপস্থাপন করলেন এবং বললেন, "তোমরা সত্যবাদী হলে এগুলোর নাম বলো।"',
              ar: 'وَعَلَّمَ آدَمَ الْأَسْمَاءَ كُلَّهَا ثُمَّ عَرَضَهُمْ عَلَى الْمَلَائِكَةِ فَقَالَ أَنبِئُونِي بِأَسْمَاءِ هَٰؤُلَاءِ إِن كُنتُمْ صَادِقِينَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch01-p04',
        text: 'ইবনে কাসীর বর্ণনা করেন যে আল্লাহ আদমকে নিজ হাতে সৃষ্টি করেছেন — এই সম্মান অন্য কোনো সৃষ্টিকে দেওয়া হয়নি। ইবনে কাসীরের ভাষ্য অনুসারে, আল্লাহ বিভিন্ন ফেরেশতাকে পাঠিয়েছিলেন পৃথিবীর বিভিন্ন অংশ থেকে মাটি সংগ্রহ করতে — লাল, সাদা, কালো এবং এর মধ্যবর্তী সব রং — এজন্যই আদমের সন্তানরা তাদের বর্ণ ও বৈশিষ্ট্যে বৈচিত্র্যময়।',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Creation of Adam',
            summary: {
              en: 'Ibn Kathir explains that Allah created Adam with His own Hands, and that clay was gathered from all parts of the earth, which accounts for the diversity among Adam\'s descendants.',
              bn: 'ইবনে কাসীর ব্যাখ্যা করেন যে আল্লাহ নিজ হাতে আদমকে সৃষ্টি করেছেন এবং পৃথিবীর বিভিন্ন অংশ থেকে মাটি সংগ্রহ করা হয়েছিল, যার কারণে আদমের বংশধরদের মধ্যে বৈচিত্র্য রয়েছে।',
              ar: 'يوضح ابن كثير أن الله خلق آدم بيديه، وأن التراب جُمع من أجزاء مختلفة من الأرض، مما يفسر التنوع بين ذرية آدم.',
            },
          },
        ],
      },
      {
        id: 'adam-ch01-p05',
        text: 'রাসূলুল্লাহ (সা.) আদম (আ.)-এর সৃষ্টি সম্পর্কে হাদীসে বর্ণনা করেছেন যে, আদমকে ষাট হাত লম্বা করে সৃষ্টি করা হয়েছিল এবং তারপর থেকে মানুষের উচ্চতা ক্রমাগত হ্রাস পাচ্ছে। তিনি আরও বলেছেন যে আল্লাহ আদমকে শুক্রবারে সৃষ্টি করেছেন, যা ইসলামে এই দিনটির গুরুত্ব তুলে ধরে।',
        phase: 'hadith',
        references: [
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3326',
            narrator: 'Abu Hurayrah',
            text: {
              en: 'The Prophet (peace be upon him) said: "Allah created Adam, making him 60 cubits tall... People have been decreasing in stature since Adam\'s creation."',
              bn: 'নবী (সা.) বলেছেন: "আল্লাহ আদমকে সৃষ্টি করেছেন, তাকে ষাট হাত লম্বা করেছেন... আদমের সৃষ্টির পর থেকে মানুষের উচ্চতা হ্রাস পাচ্ছে।"',
              ar: 'قال النبي ﷺ: "خلق الله آدم وطوله ستون ذراعًا... فلم يزل الخلق ينقص حتى الآن."',
            },
            grade: 'sahih',
          },
          {
            type: 'hadith',
            collection: 'Sahih Muslim',
            hadithNumber: '2789',
            narrator: 'Abu Hurayrah',
            text: {
              en: 'The Prophet (peace be upon him) said: "The best day on which the sun has risen is Friday. On it Adam was created..."',
              bn: 'নবী (সা.) বলেছেন: "সূর্য যে দিনগুলোতে উদিত হয় তার মধ্যে সর্বোত্তম দিন হলো শুক্রবার। এই দিনে আদমকে সৃষ্টি করা হয়েছে..."',
              ar: 'قال النبي ﷺ: "خير يوم طلعت عليه الشمس يوم الجمعة، فيه خُلق آدم..."',
            },
            grade: 'sahih',
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-02',
    title: 'ফেরেশতাদের সিজদা, ইবলিসের অস্বীকার',
    summary: 'আল্লাহ ফেরেশতাদের আদমকে সিজদা করার আদেশ দেন। সকল ফেরেশতা মেনে নেন, কিন্তু ইবলিস অহংকারবশত অস্বীকার করে।',
    order: 2,
    paragraphs: [
      {
        id: 'adam-ch02-p01',
        text: 'আদম (আ.)-কে সৃষ্টি করার পর এবং তাঁর মধ্যে রূহ ফুঁকে দেওয়ার পর আল্লাহ ফেরেশতাদের আদমকে সিজদা করার আদেশ দিলেন। এই সিজদা ইবাদতের সিজদা ছিল না — কারণ ইবাদত একমাত্র আল্লাহরই প্রাপ্য — বরং এটি ছিল সম্মান ও মর্যাদার সিজদা। সকল ফেরেশতা তৎক্ষণাৎ আদমের সামনে সিজদায় পড়ে গেলেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 34,
            arabicText: 'وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ',
            translation: {
              en: 'And [mention] when We said to the angels, "Prostrate before Adam"; so they prostrated, except for Iblis. He refused and was arrogant and became of the disbelievers.',
              bn: 'আর যখন আমি ফেরেশতাদের বললাম, "আদমকে সিজদা করো," তখন তারা সিজদা করল, ইবলিস ছাড়া। সে অস্বীকার করল এবং অহংকার করল, আর সে কাফেরদের অন্তর্ভুক্ত হলো।',
              ar: 'وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch02-p02',
        text: 'কিন্তু ইবলিস সিজদা করতে অস্বীকার করল। আল্লাহ যখন তাকে জিজ্ঞাসা করলেন কেন সে অবাধ্য হলো, ইবলিস তার পাপের মূল কারণ প্রকাশ করল: অহংকার। সে বলল, "আমি তার চেয়ে উত্তম। তুমি আমাকে আগুন থেকে সৃষ্টি করেছ আর তাকে সৃষ্টি করেছ মাটি থেকে।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 11,
            ayahEnd: 12,
            arabicText: 'قَالَ أَنَا خَيْرٌ مِّنْهُ خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ',
            translation: {
              en: '[Allah] said, "What prevented you from prostrating when I commanded you?" [Satan] said, "I am better than him. You created me from fire and created him from clay."',
              bn: '[আল্লাহ] বললেন, "আমি যখন তোমাকে আদেশ দিলাম তখন সিজদা করতে তোমাকে কিসে বাধা দিল?" [ইবলিস] বলল, "আমি তার চেয়ে উত্তম। তুমি আমাকে আগুন থেকে সৃষ্টি করেছ আর তাকে সৃষ্টি করেছ মাটি থেকে।"',
              ar: 'قَالَ مَا مَنَعَكَ أَلَّا تَسْجُدَ إِذْ أَمَرْتُكَ ۖ قَالَ أَنَا خَيْرٌ مِّنْهُ خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ',
            },
          },
        ],
      },
      {
        id: 'adam-ch02-p03',
        text: 'এরপর আল্লাহ ইবলিসকে তার সম্মানের স্থান থেকে বিতাড়িত করলেন এবং কিয়ামত পর্যন্ত তার উপর অভিশাপ দিলেন। সূরা আল-হিজরে বিস্তারিত এই কথোপকথন রয়েছে যেখানে ইবলিস অবকাশ চায় এবং আল্লাহ তাকে সেই অবকাশ দেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 15,
            surahName: { en: 'Al-Hijr', bn: 'আল-হিজর', ar: 'الحجر' },
            ayahStart: 30,
            ayahEnd: 38,
            translation: {
              en: 'So the angels prostrated — all of them entirely, except Iblis; he refused to be with those who prostrated. [Allah] said, "O Iblis, what is [the matter] with you that you are not with those who prostrate?" He said, "Never would I prostrate to a human whom You created out of clay from an altered black mud." [Allah] said, "Then get out of it, for indeed, you are expelled. And indeed, upon you is the curse until the Day of Recompense."',
              bn: 'অতঃপর ফেরেশতারা সকলেই সিজদা করল, ইবলিস ছাড়া; সে সিজদাকারীদের সাথে থাকতে অস্বীকার করল। আল্লাহ বললেন, "হে ইবলিস, তোমার কী হলো যে তুমি সিজদাকারীদের সাথে নেই?" সে বলল, "আমি এমন মানুষকে সিজদা করব না যাকে তুমি পচা কালো কাদার শুকনো মাটি থেকে সৃষ্টি করেছ।" আল্লাহ বললেন, "তবে তুমি বের হয়ে যাও, কারণ তুমি বিতাড়িত। আর তোমার উপর প্রতিদান দিবস পর্যন্ত অভিশাপ।"',
              ar: 'فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ إِلَّا إِبْلِيسَ أَبَىٰ أَن يَكُونَ مَعَ السَّاجِدِينَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch02-p04',
        text: 'কুরআন ইবলিসের প্রকৃতিও স্পষ্ট করে। সে ফেরেশতাদের মাঝে থাকলেও আসলে ফেরেশতা ছিল না। সূরা আল-কাহফে স্পষ্ট বলা হয়েছে যে ইবলিস ছিল জিনদের অন্তর্ভুক্ত এবং সে তার রবের আদেশ অমান্য করল।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 18,
            surahName: { en: 'Al-Kahf', bn: 'আল-কাহফ', ar: 'الكهف' },
            ayahStart: 50,
            arabicText: 'إِلَّا إِبْلِيسَ كَانَ مِنَ الْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِ',
            translation: {
              en: '...except Iblis. He was of the jinn and departed from the command of his Lord.',
              bn: '...ইবলিস ছাড়া। সে ছিল জিনদের অন্তর্ভুক্ত, অতঃপর সে তার রবের আদেশ অমান্য করল।',
              ar: 'إِلَّا إِبْلِيسَ كَانَ مِنَ الْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِ',
            },
          },
        ],
      },
      {
        id: 'adam-ch02-p05',
        text: 'ইবনে কাসীর ব্যাখ্যা করেন যে ইবলিস হাজার হাজার বছর ধরে আল্লাহর ইবাদত করেছিল এবং তার ভক্তির কারণে ফেরেশতাদের কাতারে উন্নীত হয়েছিল। কিন্তু যখন পরীক্ষা এলো, তার অন্তরের অহংকার প্রকাশ পেল। ইবনে কাসীর উল্লেখ করেন যে ইবলিসের যুক্তি মূলত ত্রুটিপূর্ণ ছিল — সে একটি প্রত্যক্ষ ঐশী আদেশের বিরুদ্ধে কিয়াস (অনুমান) ব্যবহার করেছিল। আগুন মাটির চেয়ে শ্রেষ্ঠ — এই বক্তব্য ছিল তার নিজস্ব মতামত, যা সে আল্লাহর সুস্পষ্ট আদেশের উপরে স্থাপন করেছিল। এটিই হয়ে দাঁড়াল কীভাবে অহংকার অবাধ্যতার দিকে এবং শেষ পর্যন্ত ধ্বংসের দিকে নিয়ে যায় তার দৃষ্টান্ত।',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Prostration of the Angels and the Refusal of Iblis',
            summary: {
              en: 'Ibn Kathir explains that Iblis had worshipped Allah among the angels but used flawed reasoning (analogy against divine command) to justify his disobedience, which stemmed from hidden pride.',
              bn: 'ইবনে কাসীর ব্যাখ্যা করেন যে ইবলিস ফেরেশতাদের মাঝে আল্লাহর ইবাদত করত কিন্তু তার অবাধ্যতাকে ন্যায্যতা দিতে ত্রুটিপূর্ণ যুক্তি (ঐশী আদেশের বিরুদ্ধে অনুমান) ব্যবহার করেছিল, যা গোপন অহংকার থেকে উদ্ভূত হয়েছিল।',
              ar: 'يوضح ابن كثير أن إبليس كان يعبد الله بين الملائكة لكنه استخدم قياساً فاسداً (مقابل أمر إلهي صريح) لتبرير عصيانه الذي نبع من كبر مخفي.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-03',
    title: 'জান্নাতে বসবাস',
    summary: 'আদম (আ.)-কে জান্নাতে স্থান দেওয়া হয় এবং হাওয়াকে তাঁর সঙ্গী হিসেবে সৃষ্টি করা হয়। একটি নিষিদ্ধ গাছ ছাড়া সবকিছু তাঁদের জন্য অনুমোদিত।',
    order: 3,
    paragraphs: [
      {
        id: 'adam-ch03-p01',
        text: 'আদম (আ.)-এর সম্মানিত সৃষ্টির পর আল্লাহ তাঁকে জান্নাতে বসবাসের অনুমতি দিলেন। আল্লাহ বললেন, "হে আদম, তুমি ও তোমার স্ত্রী জান্নাতে বসবাস করো এবং সেখান থেকে যেখানে ইচ্ছা স্বাচ্ছন্দ্যে খাও। কিন্তু এই গাছের কাছে যেও না, তাহলে তোমরা জালিমদের অন্তর্ভুক্ত হবে।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 35,
            arabicText: 'وَقُلْنَا يَا آدَمُ اسْكُنْ أَنتَ وَزَوْجُكَ الْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ',
            translation: {
              en: 'And We said, "O Adam, dwell, you and your wife, in Paradise and eat therefrom in [ease and] abundance from wherever you will. But do not approach this tree, lest you be among the wrongdoers."',
              bn: 'এবং আমি বললাম, "হে আদম, তুমি ও তোমার স্ত্রী জান্নাতে বসবাস করো এবং সেখান থেকে যেখানে ইচ্ছা স্বাচ্ছন্দ্যে খাও। কিন্তু এই গাছের কাছে যেও না, তাহলে তোমরা জালিমদের অন্তর্ভুক্ত হবে।"',
              ar: 'وَقُلْنَا يَا آدَمُ اسْكُنْ أَنتَ وَزَوْجُكَ الْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch03-p02',
        text: 'আল্লাহ আদমকে শয়তানের প্রতারণা থেকে সতর্ক করেছিলেন এবং জান্নাতের আরাম সম্পর্কে জানিয়েছিলেন। সূরা ত্বা-হায় আল্লাহ বললেন যে সেখানে ক্ষুধা, তৃষ্ণা, বস্ত্রহীনতা বা রোদের কষ্ট নেই।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 19,
            translation: {
              en: 'And "O Adam, dwell, you and your wife, in Paradise and eat from wherever you will but do not approach this tree, lest you be among the wrongdoers."',
              bn: 'আর "হে আদম, তুমি ও তোমার স্ত্রী জান্নাতে বসবাস করো এবং যেখান থেকে ইচ্ছা খাও, কিন্তু এই গাছের কাছে যেও না।"',
              ar: 'وَيَا آدَمُ اسْكُنْ أَنتَ وَزَوْجُكَ الْجَنَّةَ فَكُلَا مِنْ حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَٰذِهِ الشَّجَرَةَ فَتَكُونَا مِنَ الظَّالِمِينَ',
            },
          },
          {
            type: 'quran',
            surah: 20,
            surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
            ayahStart: 117,
            ayahEnd: 119,
            translation: {
              en: 'So We said, "O Adam, indeed this is an enemy to you and to your wife. Then let him not remove you from Paradise so you would suffer. Indeed, it is [promised] for you not to be hungry therein or be unclothed. And indeed, you will not be thirsty therein or be hot from the sun."',
              bn: 'অতঃপর আমি বললাম, "হে আদম, এ তোমার ও তোমার স্ত্রীর শত্রু। সে যেন তোমাদের জান্নাত থেকে বের না করে দেয়, তাহলে তুমি কষ্ট পাবে। নিশ্চয়ই সেখানে তোমার জন্য ক্ষুধার্ত না হওয়া এবং বস্ত্রহীন না হওয়ার ব্যবস্থা আছে। এবং সেখানে তুমি তৃষ্ণার্ত হবে না এবং রোদে কষ্ট পাবে না।"',
              ar: 'فَقُلْنَا يَا آدَمُ إِنَّ هَٰذَا عَدُوٌّ لَّكَ وَلِزَوْجِكَ فَلَا يُخْرِجَنَّكُمَا مِنَ الْجَنَّةِ فَتَشْقَىٰ',
            },
          },
        ],
      },
      {
        id: 'adam-ch03-p03',
        text: 'হাওয়ার সৃষ্টি সম্পর্কে কুরআনে বলা হয়েছে যে আল্লাহ আদম থেকে তাঁর সঙ্গী সৃষ্টি করেছেন। ইবনে কাসীর ব্যাখ্যা করেন যে আদম ঘুমন্ত অবস্থায় তাঁর পাঁজরের হাড় থেকে হাওয়াকে সৃষ্টি করা হয়েছিল। যখন তিনি জেগে উঠলেন, তাঁকে পাশে পেয়ে তাৎক্ষণিক সঙ্গ ও প্রশান্তি অনুভব করলেন। এটিই ছিল বিবাহ প্রতিষ্ঠান ও মানব পরিবারের সূচনা — দুজন সত্তা যাদের একে অপরের মাঝে শান্তি ও ভালোবাসা খুঁজে পেতে সৃষ্টি করা হয়েছিল।',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 4,
            surahName: { en: 'An-Nisa', bn: 'আন-নিসা', ar: 'النساء' },
            ayahStart: 1,
            translation: {
              en: 'O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women.',
              bn: 'হে মানুষ, তোমাদের রবকে ভয় করো, যিনি তোমাদের সৃষ্টি করেছেন একটি প্রাণ থেকে এবং তা থেকে তার জোড়া সৃষ্টি করেছেন এবং তাদের দুজন থেকে বিস্তার করেছেন অগণিত নারী ও পুরুষ।',
              ar: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً',
            },
          },
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Creation of Hawwa',
            summary: {
              en: 'Ibn Kathir narrates that Hawwa was created from Adam\'s rib while he slept, and when he awoke he found her beside him, feeling immediate companionship and tranquillity.',
              bn: 'ইবনে কাসীর বর্ণনা করেন যে আদম ঘুমন্ত অবস্থায় তার পাঁজরের হাড় থেকে হাওয়াকে সৃষ্টি করা হয়েছিল এবং তিনি জেগে উঠে তাকে পাশে পেয়ে তাৎক্ষণিক সঙ্গ ও প্রশান্তি অনুভব করেছিলেন।',
              ar: 'يروي ابن كثير أن حواء خُلقت من ضلع آدم وهو نائم، فلما استيقظ وجدها بجانبه فأحس بالأنس والسكينة.',
            },
          },
        ],
      },
      {
        id: 'adam-ch03-p04',
        text: 'রাসূলুল্লাহ (সা.) হাওয়াকে আদমের পাঁজরের হাড় থেকে সৃষ্টির বিষয়টি নিশ্চিত করেছেন এবং তা থেকে পুরুষদের নারীদের প্রতি কেমন আচরণ করা উচিত — এ বিষয়ে একটি বাস্তব শিক্ষা গ্রহণ করেছেন। তিনি বলেছেন: "নারীদের প্রতি সদয় আচরণ করো, কারণ নারীকে পাঁজরের হাড় থেকে সৃষ্টি করা হয়েছে। পাঁজরের সবচেয়ে বাঁকা অংশ হলো উপরের অংশ। তুমি যদি এটিকে সোজা করতে চাও, ভেঙে ফেলবে; আর ছেড়ে দিলে বাঁকাই থাকবে। তাই নারীদের প্রতি সদয় আচরণ করো।" এই হাদীস স্বামী-স্ত্রীর সম্পর্কে কোমলতা, বোধশক্তি ও গ্রহণযোগ্যতার গুরুত্বের উপর জোর দেয়।',
        phase: 'hadith',
        references: [
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3331',
            narrator: 'Abu Hurayrah',
            text: {
              en: 'The Prophet (peace be upon him) said: "Treat women kindly, for woman was created from a rib. The most curved part of the rib is the upper part. If you try to straighten it, you will break it, and if you leave it, it will remain curved. So treat women kindly."',
              bn: 'নবী (সা.) বলেছেন: "নারীদের প্রতি সদয় আচরণ করো, কারণ নারীকে পাঁজরের হাড় থেকে সৃষ্টি করা হয়েছে। পাঁজরের সবচেয়ে বাঁকা অংশ হলো উপরের অংশ। তুমি যদি এটিকে সোজা করতে চাও, ভেঙে ফেলবে, আর ছেড়ে দিলে বাঁকাই থাকবে। তাই নারীদের প্রতি সদয় আচরণ করো।"',
              ar: 'قال النبي ﷺ: "استوصوا بالنساء خيرًا، فإن المرأة خُلقت من ضلع، وإن أعوج شيء في الضلع أعلاه، فإن ذهبت تقيمه كسرته، وإن تركته لم يزل أعوج، فاستوصوا بالنساء خيرًا."',
            },
            grade: 'sahih',
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-04',
    title: 'নিষিদ্ধ বৃক্ষ ও পতন',
    summary: 'ইবলিস আদম ও হাওয়াকে কুমন্ত্রণা দিয়ে নিষিদ্ধ গাছের ফল খেতে প্রলুব্ধ করে। তাঁরা খাওয়ার পর তাঁদের লজ্জাস্থান প্রকাশ হয়ে পড়ে।',
    order: 4,
    paragraphs: [
      {
        id: 'adam-ch04-p01',
        text: 'শয়তান আদম ও হাওয়ার বিরুদ্ধে তার প্রতারণার অভিযান শুরু করল। সে তাদের কাছে কুমন্ত্রণা দিল এবং মিথ্যা শপথ করে বলল যে সে তাদের শুভাকাঙ্ক্ষী।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 20,
            ayahEnd: 21,
            arabicText: 'فَوَسْوَسَ لَهُمَا الشَّيْطَانُ لِيُبْدِيَ لَهُمَا مَا وُورِيَ عَنْهُمَا مِن سَوْآتِهِمَا وَقَالَ مَا نَهَاكُمَا رَبُّكُمَا عَنْ هَٰذِهِ الشَّجَرَةِ إِلَّا أَن تَكُونَا مَلَكَيْنِ أَوْ تَكُونَا مِنَ الْخَالِدِينَ',
            translation: {
              en: 'But Satan whispered to them to make apparent to them that which was concealed from them of their private parts. He said, "Your Lord did not forbid you this tree except that you become angels or become of the immortal." And he swore [by Allah] to them, "Indeed, I am to you from among the sincere advisors."',
              bn: 'কিন্তু শয়তান তাদের কাছে কুমন্ত্রণা দিল যাতে তাদের লজ্জাস্থান — যা তাদের থেকে গোপন ছিল — প্রকাশ করে দেয়। সে বলল, "তোমাদের রব তোমাদের এই গাছ থেকে নিষেধ করেছেন শুধু এজন্য যে তোমরা ফেরেশতা হয়ে যাবে অথবা চিরস্থায়ী হবে।" আর সে তাদের কাছে শপথ করে বলল, "আমি অবশ্যই তোমাদের জন্য শুভাকাঙ্ক্ষী।"',
              ar: 'فَوَسْوَسَ لَهُمَا الشَّيْطَانُ لِيُبْدِيَ لَهُمَا مَا وُورِيَ عَنْهُمَا مِن سَوْآتِهِمَا',
            },
          },
        ],
      },
      {
        id: 'adam-ch04-p02',
        text: 'আদম ও হাওয়া শয়তানের প্রতারণায় বশীভূত হয়ে নিষিদ্ধ গাছ থেকে আহার করলেন। এর তাৎক্ষণিক পরিণাম ছিল বিধ্বংসী — তাঁদের জান্নাতের পোশাক উন্মোচিত হলো এবং তাঁদের লজ্জাস্থান তাঁদের কাছে প্রকাশ হয়ে পড়ল। লজ্জায় তাঁরা জান্নাতের পাতা দিয়ে নিজেদের ঢাকতে লাগলেন। আল্লাহ তাঁদের ডেকে বললেন, "আমি কি তোমাদের এই গাছ থেকে নিষেধ করিনি এবং তোমাদের বলিনি যে শয়তান তোমাদের প্রকাশ্য শত্রু?" এই মুহূর্ত মানব ইতিহাসের একটি গুরুত্বপূর্ণ মোড়: প্রথম পাপ, লজ্জার প্রথম অভিজ্ঞতা এবং অবাধ্যতার পরিণাম সম্পর্কে প্রথম শিক্ষা।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 22,
            arabicText: 'فَدَلَّاهُمَا بِغُرُورٍ ۚ فَلَمَّا ذَاقَا الشَّجَرَةَ بَدَتْ لَهُمَا سَوْآتُهُمَا وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ الْجَنَّةِ',
            translation: {
              en: 'So he made them fall, through deception. And when they tasted of the tree, their private parts became apparent to them, and they began to fasten together over themselves from the leaves of Paradise. And their Lord called to them, "Did I not forbid you from that tree and tell you that Satan is to you a clear enemy?"',
              bn: 'অতঃপর সে প্রতারণার মাধ্যমে তাদের পতন ঘটাল। যখন তারা সেই গাছের ফল ভক্ষণ করল, তখন তাদের লজ্জাস্থান তাদের কাছে প্রকাশ হয়ে পড়ল এবং তারা জান্নাতের পাতা দিয়ে নিজেদের ঢাকতে লাগল। তাদের রব তাদের ডেকে বললেন, "আমি কি তোমাদের এই গাছ থেকে নিষেধ করিনি এবং তোমাদের বলিনি যে শয়তান তোমাদের প্রকাশ্য শত্রু?"',
              ar: 'فَدَلَّاهُمَا بِغُرُورٍ ۚ فَلَمَّا ذَاقَا الشَّجَرَةَ بَدَتْ لَهُمَا سَوْآتُهُمَا وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ الْجَنَّةِ',
            },
          },
        ],
      },
      {
        id: 'adam-ch04-p03',
        text: 'সূরা ত্বা-হায় শয়তানের কৌশল আরও বিস্তারিত বর্ণিত হয়েছে। সে বলেছিল: "হে আদম, আমি কি তোমাকে অমরত্বের গাছ ও অক্ষয় রাজত্বের সন্ধান দেব?" আদম ও হাওয়া উভয়ে সেই গাছ থেকে খেলেন এবং তাঁদের লজ্জাস্থান প্রকাশ হয়ে পড়ল। তবে কুরআন উল্লেখ করেছে যে এটি ছিল একটি পদস্খলন, ইচ্ছাকৃত বিদ্রোহ নয়।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 20,
            surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
            ayahStart: 120,
            ayahEnd: 121,
            arabicText: 'فَوَسْوَسَ إِلَيْهِ الشَّيْطَانُ قَالَ يَا آدَمُ هَلْ أَدُلُّكَ عَلَىٰ شَجَرَةِ الْخُلْدِ وَمُلْكٍ لَّا يَبْلَىٰ',
            translation: {
              en: 'Then Satan whispered to him; he said, "O Adam, shall I direct you to the tree of eternity and possession that will not deteriorate?" And Adam and his wife ate of it, and their private parts became apparent to them, and they began to fasten over themselves from the leaves of Paradise. And Adam disobeyed his Lord and erred.',
              bn: 'অতঃপর শয়তান তাকে কুমন্ত্রণা দিল; সে বলল, "হে আদম, আমি কি তোমাকে অমরত্বের গাছ ও অক্ষয় রাজত্বের সন্ধান দেব?" তখন তারা উভয়ে তা থেকে খেল, ফলে তাদের লজ্জাস্থান তাদের কাছে প্রকাশ পেল এবং তারা জান্নাতের পাতা দিয়ে নিজেদের ঢাকতে লাগল। আদম তার রবের অবাধ্যতা করল এবং ভুল করল।',
              ar: 'فَوَسْوَسَ إِلَيْهِ الشَّيْطَانُ قَالَ يَا آدَمُ هَلْ أَدُلُّكَ عَلَىٰ شَجَرَةِ الْخُلْدِ وَمُلْكٍ لَّا يَبْلَىٰ',
            },
          },
        ],
      },
      {
        id: 'adam-ch04-p04',
        text: 'ইবনে কাসীর নিষিদ্ধ গাছের পরিচয় সম্পর্কে আলোচনা করেন। পণ্ডিতদের মধ্যে মতভেদ রয়েছে — কেউ বলেন এটি আঙুর গাছ, কেউ বলেন গম, কেউ বলেন ডুমুর গাছ। তবে ইবনে কাসীর জোর দেন যে গাছের পরিচয় মুখ্য নয়; মুখ্য হলো আনুগত্যের শিক্ষা। কুরআনও বলে: "আর আমি ইতিপূর্বে আদম থেকে অঙ্গীকার নিয়েছিলাম, কিন্তু সে ভুলে গিয়েছিল; আর আমি তার মধ্যে দৃঢ় সংকল্প পাইনি।"',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 20,
            surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
            ayahStart: 115,
            translation: {
              en: 'And We had already taken a covenant from Adam before, but he forgot; and We found not in him determination.',
              bn: 'আর আমি ইতিপূর্বে আদম থেকে অঙ্গীকার নিয়েছিলাম, কিন্তু সে ভুলে গিয়েছিল; আর আমি তার মধ্যে দৃঢ় সংকল্প পাইনি।',
              ar: 'وَلَقَدْ عَهِدْنَا إِلَىٰ آدَمَ مِن قَبْلُ فَنَسِيَ وَلَمْ نَجِدْ لَهُ عَزْمًا',
            },
          },
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'Adam Eats from the Tree',
            summary: {
              en: 'Ibn Kathir discusses scholarly opinions on the identity of the forbidden tree and emphasises that Adam ate out of forgetfulness, not deliberate rebellion, as the Quran states he forgot and had no determination to disobey.',
              bn: 'ইবনে কাসীর নিষিদ্ধ গাছের পরিচয় সম্পর্কে পণ্ডিতদের মতামত আলোচনা করেন এবং জোর দেন যে আদম ভুলবশত খেয়েছিলেন।',
              ar: 'يناقش ابن كثير آراء العلماء حول هوية الشجرة المحرمة ويؤكد أن آدم أكل نسياناً لا عصياناً متعمداً، كما يشير القرآن أنه نسي ولم يكن له عزم على المعصية.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-05',
    title: 'পৃথিবীতে অবতরণ ও তাওবা',
    summary: 'আদম ও হাওয়া আন্তরিকভাবে তাওবা করেন। আল্লাহ তাঁদের তাওবা কবুল করেন এবং তাঁদের পৃথিবীতে পাঠান।',
    order: 5,
    paragraphs: [
      {
        id: 'adam-ch05-p01',
        text: 'ভুলের পরপরই আদম ও হাওয়া আন্তরিকভাবে আল্লাহর কাছে তাওবা করলেন: "হে আমাদের রব, আমরা নিজেদের উপর জুলুম করেছি। আপনি যদি আমাদের ক্ষমা না করেন এবং আমাদের প্রতি দয়া না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 23,
            arabicText: 'قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
            translation: {
              en: 'They said, "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers."',
              bn: 'তারা বলল, "হে আমাদের রব, আমরা নিজেদের উপর জুলুম করেছি। আপনি যদি আমাদের ক্ষমা না করেন এবং আমাদের প্রতি দয়া না করেন, তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।"',
              ar: 'قَالَا رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch05-p02',
        text: 'আল্লাহ, পরম দয়ালু, আদমের তাওবা কবুল করলেন। কুরআন বলে: "অতঃপর আদম তার রবের কাছ থেকে কিছু বাণী পেলেন, ফলে আল্লাহ তার তাওবা কবুল করলেন। নিশ্চয়ই তিনিই তাওবা কবুলকারী, পরম দয়ালু।" পণ্ডিতদের মতে আদম যে বাণীগুলো পেয়েছিলেন তা সূরা আল-আ\'রাফে উল্লিখিত সেই দু\'আই — "হে আমাদের রব, আমরা নিজেদের উপর জুলুম করেছি..."। আল্লাহর এই তাওবা গ্রহণ ইসলামে একটি মৌলিক নীতি প্রতিষ্ঠা করল — পাপ যত বড়ই হোক না কেন, আন্তরিক তাওবা আল্লাহ সর্বদা কবুল করেন।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 37,
            arabicText: 'فَتَلَقَّىٰ آدَمُ مِن رَّبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ',
            translation: {
              en: 'Then Adam received from his Lord [some] words, and He accepted his repentance. Indeed, it is He who is the Accepting of Repentance, the Merciful.',
              bn: 'অতঃপর আদম তার রবের কাছ থেকে কিছু বাণী পেলেন, ফলে আল্লাহ তার তাওবা কবুল করলেন। নিশ্চয়ই তিনিই তাওবা কবুলকারী, পরম দয়ালু।',
              ar: 'فَتَلَقَّىٰ آدَمُ مِن رَّبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ',
            },
          },
        ],
      },
      {
        id: 'adam-ch05-p03',
        text: 'তাওবা কবুল হওয়া সত্ত্বেও আদম ও হাওয়াকে জান্নাত থেকে পৃথিবীতে নামিয়ে দেওয়া হলো। আল্লাহ বললেন, "তোমরা সকলে এখান থেকে নেমে যাও, তোমরা পরস্পর শত্রু। অতঃপর আমার পক্ষ থেকে তোমাদের কাছে হেদায়াত আসলে যে আমার হেদায়াত অনুসরণ করবে সে [দুনিয়ায়] বিপথগামী হবে না এবং [আখিরাতে] দুঃখকষ্ট পাবে না।" এই অবতরণ কেবল শাস্তি ছিল না — এটি ছিল পৃথিবীতে খলিফা স্থাপনের আল্লাহর মূল পরিকল্পনার বাস্তবায়ন। আদম এখন পৃথিবীতে প্রথম মানুষ হিসেবে তাঁর ভূমিকা পালন করতে যাচ্ছিলেন, ঐশী ওহী দ্বারা পরিচালিত হয়ে।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 2,
            surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারা', ar: 'البقرة' },
            ayahStart: 38,
            translation: {
              en: 'We said, "Go down from it, all of you. And when guidance comes to you from Me, whoever follows My guidance — there will be no fear concerning them, nor will they grieve."',
              bn: 'আমি বললাম, "তোমরা সবাই এখান থেকে নেমে যাও। অতঃপর যখন আমার পক্ষ থেকে তোমাদের কাছে হেদায়াত আসবে, তখন যারা আমার হেদায়াত অনুসরণ করবে, তাদের কোনো ভয় নেই এবং তারা দুঃখিতও হবে না।"',
              ar: 'قُلْنَا اهْبِطُوا مِنْهَا جَمِيعًا ۖ فَإِمَّا يَأْتِيَنَّكُم مِّنِّي هُدًى فَمَن تَبِعَ هُدَايَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ',
            },
          },
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আ\'রাফ', ar: 'الأعراف' },
            ayahStart: 24,
            translation: {
              en: '[Allah] said, "Descend, being to one another enemies. And for you on the earth is a place of settlement and enjoyment for a time."',
              bn: '[আল্লাহ] বললেন, "তোমরা নেমে যাও, তোমরা পরস্পর শত্রু। আর পৃথিবীতে একটি নির্দিষ্ট সময় পর্যন্ত তোমাদের জন্য বসবাস ও ভোগের ব্যবস্থা আছে।"',
              ar: 'قَالَ اهْبِطُوا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ ۖ وَلَكُمْ فِي الْأَرْضِ مُسْتَقَرٌّ وَمَتَاعٌ إِلَىٰ حِينٍ',
            },
          },
          {
            type: 'quran',
            surah: 20,
            surahName: { en: 'Ta-Ha', bn: 'তা-হা', ar: 'طه' },
            ayahStart: 122,
            ayahEnd: 123,
            translation: {
              en: 'Then his Lord chose him and turned to him in forgiveness and guided [him]. [Allah] said, "Descend from it [Paradise] — all, [your descendants] being enemies to one another. And if there should come to you guidance from Me — then whoever follows My guidance will neither go astray [in the world] nor suffer [in the Hereafter]."',
              bn: 'অতঃপর তার রব তাকে মনোনীত করলেন, তার তাওবা কবুল করলেন এবং তাকে পথ দেখালেন। [আল্লাহ] বললেন, "তোমরা সকলে এখান থেকে নেমে যাও — তোমরা পরস্পর শত্রু। অতঃপর আমার পক্ষ থেকে তোমাদের কাছে হেদায়াত আসলে যে আমার হেদায়াত অনুসরণ করবে সে বিপথগামী হবে না এবং দুঃখকষ্ট পাবে না।"',
              ar: 'ثُمَّ اجْتَبَاهُ رَبُّهُ فَتَابَ عَلَيْهِ وَهَدَىٰ قَالَ اهْبِطَا مِنْهَا جَمِيعًا',
            },
          },
        ],
      },
      {
        id: 'adam-ch05-p04',
        text: 'ইবনে কাসীর বর্ণনা করেন যে আদম ও হাওয়া পৃথিবীর বিভিন্ন স্থানে অবতরণ করেন। কিছু বর্ণনা অনুসারে তারা আরাফাতের ময়দানে পুনরায় মিলিত হন। এই অবতরণ শুধু শাস্তি ছিল না — এটি ছিল পৃথিবীতে খলিফা স্থাপনের আল্লাহর মূল পরিকল্পনার বাস্তবায়ন।',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Descent of Adam and Hawwa to Earth',
            summary: {
              en: 'Ibn Kathir cites various narrations about the locations where Adam and Hawwa descended to earth, including the tradition that they reunited at the plain of Arafat, and notes the diversity of scholarly opinions on these details.',
              bn: 'ইবনে কাসীর আদম ও হাওয়ার পৃথিবীতে অবতরণের স্থান সম্পর্কে বিভিন্ন বর্ণনা উদ্ধৃত করেন।',
              ar: 'يذكر ابن كثير روايات مختلفة حول أماكن هبوط آدم وحواء إلى الأرض، بما في ذلك رواية لقائهما في عرفات، ويشير إلى تنوع آراء العلماء حول هذه التفاصيل.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-06',
    title: 'হাবিল ও কাবিল',
    summary: 'আদমের দুই পুত্রের কাহিনী: হাবিল আন্তরিক কোরবানি পেশ করেন, আর কাবিলের কোরবানি প্রত্যাখ্যাত হয়। ঈর্ষায় কাবিল প্রথম হত্যাকাণ্ড ঘটায়।',
    order: 6,
    paragraphs: [
      {
        id: 'adam-ch06-p01',
        text: 'আল্লাহ সূরা আল-মায়িদাহতে আদমের দুই পুত্রের কাহিনী বর্ণনা করেছেন। দুই ভাই আল্লাহর উদ্দেশ্যে কোরবানি পেশ করল। হাবিলের কোরবানি কবুল হলো কিন্তু কাবিলেরটি হলো না। কুরআন বলে: "আল্লাহ শুধু মুত্তাকীদের থেকেই কবুল করেন।"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 5,
            surahName: { en: 'Al-Ma\'idah', bn: 'আল-মায়িদাহ', ar: 'المائدة' },
            ayahStart: 27,
            arabicText: 'وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ بِالْحَقِّ إِذْ قَرَّبَا قُرْبَانًا فَتُقُبِّلَ مِنْ أَحَدِهِمَا وَلَمْ يُتَقَبَّلْ مِنَ الْآخَرِ',
            translation: {
              en: 'And recite to them the story of Adam\'s two sons, in truth, when they both offered a sacrifice [to Allah], and it was accepted from one of them but was not accepted from the other.',
              bn: 'আর তাদের কাছে আদমের দুই পুত্রের সত্য ঘটনা বর্ণনা করুন, যখন তারা উভয়ে [আল্লাহর উদ্দেশ্যে] কোরবানি পেশ করল, তখন একজনের থেকে গৃহীত হলো আর অন্যজনের থেকে গৃহীত হলো না।',
              ar: 'وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ بِالْحَقِّ إِذْ قَرَّبَا قُرْبَانًا فَتُقُبِّلَ مِنْ أَحَدِهِمَا وَلَمْ يُتَقَبَّلْ مِنَ الْآخَرِ',
            },
          },
        ],
      },
      {
        id: 'adam-ch06-p02',
        text: 'কাবিল হত্যার হুমকি দিলে হাবিল বললেন: "তুমি যদি আমাকে হত্যা করতে আমার দিকে হাত বাড়াও — আমি তোমাকে হত্যা করতে তোমার দিকে হাত বাড়াব না। নিশ্চয়ই আমি বিশ্বজগতের রব আল্লাহকে ভয় করি।" কিন্তু কাবিল তার ভাইকে হত্যা করল। আল্লাহ একটি কাক পাঠালেন যে মাটি খুঁড়ে দেখাল কীভাবে মৃতদেহ দাফন করতে হয়।',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 5,
            surahName: { en: 'Al-Ma\'idah', bn: 'আল-মায়িদাহ', ar: 'المائدة' },
            ayahStart: 28,
            ayahEnd: 29,
            translation: {
              en: '"If you should raise your hand against me to kill me — I shall not raise my hand against you to kill you. Indeed, I fear Allah, Lord of the worlds. Indeed I want you to obtain [thereby] my sin and your sin so you will be among the companions of the Fire. And that is the recompense of wrongdoers."',
              bn: '"তুমি যদি আমাকে হত্যা করতে আমার দিকে হাত বাড়াও — আমি তোমাকে হত্যা করতে তোমার দিকে হাত বাড়াব না। নিশ্চয়ই আমি বিশ্বজগতের রব আল্লাহকে ভয় করি। আমি চাই যে তুমি আমার পাপ ও তোমার পাপ বহন করো, ফলে তুমি জাহান্নামবাসীদের অন্তর্ভুক্ত হবে। আর এটাই জালিমদের প্রতিদান।"',
              ar: 'لَئِن بَسَطتَ إِلَيَّ يَدَكَ لِتَقْتُلَنِي مَا أَنَا بِبَاسِطٍ يَدِيَ إِلَيْكَ لِأَقْتُلَكَ ۖ إِنِّي أَخَافُ اللَّهَ رَبَّ الْعَالَمِينَ',
            },
          },
        ],
      },
      {
        id: 'adam-ch06-p03',
        text: 'হাবিলের মহৎ আবেদন সত্ত্বেও কাবিলের প্রবৃত্তি তাকে হত্যার অনুমতি দিল — সে তার ভাইকে হত্যা করল এবং মানব ইতিহাসের প্রথম খুনি হয়ে গেল। কুরআন বলে: "অতঃপর তার প্রবৃত্তি তাকে তার ভাইকে হত্যা করতে প্রলুব্ধ করল, ফলে সে তাকে হত্যা করল এবং ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হলো।" হত্যার পর কাবিল লাশটি নিয়ে কী করবে তাও জানত না। আল্লাহ একটি কাক পাঠালেন, যে মাটি খুঁড়ে তাকে দেখিয়ে দিল কীভাবে মৃতদেহ দাফন করতে হয়। তা দেখে কাবিল অনুতাপে আচ্ছন্ন হয়ে বলল: "হায়, আমি কি এই কাকটির মতোও হতে পারলাম না যে আমার ভাইয়ের লাশ লুকাব?"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 5,
            surahName: { en: 'Al-Ma\'idah', bn: 'আল-মায়িদাহ', ar: 'المائدة' },
            ayahStart: 30,
            ayahEnd: 31,
            arabicText: 'فَطَوَّعَتْ لَهُ نَفْسُهُ قَتْلَ أَخِيهِ فَقَتَلَهُ فَأَصْبَحَ مِنَ الْخَاسِرِينَ',
            translation: {
              en: 'And his soul permitted to him the murder of his brother, so he killed him and became among the losers. Then Allah sent a crow searching in the ground to show him how to hide the disgrace of his brother. He said, "O woe to me! Have I failed to be like this crow and hide the body of my brother?" And he became of the regretful.',
              bn: 'অতঃপর তার প্রবৃত্তি তাকে তার ভাইকে হত্যা করতে প্রলুব্ধ করল, ফলে সে তাকে হত্যা করল এবং ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হলো। তারপর আল্লাহ একটি কাক পাঠালেন, যে মাটি খুঁড়তে লাগল, তাকে দেখানোর জন্য কীভাবে তার ভাইয়ের লাশ লুকাবে। সে বলল, "হায়, আমি কি এই কাকটির মতোও হতে পারলাম না যে আমার ভাইয়ের লাশ লুকাব?" আর সে অনুতপ্তদের অন্তর্ভুক্ত হলো।',
              ar: 'فَطَوَّعَتْ لَهُ نَفْسُهُ قَتْلَ أَخِيهِ فَقَتَلَهُ فَأَصْبَحَ مِنَ الْخَاسِرِينَ فَبَعَثَ اللَّهُ غُرَابًا يَبْحَثُ فِي الْأَرْضِ لِيُرِيَهُ كَيْفَ يُوَارِي سَوْءَةَ أَخِيهِ',
            },
          },
        ],
      },
      {
        id: 'adam-ch06-p04',
        text: 'রাসূলুল্লাহ (সা.) বলেছেন: "কোনো প্রাণকে অন্যায়ভাবে হত্যা করা হলে তার রক্তের একটি অংশ আদমের প্রথম পুত্রের উপর বর্তায়, কারণ সেই প্রথম হত্যার প্রচলন শুরু করেছিল।"',
        phase: 'hadith',
        references: [
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3335',
            narrator: 'Abdullah ibn Mas\'ud',
            text: {
              en: 'The Prophet (peace be upon him) said: "No soul is killed unjustly except that a share of its blood falls upon the first son of Adam, because he was the first to establish the practice of murder."',
              bn: 'নবী (সা.) বলেছেন: "কোনো প্রাণকে অন্যায়ভাবে হত্যা করা হলে তার রক্তের একটি অংশ আদমের প্রথম পুত্রের উপর বর্তায়, কারণ সেই প্রথম হত্যার প্রচলন শুরু করেছিল।"',
              ar: 'قال النبي ﷺ: "لا تُقتل نفس ظلمًا إلا كان على ابن آدم الأول كفل من دمها، لأنه أول من سنّ القتل."',
            },
            grade: 'sahih',
          },
        ],
      },
      {
        id: 'adam-ch06-p05',
        text: 'ইবনে কাসীর এই বিরোধের পটভূমিও ব্যাখ্যা করেন — যমজ-বিবাহ প্রথা সংক্রান্ত মতবিরোধ এবং হাবিলের মৃত্যুর পর শীস (শেথ)-এর জন্ম। ইবনে কাসীরের বর্ণনা অনুসারে, সেই প্রাথমিক সময়ে প্রতিটি জন্ম যমজ — একটি ছেলে ও একটি মেয়ে — নিয়ে আসত। প্রথা ছিল এক ভাইয়ের যমজ বোন অন্য ভাইয়ের সাথে বিবাহ করবে। কাবিল তার নিজের যমজ বোনকে (যিনি অধিক সুন্দরী ছিলেন বলে বর্ণিত) হাবিলের সাথে বিবাহ দিতে না দিয়ে নিজের কাছে রাখতে চাইল। এই বিরোধের সমাধানের জন্যই কোরবানি পেশ করা হয়েছিল, যা শেষ পর্যন্ত হত্যায় পরিণত হলো। হাবিলের মৃত্যুর পর আদম ও হাওয়া গভীর শোকে মুহ্যমান হলেন এবং পরে আল্লাহ তাঁদের আরেকটি পুত্র শীস (শেথ) দিয়ে আশীর্বাদ করলেন, যিনি নবুওয়াতের ধারা অব্যাহত রাখলেন।',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Story of Habil and Qabil',
            summary: {
              en: 'Ibn Kathir explains the background of the dispute between Habil and Qabil, involving the twin-marriage custom of early humanity, and records that after Habil\'s death, Adam was blessed with Shith (Seth), who continued the line of prophethood.',
              bn: 'ইবনে কাসীর বিরোধের পটভূমি এবং হাবিলের মৃত্যুর পর শীস (শেথ)-এর জন্মের কথা বর্ণনা করেন।',
              ar: 'يشرح ابن كثير خلفية النزاع بين هابيل وقابيل المتعلق بعادة زواج التوائم في البشرية الأولى، ويذكر أنه بعد وفاة هابيل رُزق آدم بشيث الذي واصل سلسلة النبوة.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'adam-ch-07',
    title: 'আদম (আ.)-এর মৃত্যু',
    summary: 'আদম (আ.) প্রায় ৯৬০ বছর বেঁচে থাকেন এবং মৃত্যুবরণ করেন। ফেরেশতারা তাঁকে গোসল দেন ও দাফন করেন, মানবজাতির জন্য জানাযার রীতি প্রতিষ্ঠা করেন।',
    order: 7,
    paragraphs: [
      {
        id: 'adam-ch07-p01',
        text: 'আদম (আ.) পৃথিবীতে দীর্ঘ জীবন কাটান, প্রথম নবী ও মানবজাতির পিতা হিসেবে তাঁর দায়িত্ব পালন করেন। ইবনে কাসীর তাঁর নবুওয়াত নিশ্চিত করেন এবং বলেন যে তিনি ওহী পেয়েছিলেন এবং তাঁর ক্রমবর্ধমান পরিবারকে পরিচালনা করেছিলেন।',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Life and Prophethood of Adam on Earth',
            summary: {
              en: 'Ibn Kathir confirms Adam as a prophet who received revelation, taught his children the worship of Allah, and guided his family during his long life on earth.',
              bn: 'ইবনে কাসীর আদমকে একজন নবী হিসেবে নিশ্চিত করেন যিনি ওহী পেয়েছিলেন এবং তাঁর পরিবারকে পরিচালনা করেছিলেন।',
              ar: 'يؤكد ابن كثير أن آدم كان نبياً تلقى الوحي وعلّم أبناءه عبادة الله وأرشد أسرته خلال حياته الطويلة على الأرض.',
            },
          },
        ],
      },
      {
        id: 'adam-ch07-p02',
        text: 'আদমকে ১,০০০ বছরের আয়ু দেওয়া হয়েছিল কিন্তু তিনি ৪০ বছর দাউদকে দিয়ে দিয়েছিলেন। মৃত্যুর সময় আদম ভুলে গিয়ে বলেছিলেন যে তাঁর আরও ৪০ বছর বাকি আছে। নবী (সা.) বলেছেন: "আদম অস্বীকার করলেন, তাই তাঁর বংশধররা অস্বীকার করে; আদম ভুলে গিয়েছিলেন, তাই তাঁর বংশধররা ভুলে যায়।"',
        phase: 'hadith',
        references: [
          {
            type: 'hadith',
            collection: 'Jami at-Tirmidhi',
            hadithNumber: '3076',
            narrator: 'Abu Hurayrah',
            text: {
              en: 'The Prophet (peace be upon him) said: "When Allah created Adam, He wiped his back and every soul that He would create from him until the Day of Resurrection fell from his back... He gave Adam a lifespan of one thousand years and gave Dawud a lifespan of sixty years. Adam gave forty years of his lifespan to Dawud. When Adam\'s lifespan ended, the Angel of Death came to him. Adam said, \'Do I not have forty years remaining?\' The angel replied, \'Did you not give them to your son Dawud?\' Adam denied, so his offspring deny; Adam forgot, so his offspring forget."',
              bn: 'নবী (সা.) বলেছেন: "...আদম তাঁর আয়ু থেকে ৪০ বছর দাউদকে দিলেন..."',
              ar: 'قال النبي ﷺ: "...فوهب آدم لداود أربعين سنة من عمره..."',
            },
            grade: 'hasan',
          },
        ],
      },
      {
        id: 'adam-ch07-p03',
        text: 'আদম (আ.) মৃত্যুবরণ করলে ফেরেশতারা তাঁকে গোসল দিলেন, কাফন পরালেন, কবর খুঁড়লেন এবং দাফন করলেন। তারপর তাঁর সন্তানদের বললেন: "এটাই তোমাদের মৃতদের জন্য তোমাদের রীতি।"',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'ibn-kathir',
            book: 'Qasas al-Anbiya (Stories of the Prophets)',
            chapter: 'The Story of Adam, upon him be peace',
            section: 'The Death of Adam',
            summary: {
              en: 'Ibn Kathir narrates that when Adam died, the angels washed him, shrouded him, prayed over him, and buried him, telling his children: "This is your practice for your dead." This established the funeral rites followed by humanity.',
              bn: 'ইবনে কাসীর বর্ণনা করেন যে ফেরেশতারা আদমকে গোসল দিলেন, কাফন পরালেন এবং দাফন করলেন, জানাযার রীতি প্রতিষ্ঠা করলেন।',
              ar: 'يروي ابن كثير أنه لما مات آدم غسلته الملائكة وكفنته وصلت عليه ودفنته، ثم قالت لبنيه: "هذه سنتكم في موتاكم." فأسست بذلك شعائر الجنازة التي تتبعها البشرية.',
            },
          },
        ],
      },
      {
        id: 'adam-ch07-p04',
        text: 'ইসরা ও মিরাজের রাতে রাসূলুল্লাহ (সা.) প্রথম আসমানে আদম (আ.)-এর সাথে সাক্ষাৎ করেন। নবী (সা.) বর্ণনা করেছেন যে আদম তাঁকে অভ্যর্থনা জানিয়ে তাঁর নবুওয়াত স্বীকার করেছিলেন। আদম তাঁর ডানে ও বামে তাঁর বংশধরদের রূহসহ বসে ছিলেন — ডানে পুণ্যবান রূহ এবং বামে অন্যরা। তিনি যখন ডানে তাকাতেন, হাসতেন; যখন বামে তাকাতেন, কাঁদতেন। এই সাক্ষাৎ আখিরাতে আদমের সম্মানিত অবস্থান এবং সমগ্র মানবজাতির পিতা হিসেবে তাঁর ভূমিকা নিশ্চিত করে।',
        phase: 'hadith',
        references: [
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3207',
            narrator: 'Malik ibn Sa\'sa\'ah',
            text: {
              en: 'The Prophet (peace be upon him) said: "...Then we ascended to the first heaven. Jibril asked for the gate to be opened... When it was opened, I saw Adam. Jibril said, \'This is your father Adam, greet him.\' So I greeted him, and he returned the greeting and said, \'Welcome, O righteous son and righteous Prophet.\'"',
              bn: 'নবী (সা.) বলেছেন: "...তারপর আমরা প্রথম আসমানে উঠলাম... আমি আদমকে দেখলাম..."',
              ar: 'قال النبي ﷺ: "...ثم عُرج بنا إلى السماء الأولى... فإذا أنا بآدم..."',
            },
            grade: 'sahih',
          },
        ],
      },
    ],
  },
];

export default chapters;
