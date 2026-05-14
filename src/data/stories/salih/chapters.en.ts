import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'salih-ch-01',
    title: 'The People of Thamud: Successors of \'Ad',
    summary: 'After the destruction of \'Ad, the people of Thamud rose to power in the rocky lands of Al-Hijr. Allah blessed them with fertile valleys and the ability to carve magnificent homes from solid mountains, yet they turned to idol worship.',
    order: 1,
    paragraphs: [
      {
        id: 'salih-ch01-p01',
        text: 'The people of Thamud were the successors of \'Ad, rising to prominence in the region of Al-Hijr in northern Arabia (modern-day Mada\'in Salih in Saudi Arabia). Allah blessed them with remarkable abilities — they carved elaborate homes and palaces directly from the solid rock of mountains, a feat of engineering that amazed all who saw them. The Quran describes these mountain homes with awe: "And you carved out of the mountains, homes, feeling secure." Allah also blessed them with gardens, springs, date palms with ripe fruit, and fertile farmlands. Like \'Ad before them, Thamud had been given every reason to be grateful. The Quran also mentions their dwellings in Surah Al-Fajr, right after mentioning \'Ad: "And [with] Thamud, who carved out the rocks in the valley?"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 26,
            surahName: { en: 'Ash-Shu\'ara', bn: 'আশ-শুআরা', ar: 'الشعراء' },
            ayahStart: 146,
            ayahEnd: 149,
            arabicText: 'أَتُتْرَكُونَ فِي مَا هَاهُنَا آمِنِينَ فِي جَنَّاتٍ وَعُيُونٍ وَزُرُوعٍ وَنَخْلٍ طَلْعُهَا هَضِيمٌ وَتَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا فَارِهِينَ',
            translation: {
              en: '"Will you be left in what is here, secure — within gardens and springs, and fields of crops and palm trees with softened fruit? And you carve out of the mountains, homes, with skill."',
              bn: '"তোমাদেরকে কি এখানে যা আছে তাতে নিরাপদে রেখে দেওয়া হবে — বাগান ও ঝরনার মধ্যে, শস্যক্ষেত ও নরম গুচ্ছফলওয়ালা খেজুর গাছের মধ্যে? আর তোমরা পাহাড় কেটে দক্ষতার সাথে ঘর তৈরি করছ।"',
              ar: 'أَتُتْرَكُونَ فِي مَا هَاهُنَا آمِنِينَ فِي جَنَّاتٍ وَعُيُونٍ وَزُرُوعٍ وَنَخْلٍ طَلْعُهَا هَضِيمٌ وَتَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا فَارِهِينَ'
            }
          },
          {
            type: 'quran',
            surah: 89,
            surahName: { en: 'Al-Fajr', bn: 'আল-ফজর', ar: 'الفجر' },
            ayahStart: 9,
            arabicText: 'وَثَمُودَ الَّذِينَ جَابُوا الصَّخْرَ بِالْوَادِ',
            translation: {
              en: 'And [with] Thamud, who carved out the rocks in the valley?',
              bn: 'আর সামূদ, যারা উপত্যকায় পাথর কেটে (ঘর) তৈরি করেছিল?',
              ar: 'وَثَمُودَ الَّذِينَ جَابُوا الصَّخْرَ بِالْوَادِ'
            }
          }
        ]
      },
      {
        id: 'salih-ch01-p02',
        text: 'Despite witnessing the fate of \'Ad before them, the people of Thamud repeated the same sins. They became arrogant in their power and security, oppressed the weak among them, and turned away from the worship of Allah to worship idols. Ibn Kathir notes that they were fully aware of what had happened to \'Ad — they were their successors in the land. Salih reminded them of this directly: "And remember when He made you successors after \'Ad and settled you in the land, [and] you take for yourselves palaces from its plains and carve from the mountains, homes. Then remember the favours of Allah and do not commit abuse on the earth, spreading corruption." But their prosperity blinded them to the lesson of their predecessors.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
            ayahStart: 74,
            arabicText: 'وَاذْكُرُوا إِذْ جَعَلَكُمْ خُلَفَاءَ مِن بَعْدِ عَادٍ وَبَوَّأَكُمْ فِي الْأَرْضِ تَتَّخِذُونَ مِن سُهُولِهَا قُصُورًا وَتَنْحِتُونَ الْجِبَالَ بُيُوتًا ۖ فَاذْكُرُوا آلَاءَ اللَّهِ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ',
            translation: {
              en: '"And remember when He made you successors after \'Ad and settled you in the land, [and] you take for yourselves palaces from its plains and carve from the mountains, homes. Then remember the favours of Allah and do not commit abuse on the earth, spreading corruption."',
              bn: '"আর স্মরণ করো যখন তিনি তোমাদের আদ জাতির পর উত্তরাধিকারী করলেন এবং তোমাদের জমিনে বসবাসের ব্যবস্থা করলেন — তোমরা সমতল ভূমিতে প্রাসাদ তৈরি করো এবং পাহাড় কেটে ঘর বানাও। সুতরাং আল্লাহর অনুগ্রহসমূহ স্মরণ করো এবং পৃথিবীতে বিপর্যয় সৃষ্টি করো না।"',
              ar: 'وَاذْكُرُوا إِذْ جَعَلَكُمْ خُلَفَاءَ مِن بَعْدِ عَادٍ وَبَوَّأَكُمْ فِي الْأَرْضِ تَتَّخِذُونَ مِن سُهُولِهَا قُصُورًا وَتَنْحِتُونَ الْجِبَالَ بُيُوتًا ۖ فَاذْكُرُوا آلَاءَ اللَّهِ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'salih-ch-02',
    title: 'Salih\'s Mission and the Miracle of the She-Camel',
    summary: 'Allah sent Salih as a prophet to Thamud. When they demanded a miracle, Allah brought forth a she-camel from solid rock — a living sign with specific rules about sharing water.',
    order: 2,
    paragraphs: [
      {
        id: 'salih-ch02-p01',
        text: 'To the people of Thamud, Allah sent a prophet from among their own — Salih (AS). Like every prophet before him, Salih\'s message was the same: worship Allah alone and abandon your idols. He told them: "O my people, worship Allah; you have no deity other than Him. He has produced you from the earth and settled you in it, so ask forgiveness of Him and then repent to Him. Indeed, my Lord is near and responsive." This verse reveals something unique about Salih\'s message — he reminded them that Allah created them from the earth itself, and He is the One who established them upon it. Their very homes carved from mountains should have been a reminder of the One who gave them the earth.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 61,
            arabicText: 'وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ هُوَ أَنشَأَكُم مِّنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا فَاسْتَغْفِرُوهُ ثُمَّ تُوبُوا إِلَيْهِ ۚ إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ',
            translation: {
              en: 'And to Thamud [We sent] their brother Salih. He said, "O my people, worship Allah; you have no deity other than Him. He has produced you from the earth and settled you in it, so ask forgiveness of Him and then repent to Him. Indeed, my Lord is near and responsive."',
              bn: 'আর সামূদ জাতির কাছে তাদের ভাই সালিহকে পাঠালাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। তিনিই তোমাদের মাটি থেকে সৃষ্টি করেছেন এবং তাতে তোমাদের বসবাস করিয়েছেন। সুতরাং তাঁর কাছে ক্ষমা চাও এবং তাঁর কাছে তওবা করো। নিশ্চয়ই আমার রব নিকটে, সাড়াদানকারী।"',
              ar: 'وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ هُوَ أَنشَأَكُم مِّنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا فَاسْتَغْفِرُوهُ ثُمَّ تُوبُوا إِلَيْهِ ۚ إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ'
            }
          }
        ]
      },
      {
        id: 'salih-ch02-p02',
        text: 'The people of Thamud demanded a miracle to prove Salih\'s prophethood. Ibn Kathir narrates that they specified their demand — they wanted a pregnant she-camel to emerge from a particular rock. Allah answered this challenge and brought forth exactly what they asked for: a she-camel, pregnant, emerging from solid rock. This was a living, ongoing miracle — not a one-time event. Salih presented her to his people with clear instructions: "O my people, this is the she-camel of Allah — [sent] to you as a sign. So let her feed upon Allah\'s earth and do not touch her with harm, lest there seize you an impending punishment." The she-camel was also given a specific arrangement for sharing the water supply: "And inform them that the water is shared between them, each [the camel\'s and their] right to drink being established by turns."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
            ayahStart: 73,
            arabicText: 'قَدْ جَاءَتْكُم بَيِّنَةٌ مِّن رَّبِّكُمْ ۖ هَٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً ۖ فَذَرُوهَا تَأْكُلْ فِي أَرْضِ اللَّهِ ۖ وَلَا تَمَسُّوهَا بِسُوءٍ فَيَأْخُذَكُمْ عَذَابٌ أَلِيمٌ',
            translation: {
              en: '"There has come to you clear evidence from your Lord. This is the she-camel of Allah [sent] to you as a sign. So let her feed upon Allah\'s earth and do not touch her with harm, lest there seize you a painful punishment."',
              bn: '"তোমাদের রবের কাছ থেকে তোমাদের কাছে স্পষ্ট প্রমাণ এসেছে। এটি আল্লাহর উটনী, তোমাদের জন্য নিদর্শন। তাকে আল্লাহর জমিনে চরে খেতে দাও এবং তাকে কোনো ক্ষতি করো না, নতুবা বেদনাদায়ক শাস্তি তোমাদের পাকড়াও করবে।"',
              ar: 'قَدْ جَاءَتْكُم بَيِّنَةٌ مِّن رَّبِّكُمْ ۖ هَٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً ۖ فَذَرُوهَا تَأْكُلْ فِي أَرْضِ اللَّهِ ۖ وَلَا تَمَسُّوهَا بِسُوءٍ فَيَأْخُذَكُمْ عَذَابٌ أَلِيمٌ'
            }
          },
          {
            type: 'quran',
            surah: 54,
            surahName: { en: 'Al-Qamar', bn: 'আল-কমার', ar: 'القمر' },
            ayahStart: 27,
            ayahEnd: 28,
            arabicText: 'إِنَّا مُرْسِلُو النَّاقَةِ فِتْنَةً لَّهُمْ فَارْتَقِبْهُمْ وَاصْطَبِرْ وَنَبِّئْهُمْ أَنَّ الْمَاءَ قِسْمَةٌ بَيْنَهُمْ ۖ كُلُّ شِرْبٍ مُّحْتَضَرٌ',
            translation: {
              en: '"Indeed, We are sending the she-camel as trial for them, so watch them and be patient. And inform them that the water is shared between them, each [the camel\'s and their] right to drink being established by turns."',
              bn: '"নিশ্চয়ই আমি তাদের পরীক্ষার জন্য উটনী প্রেরণ করছি। তুমি তাদের লক্ষ্য করো এবং ধৈর্য ধারণ করো। আর তাদের জানিয়ে দাও যে পানি তাদের মধ্যে ভাগ করা — পালাক্রমে প্রত্যেকের পানি পানের অধিকার নির্ধারিত।"',
              ar: 'إِنَّا مُرْسِلُو النَّاقَةِ فِتْنَةً لَّهُمْ فَارْتَقِبْهُمْ وَاصْطَبِرْ وَنَبِّئْهُمْ أَنَّ الْمَاءَ قِسْمَةٌ بَيْنَهُمْ ۖ كُلُّ شِرْبٍ مُّحْتَضَرٌ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'salih-ch-03',
    title: 'The Hamstringing and the Three-Day Warning',
    summary: 'Nine corrupt leaders plotted against Salih. They hamstrung the she-camel in open defiance. Salih gave them a final warning: enjoy yourselves for three days — then punishment would come.',
    order: 3,
    paragraphs: [
      {
        id: 'salih-ch03-p01',
        text: 'The she-camel lived among the people of Thamud, freely grazing on the land and drinking from their water source on her designated day. On her day, she would drink from the well and they would milk her, getting enough milk for the entire community. On the other days, the water was theirs. But the disbelievers grew resentful. The Quran reveals that nine individuals — described as "those who spread corruption in the land and did not amend" — formed a conspiracy. They were the leaders and influencers of Thamud, and their plotting went beyond the she-camel. They even conspired against Salih himself: "And there were in the city nine family heads causing corruption in the land and not amending. They said, \'Take a mutual oath by Allah that we will kill him by night, he and his family. Then we will say to his executor, we did not witness the destruction of his family, and indeed, we are truthful.\'"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 27,
            surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النمل' },
            ayahStart: 48,
            ayahEnd: 49,
            arabicText: 'وَكَانَ فِي الْمَدِينَةِ تِسْعَةُ رَهْطٍ يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ قَالُوا تَقَاسَمُوا بِاللَّهِ لَنُبَيِّتَنَّهُ وَأَهْلَهُ ثُمَّ لَنَقُولَنَّ لِوَلِيِّهِ مَا شَهِدْنَا مَهْلِكَ أَهْلِهِ وَإِنَّا لَصَادِقُونَ',
            translation: {
              en: 'And there were in the city nine family heads causing corruption in the land and not amending. They said, "Take a mutual oath by Allah that we will kill him by night, he and his family. Then we will say to his executor, we did not witness the destruction of his family, and indeed, we are truthful."',
              bn: 'সেই শহরে নয়জন দলপতি ছিল যারা দেশে বিপর্যয় সৃষ্টি করত এবং সংশোধন করত না। তারা বলল, "আল্লাহর নামে পরস্পর শপথ করো যে আমরা রাতে তাকে ও তার পরিবারকে হত্যা করব। তারপর তার অভিভাবককে বলব, আমরা তার পরিবারের ধ্বংস প্রত্যক্ষ করিনি, এবং আমরা সত্যবাদী।"',
              ar: 'وَكَانَ فِي الْمَدِينَةِ تِسْعَةُ رَهْطٍ يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ قَالُوا تَقَاسَمُوا بِاللَّهِ لَنُبَيِّتَنَّهُ وَأَهْلَهُ ثُمَّ لَنَقُولَنَّ لِوَلِيِّهِ مَا شَهِدْنَا مَهْلِكَ أَهْلِهِ وَإِنَّا لَصَادِقُونَ'
            }
          }
        ]
      },
      {
        id: 'salih-ch03-p02',
        text: 'Then one of the most wicked among them was dispatched to kill the she-camel. The Quran describes this person: "But they called their companion, and he dared and hamstrung [her]." In Surah Ash-Shams, Allah says: "When the most wretched of them was dispatched." The killing of the she-camel was an act of collective defiance — though one man struck the blow, the entire community approved and supported it. After this heinous act, they arrogantly challenged Salih: "O Salih, bring us what you promise us, if you should be of the messengers." Salih, grief-stricken, gave them a final warning from Allah: "Enjoy yourselves in your homes for three days. That is a promise not to be denied." This three-day countdown was their final chance — but instead of repenting, they mocked it.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 91,
            surahName: { en: 'Ash-Shams', bn: 'আশ-শামস', ar: 'الشمس' },
            ayahStart: 13,
            ayahEnd: 14,
            arabicText: 'فَقَالَ لَهُمْ رَسُولُ اللَّهِ نَاقَةَ اللَّهِ وَسُقْيَاهَا فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنبِهِمْ فَسَوَّاهَا',
            translation: {
              en: 'And the messenger of Allah said to them, "[Do not harm] the she-camel of Allah and [do not prevent] her drink." But they denied him and hamstrung her. So their Lord brought down upon them destruction for their sin and made it equal [upon all of them].',
              bn: 'আল্লাহর রাসূল তাদের বলেছিলেন, "আল্লাহর উটনী ও তার পানি পানের ব্যাপারে সাবধান।" কিন্তু তারা তাকে মিথ্যাবাদী বলল এবং উটনীকে হত্যা করল। তাদের পাপের কারণে তাদের রব তাদের উপর ধ্বংস নাজিল করলেন এবং সবাইকে সমান করে দিলেন।',
              ar: 'فَقَالَ لَهُمْ رَسُولُ اللَّهِ نَاقَةَ اللَّهِ وَسُقْيَاهَا فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنبِهِمْ فَسَوَّاهَا'
            }
          },
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 65,
            arabicText: 'فَعَقَرُوهَا فَقَالَ تَمَتَّعُوا فِي دَارِكُمْ ثَلَاثَةَ أَيَّامٍ ۖ ذَٰلِكَ وَعْدٌ غَيْرُ مَكْذُوبٍ',
            translation: {
              en: 'But they hamstrung her. So he said, "Enjoy yourselves in your homes for three days. That is a promise not to be denied."',
              bn: 'কিন্তু তারা তাকে হত্যা করল। তখন সালিহ বলল, "তোমাদের ঘরে তিন দিন ভোগ করে নাও। এটা এমন প্রতিশ্রুতি যা মিথ্যা নয়।"',
              ar: 'فَعَقَرُوهَا فَقَالَ تَمَتَّعُوا فِي دَارِكُمْ ثَلَاثَةَ أَيَّامٍ ۖ ذَٰلِكَ وَعْدٌ غَيْرُ مَكْذُوبٍ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'salih-ch-04',
    title: 'The Destruction of Thamud',
    summary: 'After three days, Allah\'s punishment fell upon Thamud — a mighty blast and earthquake destroyed them in their homes. Salih and the believers were saved, and Thamud\'s carved-out dwellings stand as a warning to this day.',
    order: 4,
    paragraphs: [
      {
        id: 'salih-ch04-p01',
        text: 'When the three days elapsed, Allah\'s promise was fulfilled. The punishment came in two devastating forms — a terrible blast from the sky (as-sayhah) and a violent earthquake (ar-rajfah). The Quran describes the scene: "So the earthquake seized them, and they became within their home [corpses] fallen prone." In another passage: "Indeed, We sent upon them a single blast, and they became like the dry twig fragments of an animal pen." Their mighty mountain homes — the very symbols of their power and security — became their tombs. The people who boasted of carving impenetrable fortresses from rock found that no fortress could protect them from the decree of Allah.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
            ayahStart: 78,
            arabicText: 'فَأَخَذَتْهُمُ الرَّجْفَةُ فَأَصْبَحُوا فِي دَارِهِمْ جَاثِمِينَ',
            translation: {
              en: 'So the earthquake seized them, and they became within their home [corpses] fallen prone.',
              bn: 'তখন ভূমিকম্প তাদের পাকড়াও করল এবং তারা তাদের ঘরেই উপুড় হয়ে মৃত পড়ে রইল।',
              ar: 'فَأَخَذَتْهُمُ الرَّجْفَةُ فَأَصْبَحُوا فِي دَارِهِمْ جَاثِمِينَ'
            }
          },
          {
            type: 'quran',
            surah: 54,
            surahName: { en: 'Al-Qamar', bn: 'আল-কমার', ar: 'القمر' },
            ayahStart: 31,
            arabicText: 'إِنَّا أَرْسَلْنَا عَلَيْهِمْ صَيْحَةً وَاحِدَةً فَكَانُوا كَهَشِيمِ الْمُحْتَظِرِ',
            translation: {
              en: 'Indeed, We sent upon them a single blast, and they became like the dry twig fragments of an animal pen.',
              bn: 'নিশ্চয়ই আমি তাদের উপর একটি মাত্র বিকট আওয়াজ পাঠিয়েছিলাম, ফলে তারা বেড়া-নির্মাতার শুকনো ঘাসের মতো হয়ে গেল।',
              ar: 'إِنَّا أَرْسَلْنَا عَلَيْهِمْ صَيْحَةً وَاحِدَةً فَكَانُوا كَهَشِيمِ الْمُحْتَظِرِ'
            }
          }
        ]
      },
      {
        id: 'salih-ch04-p02',
        text: 'Allah saved Salih and those who believed with him, protecting them from the blast and earthquake. Salih turned away from the ruins of his people with profound sadness, saying: "O my people, I had certainly conveyed to you the message of my Lord and advised you, but you do not like advisors." The Prophet Muhammad (SAW) himself visited the ruins of Thamud — known as Al-Hijr — during the expedition to Tabuk. He instructed his companions not to enter the ruins except in a state of weeping and reflection, and not to use the water from their wells. He told them to pass quickly through the area, warning them that what befell Thamud could befall those who do not take heed.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
            ayahStart: 79,
            arabicText: 'فَتَوَلَّىٰ عَنْهُمْ وَقَالَ يَا قَوْمِ لَقَدْ أَبْلَغْتُكُمْ رِسَالَةَ رَبِّي وَنَصَحْتُ لَكُمْ وَلَٰكِن لَّا تُحِبُّونَ النَّاصِحِينَ',
            translation: {
              en: 'And he turned away from them and said, "O my people, I had certainly conveyed to you the message of my Lord and advised you, but you do not like advisors."',
              bn: 'আর সে তাদের কাছ থেকে মুখ ফিরিয়ে নিল এবং বলল, "হে আমার জাতি, আমি তোমাদের কাছে আমার রবের বার্তা পৌঁছে দিয়েছিলাম এবং তোমাদের উপদেশ দিয়েছিলাম, কিন্তু তোমরা উপদেশদাতাদের পছন্দ করো না।"',
              ar: 'فَتَوَلَّىٰ عَنْهُمْ وَقَالَ يَا قَوْمِ لَقَدْ أَبْلَغْتُكُمْ رِسَالَةَ رَبِّي وَنَصَحْتُ لَكُمْ وَلَٰكِن لَّا تُحِبُّونَ النَّاصِحِينَ'
            }
          },
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3379',
            narrator: 'Ibn Umar (RA)',
            text: {
              en: 'When the Prophet (SAW) passed by Al-Hijr, he said: "Do not enter the dwellings of those who were punished unless you are weeping. If you are not weeping, then do not enter upon them, lest what befell them should befall you."',
              bn: 'রাসূলুল্লাহ (সা.) যখন আল-হিজর দিয়ে যাচ্ছিলেন, তিনি বলেছিলেন: "যারা শাস্তিপ্রাপ্ত হয়েছে তাদের বাসস্থানে প্রবেশ করো না, যদি না তোমরা কাঁদো। আর যদি না কাঁদো, তাহলে তাদের কাছে প্রবেশ করো না, পাছে তাদের উপর যা নেমেছিল তা তোমাদের উপরও নেমে আসে।"',
              ar: 'لما مرّ النبي صلى الله عليه وسلم بالحِجر قال: لا تدخلوا مساكن الذين ظلموا أنفسهم أن يصيبكم ما أصابهم إلا أن تكونوا باكين.'
            },
            grade: 'sahih'
          }
        ]
      },
      {
        id: 'salih-ch04-p03',
        text: 'The story of Salih and Thamud reinforces the recurring themes in the stories of the prophets. First, miracles alone do not guarantee guidance — Thamud received the most tangible, living miracle imaginable, yet still chose rebellion. Second, collective sin brings collective punishment — even though one man struck the she-camel, the entire community was held responsible because they approved of and supported his action. Third, Allah\'s warnings come with precise timelines — the three-day grace period demonstrated both Allah\'s mercy (giving them time to repent) and His absolute certainty in fulfilling His promise. And fourth, the ruins of the sinful serve as lessons for the living — the rock-carved homes of Thamud still stand in Al-Hijr to this day, a silent testament to Allah\'s words: "So those are their houses, desolate because of the wrong they had done. Indeed in that is a sign for people who know."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 27,
            surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النمل' },
            ayahStart: 52,
            arabicText: 'فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً بِمَا ظَلَمُوا ۗ إِنَّ فِي ذَٰلِكَ لَآيَةً لِّقَوْمٍ يَعْلَمُونَ',
            translation: {
              en: 'So those are their houses, desolate because of the wrong they had done. Indeed in that is a sign for people who know.',
              bn: 'ওই তো তাদের ঘরবাড়ি — জুলুমের কারণে জনশূন্য। নিশ্চয়ই এতে জ্ঞানী সম্প্রদায়ের জন্য নিদর্শন রয়েছে।',
              ar: 'فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً بِمَا ظَلَمُوا ۗ إِنَّ فِي ذَٰلِكَ لَآيَةً لِّقَوْمٍ يَعْلَمُونَ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
