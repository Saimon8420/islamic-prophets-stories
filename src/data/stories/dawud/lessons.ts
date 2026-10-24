import type { Lesson } from '../../../types/prophet';

const lessons: Lesson[] = [
  {
    id: 'dawud-lesson-1',
    title: {
      en: 'Victory Comes From Allah, Not From Numbers',
      bn: 'বিজয় আসে আল্লাহর পক্ষ থেকে, সংখ্যা দিয়ে নয়',
      ar: 'النصر من عند الله لا بكثرة العدد',
    },
    description: {
      en: 'A small band of believers who prayed for patience defeated the great army of Jalut, and young Dawud won by Allah\'s permission. When a task feels too big for us, we prepare well, stay patient and rely on Allah.',
      bn: 'ধৈর্যের জন্য দোয়া করা ছোট্ট একদল মুমিন জালূতের বিশাল বাহিনীকে হারিয়ে দিয়েছিলেন, আর তরুণ দাউদ জিতেছিলেন আল্লাহর অনুমতিতে। কোনো কাজ যখন আমাদের কাছে খুব বড় মনে হয়, তখন ভালো প্রস্তুতি নিই, ধৈর্য ধরি আর আল্লাহর উপর ভরসা রাখি।',
      ar: 'هزمت فئة قليلة من المؤمنين دعت الله بالصبر جيشَ جالوت الكبير، وانتصر داود الشاب بإذن الله. فإذا بدت لنا مهمة أكبر منا، نستعد جيداً ونصبر ونتوكل على الله.',
    },
    references: [
      {
        type: 'quran',
        surah: 2,
        surahName: { en: 'Al-Baqarah', bn: 'আল-বাকারাহ', ar: 'البقرة' },
        ayahStart: 251,
        translation: {
          en: 'So they defeated them by permission of Allah, and Dawud killed Jalut, and Allah gave him the kingship and wisdom and taught him from that which He willed. And if it were not for Allah checking some people by means of others, the earth would have been corrupted, but Allah is full of bounty to the worlds.',
          bn: 'অতঃপর তারা আল্লাহর অনুমতিতে তাদের পরাজিত করল এবং দাউদ জালূতকে হত্যা করল। আল্লাহ তাকে রাজত্ব ও হিকমাত দান করলেন এবং তাকে যা ইচ্ছা শিক্ষা দিলেন। আল্লাহ যদি একদলকে অন্যদল দ্বারা প্রতিহত না করতেন, তবে পৃথিবী ফাসাদে পূর্ণ হয়ে যেত, কিন্তু আল্লাহ বিশ্ববাসীর প্রতি অনুগ্রহশীল।',
          ar: 'فَهَزَمُوهُم بِإِذْنِ اللَّهِ وَقَتَلَ دَاوُودُ جَالُوتَ وَآتَاهُ اللَّهُ الْمُلْكَ وَالْحِكْمَةَ وَعَلَّمَهُ مِمَّا يَشَاءُ ۗ وَلَوْلَا دَفْعُ اللَّهِ النَّاسَ بَعْضَهُم بِبَعْضٍ لَّفَسَدَتِ الْأَرْضُ وَلَٰكِنَّ اللَّهَ ذُو فَضْلٍ عَلَى الْعَالَمِينَ',
        },
      },
    ],
  },
  {
    id: 'dawud-lesson-2',
    title: {
      en: 'Honest Work Is Honourable',
      bn: 'হালাল পরিশ্রম সম্মানের',
      ar: 'العمل الحلال شرف',
    },
    description: {
      en: 'Dawud was a king and a prophet, yet he ate from the work of his own hands. No honest job is beneath us — earning a halal living with our own effort is something the Prophet ﷺ praised as the best of earnings.',
      bn: 'দাউদ ছিলেন রাজা ও নবী, তবুও তিনি নিজের হাতের কামাই থেকে খেতেন। কোনো সৎ কাজই ছোট নয় — নিজের পরিশ্রমে হালাল রুজি করাকে নবী ﷺ সবচেয়ে উত্তম উপার্জন বলেছেন।',
      ar: 'كان داود ملكاً ونبياً، ومع ذلك كان يأكل من عمل يده. فلا عمل شريف يقلّ من قدرنا، والكسب الحلال بجهدنا مما أثنى عليه النبي ﷺ بأنه خير الطعام.',
    },
    references: [
      {
        type: 'hadith',
        collection: 'Sahih al-Bukhari',
        hadithNumber: '2072',
        narrator: 'Al-Miqdam',
        text: {
          en: 'The Prophet (SAW) said: "Nobody has ever eaten a better meal than that which one has earned by working with one\'s own hands. The Prophet of Allah Dawud used to eat from the earnings of his manual labour."',
          bn: 'নবী (সা.) বলেছেন: "কেউ নিজের হাতের উপার্জনের চেয়ে উত্তম খাদ্য কখনো খায়নি। আল্লাহর নবী দাউদ নিজের হাতের শ্রমের উপার্জন থেকে খেতেন।"',
          ar: 'قال النبي ﷺ: "مَا أَكَلَ أَحَدٌ طَعَامًا قَطُّ خَيْرًا مِنْ أَنْ يَأْكُلَ مِنْ عَمَلِ يَدِهِ وَإِنَّ نَبِيَّ اللَّهِ دَاوُدَ كَانَ يَأْكُلُ مِنْ عَمَلِ يَدِهِ"',
        },
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'dawud-lesson-3',
    title: {
      en: 'Judge Fairly and Don\'t Follow Your Desires',
      bn: 'ন্যায়ভাবে বিচার করো, খেয়ালখুশির পেছনে চলো না',
      ar: 'احكم بالعدل ولا تتّبع الهوى',
    },
    description: {
      en: 'After his trial with the two disputants, Dawud turned to Allah, was forgiven, and was told to judge between people with truth and not follow desire. Whether we settle a quarrel between siblings or lead a team, we listen to both sides and decide by what is right, not by what we like.',
      bn: 'দুই বিবাদকারীর পরীক্ষার পর দাউদ আল্লাহর দিকে ফিরে গেলেন, ক্ষমা পেলেন, আর আদেশ পেলেন মানুষের মধ্যে সত্যের সাথে বিচার করতে, প্রবৃত্তির অনুসরণ না করতে। ভাইবোনের ঝগড়া মেটানো হোক বা কোনো দল চালানো — দুই পক্ষের কথা শুনি, আর নিজের পছন্দ নয়, যা সঠিক তা দিয়েই সিদ্ধান্ত নিই।',
      ar: 'بعد ابتلائه بالخصمين رجع داود إلى الله فغفر له، وأُمر أن يحكم بين الناس بالحق ولا يتبع الهوى. فسواء أصلحنا بين إخوة أو قدنا فريقاً، نسمع الطرفين ونحكم بالحق لا بما نهوى.',
    },
    references: [
      {
        type: 'quran',
        surah: 38,
        surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
        ayahStart: 25,
        ayahEnd: 26,
        translation: {
          en: 'So We forgave him that, and indeed, for him is nearness to Us and a good place of return. [We said], "O Dawud, indeed We have made you a successor upon the earth, so judge between the people in truth and do not follow desire, as it will lead you astray from the way of Allah. Indeed, those who go astray from the way of Allah will have a severe punishment for having forgotten the Day of Account."',
          bn: 'আমি তাকে ক্ষমা করলাম। নিশ্চয়ই তার জন্য আমার নিকট মর্যাদা ও সুন্দর প্রত্যাবর্তনস্থল রয়েছে। "হে দাউদ, আমি তোমাকে পৃথিবীতে খলীফা বানিয়েছি, তাই মানুষের মধ্যে সত্যের সাথে বিচার করো এবং প্রবৃত্তির অনুসরণ করো না, কারণ তা তোমাকে আল্লাহর পথ থেকে বিচ্যুত করবে। যারা আল্লাহর পথ থেকে বিচ্যুত হয়, হিসাবের দিন ভুলে যাওয়ার কারণে তাদের জন্য কঠিন শাস্তি রয়েছে।"',
          ar: 'فَغَفَرْنَا لَهُ ذَٰلِكَ ۖ وَإِنَّ لَهُ عِندَنَا لَزُلْفَىٰ وَحُسْنَ مَآبٍ يَا دَاوُودُ إِنَّا جَعَلْنَاكَ خَلِيفَةً فِي الْأَرْضِ فَاحْكُم بَيْنَ النَّاسِ بِالْحَقِّ وَلَا تَتَّبِعِ الْهَوَىٰ فَيُضِلَّكَ عَن سَبِيلِ اللَّهِ ۚ إِنَّ الَّذِينَ يَضِلُّونَ عَن سَبِيلِ اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ بِمَا نَسُوا يَوْمَ الْحِسَابِ',
        },
      },
    ],
  },
  {
    id: 'dawud-lesson-4',
    title: {
      en: 'Worship With Balance',
      bn: 'ভারসাম্য রেখে ইবাদত',
      ar: 'العبادة بتوازن',
    },
    description: {
      en: 'Dawud fasted every other day and prayed part of the night while still sleeping and resting, and the Prophet ﷺ called this the most beloved fasting and prayer to Allah. Steady, sustainable worship that we can keep up is better than bursts we cannot maintain.',
      bn: 'দাউদ একদিন পরপর রোজা রাখতেন, রাতের একটা অংশ নামাজ পড়তেন, আবার ঘুম ও বিশ্রামও নিতেন — নবী ﷺ একে আল্লাহর কাছে সবচেয়ে প্রিয় রোজা ও নামাজ বলেছেন। হঠাৎ অনেক করে ছেড়ে দেওয়ার চেয়ে নিয়মিত, টেকসই ইবাদত অনেক ভালো।',
      ar: 'كان داود يصوم يوماً ويفطر يوماً، ويقوم جزءاً من الليل مع أخذه حظه من النوم والراحة، وقد سمّى النبي ﷺ ذلك أحب الصيام والصلاة إلى الله. فالعبادة المنتظمة التي نداوم عليها خير من اندفاع لا نستطيع الاستمرار عليه.',
    },
    references: [
      {
        type: 'hadith',
        collection: 'Sahih al-Bukhari',
        hadithNumber: '1131',
        narrator: 'Abdullah ibn Amr',
        text: {
          en: 'The Prophet (SAW) said: "The most beloved fasting to Allah is the fasting of Dawud; he used to fast one day and not fast the next. And the most beloved prayer to Allah is the prayer of Dawud; he used to sleep half the night, pray for a third, and sleep for a sixth."',
          bn: 'নবী (সা.) বলেছেন: "আল্লাহর কাছে সবচেয়ে প্রিয় রোযা হলো দাউদের রোযা; তিনি একদিন রোযা রাখতেন আর পরদিন রাখতেন না। এবং আল্লাহর কাছে সবচেয়ে প্রিয় নামায হলো দাউদের নামায; তিনি অর্ধেক রাত ঘুমাতেন, এক-তৃতীয়াংশ নামায পড়তেন, এবং এক-ষষ্ঠাংশ ঘুমাতেন।"',
          ar: 'قال النبي ﷺ: "أَحَبُّ الصِّيَامِ إِلَى اللَّهِ صِيَامُ دَاوُدَ كَانَ يَصُومُ يَوْمًا وَيُفْطِرُ يَوْمًا وَأَحَبُّ الصَّلَاةِ إِلَى اللَّهِ صَلَاةُ دَاوُدَ كَانَ يَنَامُ نِصْفَ اللَّيْلِ وَيَقُومُ ثُلُثَهُ وَيَنَامُ سُدُسَهُ"',
        },
        grade: 'sahih',
      },
    ],
  },
  {
    id: 'dawud-lesson-5',
    title: {
      en: 'All Creation Glorifies Allah',
      bn: 'সমস্ত সৃষ্টি আল্লাহর তাসবীহ পড়ে',
      ar: 'كل الخلق يسبّح الله',
    },
    description: {
      en: 'Allah commanded the mountains and the birds to glorify Him along with Dawud. When we say SubhanAllah, we join a remembrance that the whole universe is already part of — so let dhikr fill the quiet moments of our day.',
      bn: 'আল্লাহ পাহাড় আর পাখিদের আদেশ দিয়েছিলেন দাউদের সাথে তাসবীহ পড়তে। আমরা যখন "সুবহানাল্লাহ" বলি, তখন সেই যিকিরে শরিক হই যা গোটা সৃষ্টিজগৎ আগে থেকেই করছে — তাই দিনের ফাঁকা মুহূর্তগুলো যিকির দিয়ে ভরে তুলি।',
      ar: 'أمر الله الجبال والطير أن تسبّح مع داود. فحين نقول "سبحان الله" ننضمّ إلى ذكرٍ يشارك فيه الكون كله، فلنملأ لحظات يومنا الهادئة بذكر الله.',
    },
    references: [
      {
        type: 'quran',
        surah: 34,
        surahName: { en: 'Saba', bn: 'সাবা', ar: 'سبأ' },
        ayahStart: 10,
        translation: {
          en: 'And We certainly gave Dawud from Us bounty. [We said], "O mountains, repeat [Our] praises with him, and the birds [as well]."',
          bn: 'আমি অবশ্যই দাউদকে আমার পক্ষ থেকে অনুগ্রহ দান করেছিলাম। [আমি বললাম], "হে পর্বতমালা, তার সাথে আমার তাসবীহ পাঠ করো এবং পাখিরাও।"',
          ar: 'وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلًا ۖ يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ',
        },
      },
    ],
  },
];

export default lessons;
