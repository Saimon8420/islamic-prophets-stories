import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'muhammad-ch-01',
    title: 'The Seal of the Prophets: A Mercy to All the Worlds',
    summary: 'Muhammad (SAW) was the final messenger of Allah, sent not to a single nation but as a mercy to all of creation. His coming was foretold by previous prophets, and with him the long chain of prophethood that began with Adam was completed and perfected. He was both the seal of all prophets and the bearer of the final, universal message of Islam.',
    order: 1,
    paragraphs: [
      {
        id: 'muhammad-ch01-p01',
        text: 'Prophet Muhammad (peace and blessings be upon him) occupies a unique position in the history of prophethood. He was the final messenger sent by Allah to humanity — the seal who completed the chain of prophets that began with Adam (AS). Allah declares: "Muhammad is not the father of [any] one of your men, but [he is] the Messenger of Allah and the seal of the prophets (khatam an-nabiyyin). And ever is Allah, of all things, Knowing." The title "Khatam an-Nabiyyin" means that no prophet will come after him — his message is the final divine guidance for all of humanity until the Day of Judgment. Unlike previous prophets who were sent to specific nations — Nuh to his people, Musa to the Children of Israel, Isa to Bani Israel — Muhammad was sent to the entire world. Allah declares the universal scope of his mission: "And We have not sent you, [O Muhammad], except as a mercy to the worlds." The word "alameen" (worlds) encompasses not just humanity but all of creation — jinn, animals, and the entire universe. Ibn Kathir explains that the Prophet (SAW) was a mercy in every sense: he brought guidance that saves people from misguidance, laws that establish justice, and a way of life that brings peace to individuals and communities. Even those who rejected his message benefited from his presence, as his coming delayed the punishment that had destroyed previous nations.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 33,
            surahName: { en: 'Al-Ahzab', bn: 'আল-আহযাব', ar: 'الأحزاب' },
            ayahStart: 40,
            arabicText: 'مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ ۗ وَكَانَ اللَّهُ بِكُلِّ شَيْءٍ عَلِيمًا',
            translation: {
              en: 'Muhammad is not the father of [any] one of your men, but [he is] the Messenger of Allah and last of the prophets. And ever is Allah, of all things, Knowing.',
              bn: 'মুহাম্মাদ তোমাদের পুরুষদের মধ্যে কারো পিতা নন, বরং তিনি আল্লাহর রাসূল এবং শেষ নবী। আল্লাহ সর্ববিষয়ে সর্বজ্ঞ।',
              ar: 'مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ ۗ وَكَانَ اللَّهُ بِكُلِّ شَيْءٍ عَلِيمًا'
            }
          },
          {
            type: 'quran',
            surah: 21,
            surahName: { en: 'Al-Anbiya', bn: 'আল-আম্বিয়া', ar: 'الأنبياء' },
            ayahStart: 107,
            arabicText: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',
            translation: {
              en: 'And We have not sent you, [O Muhammad], except as a mercy to the worlds.',
              bn: 'আর আমি তোমাকে সমগ্র বিশ্বের জন্য রহমত হিসেবেই প্রেরণ করেছি।',
              ar: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch01-p02',
        text: 'The coming of Muhammad (SAW) was not unexpected — it was foretold in the scriptures of previous prophets. Allah says: "And [mention] when Isa, the son of Maryam, said, \'O Children of Israel, indeed I am the messenger of Allah to you confirming what came before me of the Torah and bringing good tidings of a messenger to come after me, whose name is Ahmad.\'" The name "Ahmad" (the Most Praised) is another name of Prophet Muhammad, and this verse confirms that Isa himself announced the coming of the final prophet. The Prophet (SAW) described his own position among the prophets with a beautiful parable: "My similitude in comparison with the other prophets before me is that of a man who has built a house beautifully and excellently, except for a place of one brick in a corner. The people go about it and wonder at its beauty, but say: \'Would that this brick be put in its place!\' So I am that brick, and I am the last of the prophets." This hadith captures the essence of Muhammad\'s role: he did not bring a new religion but completed and perfected the one religion that all prophets had preached — submission to Allah alone. He was the final brick that made the edifice of prophethood complete.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 61,
            surahName: { en: 'As-Saff', bn: 'আস-সফ', ar: 'الصف' },
            ayahStart: 6,
            arabicText: 'وَإِذْ قَالَ عِيسَى ابْنُ مَرْيَمَ يَا بَنِي إِسْرَائِيلَ إِنِّي رَسُولُ اللَّهِ إِلَيْكُم مُّصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِن بَعْدِي اسْمُهُ أَحْمَدُ',
            translation: {
              en: 'And [mention] when Isa, the son of Maryam, said, "O Children of Israel, indeed I am the messenger of Allah to you confirming what came before me of the Torah and bringing good tidings of a messenger to come after me, whose name is Ahmad."',
              bn: 'আর স্মরণ করো, যখন ঈসা ইবনে মারইয়াম বলেছিল, "হে বনী ইসরাঈল, নিশ্চয়ই আমি তোমাদের কাছে আল্লাহর রাসূল, আমার পূর্বের তাওরাতের সত্যায়নকারী এবং আমার পরে আগমনকারী একজন রাসূলের সুসংবাদদাতা, যার নাম আহমাদ।"',
              ar: 'وَإِذْ قَالَ عِيسَى ابْنُ مَرْيَمَ يَا بَنِي إِسْرَائِيلَ إِنِّي رَسُولُ اللَّهِ إِلَيْكُم مُّصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِن بَعْدِي اسْمُهُ أَحْمَدُ'
            }
          },
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3535',
            narrator: 'Abu Hurayrah',
            text: {
              en: 'The Prophet (SAW) said: "My similitude in comparison with the other prophets before me is that of a man who has built a house beautifully and excellently, except for a place of one brick in a corner. The people go about it and wonder at its beauty, but say: \'Would that this brick be put in its place!\' So I am that brick, and I am the last of the prophets."',
              bn: 'নবী (সা.) বলেছেন: "আমার ও আমার পূর্ববর্তী নবীদের দৃষ্টান্ত হলো এমন একজন ব্যক্তির মতো যে একটি ঘর সুন্দরভাবে নির্মাণ করেছে, কিন্তু এক কোণায় একটি ইটের জায়গা খালি রেখেছে। মানুষ তার চারপাশে ঘোরে এবং এর সৌন্দর্যে বিস্মিত হয়, কিন্তু বলে: \'যদি এই ইটটি তার জায়গায় বসানো হতো!\' আমিই সেই ইট, এবং আমিই শেষ নবী।"',
              ar: 'قال النبي ﷺ: "مَثَلِي وَمَثَلُ الْأَنْبِيَاءِ مِنْ قَبْلِي كَمَثَلِ رَجُلٍ بَنَى بُنْيَانًا فَأَحْسَنَهُ وَأَجْمَلَهُ إِلَّا مَوْضِعَ لَبِنَةٍ مِنْ زَاوِيَةٍ مِنْ زَوَايَاهُ فَجَعَلَ النَّاسُ يَطُوفُونَ بِهِ وَيَعْجَبُونَ لَهُ وَيَقُولُونَ هَلَّا وُضِعَتْ هَذِهِ اللَّبِنَةُ قَالَ فَأَنَا اللَّبِنَةُ وَأَنَا خَاتَمُ النَّبِيِّينَ"'
            },
            grade: 'sahih'
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch-02',
    title: 'The First Revelation in the Cave of Hira',
    summary: 'At the age of forty, while meditating in the Cave of Hira, Muhammad (SAW) received the first words of the Quran through the angel Jibril. The command "Read!" marked the beginning of the final divine revelation to humanity. Though the experience was overwhelming, Allah reassured His messenger and prepared him for the greatest mission ever entrusted to a human being.',
    order: 2,
    paragraphs: [
      {
        id: 'muhammad-ch02-p01',
        text: 'Before prophethood, Muhammad (SAW) was known among the Quraysh as "Al-Amin" (the Trustworthy) and "As-Sadiq" (the Truthful). As he approached the age of forty, he began to seek solitude in the Cave of Hira on the Mountain of Light (Jabal an-Nur), spending days and nights in contemplation, disturbed by the idol worship and moral corruption around him. It was during one such retreat, in the month of Ramadan, that the angel Jibril came to him with the first revelation. The Quran preserves these momentous first words: "Read in the name of your Lord who created — created man from a clinging substance. Read, and your Lord is the Most Generous — Who taught by the pen — taught man that which he knew not." These five verses of Surah Al-Alaq were the beginning of a revelation that would continue for twenty-three years and transform the entire world. The command "Iqra" (Read/Recite) was fitting for a message that would emphasize knowledge, learning, and the pursuit of truth. The Prophet\'s wife Aisha (RA) narrated the full account: "The angel came to him and asked him to read. The Prophet replied, \'I do not know how to read.\' The Prophet added, \'The angel caught me forcefully and pressed me so hard that I could not bear it any more. He then released me and again asked me to read and I replied, I do not know how to read. Thereupon he caught me again and pressed me a second time till I could not bear it any more. He then released me and again asked me to read, but again I replied, I do not know how to read. Thereupon he caught me for the third time and pressed me, and then released me and said: Read in the name of your Lord who created...\'"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 96,
            surahName: { en: 'Al-Alaq', bn: 'আল-আলাক', ar: 'العلق' },
            ayahStart: 1,
            ayahEnd: 5,
            arabicText: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ الَّذِي عَلَّمَ بِالْقَلَمِ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ',
            translation: {
              en: 'Read in the name of your Lord who created — created man from a clinging substance. Read, and your Lord is the Most Generous — Who taught by the pen — taught man that which he knew not.',
              bn: 'পড়ো তোমার রবের নামে যিনি সৃষ্টি করেছেন — মানুষকে জমাট রক্ত থেকে সৃষ্টি করেছেন। পড়ো, আর তোমার রব সবচেয়ে দয়ালু — যিনি কলমের সাহায্যে শিক্ষা দিয়েছেন — মানুষকে শিক্ষা দিয়েছেন যা সে জানত না।',
              ar: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ الَّذِي عَلَّمَ بِالْقَلَمِ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ'
            }
          },
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3',
            narrator: 'Aisha',
            text: {
              en: 'Aisha (RA) narrated: "The angel came to him and asked him to read. The Prophet (SAW) replied, \'I do not know how to read.\' The angel caught me forcefully and pressed me so hard that I could not bear it any more. He then released me and again asked me to read... Thereupon he caught me for the third time and pressed me, and then released me and said: \'Read in the name of your Lord who created — created man from a clinging substance. Read, and your Lord is the Most Generous.\'"',
              bn: 'আয়েশা (রা.) বর্ণনা করেন: "ফেরেশতা এসে তাঁকে পড়তে বললেন। নবী (সা.) বললেন, \'আমি পড়তে জানি না।\' ফেরেশতা আমাকে ধরে এত জোরে চাপ দিলেন যে আমি সহ্য করতে পারলাম না। তারপর ছেড়ে দিয়ে আবার পড়তে বললেন... তৃতীয়বার ধরে চাপ দিয়ে ছেড়ে দিলেন এবং বললেন: \'পড়ো তোমার রবের নামে যিনি সৃষ্টি করেছেন — মানুষকে জমাট রক্ত থেকে সৃষ্টি করেছেন। পড়ো, আর তোমার রব সবচেয়ে দয়ালু।\'"',
              ar: 'عن عائشة رضي الله عنها قالت: "جَاءَهُ الْمَلَكُ فَقَالَ اقْرَأْ قَالَ مَا أَنَا بِقَارِئٍ فَأَخَذَنِي فَغَطَّنِي حَتَّى بَلَغَ مِنِّي الْجَهْدَ ثُمَّ أَرْسَلَنِي فَقَالَ اقْرَأْ... فَأَخَذَنِي الثَّالِثَةَ ثُمَّ أَرْسَلَنِي فَقَالَ اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ"'
            },
            grade: 'sahih'
          }
        ]
      },
      {
        id: 'muhammad-ch02-p02',
        text: 'After the overwhelming experience of the first revelation, the Prophet (SAW) returned home trembling to his wife Khadijah (RA), saying: "Cover me! Cover me!" Khadijah — one of the greatest women in Islamic history — reassured him with words that revealed her deep understanding of his character: "Never! By Allah, Allah will never disgrace you. You keep good relations with your kith and kin, help the poor and the destitute, serve your guests generously, and assist the deserving calamity-afflicted ones." She then took him to her cousin Waraqah ibn Nawfal, a learned Christian, who confirmed that the angel who visited Muhammad was the same one who had come to Musa. During the early days of revelation, there was a pause (fatrah) that caused the Prophet great anxiety — he feared that Allah had abandoned him. But Allah sent down Surah Ad-Duha to console him: "By the morning brightness, and [by] the night when it covers with darkness, your Lord has not taken leave of you, [O Muhammad], nor has He detested [you]. And the Hereafter is better for you than the first [life]. And your Lord is going to give you, and you will be satisfied." These verses were a divine embrace — a reassurance that the momentary silence was not rejection but preparation, and that everything that lay ahead would be far greater than anything that had come before.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 93,
            surahName: { en: 'Ad-Duha', bn: 'আদ-দুহা', ar: 'الضحى' },
            ayahStart: 1,
            ayahEnd: 5,
            arabicText: 'وَالضُّحَىٰ وَاللَّيْلِ إِذَا سَجَىٰ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ',
            translation: {
              en: 'By the morning brightness, and [by] the night when it covers with darkness, your Lord has not taken leave of you, [O Muhammad], nor has He detested [you]. And the Hereafter is better for you than the first [life]. And your Lord is going to give you, and you will be satisfied.',
              bn: 'কসম পূর্বাহ্নের উজ্জ্বলতার, এবং রাতের যখন তা অন্ধকারে ঢেকে যায়, তোমার রব তোমাকে পরিত্যাগ করেননি এবং তোমার প্রতি অসন্তুষ্টও হননি। আর আখিরাত তোমার জন্য দুনিয়ার চেয়ে উত্তম। আর অচিরেই তোমার রব তোমাকে দেবেন, ফলে তুমি সন্তুষ্ট হবে।',
              ar: 'وَالضُّحَىٰ وَاللَّيْلِ إِذَا سَجَىٰ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ'
            }
          },
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3',
            narrator: 'Aisha',
            text: {
              en: 'Khadijah said to the Prophet (SAW): "Never! By Allah, Allah will never disgrace you. You keep good relations with your kith and kin, help the poor and the destitute, serve your guests generously, and assist the deserving calamity-afflicted ones."',
              bn: 'খাদীজা (রা.) নবী (সা.)-কে বললেন: "কখনো না! আল্লাহর কসম, আল্লাহ কখনো আপনাকে অপমানিত করবেন না। আপনি আত্মীয়তার বন্ধন রক্ষা করেন, দুঃখীদের সাহায্য করেন, মেহমানদের আপ্যায়ন করেন এবং বিপদগ্রস্তদের সেবা করেন।"',
              ar: 'قالت خديجة رضي الله عنها: "كَلَّا وَاللَّهِ مَا يُخْزِيكَ اللَّهُ أَبَدًا إِنَّكَ لَتَصِلُ الرَّحِمَ وَتَحْمِلُ الْكَلَّ وَتَكْسِبُ الْمَعْدُومَ وَتَقْرِي الضَّيْفَ وَتُعِينُ عَلَى نَوَائِبِ الْحَقِّ"'
            },
            grade: 'sahih'
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch-03',
    title: 'The Early Call and Persecution in Makkah',
    summary: 'The Prophet (SAW) began calling people to Islam, first secretly and then openly. The response of the Quraysh was fierce persecution — the early Muslims were tortured, boycotted, and driven from their homes. Yet Allah promised that with every hardship would come ease, and commanded His messenger to rise and warn with courage and patience.',
    order: 3,
    paragraphs: [
      {
        id: 'muhammad-ch03-p01',
        text: 'After the initial revelation, Allah commanded Muhammad (SAW) to begin calling people publicly to Islam: "O you who covers himself [with a garment], arise and warn! And your Lord glorify. And your clothing purify. And uncleanliness avoid." These verses of Surah Al-Muddathir marked the transition from private contemplation to public proclamation. The Prophet began by inviting his closest family and friends. Khadijah was the first to believe, followed by his young cousin Ali ibn Abi Talib, his freed servant Zayd ibn Harithah, and his dear friend Abu Bakr. The early converts were often from the most vulnerable segments of Makkan society — slaves like Bilal ibn Rabah, women like Sumayyah bint Khayyat, and the young and powerless. When the Quraysh realized the threat to their tribal religion and economic interests, they unleashed brutal persecution. Bilal was laid on burning sand with heavy rocks placed on his chest, yet he repeatedly declared "Ahad, Ahad" (One, One) — affirming the oneness of Allah. Sumayyah became the first martyr in Islam, killed by Abu Jahl with a spear. The Prophet himself was subjected to ridicule, abuse, and physical assault — garbage thrown on him during prayer, a camel\'s entrails placed on his back while prostrating, and years of economic and social boycott that left the Muslims eating leaves from trees.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 74,
            surahName: { en: 'Al-Muddathir', bn: 'আল-মুদ্দাসসির', ar: 'المدثر' },
            ayahStart: 1,
            ayahEnd: 5,
            arabicText: 'يَا أَيُّهَا الْمُدَّثِّرُ قُمْ فَأَنذِرْ وَرَبَّكَ فَكَبِّرْ وَثِيَابَكَ فَطَهِّرْ وَالرُّجْزَ فَاهْجُرْ',
            translation: {
              en: 'O you who covers himself [with a garment], arise and warn! And your Lord glorify. And your clothing purify. And uncleanliness avoid.',
              bn: 'হে বস্ত্রাবৃত! উঠো এবং সতর্ক করো! তোমার রবের শ্রেষ্ঠত্ব ঘোষণা করো। তোমার পোশাক পবিত্র রাখো। অপবিত্রতা পরিহার করো।',
              ar: 'يَا أَيُّهَا الْمُدَّثِّرُ قُمْ فَأَنذِرْ وَرَبَّكَ فَكَبِّرْ وَثِيَابَكَ فَطَهِّرْ وَالرُّجْزَ فَاهْجُرْ'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch03-p02',
        text: 'Through all the suffering, Allah sustained the believers with the promise that relief was near. He revealed: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease." The deliberate repetition emphasizes the certainty of Allah\'s promise — every trial carries within it the seeds of relief. Allah also expanded the Prophet\'s heart to bear the burden of his mission: "Did We not expand for you, [O Muhammad], your breast? And We removed from you your burden which had weighed upon your back? And raised high for you your repute?" These verses reminded Muhammad that Allah had already prepared him for this task, lightened his burdens, and elevated his name — a name that would be mentioned alongside Allah\'s in the declaration of faith for all time. The years of persecution in Makkah, though painful, served a divine purpose: they purified the early community, tested the sincerity of faith, demonstrated the moral superiority of Islam through the patience and dignity of the believers, and prepared the foundation for the society that would soon be built in Madinah. The Prophet (SAW) himself modeled the highest standard of patience, never retaliating with violence and always trusting in Allah\'s plan, even when praying: "O Allah, I complain to You of my weakness, my scarcity of resources, and my humiliation before the people."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 94,
            surahName: { en: 'Ash-Sharh', bn: 'আশ-শারহ', ar: 'الشرح' },
            ayahStart: 1,
            ayahEnd: 6,
            arabicText: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ وَوَضَعْنَا عَنكَ وِزْرَكَ الَّذِي أَنقَضَ ظَهْرَكَ وَرَفَعْنَا لَكَ ذِكْرَكَ فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا',
            translation: {
              en: 'Did We not expand for you, [O Muhammad], your breast? And We removed from you your burden which had weighed upon your back? And raised high for you your repute? For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.',
              bn: 'আমি কি তোমার বক্ষ প্রশস্ত করিনি? আর তোমার থেকে সেই বোঝা নামিয়ে দিয়েছি যা তোমার পিঠ ভেঙে দিচ্ছিল? আর তোমার খ্যাতি উচ্চ করেছি? নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে। নিশ্চয়ই কষ্টের সাথে স্বস্তি আছে।',
              ar: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ وَوَضَعْنَا عَنكَ وِزْرَكَ الَّذِي أَنقَضَ ظَهْرَكَ وَرَفَعْنَا لَكَ ذِكْرَكَ فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch-04',
    title: 'The Night Journey: Al-Isra and Al-Mi\'raj',
    summary: 'In the darkest period of his Makkan mission — after losing both Khadijah and his uncle Abu Talib — Allah honoured Muhammad (SAW) with the miraculous Night Journey from Makkah to Jerusalem and then through the seven heavens. During this journey, he met previous prophets, witnessed the signs of Allah, and received the gift of the five daily prayers.',
    order: 4,
    paragraphs: [
      {
        id: 'muhammad-ch04-p01',
        text: 'The Night Journey (Al-Isra and Al-Mi\'raj) occurred during one of the most difficult periods of the Prophet\'s life — the "Year of Sorrow" (Am al-Huzn), when he lost both his beloved wife Khadijah and his protective uncle Abu Talib. In this moment of profound grief, Allah bestowed upon him the greatest honour ever given to a human being. Allah declares: "Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him of Our signs. Indeed, He is the Hearing, the Seeing." In a single night, the Prophet was transported from Makkah to Jerusalem, where he led all the previous prophets in prayer at Al-Masjid al-Aqsa — a profound symbol of his leadership over the entire prophetic tradition. From there, he ascended through the seven heavens, meeting prophets at each level: Adam in the first heaven, Yahya and Isa in the second, Yusuf in the third, Idris in the fourth, Harun in the fifth, Musa in the sixth, and Ibrahim in the seventh — reclining against Al-Bayt al-Ma\'mur (the Frequented House), the heavenly counterpart of the Ka\'bah. Each prophet welcomed him warmly as a righteous brother and prophet.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 17,
            surahName: { en: 'Al-Isra', bn: 'আল-ইসরা', ar: 'الإسراء' },
            ayahStart: 1,
            arabicText: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ',
            translation: {
              en: 'Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him of Our signs. Indeed, He is the Hearing, the Seeing.',
              bn: 'পবিত্র মহান সেই সত্তা যিনি তাঁর বান্দাকে রাতে মসজিদুল হারাম থেকে মসজিদুল আকসায় নিয়ে গেছেন, যার চারপাশকে আমি বরকতময় করেছি, যাতে আমি তাকে আমার কিছু নিদর্শন দেখাই। নিশ্চয়ই তিনি সর্বশ্রোতা, সর্বদ্রষ্টা।',
              ar: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch04-p02',
        text: 'The climax of the Mi\'raj was the Prophet\'s ascent to the highest point of creation — Sidrat al-Muntaha (the Lote Tree of the Utmost Boundary). The Quran describes this awe-inspiring moment: "While he was in the upper horizon. Then he approached and descended and was at a distance of two bow lengths or nearer. And he revealed to His Servant what he revealed. The heart did not lie [about] what it saw... He certainly saw of the greatest signs of his Lord." At this station, the five daily prayers were ordained — initially fifty, but reduced to five after the Prophet\'s repeated return to Allah at the advice of Musa, though they carry the reward of fifty. The Prophet (SAW) said regarding this gift: "These are five prayers, and they are all equal to fifty in reward, for My Word does not change." The five daily prayers thus became the pillar of Islam and the direct connection between every Muslim and their Lord — a gift from the highest point in all of creation. The Mi\'raj also confirmed Muhammad\'s supreme status among all prophets: he was the only one to pass beyond Sidrat al-Muntaha, the only one to speak directly with Allah at this proximity, and the one who returned with the greatest gift — the framework of daily worship that would sustain the Muslim ummah until the Day of Judgment.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 53,
            surahName: { en: 'An-Najm', bn: 'আন-নাজম', ar: 'النجم' },
            ayahStart: 7,
            ayahEnd: 18,
            arabicText: 'وَهُوَ بِالْأُفُقِ الْأَعْلَىٰ ثُمَّ دَنَا فَتَدَلَّىٰ فَكَانَ قَابَ قَوْسَيْنِ أَوْ أَدْنَىٰ فَأَوْحَىٰ إِلَىٰ عَبْدِهِ مَا أَوْحَىٰ مَا كَذَبَ الْفُؤَادُ مَا رَأَىٰ ... لَقَدْ رَأَىٰ مِنْ آيَاتِ رَبِّهِ الْكُبْرَىٰ',
            translation: {
              en: 'While he was in the upper horizon. Then he approached and descended and was at a distance of two bow lengths or nearer. And he revealed to His Servant what he revealed. The heart did not lie [about] what it saw... He certainly saw of the greatest signs of his Lord.',
              bn: 'যখন তিনি ঊর্ধ্ব দিগন্তে ছিলেন। তারপর তিনি কাছে এলেন ও ঝুলে পড়লেন। তখন দুই ধনুকের ব্যবধান ছিল বা তার চেয়েও কম। তারপর তিনি তাঁর বান্দার প্রতি যা ওহী করার তা ওহী করলেন। অন্তর যা দেখেছে সে বিষয়ে মিথ্যা বলেনি... তিনি তাঁর রবের মহান নিদর্শনাবলী দেখেছেন।',
              ar: 'وَهُوَ بِالْأُفُقِ الْأَعْلَىٰ ثُمَّ دَنَا فَتَدَلَّىٰ فَكَانَ قَابَ قَوْسَيْنِ أَوْ أَدْنَىٰ فَأَوْحَىٰ إِلَىٰ عَبْدِهِ مَا أَوْحَىٰ مَا كَذَبَ الْفُؤَادُ مَا رَأَىٰ ... لَقَدْ رَأَىٰ مِنْ آيَاتِ رَبِّهِ الْكُبْرَىٰ'
            }
          },
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3887',
            narrator: 'Malik ibn Sa\'sa\'ah',
            text: {
              en: 'The Prophet (SAW) narrated about the Mi\'raj: "Then the prayers were enjoined on me: they were fifty prayers a day. When I returned, I passed by Musa who asked, \'What have you been ordered to do?\' I replied, \'I have been ordered to offer fifty prayers a day.\' Musa said, \'Your followers cannot bear fifty prayers a day... Go back to your Lord and ask for reduction.\' So I kept going back until they were reduced to five prayers a day."',
              bn: 'নবী (সা.) মিরাজ সম্পর্কে বর্ণনা করেন: "তারপর আমার উপর নামায ফরজ করা হলো: প্রতিদিন পঞ্চাশ ওয়াক্ত। ফেরার পথে মূসার কাছ দিয়ে যাওয়ার সময় তিনি জিজ্ঞেস করলেন, \'তোমাকে কী আদেশ করা হয়েছে?\' আমি বললাম, \'প্রতিদিন পঞ্চাশ ওয়াক্ত নামায।\' মূসা বললেন, \'তোমার উম্মত প্রতিদিন পঞ্চাশ ওয়াক্ত নামায পড়তে পারবে না... তোমার রবের কাছে ফিরে গিয়ে কমানোর আবেদন করো।\' আমি বারবার ফিরে গেলাম যতক্ষণ না পাঁচ ওয়াক্তে কমানো হলো।"',
              ar: 'عن النبي ﷺ في حديث المعراج: "ثُمَّ فُرِضَتْ عَلَيَّ الصَّلَوَاتُ خَمْسِينَ صَلَاةً كُلَّ يَوْمٍ فَرَجَعْتُ فَمَرَرْتُ عَلَى مُوسَى فَقَالَ بِمَا أُمِرْتَ قَالَ أُمِرْتُ بِخَمْسِينَ صَلَاةً كُلَّ يَوْمٍ قَالَ إِنَّ أُمَّتَكَ لَا تَسْتَطِيعُ خَمْسِينَ صَلَاةً... فَلَمْ أَزَلْ أَرْجِعُ حَتَّى فُرِضَ عَلَيَّ خَمْسُ صَلَوَاتٍ كُلَّ يَوْمٍ"'
            },
            grade: 'sahih'
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch-05',
    title: 'The Hijrah to Madinah: A New Beginning',
    summary: 'When the disbelievers of Makkah plotted to assassinate Muhammad (SAW), Allah permitted him to migrate to Madinah. Hidden in the Cave of Thawr with Abu Bakr, the Prophet declared: "Do not grieve; indeed Allah is with us." The Hijrah marked the birth of the Islamic state and the beginning of a new era in human history.',
    order: 5,
    paragraphs: [
      {
        id: 'muhammad-ch05-p01',
        text: 'After thirteen years of calling people to Islam in Makkah, the persecution reached its climax. The leaders of the Quraysh gathered in their council chamber (Dar an-Nadwah) and plotted to kill Muhammad — selecting a young man from each tribe so that the blame for his blood would be distributed and his family could not retaliate against all tribes. But Allah informed His messenger of their plot: "And [remember, O Muhammad], when those who disbelieved plotted against you to restrain you or kill you or evict you [from Makkah]. But they plan, and Allah plans. And Allah is the best of planners." On the night the assassins surrounded his house, the Prophet left Ali ibn Abi Talib in his bed as a decoy and departed for Madinah with his closest companion Abu Bakr as-Siddiq. They hid in the Cave of Thawr for three days while the Quraysh searched desperately for them. At one point, the trackers came so close that Abu Bakr could see their feet. Trembling with fear — not for himself but for the Prophet — Abu Bakr whispered his concern. The Prophet\'s response has echoed through the centuries: "Do not grieve; indeed Allah is with us." Allah sent His tranquillity (sakinah) upon them and aided them with soldiers they could not see — according to narrations, a spider spun a web across the cave\'s entrance and a pair of doves nested there, convincing the pursuers that no one could have recently entered.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 8,
            surahName: { en: 'Al-Anfal', bn: 'আল-আনফাল', ar: 'الأنفال' },
            ayahStart: 30,
            arabicText: 'وَإِذْ يَمْكُرُ بِكَ الَّذِينَ كَفَرُوا لِيُثْبِتُوكَ أَوْ يَقْتُلُوكَ أَوْ يُخْرِجُوكَ ۚ وَيَمْكُرُونَ وَيَمْكُرُ اللَّهُ ۖ وَاللَّهُ خَيْرُ الْمَاكِرِينَ',
            translation: {
              en: 'And [remember, O Muhammad], when those who disbelieved plotted against you to restrain you or kill you or evict you [from Makkah]. But they plan, and Allah plans. And Allah is the best of planners.',
              bn: 'আর স্মরণ করো, যখন কাফিররা তোমার বিরুদ্ধে ষড়যন্ত্র করেছিল — তোমাকে বন্দী করতে, হত্যা করতে বা বের করে দিতে। তারা ষড়যন্ত্র করে আর আল্লাহও পরিকল্পনা করেন। আল্লাহ সর্বোত্তম পরিকল্পনাকারী।',
              ar: 'وَإِذْ يَمْكُرُ بِكَ الَّذِينَ كَفَرُوا لِيُثْبِتُوكَ أَوْ يَقْتُلُوكَ أَوْ يُخْرِجُوكَ ۚ وَيَمْكُرُونَ وَيَمْكُرُ اللَّهُ ۖ وَاللَّهُ خَيْرُ الْمَاكِرِينَ'
            }
          },
          {
            type: 'quran',
            surah: 9,
            surahName: { en: 'At-Tawbah', bn: 'আত-তওবাহ', ar: 'التوبة' },
            ayahStart: 40,
            arabicText: 'إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا ۖ فَأَنزَلَ اللَّهُ سَكِينَتَهُ عَلَيْهِ وَأَيَّدَهُ بِجُنُودٍ لَّمْ تَرَوْهَا',
            translation: {
              en: 'If you do not aid him — Allah has already aided him when those who disbelieved had driven him out [of Makkah] as one of two, when they were in the cave and he said to his companion, "Do not grieve; indeed Allah is with us." And Allah sent down His tranquillity upon him and supported him with soldiers you did not see.',
              bn: 'যদি তোমরা তাকে সাহায্য না করো — আল্লাহ তাকে সাহায্য করেছিলেন যখন কাফিররা তাকে বের করে দিয়েছিল, দুজনের একজন হিসেবে, যখন তারা গুহায় ছিলেন এবং তিনি তাঁর সঙ্গীকে বললেন, "দুঃখ করো না; নিশ্চয়ই আল্লাহ আমাদের সাথে আছেন।" আর আল্লাহ তাঁর উপর প্রশান্তি নাযিল করলেন এবং এমন সৈন্যবাহিনী দিয়ে তাঁকে সাহায্য করলেন যা তোমরা দেখোনি।',
              ar: 'إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا ۖ فَأَنزَلَ اللَّهُ سَكِينَتَهُ عَلَيْهِ وَأَيَّدَهُ بِجُنُودٍ لَّمْ تَرَوْهَا'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch05-p02',
        text: 'Upon arriving in Madinah, the Prophet (SAW) established the first Muslim community — a society built on faith, brotherhood, and justice. His first acts were profoundly symbolic: building the mosque (Masjid an-Nabawi) as the centre of community life, and establishing the bond of brotherhood (mu\'akhah) between the Muhajirun (emigrants from Makkah) and the Ansar (helpers of Madinah). The Ansar\'s generosity was so extraordinary that Allah praised them in the Quran: "And [also for] those who were settled in the Home [al-Madinah] and [adopted] the faith before them. They love those who emigrated to them and find not any want in their breasts of what the emigrants were given but give [them] preference over themselves, even though they are in privation. And whoever is protected from the stinginess of his soul — it is those who will be the successful." The Ansar shared their homes, their wealth, and even offered to divorce one of their wives so their Muhajir brothers could marry — an offer the Muhajirun graciously declined, preferring to earn their own way. The Prophet also drafted the Constitution of Madinah (Sahifat al-Madinah) — one of the earliest written constitutions in human history — which established the rights and responsibilities of all inhabitants, including Muslims, Jews, and other groups, creating a framework for a pluralistic society based on mutual respect and shared security.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 59,
            surahName: { en: 'Al-Hashr', bn: 'আল-হাশর', ar: 'الحشر' },
            ayahStart: 9,
            arabicText: 'وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ يُحِبُّونَ مَنْ هَاجَرَ إِلَيْهِمْ وَلَا يَجِدُونَ فِي صُدُورِهِمْ حَاجَةً مِّمَّا أُوتُوا وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ ۚ وَمَن يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ',
            translation: {
              en: 'And [also for] those who were settled in the Home [al-Madinah] and [adopted] the faith before them. They love those who emigrated to them and find not any want in their breasts of what the emigrants were given but give [them] preference over themselves, even though they are in privation. And whoever is protected from the stinginess of his soul — it is those who will be the successful.',
              bn: 'আর যারা মুহাজিরদের আগমনের পূর্বে মদীনায় বসবাস করেছে এবং ঈমান এনেছে, তারা মুহাজিরদের ভালোবাসে এবং তাদের যা দেওয়া হয়েছে তার জন্য নিজেদের অন্তরে কোনো অভাব অনুভব করে না, বরং নিজেদের অভাব থাকা সত্ত্বেও তাদের অগ্রাধিকার দেয়। যাকে মনের কার্পণ্য থেকে রক্ষা করা হয়েছে — তারাই সফলকাম।',
              ar: 'وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ يُحِبُّونَ مَنْ هَاجَرَ إِلَيْهِمْ وَلَا يَجِدُونَ فِي صُدُورِهِمْ حَاجَةً مِّمَّا أُوتُوا وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ ۚ وَمَن يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch-06',
    title: 'Divine Aid: The Battle of Badr and Trials of the Believers',
    summary: 'The young Muslim community faced its first major military test at the Battle of Badr, where 313 believers confronted over 1,000 well-armed Quraysh warriors. Allah sent angels to aid the believers, granting them a decisive victory that became a turning point in Islamic history. Subsequent trials — Uhud, the Trench, and others — further tested and strengthened the community\'s faith.',
    order: 6,
    paragraphs: [
      {
        id: 'muhammad-ch06-p01',
        text: 'In the second year after the Hijrah, the Muslims faced their first decisive battle. At Badr, 313 poorly equipped believers confronted over 1,000 heavily armed Quraysh warriors. The odds were overwhelming by worldly standards, but the Prophet (SAW) spent the night before the battle in fervent prayer, raising his hands and supplicating until his cloak fell from his shoulders. Allah answered his prayer and revealed: "[Remember] when you asked help of your Lord, and He answered you, \'Indeed, I will reinforce you with a thousand from the angels, following one another.\'" The victory at Badr was miraculous — Allah sent not only angelic reinforcements but also divine assistance in many forms. He says: "And already had Allah given you victory at Badr while you were few. So fear Allah that you may be grateful. [Remember] when you said to the believers, \'Is it not sufficient for you that your Lord should reinforce you with three thousand angels sent down?\'" The battle ended with a stunning Muslim victory: seventy of the Quraysh\'s finest warriors were killed and seventy captured, while only fourteen Muslims were martyred. Badr was not merely a military victory — it was divine validation of the truth of Islam and proof that Allah supports those who trust in Him, regardless of numbers or material strength.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 8,
            surahName: { en: 'Al-Anfal', bn: 'আল-আনফাল', ar: 'الأنفال' },
            ayahStart: 9,
            arabicText: 'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ',
            translation: {
              en: '[Remember] when you asked help of your Lord, and He answered you, "Indeed, I will reinforce you with a thousand from the angels, following one another."',
              bn: 'যখন তোমরা তোমাদের রবের কাছে সাহায্য প্রার্থনা করেছিলে, তিনি তোমাদের দুআ কবুল করলেন: "নিশ্চয়ই আমি তোমাদের সাহায্য করব একের পর এক আগমনকারী এক হাজার ফেরেশতা দিয়ে।"',
              ar: 'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ'
            }
          },
          {
            type: 'quran',
            surah: 3,
            surahName: { en: 'Al-Imran', bn: 'আলে-ইমরান', ar: 'آل عمران' },
            ayahStart: 123,
            ayahEnd: 125,
            arabicText: 'وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ ۖ فَاتَّقُوا اللَّهَ لَعَلَّكُمْ تَشْكُرُونَ إِذْ تَقُولُ لِلْمُؤْمِنِينَ أَلَن يَكْفِيَكُمْ أَن يُمِدَّكُمْ رَبُّكُم بِثَلَاثَةِ آلَافٍ مِّنَ الْمَلَائِكَةِ مُنزَلِينَ',
            translation: {
              en: 'And already had Allah given you victory at Badr while you were few. So fear Allah that you may be grateful. [Remember] when you said to the believers, "Is it not sufficient for you that your Lord should reinforce you with three thousand angels sent down?"',
              bn: 'আল্লাহ তো বদরে তোমাদের সাহায্য করেছিলেন যখন তোমরা ছিলে দুর্বল। সুতরাং আল্লাহকে ভয় করো যাতে তোমরা কৃতজ্ঞ হও। যখন তুমি মুমিনদের বলেছিলে, "তোমাদের জন্য কি যথেষ্ট নয় যে তোমাদের রব তোমাদের তিন হাজার অবতীর্ণ ফেরেশতা দিয়ে সাহায্য করবেন?"',
              ar: 'وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ ۖ فَاتَّقُوا اللَّهَ لَعَلَّكُمْ تَشْكُرُونَ إِذْ تَقُولُ لِلْمُؤْمِنِينَ أَلَن يَكْفِيَكُمْ أَن يُمِدَّكُمْ رَبُّكُم بِثَلَاثَةِ آلَافٍ مِّنَ الْمَلَائِكَةِ مُنزَلِينَ'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch06-p02',
        text: 'The victory at Badr was followed by further trials that tested the believers\' resolve. At Uhud, the Muslims suffered setbacks when archers disobeyed the Prophet\'s orders, leading to heavy casualties. During the Battle of the Trench (Al-Khandaq), a coalition of ten thousand enemy fighters besieged Madinah for nearly a month. Allah describes this harrowing time: "When they came at you from above you and from below you, and when eyes shifted [in fear], and hearts reached the throats, and you assumed about Allah [various] assumptions. There the believers were tested and shaken with a severe shaking." Yet even in this darkest hour, the true believers remained steadfast: "And when the believers saw the confederates, they said, \'This is what Allah and His Messenger had promised us, and Allah and His Messenger spoke the truth.\' And it increased them only in faith and acceptance." Allah ultimately routed the coalition with a fierce wind and unseen forces, ending the siege without a major battle. Each trial served to distinguish the sincere believers from the hypocrites, strengthen the community\'s dependence on Allah, and demonstrate that divine victory comes through faith and patience, not through numbers or weaponry alone.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 33,
            surahName: { en: 'Al-Ahzab', bn: 'আল-আহযাব', ar: 'الأحزاب' },
            ayahStart: 10,
            ayahEnd: 11,
            arabicText: 'إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ وَإِذْ زَاغَتِ الْأَبْصَارُ وَبَلَغَتِ الْقُلُوبُ الْحَنَاجِرَ وَتَظُنُّونَ بِاللَّهِ الظُّنُونَا هُنَالِكَ ابْتُلِيَ الْمُؤْمِنُونَ وَزُلْزِلُوا زِلْزَالًا شَدِيدًا',
            translation: {
              en: '[Remember] when they came at you from above you and from below you, and when eyes shifted [in fear], and hearts reached the throats, and you assumed about Allah [various] assumptions. There the believers were tested and shaken with a severe shaking.',
              bn: 'যখন তারা তোমাদের উপর দিক ও নিচের দিক থেকে এসেছিল, যখন চোখ বিস্ফারিত হয়েছিল, প্রাণ কণ্ঠাগত হয়েছিল এবং তোমরা আল্লাহ সম্পর্কে নানা ধারণা পোষণ করছিলে। সেখানে মুমিনদের পরীক্ষা নেওয়া হয়েছিল এবং তীব্রভাবে প্রকম্পিত করা হয়েছিল।',
              ar: 'إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ وَإِذْ زَاغَتِ الْأَبْصَارُ وَبَلَغَتِ الْقُلُوبُ الْحَنَاجِرَ وَتَظُنُّونَ بِاللَّهِ الظُّنُونَا هُنَالِكَ ابْتُلِيَ الْمُؤْمِنُونَ وَزُلْزِلُوا زِلْزَالًا شَدِيدًا'
            }
          },
          {
            type: 'quran',
            surah: 33,
            surahName: { en: 'Al-Ahzab', bn: 'আল-আহযাব', ar: 'الأحزاب' },
            ayahStart: 22,
            arabicText: 'وَلَمَّا رَأَى الْمُؤْمِنُونَ الْأَحْزَابَ قَالُوا هَٰذَا مَا وَعَدَنَا اللَّهُ وَرَسُولُهُ وَصَدَقَ اللَّهُ وَرَسُولُهُ ۚ وَمَا زَادَهُمْ إِلَّا إِيمَانًا وَتَسْلِيمًا',
            translation: {
              en: 'And when the believers saw the confederates, they said, "This is what Allah and His Messenger had promised us, and Allah and His Messenger spoke the truth." And it increased them only in faith and acceptance.',
              bn: 'আর যখন মুমিনরা শত্রু বাহিনী দেখল, তারা বলল, "আল্লাহ ও তাঁর রাসূল আমাদের যা ওয়াদা দিয়েছিলেন এটাই তা, এবং আল্লাহ ও তাঁর রাসূল সত্য বলেছেন।" এটা তাদের ঈমান ও আত্মসমর্পণই বৃদ্ধি করল।',
              ar: 'وَلَمَّا رَأَى الْمُؤْمِنُونَ الْأَحْزَابَ قَالُوا هَٰذَا مَا وَعَدَنَا اللَّهُ وَرَسُولُهُ وَصَدَقَ اللَّهُ وَرَسُولُهُ ۚ وَمَا زَادَهُمْ إِلَّا إِيمَانًا وَتَسْلِيمًا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch-07',
    title: 'The Conquest of Makkah: Victory and Forgiveness',
    summary: 'Eight years after being driven from his homeland, Muhammad (SAW) returned to Makkah at the head of ten thousand companions. He entered the city peacefully, declared a general amnesty for those who had persecuted him for decades, and cleansed the Ka\'bah of its idols. People entered Islam in multitudes, and the prophecy of a clear victory was fulfilled.',
    order: 7,
    paragraphs: [
      {
        id: 'muhammad-ch07-p01',
        text: 'In the eighth year after the Hijrah, the Prophet (SAW) marched toward Makkah with an army of ten thousand — the largest Muslim force ever assembled. The conquest that Allah had promised was at hand: "Indeed, We have given you, [O Muhammad], a clear conquest, that Allah may forgive for you what preceded of your sin and what will follow and complete His favor upon you and guide you to a straight path, and [that] Allah may aid you with a mighty victory." Despite having the power to take revenge for decades of persecution, torture, and the killing of his companions, the Prophet entered Makkah with his head bowed in humility on his mount, reciting Surah Al-Fath. He declared a general amnesty: "Go, for you are free." This act of mercy — forgiving those who had driven him out, tortured his followers, and killed his loved ones — was one of the most remarkable demonstrations of prophetic character in history. He then entered the Ka\'bah and cleansed it of the 360 idols, reciting: "Truth has come, and falsehood has departed. Indeed, falsehood is bound to depart." The house that Ibrahim and Ismail had built for the worship of Allah alone was restored to its original purpose. Ibn Kathir records that the people of Makkah, who had fought Islam for twenty-one years, embraced it almost unanimously within days of the conquest.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 48,
            surahName: { en: 'Al-Fath', bn: 'আল-ফাতহ', ar: 'الفتح' },
            ayahStart: 1,
            ayahEnd: 3,
            arabicText: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا لِّيَغْفِرَ لَكَ اللَّهُ مَا تَقَدَّمَ مِن ذَنبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهُ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُّسْتَقِيمًا وَيَنصُرَكَ اللَّهُ نَصْرًا عَزِيزًا',
            translation: {
              en: 'Indeed, We have given you, [O Muhammad], a clear conquest, that Allah may forgive for you what preceded of your sin and what will follow and complete His favor upon you and guide you to a straight path, and [that] Allah may aid you with a mighty victory.',
              bn: 'নিশ্চয়ই আমি তোমাকে একটি সুস্পষ্ট বিজয় দান করেছি, যাতে আল্লাহ তোমার পূর্বের ও পরের সব ত্রুটি ক্ষমা করেন, তোমার প্রতি তাঁর নিয়ামত পূর্ণ করেন এবং তোমাকে সরল পথে পরিচালিত করেন, এবং আল্লাহ তোমাকে এক মহান বিজয়ে সাহায্য করেন।',
              ar: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا لِّيَغْفِرَ لَكَ اللَّهُ مَا تَقَدَّمَ مِن ذَنبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهُ عَلَيْكَ وَيَهْدِيَكَ صِرَاطًا مُّسْتَقِيمًا وَيَنصُرَكَ اللَّهُ نَصْرًا عَزِيزًا'
            }
          },
          {
            type: 'quran',
            surah: 17,
            surahName: { en: 'Al-Isra', bn: 'আল-ইসরা', ar: 'الإسراء' },
            ayahStart: 81,
            arabicText: 'وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ ۚ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا',
            translation: {
              en: 'And say, "Truth has come, and falsehood has departed. Indeed is falsehood, [by nature], ever bound to depart."',
              bn: 'আর বলো, "সত্য এসেছে এবং মিথ্যা বিলুপ্ত হয়েছে। নিশ্চয়ই মিথ্যা বিলুপ্ত হতে বাধ্য।"',
              ar: 'وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ ۚ إِنَّ الْبَاطِلَ كَانَ زَهُوقًا'
            }
          }
        ]
      },
      {
        id: 'muhammad-ch07-p02',
        text: 'After the conquest of Makkah, people entered Islam in waves. Delegations came from across Arabia to accept the faith. Allah celebrated this momentous development: "When the victory of Allah has come and the conquest, and you see the people entering into the religion of Allah in multitudes, then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance." Scholars note that this surah — the shortest to be revealed as a complete unit — was also a subtle indication that the Prophet\'s earthly mission was nearing completion. Having fulfilled the purpose for which he was sent, he was now being told to prepare for his meeting with Allah through praise and seeking forgiveness. The conquest of Makkah was not achieved through vengeance or bloodshed but through mercy, patience, and unwavering trust in Allah\'s plan. It demonstrated the Prophet\'s teaching that true strength lies not in the ability to overpower others but in the ability to forgive. When he stood before the people of Makkah — the same people who had tortured his companions, killed his family members, and driven him from his home — and said "Go, for you are free," he embodied the highest ideals of the message he had been sent to deliver.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 110,
            surahName: { en: 'An-Nasr', bn: 'আন-নাসর', ar: 'النصر' },
            ayahStart: 1,
            ayahEnd: 3,
            arabicText: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا',
            translation: {
              en: 'When the victory of Allah has come and the conquest, and you see the people entering into the religion of Allah in multitudes, then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.',
              bn: 'যখন আল্লাহর সাহায্য ও বিজয় আসবে, এবং তুমি মানুষকে দলে দলে আল্লাহর দীনে প্রবেশ করতে দেখবে, তখন তোমার রবের প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করো এবং তাঁর কাছে ক্ষমা প্রার্থনা করো। নিশ্চয়ই তিনি তওবা কবুলকারী।',
              ar: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'muhammad-ch-08',
    title: 'The Farewell Sermon and Completion of the Religion',
    summary: 'In the tenth year after Hijrah, Muhammad (SAW) performed his only Hajj — the Farewell Pilgrimage — and delivered a sermon that proclaimed universal human rights, equality, and the completion of divine guidance. On that day, Allah revealed: "This day I have perfected for you your religion." The Prophet\'s legacy — the Quran and his Sunnah — continues to guide billions, a testament to the truth of his prophethood and the timeless mercy of Allah.',
    order: 8,
    paragraphs: [
      {
        id: 'muhammad-ch08-p01',
        text: 'In the tenth year after the Hijrah, the Prophet (SAW) performed the Hajj — his first and only pilgrimage — with over 100,000 companions. Standing on the plain of Arafat, he delivered the Farewell Sermon (Khutbat al-Wada\'), one of the most significant speeches in human history. He declared: "O people, your Lord is one, and your father is one. All of you are from Adam, and Adam was from dust. An Arab has no superiority over a non-Arab, nor does a non-Arab have any superiority over an Arab; a white person has no superiority over a black person, nor does a black person have any superiority over a white — except by taqwa (God-consciousness)." He emphasized the sanctity of life, property, and honour, the rights of women, the prohibition of usury, and the importance of holding fast to the Quran and Sunnah. On that very day — the 9th of Dhul-Hijjah, on the plain of Arafat — Allah revealed the verse that completed the religion of Islam: "This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion." When Umar ibn al-Khattab heard this verse, he wept — for he understood that a religion perfected means the mission is complete, and the departure of the messenger who delivered it was near.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 5,
            surahName: { en: 'Al-Ma\'idah', bn: 'আল-মায়িদাহ', ar: 'المائدة' },
            ayahStart: 3,
            arabicText: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
            translation: {
              en: 'This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion.',
              bn: 'আজ আমি তোমাদের জন্য তোমাদের দীনকে পূর্ণাঙ্গ করলাম এবং তোমাদের প্রতি আমার নিয়ামত সম্পূর্ণ করলাম এবং ইসলামকে তোমাদের দীন হিসেবে মনোনীত করলাম।',
              ar: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا'
            }
          },
          {
            type: 'hadith',
            collection: 'Sahih Muslim',
            hadithNumber: '1218',
            narrator: 'Jabir ibn Abdullah',
            text: {
              en: 'The Prophet (SAW) said in his Farewell Sermon: "O people, your Lord is one, and your father is one. All of you are from Adam, and Adam was from dust. An Arab has no superiority over a non-Arab, nor does a non-Arab have any superiority over an Arab; a white person has no superiority over a black person, nor a black person over a white — except by taqwa (God-consciousness). Indeed, the most noble of you in the sight of Allah is the most righteous of you."',
              bn: 'নবী (সা.) তাঁর বিদায় খুতবায় বলেছেন: "হে মানুষ, তোমাদের রব এক, তোমাদের পিতা এক। তোমরা সবাই আদম থেকে, আর আদম মাটি থেকে। আরবের উপর অনারবের কোনো শ্রেষ্ঠত্ব নেই, অনারবের উপর আরবের কোনো শ্রেষ্ঠত্ব নেই; সাদার উপর কালোর কোনো শ্রেষ্ঠত্ব নেই, কালোর উপর সাদার কোনো শ্রেষ্ঠত্ব নেই — তাকওয়া ছাড়া। নিশ্চয়ই আল্লাহর কাছে তোমাদের মধ্যে সর্বাধিক সম্মানিত সে যে সবচেয়ে বেশি তাকওয়াবান।"',
              ar: 'قال النبي ﷺ في خطبة الوداع: "يَا أَيُّهَا النَّاسُ إِنَّ رَبَّكُمْ وَاحِدٌ وَإِنَّ أَبَاكُمْ وَاحِدٌ كُلُّكُمْ لِآدَمَ وَآدَمُ مِنْ تُرَابٍ لَا فَضْلَ لِعَرَبِيٍّ عَلَى عَجَمِيٍّ وَلَا لِعَجَمِيٍّ عَلَى عَرَبِيٍّ وَلَا لِأَبْيَضَ عَلَى أَسْوَدَ وَلَا لِأَسْوَدَ عَلَى أَبْيَضَ إِلَّا بِالتَّقْوَى إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ"'
            },
            grade: 'sahih'
          }
        ]
      },
      {
        id: 'muhammad-ch08-p02',
        text: 'Shortly after the Farewell Pilgrimage, the Prophet (SAW) fell ill and passed away on the 12th of Rabi\' al-Awwal, 11 AH, in Madinah, with his head resting in the lap of Aisha (RA). His last words included repeated emphasis on prayer and the care of those under one\'s authority. Abu Bakr (RA) emerged to calm the shocked community with words that have defined Islamic monotheism ever since: "Whoever used to worship Muhammad, know that Muhammad has died. And whoever used to worship Allah, know that Allah is alive and does not die." He then recited: "Muhammad is not but a messenger. [Other] messengers have passed on before him. So if he was to die or be killed, would you turn back on your heels?" The Prophet\'s legacy is unmatched in human history. Allah describes his character with the most comprehensive praise: "And indeed, you are of a great moral character." He left behind the Quran — the preserved, unchanged word of Allah — and his Sunnah as guidance for all of humanity. From a lone voice in the deserts of Arabia to a message that encompasses nearly two billion people today, the story of Muhammad (SAW) is the ultimate testament to the power of truth, the mercy of Allah, and the promise that when a human being devotes himself entirely to the service of his Creator, Allah will use him to change the course of human history. May the peace and blessings of Allah be upon him, his family, his companions, and all who follow his path until the Day of Judgment.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 68,
            surahName: { en: 'Al-Qalam', bn: 'আল-কলম', ar: 'القلم' },
            ayahStart: 4,
            arabicText: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',
            translation: {
              en: 'And indeed, you are of a great moral character.',
              bn: 'আর নিশ্চয়ই তুমি মহান চরিত্রের উপর অধিষ্ঠিত।',
              ar: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ'
            }
          },
          {
            type: 'quran',
            surah: 3,
            surahName: { en: 'Al-Imran', bn: 'আলে-ইমরান', ar: 'آل عمران' },
            ayahStart: 144,
            arabicText: 'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ ۚ أَفَإِن مَّاتَ أَوْ قُتِلَ انقَلَبْتُمْ عَلَىٰ أَعْقَابِكُمْ',
            translation: {
              en: 'Muhammad is not but a messenger. [Other] messengers have passed on before him. So if he was to die or be killed, would you turn back on your heels?',
              bn: 'মুহাম্মাদ একজন রাসূল ছাড়া কিছু নন। তাঁর আগেও অনেক রাসূল গত হয়েছেন। তাহলে যদি তিনি মারা যান বা নিহত হন, তোমরা কি পিছনে ফিরে যাবে?',
              ar: 'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ ۚ أَفَإِن مَّاتَ أَوْ قُتِلَ انقَلَبْتُمْ عَلَىٰ أَعْقَابِكُمْ'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
