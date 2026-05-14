import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'hud-ch-01',
    title: 'The People of \'Ad and Their Mighty Civilisation',
    summary: 'After the flood of Nuh, the descendants of his son Sam settled in the Arabian Peninsula. Among them arose the people of \'Ad — a powerful nation that built the legendary city of Iram with lofty pillars, yet they turned to idol worship and arrogance.',
    order: 1,
    paragraphs: [
      {
        id: 'hud-ch01-p01',
        text: 'After the great flood, humanity began anew from the descendants of Prophet Nuh (AS). Among them, the people of \'Ad settled in the region of Al-Ahqaf — the wind-curved sand dunes of southern Arabia, in what is today Yemen and Oman. They were among the earliest and most powerful nations after the flood. Allah blessed them with extraordinary physical strength, tall statures, fertile lands, abundant livestock, and gardens with flowing springs. They built magnificent structures and palaces that were unmatched in their time. The Quran immortalises their legendary city: "Have you not considered how your Lord dealt with \'Ad — [with] Iram, who had lofty pillars, the likes of whom had never been created in the land?"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 89,
            surahName: { en: 'Al-Fajr', bn: 'আল-ফজর', ar: 'الفجر' },
            ayahStart: 6,
            ayahEnd: 8,
            arabicText: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ إِرَمَ ذَاتِ الْعِمَادِ الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ',
            translation: {
              en: 'Have you not considered how your Lord dealt with \'Ad — [with] Iram, who had lofty pillars, the likes of whom had never been created in the land?',
              bn: 'তুমি কি দেখনি তোমার রব কী করেছিলেন আদ জাতির সাথে — ইরামের সাথে, যাদের ছিল সুউচ্চ স্তম্ভ, যাদের মতো কোনো দেশে সৃষ্টি হয়নি?',
              ar: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ إِرَمَ ذَاتِ الْعِمَادِ الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ'
            }
          }
        ]
      },
      {
        id: 'hud-ch01-p02',
        text: 'Despite all these blessings, the people of \'Ad became arrogant and ungrateful. Their immense physical power led them to believe they were invincible. They began to oppress the weak, build monuments on every high place to display their vanity, and fortify themselves as though they would live forever. They boasted: "Who is greater than us in strength?" But Allah reminds them that the One who created them is far greater in strength. Ibn Kathir explains that their arrogance led them to completely abandon the worship of Allah and instead worship three main idols: Saqi\'ah, Hafidah, and Raziqah. They attributed rain, safety, and sustenance to these false gods rather than to their true Creator.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 41,
            surahName: { en: 'Fussilat', bn: 'ফুসসিলাত', ar: 'فصلت' },
            ayahStart: 15,
            arabicText: 'فَأَمَّا عَادٌ فَاسْتَكْبَرُوا فِي الْأَرْضِ بِغَيْرِ الْحَقِّ وَقَالُوا مَنْ أَشَدُّ مِنَّا قُوَّةً ۖ أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَهُمْ هُوَ أَشَدُّ مِنْهُمْ قُوَّةً',
            translation: {
              en: 'As for \'Ad, they were arrogant upon the earth without right and said, "Who is greater than us in strength?" Did they not consider that Allah who created them was greater than them in strength?',
              bn: 'আর আদ — তারা পৃথিবীতে অন্যায়ভাবে অহংকার করেছিল এবং বলেছিল, "আমাদের চেয়ে শক্তিশালী কে?" তারা কি দেখেনি যে যিনি তাদের সৃষ্টি করেছেন তিনি তাদের চেয়ে অনেক বেশি শক্তিশালী?',
              ar: 'فَأَمَّا عَادٌ فَاسْتَكْبَرُوا فِي الْأَرْضِ بِغَيْرِ الْحَقِّ وَقَالُوا مَنْ أَشَدُّ مِنَّا قُوَّةً ۖ أَوَلَمْ يَرَوْا أَنَّ اللَّهَ الَّذِي خَلَقَهُمْ هُوَ أَشَدُّ مِنْهُمْ قُوَّةً'
            }
          },
          {
            type: 'quran',
            surah: 26,
            surahName: { en: 'Ash-Shu\'ara', bn: 'আশ-শুআরা', ar: 'الشعراء' },
            ayahStart: 128,
            ayahEnd: 130,
            arabicText: 'أَتَبْنُونَ بِكُلِّ رِيعٍ آيَةً تَعْبَثُونَ وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ وَإِذَا بَطَشْتُم بَطَشْتُمْ جَبَّارِينَ',
            translation: {
              en: 'Do you construct on every elevation a sign, amusing yourselves? And take for yourselves palaces and fortresses that you might abide eternally? And when you strike, you strike as tyrants.',
              bn: 'তোমরা কি প্রতিটি উঁচু স্থানে নিদর্শন নির্মাণ করছ বিনোদনের জন্য? এবং প্রাসাদ ও দুর্গ তৈরি করছ যেন তোমরা চিরকাল থাকবে? আর যখন তোমরা আঘাত কর, তখন স্বৈরাচারীর মতো আঘাত কর।',
              ar: 'أَتَبْنُونَ بِكُلِّ رِيعٍ آيَةً تَعْبَثُونَ وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ وَإِذَا بَطَشْتُم بَطَشْتُمْ جَبَّارِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'hud-ch-02',
    title: 'Hud\'s Mission: A Brother\'s Warning',
    summary: 'Allah sent Hud — from among \'Ad themselves — to call them back to Tawheed. He reminded them of Allah\'s blessings, asked for no reward, and warned them of punishment if they persisted in shirk.',
    order: 2,
    paragraphs: [
      {
        id: 'hud-ch02-p01',
        text: 'To this mighty but misguided nation, Allah sent a prophet from among their own — Hud (AS). The Quran describes him as "their brother," emphasising that he was not a foreigner but one of them, sharing their lineage, language, and customs. This made him the ideal messenger, as he knew his people intimately. Hud addressed them with a message identical to every prophet: "O my people, worship Allah; you have no deity other than Him. You are not but inventors of falsehood. O my people, I do not ask you for any reward. My reward is only from the One who created me. Then will you not reason?" His approach combined firmness in delivering the truth with compassion for his people, never seeking personal gain.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 50,
            ayahEnd: 51,
            arabicText: 'وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ إِنْ أَنتُمْ إِلَّا مُفْتَرُونَ يَا قَوْمِ لَا أَسْأَلُكُمْ عَلَيْهِ أَجْرًا ۖ إِنْ أَجْرِيَ إِلَّا عَلَى الَّذِي فَطَرَنِي ۚ أَفَلَا تَعْقِلُونَ',
            translation: {
              en: 'And to \'Ad [We sent] their brother Hud. He said, "O my people, worship Allah; you have no deity other than Him. You are not but inventors [of falsehood]. O my people, I do not ask you for any reward. My reward is only from the One who created me. Then will you not reason?"',
              bn: 'আর আদ জাতির কাছে তাদের ভাই হুদকে পাঠালাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। তোমরা তো মিথ্যা রচনাকারী ছাড়া কিছু নও। হে আমার জাতি, আমি তোমাদের কাছে কোনো পারিশ্রমিক চাই না। আমার পুরস্কার কেবল তাঁর কাছে যিনি আমাকে সৃষ্টি করেছেন। তোমরা কি বুঝবে না?"',
              ar: 'وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ ۖ إِنْ أَنتُمْ إِلَّا مُفْتَرُونَ يَا قَوْمِ لَا أَسْأَلُكُمْ عَلَيْهِ أَجْرًا ۖ إِنْ أَجْرِيَ إِلَّا عَلَى الَّذِي فَطَرَنِي ۚ أَفَلَا تَعْقِلُونَ'
            }
          }
        ]
      },
      {
        id: 'hud-ch02-p02',
        text: 'Hud reminded his people of the immense favours Allah had bestowed upon them — blessings that should have led them to gratitude, not arrogance. He said: "And remember when He made you successors after the people of Nuh and increased you in stature extensively. So remember the favours of Allah that you might succeed." He pointed to the specific blessings they enjoyed: livestock, sons, gardens, and springs. He pleaded with them to seek Allah\'s forgiveness, promising that istighfar would bring them even more: "And O my people, ask forgiveness of your Lord and then repent to Him. He will send [rain from] the sky upon you in showers and increase you in strength added to your strength." This echoed the same promise Nuh had made to his people — that turning to Allah brings material and spiritual blessings.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
            ayahStart: 69,
            arabicText: 'أَوَعَجِبْتُمْ أَن جَاءَكُمْ ذِكْرٌ مِّن رَّبِّكُمْ عَلَىٰ رَجُلٍ مِّنكُمْ لِيُنذِرَكُمْ ۚ وَاذْكُرُوا إِذْ جَعَلَكُمْ خُلَفَاءَ مِن بَعْدِ قَوْمِ نُوحٍ وَزَادَكُمْ فِي الْخَلْقِ بَسْطَةً',
            translation: {
              en: '"Then do you wonder that there has come to you a reminder from your Lord through a man from among you, that he may warn you? And remember when He made you successors after the people of Nuh and increased you in stature extensively. So remember the favours of Allah that you might succeed."',
              bn: '"তোমরা কি আশ্চর্য হচ্ছ যে তোমাদের রবের পক্ষ থেকে তোমাদের মধ্য থেকেই একজনের মাধ্যমে তোমাদের কাছে উপদেশ এসেছে, তোমাদের সতর্ক করতে? আর স্মরণ করো যখন তিনি তোমাদের নূহের জাতির পর উত্তরাধিকারী করলেন এবং তোমাদের গঠনে প্রশস্ততা দিলেন। সুতরাং আল্লাহর অনুগ্রহসমূহ স্মরণ করো যাতে তোমরা সফল হতে পারো।"',
              ar: 'أَوَعَجِبْتُمْ أَن جَاءَكُمْ ذِكْرٌ مِّن رَّبِّكُمْ عَلَىٰ رَجُلٍ مِّنكُمْ لِيُنذِرَكُمْ ۚ وَاذْكُرُوا إِذْ جَعَلَكُمْ خُلَفَاءَ مِن بَعْدِ قَوْمِ نُوحٍ وَزَادَكُمْ فِي الْخَلْقِ بَسْطَةً'
            }
          },
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 52,
            arabicText: 'وَيَا قَوْمِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا وَيَزِدْكُمْ قُوَّةً إِلَىٰ قُوَّتِكُمْ',
            translation: {
              en: '"And O my people, ask forgiveness of your Lord and then repent to Him. He will send [rain from] the sky upon you in showers and increase you in strength added to your strength."',
              bn: '"হে আমার জাতি, তোমাদের রবের কাছে ক্ষমা চাও এবং তাঁর কাছে তওবা করো। তিনি তোমাদের উপর আকাশ থেকে মুষলধারে বৃষ্টি পাঠাবেন এবং তোমাদের শক্তির সাথে আরও শক্তি বাড়িয়ে দেবেন।"',
              ar: 'وَيَا قَوْمِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا وَيَزِدْكُمْ قُوَّةً إِلَىٰ قُوَّتِكُمْ'
            }
          }
        ]
      },
      {
        id: 'hud-ch02-p03',
        text: 'The leaders of \'Ad responded with contempt. They accused Hud of foolishness and lying: "Indeed, we see you in foolishness, and indeed, we think you are of the liars." They declared that they would never abandon the gods their fathers had worshipped. Hud responded with unwavering faith and dignity: "I call Allah to witness, and you bear witness, that I am free of what you associate with Allah. So plot against me all together; then do not give me respite. Indeed, I have relied upon Allah, my Lord and your Lord. There is no creature but that He holds its forelock. Indeed, my Lord is on a path that is straight." This bold declaration — challenging an entire nation to do their worst — demonstrated the absolute trust Hud placed in Allah\'s protection.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 54,
            ayahEnd: 56,
            arabicText: 'إِنِّي أُشْهِدُ اللَّهَ وَاشْهَدُوا أَنِّي بَرِيءٌ مِّمَّا تُشْرِكُونَ مِن دُونِهِ ۖ فَكِيدُونِي جَمِيعًا ثُمَّ لَا تُنظِرُونِ إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم ۚ مَّا مِن دَابَّةٍ إِلَّا هُوَ آخِذٌ بِنَاصِيَتِهَا ۚ إِنَّ رَبِّي عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ',
            translation: {
              en: '"I call Allah to witness, and you bear witness, that I am free of what you associate with Him. So plot against me all together; then do not give me respite. Indeed, I have relied upon Allah, my Lord and your Lord. There is no creature but that He holds its forelock. Indeed, my Lord is on a path that is straight."',
              bn: '"আমি আল্লাহকে সাক্ষী রাখছি, এবং তোমরাও সাক্ষী থাকো, নিশ্চয়ই তোমরা তাঁর পরিবর্তে যাদের শরীক করো আমি তাদের থেকে মুক্ত। সুতরাং তোমরা সবাই মিলে আমার বিরুদ্ধে ষড়যন্ত্র করো; তারপর আমাকে অবকাশ দিও না। আমি আল্লাহর উপর ভরসা করেছি — আমার রব এবং তোমাদের রব। এমন কোনো জীব নেই যার কপাল তাঁর মুঠোয় নেই। নিশ্চয়ই আমার রব সরল পথে আছেন।"',
              ar: 'إِنِّي أُشْهِدُ اللَّهَ وَاشْهَدُوا أَنِّي بَرِيءٌ مِّمَّا تُشْرِكُونَ مِن دُونِهِ ۖ فَكِيدُونِي جَمِيعًا ثُمَّ لَا تُنظِرُونِ إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم ۚ مَّا مِن دَابَّةٍ إِلَّا هُوَ آخِذٌ بِنَاصِيَتِهَا ۚ إِنَّ رَبِّي عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'hud-ch-03',
    title: 'The Drought and the Cloud of Punishment',
    summary: 'Allah withheld rain from \'Ad as a warning. When they finally saw a cloud approaching, they rejoiced thinking it was rain — but it was the cloud carrying their destruction.',
    order: 3,
    paragraphs: [
      {
        id: 'hud-ch03-p01',
        text: 'As a preliminary warning, Allah withheld rain from the land of \'Ad for three years. Their crops withered, their springs dried up, and their livestock began to suffer. Ibn Kathir narrates that they sent a delegation to Makkah to pray for rain at the sacred House (which still existed from the time of Adam). When the delegation arrived, they were given a choice between three clouds — a white one, a red one, and a dark black one. They chose the dark cloud, thinking it held the most rain. But it was this cloud that carried their annihilation. The Quran describes the scene: "Then when they saw it as a cloud approaching their valleys, they said, \'This is a cloud bringing us rain.\' Rather, it is that for which you were impatient — a wind within it is a painful punishment."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 46,
            surahName: { en: 'Al-Ahqaf', bn: 'আল-আহকাফ', ar: 'الأحقاف' },
            ayahStart: 24,
            ayahEnd: 25,
            arabicText: 'فَلَمَّا رَأَوْهُ عَارِضًا مُّسْتَقْبِلَ أَوْدِيَتِهِمْ قَالُوا هَٰذَا عَارِضٌ مُّمْطِرُنَا ۚ بَلْ هُوَ مَا اسْتَعْجَلْتُم بِهِ ۖ رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ تُدَمِّرُ كُلَّ شَيْءٍ بِأَمْرِ رَبِّهَا فَأَصْبَحُوا لَا يُرَىٰ إِلَّا مَسَاكِنُهُمْ',
            translation: {
              en: 'Then when they saw it as a cloud approaching their valleys, they said, "This is a cloud bringing us rain." Rather, it is that for which you were impatient — a wind within it is a painful punishment, destroying everything by command of its Lord. And they became so that nothing was seen except their dwellings.',
              bn: 'অতঃপর যখন তারা দেখল মেঘমালা তাদের উপত্যকার দিকে এগিয়ে আসছে, তারা বলল, "এটা তো মেঘ, আমাদের বৃষ্টি দেবে।" বরং এটা তো সেই জিনিস যা তোমরা তাড়াতাড়ি চাইছিলে — এতে আছে বেদনাদায়ক শাস্তির ঝড়। তার রবের আদেশে সবকিছু ধ্বংস করে দিল। ফলে তাদের বাসস্থান ছাড়া আর কিছুই দেখা গেল না।',
              ar: 'فَلَمَّا رَأَوْهُ عَارِضًا مُّسْتَقْبِلَ أَوْدِيَتِهِمْ قَالُوا هَٰذَا عَارِضٌ مُّمْطِرُنَا ۚ بَلْ هُوَ مَا اسْتَعْجَلْتُم بِهِ ۖ رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ تُدَمِّرُ كُلَّ شَيْءٍ بِأَمْرِ رَبِّهَا فَأَصْبَحُوا لَا يُرَىٰ إِلَّا مَسَاكِنُهُمْ'
            }
          }
        ]
      },
      {
        id: 'hud-ch03-p02',
        text: 'The people of \'Ad had repeatedly challenged Hud to bring upon them the punishment he warned about, saying: "Then bring us what you promise us, if you should be of the truthful." They were so confident in their own power that they believed nothing could touch them. Hud warned them clearly: "Indeed, punishment has already occurred upon you from your Lord. Do you dispute with me concerning [mere] names you have named, you and your fathers, for which Allah has not sent down any authority? Then wait; indeed, I am with you among those who wait." Their mockery of divine warning would soon be answered in a way they could never have imagined.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
            ayahStart: 70,
            ayahEnd: 71,
            arabicText: 'قَالُوا أَجِئْتَنَا لِنَعْبُدَ اللَّهَ وَحْدَهُ وَنَذَرَ مَا كَانَ يَعْبُدُ آبَاؤُنَا ۖ فَأْتِنَا بِمَا تَعِدُنَا إِن كُنتَ مِنَ الصَّادِقِينَ قَالَ قَدْ وَقَعَ عَلَيْكُم مِّن رَّبِّكُمْ رِجْسٌ وَغَضَبٌ',
            translation: {
              en: 'They said, "Have you come to us that we should worship Allah alone and leave what our fathers have worshipped? Then bring us what you promise us, if you should be of the truthful." [Hud] said, "Already have defilement and anger fallen upon you from your Lord."',
              bn: 'তারা বলল, "তুমি কি আমাদের কাছে এসেছ যাতে আমরা একমাত্র আল্লাহর ইবাদত করি এবং আমাদের পিতৃপুরুষরা যার ইবাদত করত তা ত্যাগ করি? তাহলে তুমি সত্যবাদী হলে আমাদের যে শাস্তির প্রতিশ্রুতি দিচ্ছ তা নিয়ে আসো।" হুদ বলল, "তোমাদের রবের পক্ষ থেকে তোমাদের উপর শাস্তি ও ক্রোধ অবধারিত হয়ে গেছে।"',
              ar: 'قَالُوا أَجِئْتَنَا لِنَعْبُدَ اللَّهَ وَحْدَهُ وَنَذَرَ مَا كَانَ يَعْبُدُ آبَاؤُنَا ۖ فَأْتِنَا بِمَا تَعِدُنَا إِن كُنتَ مِنَ الصَّادِقِينَ قَالَ قَدْ وَقَعَ عَلَيْكُم مِّن رَّبِّكُمْ رِجْسٌ وَغَضَبٌ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'hud-ch-04',
    title: 'The Devastating Wind and the End of \'Ad',
    summary: 'Allah sent upon \'Ad a screaming, furious wind that raged for seven nights and eight days. It left them like hollow palm trunks. Hud and the believers were saved, and \'Ad became a lesson for all time.',
    order: 4,
    paragraphs: [
      {
        id: 'hud-ch04-p01',
        text: 'The punishment of \'Ad came in the form of a wind unlike any the world had seen. The Quran describes it in terrifying detail in Surah Al-Haqqah: "And as for \'Ad, they were destroyed by a screaming, violent wind which Allah imposed upon them for seven nights and eight days in succession, so you would see the people therein fallen as if they were hollow trunks of palm trees." Ibn Kathir explains that this wind was so cold and ferocious that it would lift people into the air and smash them back onto the ground. It entered their homes, tore off their roofs, and left nothing standing. The once-proud builders of Iram were rendered as lifeless as fallen palm trunks — a vivid image of the total reversal of their power.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 69,
            surahName: { en: 'Al-Haqqah', bn: 'আল-হাক্কাহ', ar: 'الحاقة' },
            ayahStart: 6,
            ayahEnd: 8,
            arabicText: 'وَأَمَّا عَادٌ فَأُهْلِكُوا بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ سَخَّرَهَا عَلَيْهِمْ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ حُسُومًا فَتَرَى الْقَوْمَ فِيهَا صَرْعَىٰ كَأَنَّهُمْ أَعْجَازُ نَخْلٍ خَاوِيَةٍ',
            translation: {
              en: 'And as for \'Ad, they were destroyed by a screaming, violent wind which Allah imposed upon them for seven nights and eight days in succession, so you would see the people therein fallen as if they were hollow trunks of palm trees.',
              bn: 'আর আদ — তাদের ধ্বংস করা হয়েছিল প্রচণ্ড ঝড়ো বাতাস দিয়ে যা আল্লাহ তাদের উপর চাপিয়ে দিয়েছিলেন একটানা সাত রাত আট দিন। তুমি তাদের দেখতে সেখানে পড়ে থাকতে যেন তারা ফাঁপা খেজুর গাছের গুঁড়ি।',
              ar: 'وَأَمَّا عَادٌ فَأُهْلِكُوا بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ سَخَّرَهَا عَلَيْهِمْ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ حُسُومًا فَتَرَى الْقَوْمَ فِيهَا صَرْعَىٰ كَأَنَّهُمْ أَعْجَازُ نَخْلٍ خَاوِيَةٍ'
            }
          }
        ]
      },
      {
        id: 'hud-ch04-p02',
        text: 'While the wind raged and destroyed everything around them, Allah protected Hud and those who believed with him. The Quran states: "So We saved him and those with him by mercy from Us. And We eliminated those who denied Our signs, and they were not believers." After the complete annihilation of \'Ad, Hud turned away from the ruins with a final statement: "So if you turn away — I have already conveyed to you that with which I was sent to you. My Lord will give succession to a people other than you, and you will not harm Him at all. Indeed, my Lord is over all things a Guardian." The people of \'Ad were erased so thoroughly that only their empty dwellings remained as a silent witness to their fate.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
            ayahStart: 72,
            arabicText: 'فَأَنجَيْنَاهُ وَالَّذِينَ مَعَهُ بِرَحْمَةٍ مِّنَّا وَقَطَعْنَا دَابِرَ الَّذِينَ كَذَّبُوا بِآيَاتِنَا ۖ وَمَا كَانُوا مُؤْمِنِينَ',
            translation: {
              en: 'So We saved him and those with him by mercy from Us. And We eliminated those who denied Our signs, and they were not [at all] believers.',
              bn: 'অতঃপর আমি তাকে এবং তার সাথে যারা ছিল তাদের আমার রহমতে রক্ষা করলাম। আর যারা আমার আয়াতসমূহ অস্বীকার করেছিল তাদের সমূলে উচ্ছেদ করলাম, তারা মুমিন ছিল না।',
              ar: 'فَأَنجَيْنَاهُ وَالَّذِينَ مَعَهُ بِرَحْمَةٍ مِّنَّا وَقَطَعْنَا دَابِرَ الَّذِينَ كَذَّبُوا بِآيَاتِنَا ۖ وَمَا كَانُوا مُؤْمِنِينَ'
            }
          },
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 57,
            arabicText: 'فَإِن تَوَلَّوْا فَقَدْ أَبْلَغْتُكُم مَّا أُرْسِلْتُ بِهِ إِلَيْكُمْ ۚ وَيَسْتَخْلِفُ رَبِّي قَوْمًا غَيْرَكُمْ وَلَا تَضُرُّونَهُ شَيْئًا ۚ إِنَّ رَبِّي عَلَىٰ كُلِّ شَيْءٍ حَفِيظٌ',
            translation: {
              en: '"So if you turn away — I have already conveyed to you that with which I was sent to you. My Lord will give succession to a people other than you, and you will not harm Him at all. Indeed, my Lord is over all things a Guardian."',
              bn: '"যদি তোমরা মুখ ফিরিয়ে নাও — আমি যা নিয়ে তোমাদের কাছে প্রেরিত হয়েছিলাম তা তোমাদের কাছে পৌঁছে দিয়েছি। আমার রব তোমাদের স্থানে অন্য জাতিকে উত্তরাধিকারী করবেন, এবং তোমরা তাঁর কোনো ক্ষতি করতে পারবে না। নিশ্চয়ই আমার রব সবকিছুর রক্ষণাবেক্ষণকারী।"',
              ar: 'فَإِن تَوَلَّوْا فَقَدْ أَبْلَغْتُكُم مَّا أُرْسِلْتُ بِهِ إِلَيْكُمْ ۚ وَيَسْتَخْلِفُ رَبِّي قَوْمًا غَيْرَكُمْ وَلَا تَضُرُّونَهُ شَيْئًا ۚ إِنَّ رَبِّي عَلَىٰ كُلِّ شَيْءٍ حَفِيظٌ'
            }
          }
        ]
      },
      {
        id: 'hud-ch04-p03',
        text: 'The story of Hud and the people of \'Ad carries profound lessons. First, physical might and material civilisation are no protection against Allah\'s punishment — the strongest nation on earth was reduced to nothing by wind. Second, blessings are a test, not a right — \'Ad\'s abundant blessings were given to see whether they would show gratitude or arrogance. Third, a prophet\'s duty is to deliver the message clearly, regardless of how the people respond — Hud fulfilled this duty completely. And fourth, the pattern continues: like the people of Nuh before them, \'Ad were offered mercy through a prophet from among their own, but chose pride over guidance. Allah concludes their story with a devastating summary: "That was \'Ad, who rejected the signs of their Lord and disobeyed His messengers and followed the order of every obstinate tyrant. And they were pursued in this world with a curse and on the Day of Resurrection. Unquestionably, \'Ad denied their Lord; then away with \'Ad, the people of Hud."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 59,
            ayahEnd: 60,
            arabicText: 'وَتِلْكَ عَادٌ ۖ جَحَدُوا بِآيَاتِ رَبِّهِمْ وَعَصَوْا رُسُلَهُ وَاتَّبَعُوا أَمْرَ كُلِّ جَبَّارٍ عَنِيدٍ وَأُتْبِعُوا فِي هَٰذِهِ الدُّنْيَا لَعْنَةً وَيَوْمَ الْقِيَامَةِ ۗ أَلَا إِنَّ عَادًا كَفَرُوا رَبَّهُمْ ۗ أَلَا بُعْدًا لِّعَادٍ قَوْمِ هُودٍ',
            translation: {
              en: 'And that was \'Ad, who rejected the signs of their Lord and disobeyed His messengers and followed the order of every obstinate tyrant. And they were pursued in this world with a curse and on the Day of Resurrection. Unquestionably, \'Ad denied their Lord; then away with \'Ad, the people of Hud.',
              bn: 'এটাই ছিল আদ, যারা তাদের রবের আয়াতসমূহ অস্বীকার করেছিল, তাঁর রাসূলদের অবাধ্যতা করেছিল এবং প্রতিটি অহংকারী স্বৈরাচারীর আদেশ অনুসরণ করেছিল। এই দুনিয়ায় তাদের পিছনে লানত পাঠানো হয়েছিল এবং কিয়ামতের দিনেও। জেনে রাখো, আদ তাদের রবকে অস্বীকার করেছিল; সুতরাং ধ্বংস হোক আদ — হুদের জাতি।',
              ar: 'وَتِلْكَ عَادٌ ۖ جَحَدُوا بِآيَاتِ رَبِّهِمْ وَعَصَوْا رُسُلَهُ وَاتَّبَعُوا أَمْرَ كُلِّ جَبَّارٍ عَنِيدٍ وَأُتْبِعُوا فِي هَٰذِهِ الدُّنْيَا لَعْنَةً وَيَوْمَ الْقِيَامَةِ ۗ أَلَا إِنَّ عَادًا كَفَرُوا رَبَّهُمْ ۗ أَلَا بُعْدًا لِّعَادٍ قَوْمِ هُودٍ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
