import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'sulayman-ch-01',
    title: 'The Heir of Dawud: A Kingdom Like No Other',
    summary: 'Sulayman inherited prophethood and kingship from his father Dawud. Allah granted him dominion over the wind, the jinn, and the flow of molten copper — a kingdom the likes of which was never given to anyone before or after him.',
    order: 1,
    paragraphs: [
      {
        id: 'sulayman-ch01-p01',
        text: 'Prophet Sulayman (Solomon, AS), the son of Dawud, inherited both prophethood and an extraordinary kingdom from his father. Allah says: "And Sulayman inherited Dawud. He said, \'O people, we have been taught the language of birds, and we have been given from all things. Indeed, this is evident bounty.\'" From a young age, Sulayman displayed exceptional wisdom. Ibn Kathir recounts from the tradition of the two women who came to Dawud disputing over a child — each claiming to be the mother. Dawud judged in favour of the elder, but young Sulayman suggested a test: he proposed that the child be split between them. The real mother immediately cried out to give the child to the other woman rather than see him harmed, revealing her true maternal love. Sulayman\'s insight was thus proven even before he assumed the throne. When he became king and prophet, Allah bestowed upon him a dominion unlike anything given to any human being before or after him. Sulayman himself prayed for this: "My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me. Indeed, You are the Bestower."',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 27,
            surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النمل' },
            ayahStart: 16,
            arabicText: 'وَوَرِثَ سُلَيْمَانُ دَاوُودَ ۖ وَقَالَ يَا أَيُّهَا النَّاسُ عُلِّمْنَا مَنطِقَ الطَّيْرِ وَأُوتِينَا مِن كُلِّ شَيْءٍ ۖ إِنَّ هَٰذَا لَهُوَ الْفَضْلُ الْمُبِينُ',
            translation: {
              en: 'And Sulayman inherited Dawud. He said, "O people, we have been taught the language of birds, and we have been given from all things. Indeed, this is evident bounty."',
              bn: 'সুলাইমান দাউদের উত্তরাধিকারী হলেন। তিনি বললেন, "হে মানুষ, আমাদেরকে পাখির ভাষা শেখানো হয়েছে এবং সবকিছু থেকে আমাদের দান করা হয়েছে। নিশ্চয়ই এটি সুস্পষ্ট অনুগ্রহ।"',
              ar: 'وَوَرِثَ سُلَيْمَانُ دَاوُودَ ۖ وَقَالَ يَا أَيُّهَا النَّاسُ عُلِّمْنَا مَنطِقَ الطَّيْرِ وَأُوتِينَا مِن كُلِّ شَيْءٍ ۖ إِنَّ هَٰذَا لَهُوَ الْفَضْلُ الْمُبِينُ'
            }
          },
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 35,
            arabicText: 'قَالَ رَبِّ اغْفِرْ لِي وَهَبْ لِي مُلْكًا لَّا يَنبَغِي لِأَحَدٍ مِّن بَعْدِي ۖ إِنَّكَ أَنتَ الْوَهَّابُ',
            translation: {
              en: 'He said, "My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me. Indeed, You are the Bestower."',
              bn: 'তিনি বললেন, "হে আমার রব, আমাকে ক্ষমা করুন এবং আমাকে এমন রাজত্ব দান করুন যা আমার পরে আর কারও জন্য শোভনীয় হবে না। নিশ্চয়ই আপনিই মহাদাতা।"',
              ar: 'قَالَ رَبِّ اغْفِرْ لِي وَهَبْ لِي مُلْكًا لَّا يَنبَغِي لِأَحَدٍ مِّن بَعْدِي ۖ إِنَّكَ أَنتَ الْوَهَّابُ'
            }
          }
        ]
      },
      {
        id: 'sulayman-ch01-p02',
        text: 'Allah answered Sulayman\'s prayer and subjected the wind to his command. It would travel at his bidding — covering a month\'s journey in a single morning and a month\'s journey in a single evening. Allah also subjected the jinn to his service. They worked for him building palaces, sculpting statues, making basins as large as reservoirs, and heavy cooking pots firmly fixed in their places. Furthermore, Allah caused a spring of molten copper to flow for him, which was used in construction and craftsmanship. Allah says: "And to Sulayman [We subjected] the wind — its morning [journey was that of] a month — and its afternoon [journey was that of] a month, and We made flow for him a spring of liquid copper. And among the jinn were those who worked for him by the permission of his Lord." Despite all this power, Allah reminded him and his family: "Work, O family of Dawud, in gratitude. And few of My servants are grateful." This was the foundation of Sulayman\'s kingdom — immense power held in the hand of gratitude and obedience to Allah.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 34,
            surahName: { en: 'Saba', bn: 'সাবা', ar: 'سبأ' },
            ayahStart: 12,
            ayahEnd: 13,
            arabicText: 'وَلِسُلَيْمَانَ الرِّيحَ غُدُوُّهَا شَهْرٌ وَرَوَاحُهَا شَهْرٌ ۖ وَأَسَلْنَا لَهُ عَيْنَ الْقِطْرِ ۖ وَمِنَ الْجِنِّ مَن يَعْمَلُ بَيْنَ يَدَيْهِ بِإِذْنِ رَبِّهِ ... اعْمَلُوا آلَ دَاوُودَ شُكْرًا ۚ وَقَلِيلٌ مِّنْ عِبَادِيَ الشَّكُورُ',
            translation: {
              en: 'And to Sulayman [We subjected] the wind — its morning [journey was that of] a month — and its afternoon [journey was that of] a month, and We made flow for him a spring of liquid copper. And among the jinn were those who worked for him by the permission of his Lord... "Work, O family of Dawud, in gratitude." And few of My servants are grateful.',
              bn: 'আর সুলাইমানের অধীন করে দিলাম বাতাসকে, যার সকালের গতি ছিল এক মাসের পথ এবং সন্ধ্যার গতি এক মাসের পথ। আমি তার জন্য গলিত তামার একটি ঝরনা প্রবাহিত করলাম। জিনদের মধ্যে কেউ কেউ তার রবের অনুমতিতে তার সামনে কাজ করত... "হে দাউদের পরিবার, কৃতজ্ঞতাসহ কাজ করো।" আমার বান্দাদের মধ্যে অল্পসংখ্যকই কৃতজ্ঞ।',
              ar: 'وَلِسُلَيْمَانَ الرِّيحَ غُدُوُّهَا شَهْرٌ وَرَوَاحُهَا شَهْرٌ ۖ وَأَسَلْنَا لَهُ عَيْنَ الْقِطْرِ ۖ وَمِنَ الْجِنِّ مَن يَعْمَلُ بَيْنَ يَدَيْهِ بِإِذْنِ رَبِّهِ ... اعْمَلُوا آلَ دَاوُودَ شُكْرًا ۚ وَقَلِيلٌ مِّنْ عِبَادِيَ الشَّكُورُ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'sulayman-ch-02',
    title: 'The Valley of the Ants and the Language of Birds',
    summary: 'Allah blessed Sulayman with the ability to understand the speech of birds and animals. As he marched with his vast army of jinn, humans, and birds, a tiny ant warned her colony of the approaching forces — and Sulayman, hearing her words, smiled and prayed to Allah in gratitude.',
    order: 2,
    paragraphs: [
      {
        id: 'sulayman-ch02-p01',
        text: 'Among the most extraordinary gifts Allah bestowed upon Sulayman was the ability to understand the language of birds and animals — a miracle given to no other prophet. His army was unlike any other in history: it consisted of ranks of jinn, humans, and birds, all organized and marching in formation under his command. One day, as this vast army traveled, they came upon a valley of ants. A small ant, perceiving the approaching forces, called out urgently to her colony: "O ants! Enter your dwellings so that Sulayman and his soldiers do not crush you while they perceive not!" Sulayman, hearing the tiny creature\'s words, smiled — amused and moved by her concern. He did not react with arrogance or indifference, but with humility and gratitude. He raised his hands and prayed: "My Lord, enable me to be grateful for Your favour which You have bestowed upon me and upon my parents, and to do righteousness of which You approve. And admit me by Your mercy among Your righteous servants."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 27,
            surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النمل' },
            ayahStart: 17,
            ayahEnd: 19,
            arabicText: 'وَحُشِرَ لِسُلَيْمَانَ جُنُودُهُ مِنَ الْجِنِّ وَالْإِنسِ وَالطَّيْرِ فَهُمْ يُوزَعُونَ حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ فَتَبَسَّمَ ضَاحِكًا مِّن قَوْلِهَا',
            translation: {
              en: 'And gathered for Sulayman were his soldiers of the jinn and men and birds, and they were marching in rows. Until, when they came upon the valley of the ants, an ant said, "O ants, enter your dwellings that you not be crushed by Sulayman and his soldiers while they perceive not." So he smiled, amused at her speech.',
              bn: 'সুলাইমানের সামনে তার জিন, মানুষ ও পাখিদের সেনাবাহিনী সমবেত করা হলো এবং তারা সারিবদ্ধভাবে এগিয়ে চলল। যখন তারা পিপড়ার উপত্যকায় পৌঁছল, একটি পিপড়া বলল, "হে পিপড়ারা! তোমাদের গৃহে প্রবেশ করো যাতে সুলাইমান ও তার সেনাবাহিনী তোমাদের অজান্তে পিষে না ফেলে।" তখন তিনি তার কথায় হেসে মুচকি হাসলেন।',
              ar: 'وَحُشِرَ لِسُلَيْمَانَ جُنُودُهُ مِنَ الْجِنِّ وَالْإِنسِ وَالطَّيْرِ فَهُمْ يُوزَعُونَ حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ فَتَبَسَّمَ ضَاحِكًا مِّن قَوْلِهَا'
            }
          }
        ]
      },
      {
        id: 'sulayman-ch02-p02',
        text: 'This incident reveals the character of Sulayman — a king of unparalleled power who was moved to prayer by the words of an ant. Ibn Kathir notes that the ant recognized Sulayman by name and knew he was just (saying "while they perceive not" — meaning the army would not crush them intentionally). Sulayman\'s dua is a comprehensive prayer: he asked for gratitude, righteous deeds, and to be counted among the righteous. The story also demonstrates that in Islam, even the smallest creatures have communities, communication, and awareness. The Prophet Muhammad (SAW) related that an ant once stung a prophet, who then ordered the entire ant colony to be burned. Allah rebuked him through revelation: "Because one ant stung you, you have burned a community that glorifies Allah!" This hadith reinforces the Quranic lesson from Sulayman\'s story: that all creatures are communities like our own, worshipping Allah in ways we may not perceive, and they deserve mercy and consideration.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 27,
            surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النمل' },
            ayahStart: 19,
            arabicText: 'وَقَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ',
            translation: {
              en: 'And said, "My Lord, enable me to be grateful for Your favour which You have bestowed upon me and upon my parents and to do righteousness of which You approve. And admit me by Your mercy among Your righteous servants."',
              bn: 'এবং বললেন, "হে আমার রব, আমাকে সামর্থ্য দাও যেন আমি তোমার সেই নেয়ামতের শুকরিয়া আদায় করতে পারি যা তুমি আমাকে ও আমার পিতামাতাকে দান করেছ, এবং যেন আমি এমন সৎকর্ম করি যা তুমি পছন্দ করো। তোমার রহমতে আমাকে তোমার সৎকর্মশীল বান্দাদের অন্তর্ভুক্ত করো।"',
              ar: 'وَقَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ'
            }
          },
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '3319',
            narrator: 'Abu Hurairah',
            text: {
              en: 'The Prophet (SAW) said: "An ant once stung a prophet, who ordered the ant colony to be burned. Allah revealed to him: \'Because one ant stung you, you have burned a community that glorifies Allah!\'"',
              bn: 'নবী (সা.) বলেছেন: "একটি পিপড়া একবার একজন নবীকে কামড়ে দিয়েছিল, তিনি পিপড়ার দল পুড়িয়ে দেওয়ার আদেশ দিলেন। আল্লাহ তাঁর কাছে ওহী পাঠালেন: \'একটি পিপড়া তোমাকে কামড়ে দিয়েছে বলে তুমি আল্লাহর তাসবীহকারী একটি সম্প্রদায়কে পুড়িয়ে দিলে!\'"',
              ar: 'قال النبي ﷺ: "قَرَصَتْ نَمْلَةٌ نَبِيًّا مِنَ الأَنْبِيَاءِ فَأَمَرَ بِقَرْيَةِ النَّمْلِ فَأُحْرِقَتْ فَأَوْحَى اللَّهُ إِلَيْهِ أَفِي أَنْ قَرَصَتْكَ نَمْلَةٌ أَهْلَكْتَ أُمَّةً مِنَ الأُمَمِ تُسَبِّحُ"'
            },
            grade: 'sahih'
          }
        ]
      }
    ]
  },
  {
    id: 'sulayman-ch-03',
    title: 'The Queen of Sheba: From Sun Worship to Submission',
    summary: 'When the hoopoe bird brought news of a kingdom in Sheba whose people worshipped the sun, Sulayman sent a letter inviting their queen to Islam. Through a series of miraculous demonstrations — including the instantaneous transport of her throne — Queen Bilqis recognized the truth and submitted to Allah.',
    order: 3,
    paragraphs: [
      {
        id: 'sulayman-ch03-p01',
        text: 'One day, Sulayman inspected the birds in his army and noticed the hoopoe was absent. He said sternly: "Why do I not see the hoopoe — or is he among the absent? I will surely punish him with a severe punishment or slaughter him unless he brings me a clear authorization." The hoopoe soon returned with extraordinary news: "I have encompassed in knowledge that which you have not encompassed, and I have come to you from Sheba with certain news. Indeed, I found a woman ruling them, and she has been given of all things, and she has a great throne. I found her and her people prostrating to the sun instead of Allah, and Satan has made their deeds pleasing to them and averted them from the right way, so they are not guided." Sulayman did not respond with military force but with an invitation to faith. He sent a letter to the queen, beginning with "In the name of Allah, the Most Merciful, the Most Compassionate" — a letter of dignity and da\'wah, not of threat or conquest. The letter said: "Be not haughty with me but come to me in submission."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 27,
            surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النমল' },
            ayahStart: 20,
            ayahEnd: 31,
            arabicText: 'وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ أَمْ كَانَ مِنَ الْغَائِبِينَ ... إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ',
            translation: {
              en: 'And he inspected the birds and said, "Why do I not see the hoopoe — or is he among the absent?" ... "Indeed, it is from Sulayman, and indeed, it reads: \'In the name of Allah, the Most Gracious, the Most Merciful. Be not haughty with me but come to me in submission.\'"',
              bn: 'তিনি পাখিদের পরিদর্শন করলেন এবং বললেন, "আমি হুদহুদকে দেখছি না কেন — নাকি সে অনুপস্থিতদের মধ্যে আছে?" ... "এটি সুলাইমানের পক্ষ থেকে এবং এতে লেখা আছে: \'পরম করুণাময় অতি দয়ালু আল্লাহর নামে। আমার বিরুদ্ধে অহংকার করো না এবং আত্মসমর্পণকারী হয়ে আমার কাছে এসো।\'"',
              ar: 'وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ أَمْ كَانَ مِنَ الْغَائِبِينَ ... إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ'
            }
          }
        ]
      },
      {
        id: 'sulayman-ch03-p02',
        text: 'Queen Bilqis consulted her advisors and wisely decided to first send a gift to test Sulayman. But when the envoys arrived, Sulayman rejected the gift, saying: "Do you provide me with wealth? But what Allah has given me is better than what He has given you. Rather, it is you who rejoice in your gift." He then prepared for her arrival. He asked his assembly: "Which of you can bring me her throne before they come to me in submission?" A powerful jinn (\'Ifrit) offered to bring it before Sulayman could rise from his seat, but one who had knowledge of the Scripture said: "I will bring it to you before your glance returns to you." Instantly, the throne appeared before Sulayman. When Bilqis arrived, her throne — which she had left secured in her palace — was presented to her disguised. She said: "It is as though it were the very one." Then she was asked to enter a palace with a floor of smooth glass. Seeing it, she thought it was a pool of water and uncovered her shins to wade through. Sulayman told her: "Indeed, it is a palace made smooth with glass." At this point, overwhelmed by the miracles and the truth, Bilqis declared: "My Lord, indeed I have wronged myself, and I submit with Sulayman to Allah, Lord of the worlds."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 27,
            surahName: { en: 'An-Naml', bn: 'আন-নামল', ar: 'النমল' },
            ayahStart: 36,
            ayahEnd: 44,
            arabicText: 'فَلَمَّا جَاءَ سُلَيْمَانَ قَالَ أَتُمِدُّونَنِ بِمَالٍ فَمَا آتَانِيَ اللَّهُ خَيْرٌ مِّمَّا آتَاكُم ... قَالَتْ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ',
            translation: {
              en: 'So when [the envoy] came to Sulayman, he said, "Do you provide me with wealth? But what Allah has given me is better than what He has given you..." She said, "My Lord, indeed I have wronged myself, and I submit with Sulayman to Allah, Lord of the worlds."',
              bn: 'যখন [দূত] সুলাইমানের কাছে এলো, তিনি বললেন, "তোমরা কি আমাকে সম্পদ দিয়ে সাহায্য করতে চাও? আল্লাহ আমাকে যা দিয়েছেন তা তোমাদের দেওয়া থেকে উত্তম..." সে বলল, "হে আমার রব, আমি তো নিজের উপর জুলুম করেছিলাম। আমি সুলাইমানের সাথে আল্লাহর কাছে আত্মসমর্পণ করলাম, যিনি বিশ্বজগতের রব।"',
              ar: 'فَلَمَّا جَاءَ سُلَيْمَانَ قَالَ أَتُمِدُّونَنِ بِمَالٍ فَمَا آتَانِيَ اللَّهُ خَيْرٌ مِّمَّا آتَاكُم ... قَالَتْ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'sulayman-ch-04',
    title: 'Sulayman\'s Trial and the Test of the Horses',
    summary: 'Allah tested Sulayman with a body placed on his throne — a trial whose nature scholars have discussed extensively. In another test, Sulayman became so absorbed inspecting his magnificent horses that he missed his afternoon prayer. In repentance, he sacrificed the horses, choosing devotion to Allah over worldly splendour.',
    order: 4,
    paragraphs: [
      {
        id: 'sulayman-ch04-p01',
        text: 'Despite his immense kingdom, Sulayman was not exempt from divine trials. Allah says: "And We certainly tested Sulayman and placed on his throne a body; then he returned [to Allah]." Ibn Kathir and other scholars have offered various interpretations of this trial. Some say it refers to a period when Sulayman\'s authority was temporarily diminished — a jinn sat on his throne while Sulayman was away — as a reminder that all power belongs to Allah alone. Others explain it as a test related to a child born to him who was weak or lifeless. Regardless of the specific interpretation, the Quran emphasizes what matters most: Sulayman\'s response. He turned back to Allah in sincere repentance and supplication: "My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me. Indeed, You are the Bestower." Allah answered his prayer completely: "So We subjected to him the wind blowing by his command, gently, wherever he directed, and the devils — every builder and diver — and others bound together in shackles."',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 34,
            ayahEnd: 38,
            arabicText: 'وَلَقَدْ فَتَنَّا سُلَيْمَانَ وَأَلْقَيْنَا عَلَىٰ كُرْسِيِّهِ جَسَدًا ثُمَّ أَنَابَ ... فَسَخَّرْنَا لَهُ الرِّيحَ تَجْرِي بِأَمْرِهِ رُخَاءً حَيْثُ أَصَابَ وَالشَّيَاطِينَ كُلَّ بَنَّاءٍ وَغَوَّاصٍ وَآخَرِينَ مُقَرَّنِينَ فِي الْأَصْفَادِ',
            translation: {
              en: 'And We certainly tested Sulayman and placed on his throne a body; then he returned [to Allah]... So We subjected to him the wind blowing by his command, gently, wherever he directed, and the devils — every builder and diver — and others bound together in shackles.',
              bn: 'আমি অবশ্যই সুলাইমানকে পরীক্ষা করেছিলাম এবং তার সিংহাসনে একটি দেহ রেখে দিয়েছিলাম; অতঃপর সে [আল্লাহর দিকে] ফিরে এলো... তাই আমি তার অধীনে বাতাসকে করে দিলাম যা তার আদেশে মৃদুভাবে প্রবাহিত হতো যেদিকে সে চাইত, এবং শয়তানদের — প্রত্যেক নির্মাতা ও ডুবুরিকে — এবং অন্যদের শিকলে বাঁধা অবস্থায়।',
              ar: 'وَلَقَدْ فَتَنَّا سُلَيْمَانَ وَأَلْقَيْنَا عَلَىٰ كُرْسِيِّهِ جَسَدًا ثُمَّ أَنَابَ ... فَسَخَّرْنَا لَهُ الرِّيحَ تَجْرِي بِأَمْرِهِ رُخَاءً حَيْثُ أَصَابَ وَالشَّيَاطِينَ كُلَّ بَنَّاءٍ وَغَوَّاصٍ وَآخَرِينَ مُقَرَّنِينَ فِي الْأَصْفَادِ'
            }
          }
        ]
      },
      {
        id: 'sulayman-ch04-p02',
        text: 'Another trial involved Sulayman\'s love for fine horses. Allah describes: "When there were exhibited before him in the afternoon the well-bred, swift steeds, he said, \'Indeed, I gave preference to the love of good things over the remembrance of my Lord until the sun disappeared behind the veil of night. Return them to me.\' And he set about striking their legs and necks." Scholars explain that Sulayman became so engrossed in inspecting the beautiful horses that he missed his Asr (afternoon) prayer. When he realized what had happened, he was so distraught at having allowed a worldly pleasure to distract him from the remembrance of Allah that he ordered the horses brought back and sacrificed them for the sake of Allah. Ibn Kathir notes that this was not an act of anger but of repentance — Sulayman chose to give up what he loved most in order to demonstrate that nothing in creation was more important to him than his Lord. This is a profound lesson for all believers: that the blessings Allah gives us — wealth, beauty, power — can become trials if they distract us from our primary purpose of worshipping Him.',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'quran',
            surah: 38,
            surahName: { en: 'Sad', bn: 'সোয়াদ', ar: 'ص' },
            ayahStart: 31,
            ayahEnd: 33,
            arabicText: 'إِذْ عُرِضَ عَلَيْهِ بِالْعَشِيِّ الصَّافِنَاتُ الْجِيَادُ فَقَالَ إِنِّي أَحْبَبْتُ حُبَّ الْخَيْرِ عَن ذِكْرِ رَبِّي حَتَّىٰ تَوَارَتْ بِالْحِجَابِ رُدُّوهَا عَلَيَّ ۖ فَطَفِقَ مَسْحًا بِالسُّوقِ وَالْأَعْنَاقِ',
            translation: {
              en: 'When there were exhibited before him in the afternoon the well-bred, swift steeds, he said, "Indeed, I gave preference to the love of good things over the remembrance of my Lord until [the sun] disappeared behind the veil [of night]. Return them to me," and he set about striking [their] legs and necks.',
              bn: 'যখন বিকেলে তাঁর সামনে দ্রুতগামী উৎকৃষ্ট ঘোড়া পেশ করা হলো, তিনি বললেন, "আমি তো আমার রবের স্মরণ ছেড়ে ধন-সম্পদের ভালোবাসায় মগ্ন হয়ে পড়েছিলাম যতক্ষণ না সূর্য পর্দার আড়ালে চলে গেছে। সেগুলো আমার কাছে ফিরিয়ে আনো," তারপর তিনি সেগুলোর পা ও ঘাড়ে হাত বুলাতে লাগলেন।',
              ar: 'إِذْ عُرِضَ عَلَيْهِ بِالْعَشِيِّ الصَّافِنَاتُ الْجِيَادُ فَقَالَ إِنِّي أَحْبَبْتُ حُبَّ الْخَيْرِ عَن ذِكْرِ رَبِّي حَتَّىٰ تَوَارَتْ بِالْحِجَابِ رُدُّوهَا عَلَيَّ ۖ فَطَفِقَ مَسْحًا بِالسُّوقِ وَالْأَعْنَاقِ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'sulayman-ch-05',
    title: 'The Death of Sulayman: A Lesson in Human Fragility',
    summary: 'Sulayman died while leaning on his staff, and the jinn continued working without realizing their master had passed away. Only when a termite gnawed through the staff and the body fell did they discover the truth — proving that the jinn have no knowledge of the unseen.',
    order: 5,
    paragraphs: [
      {
        id: 'sulayman-ch05-p01',
        text: 'The death of Sulayman is one of the most remarkable and instructive passages in the Quran. Allah willed that Sulayman\'s death would serve as a definitive proof against the jinn\'s claims to knowledge of the unseen. Sulayman passed away while standing, leaning on his staff, in a position that made him appear alive. The jinn, who had been subjected to hard labour under his command — building structures, diving into the seas, and performing other arduous tasks — continued their work, fearing his authority. They could not tell that their master had already died. This continued for a considerable period until Allah sent a small creature of the earth — a termite (da\'bbat al-ard) — which slowly gnawed through Sulayman\'s wooden staff. When the staff finally broke and the body fell, only then did the jinn realize that Sulayman had long since died. Allah says: "And when We decreed for him death, nothing indicated to the jinn his death except a creature of the earth eating his staff. But when he fell, it became clear to the jinn that if they had known the unseen, they would not have remained in humiliating punishment."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 34,
            surahName: { en: 'Saba', bn: 'সাবা', ar: 'سبأ' },
            ayahStart: 14,
            arabicText: 'فَلَمَّا قَضَيْنَا عَلَيْهِ الْمَوْتَ مَا دَلَّهُمْ عَلَىٰ مَوْتِهِ إِلَّا دَابَّةُ الْأَرْضِ تَأْكُلُ مِنسَأَتَهُ ۖ فَلَمَّا خَرَّ تَبَيَّنَتِ الْجِنُّ أَن لَّوْ كَانُوا يَعْلَمُونَ الْغَيْبَ مَا لَبِثُوا فِي الْعَذَابِ الْمُهِينِ',
            translation: {
              en: 'And when We decreed for him [Sulayman] death, nothing indicated to the jinn his death except a creature of the earth eating his staff. But when he fell, it became clear to the jinn that if they had known the unseen, they would not have remained in humiliating punishment.',
              bn: 'যখন আমি তাঁর [সুলাইমানের] মৃত্যুর ফয়সালা করলাম, তখন জিনদেরকে তাঁর মৃত্যু সম্পর্কে জানাল শুধু মাটির কীট যে তাঁর লাঠি খাচ্ছিল। যখন তিনি পড়ে গেলেন, তখন জিনদের কাছে স্পষ্ট হলো যে, তারা যদি অদৃশ্যের জ্ঞান রাখত, তাহলে অপমানকর শাস্তিতে থাকত না।',
              ar: 'فَلَمَّا قَضَيْنَا عَلَيْهِ الْمَوْتَ مَا دَلَّهُمْ عَلَىٰ مَوْتِهِ إِلَّا دَابَّةُ الْأَرْضِ تَأْكُلُ مِنسَأَتَهُ ۖ فَلَمَّا خَرَّ تَبَيَّنَتِ الْجِنُّ أَن لَّوْ كَانُوا يَعْلَمُونَ الْغَيْبَ مَا لَبِثُوا فِي الْعَذَابِ الْمُهِينِ'
            }
          }
        ]
      },
      {
        id: 'sulayman-ch05-p02',
        text: 'This verse carries one of the most important theological lessons in the Quran: the jinn do NOT possess knowledge of the unseen (\'ilm al-ghayb). Despite their extraordinary abilities — building, diving, transporting thrones across vast distances — they could not even tell whether a man standing before them was alive or dead. This definitively refutes all superstitions about fortune-tellers, soothsayers, and those who claim that jinn can reveal the future or the unseen. Ibn Kathir emphasizes that this incident was decreed by Allah specifically to expose the falsehood of such claims. The tiny termite — among the weakest of Allah\'s creatures — became the instrument through which this great truth was revealed. Sulayman\'s life and death together form a complete lesson: in life, he showed that the greatest power must be accompanied by the greatest gratitude and humility; in death, he showed that all power belongs to Allah alone, and that no created being — however mighty — possesses knowledge beyond what Allah permits. The Prophet Muhammad (SAW) said: "Sulayman, son of Dawud, asked Allah for three things: judgment that was in harmony with His judgment — and he was given that. He asked for a kingdom that no one after him would have — and he was given that. And when he finished building Bayt al-Maqdis (the Temple in Jerusalem), he asked Allah that no one should come to it intending only to pray there except that he would emerge free of sin as the day his mother bore him."',
        phase: 'ibn-kathir',
        references: [
          {
            type: 'hadith',
            collection: 'Sunan an-Nasa\'i',
            hadithNumber: '693',
            narrator: 'Abdullah ibn Amr',
            text: {
              en: 'The Prophet (SAW) said: "When Sulayman son of Dawud finished building Bayt al-Maqdis, he asked Allah for three things: judgment that was in harmony with His judgment, a kingdom that no one after him would have, and that no one should come to this mosque intending only to pray there except that he would emerge free of sin as the day his mother bore him."',
              bn: 'নবী (সা.) বলেছেন: "সুলাইমান ইবন দাউদ যখন বাইতুল মাকদিস নির্মাণ শেষ করলেন, তিনি আল্লাহর কাছে তিনটি বিষয় চাইলেন: তাঁর বিচারের সাথে সঙ্গতিপূর্ণ বিচার, এমন রাজত্ব যা তাঁর পরে কারও হবে না, এবং যে কেউ এই মসজিদে শুধু নামাযের উদ্দেশ্যে আসবে সে তার মায়ের গর্ভ থেকে জন্মের দিনের মতো গুনাহমুক্ত হয়ে বের হবে।"',
              ar: 'قال النبي ﷺ: "لَمَّا فَرَغَ سُلَيْمَانُ بْنُ دَاوُدَ مِنْ بِنَاءِ بَيْتِ الْمَقْدِسِ سَأَلَ اللَّهَ ثَلَاثًا حُكْمًا يُصَادِفُ حُكْمَهُ وَمُلْكًا لَا يَنْبَغِي لِأَحَدٍ مِنْ بَعْدِهِ وَأَنَّهُ لَا يَأْتِي هَذَا الْمَسْجِدَ أَحَدٌ لَا يُرِيدُ إِلَّا الصَّلَاةَ فِيهِ إِلَّا خَرَجَ مِنْ ذُنُوبِهِ كَيَوْمِ وَلَدَتْهُ أُمُّهُ"'
            },
            grade: 'sahih'
          }
        ]
      }
    ]
  }
];

export default chapters;
