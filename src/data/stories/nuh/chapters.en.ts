import type { StoryChapter } from '../../../types/prophet';

const chapters: StoryChapter[] = [
  {
    id: 'nuh-ch-01',
    title: 'The Origins of Idol Worship and Nuh\'s Mission',
    summary: 'After generations of Tawheed, the people began worshipping idols named after righteous men who had passed away. Allah sent Nuh as the first messenger to call them back to the truth.',
    order: 1,
    paragraphs: [
      {
        id: 'nuh-ch01-p01',
        text: 'Prophet Nuh (Noah) (AS) holds a unique position in Islamic history — he was the first messenger (rasul) sent by Allah to humanity. While prophets before him, such as Adam, Shith, and Idris, received revelation and guided those around them, Nuh was the first to be given a specific divine mission to a people who had fallen into open shirk (associating partners with Allah). The Prophet Muhammad (SAW) confirmed this in an authentic hadith about the Day of Judgement, where people will go to Nuh saying: "You are the first messenger Allah sent to the people of the earth."',
        phase: 'hadith',
        references: [
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '4712',
            narrator: 'Abu Hurairah (RA)',
            text: {
              en: 'The people will come to Nuh and say: "You are the first messenger Allah sent to the people of the earth."',
              bn: 'মানুষ নূহের কাছে আসবে এবং বলবে: "আপনি প্রথম রাসূল যাকে আল্লাহ পৃথিবীবাসীর কাছে পাঠিয়েছেন।"',
              ar: 'يأتون نوحاً فيقولون: أنت أول رسول أرسله الله إلى أهل الأرض.'
            },
            grade: 'sahih'
          }
        ]
      },
      {
        id: 'nuh-ch01-p02',
        text: 'Ibn Kathir, citing Ibn Abbas (RA), explains how idol worship first began among humanity. There were five righteous men among the people — Wadd, Suwa\', Yaghuth, Ya\'uq, and Nasr. When these pious individuals died, Shaytan whispered to the living, suggesting they set up statues in their gathering places to remember them. The first generation did not worship these statues, but as time passed and the original intention was forgotten, later generations began to worship them as gods, believing they could intercede with Allah on their behalf. This was the corruption that Nuh was sent to confront.',
        phase: 'hadith',
        references: [
          {
            type: 'hadith',
            collection: 'Sahih al-Bukhari',
            hadithNumber: '4920',
            narrator: 'Ibn Abbas (RA)',
            text: {
              en: 'The names (of the idols) formerly belonged to some pious men of the people of Nuh. When they died, Shaytan inspired their people to set up statues at their gathering places and name them after those men. They did so, but the idols were not worshipped till those people had died and the origin of the statues was forgotten, whereupon they began worshipping them.',
              bn: 'এই মূর্তিগুলোর নাম পূর্বে নূহের জাতির কিছু নেককার লোকের নাম ছিল। তারা মারা গেলে শয়তান তাদের জাতিকে কুমন্ত্রণা দিয়ে তাদের মজলিসের জায়গায় মূর্তি স্থাপন করিয়ে সেই নামে নামকরণ করাল। তারা তা করল, কিন্তু সেই লোকেরা মারা যাওয়ার এবং মূর্তির আসল উদ্দেশ্য ভুলে যাওয়ার পরই মূর্তিপূজা শুরু হলো।',
              ar: 'أسماء رجال صالحين من قوم نوح. فلما هلكوا أوحى الشيطان إلى قومهم أن انصبوا إلى مجالسهم التي كانوا يجلسون فيها أنصاباً وسمّوها بأسمائهم. ففعلوا فلم تُعبد حتى إذا هلك أولئك ونُسخ العلم عُبدت.'
            },
            grade: 'sahih'
          }
        ]
      },
      {
        id: 'nuh-ch01-p03',
        text: 'Allah describes the mission given to Nuh with clarity. In Surah Al-A\'raf, Allah says: "We had certainly sent Nuh to his people, and he said, \'O my people, worship Allah; you have no deity other than Him. Indeed, I fear for you the punishment of a tremendous Day.\'" This was the essential message of every prophet — Tawheed, the worship of Allah alone. Nuh did not bring a new message; he brought the original message that humanity had abandoned. The Quran also honours Nuh by naming an entire Surah after him — Surah Nuh (Chapter 71) — which details his methods of calling his people and their stubborn rejection.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 7,
            surahName: { en: 'Al-A\'raf', bn: 'আল-আরাফ', ar: 'الأعراف' },
            ayahStart: 59,
            arabicText: 'لَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَقَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ',
            translation: {
              en: 'We had certainly sent Nuh to his people, and he said, "O my people, worship Allah; you have no deity other than Him. Indeed, I fear for you the punishment of a tremendous Day."',
              bn: 'আমি নূহকে তাঁর জাতির কাছে পাঠিয়েছিলাম। সে বলল, "হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। আমি তোমাদের জন্য এক মহাদিনের শাস্তির আশঙ্কা করি।"',
              ar: 'لَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَقَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'nuh-ch-02',
    title: '950 Years of Patient Dawah',
    summary: 'Nuh called his people tirelessly — day and night, publicly and privately — for 950 years. Despite every method of persuasion, they covered their ears, wrapped their garments, and persisted in arrogance.',
    order: 2,
    paragraphs: [
      {
        id: 'nuh-ch02-p01',
        text: 'Allah reveals the extraordinary duration of Nuh\'s mission: "And We certainly sent Nuh to his people, and he remained among them a thousand years minus fifty years." This is 950 years of continuous, unrelenting dawah — a period of patience unmatched by any other prophet. Ibn Kathir explains that Nuh used every possible method to reach his people. He approached them individually and in groups, in public gatherings and in private conversations, during the day and at night. Yet the vast majority stubbornly refused.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 29,
            surahName: { en: 'Al-Ankabut', bn: 'আল-আনকাবুত', ar: 'العنكبوت' },
            ayahStart: 14,
            arabicText: 'وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ',
            translation: {
              en: 'And We certainly sent Nuh to his people, and he remained among them a thousand years minus fifty years, and the flood seized them while they were wrongdoers.',
              bn: 'আমি নূহকে তাঁর জাতির কাছে পাঠিয়েছিলাম এবং সে তাদের মধ্যে পঞ্চাশ কম এক হাজার বছর অবস্থান করেছিল। অতঃপর তাদেরকে প্লাবন গ্রাস করল, তারা ছিল জালিম।',
              ar: 'وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ'
            }
          }
        ]
      },
      {
        id: 'nuh-ch02-p02',
        text: 'The entire Surah Nuh (Chapter 71) is Nuh\'s own account of his struggle. He tells Allah: "My Lord, indeed I invited my people night and day. But my invitation increased them not except in flight. And indeed, every time I invited them that You may forgive them, they put their fingers in their ears, covered themselves with their garments, persisted, and were arrogant with great arrogance." This vivid description shows the intensity of their rejection — they literally tried to block out his voice and refused to even look at him.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 71,
            surahName: { en: 'Nuh', bn: 'নূহ', ar: 'نوح' },
            ayahStart: 5,
            ayahEnd: 7,
            arabicText: 'قَالَ رَبِّ إِنِّي دَعَوْتُ قَوْمِي لَيْلًا وَنَهَارًا فَلَمْ يَزِدْهُمْ دُعَائِي إِلَّا فِرَارًا وَإِنِّي كُلَّمَا دَعَوْتُهُمْ لِتَغْفِرَ لَهُمْ جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ وَاسْتَغْشَوْا ثِيَابَهُمْ وَأَصَرُّوا وَاسْتَكْبَرُوا اسْتِكْبَارًا',
            translation: {
              en: 'He said, "My Lord, indeed I invited my people night and day. But my invitation increased them not except in flight. And indeed, every time I invited them that You may forgive them, they put their fingers in their ears, covered themselves with their garments, persisted, and were arrogant with great arrogance."',
              bn: 'সে বলল, "হে আমার রব, আমি আমার জাতিকে দিনরাত আহ্বান করেছি। কিন্তু আমার আহ্বান তাদের পলায়ন ছাড়া আর কিছুই বাড়ায়নি। আর আমি যখনই তাদের ডেকেছি যাতে আপনি তাদের ক্ষমা করেন, তারা কানে আঙুল দিয়েছে, কাপড়ে নিজেদের ঢেকে নিয়েছে, অবাধ্যতায় অটল থেকেছে এবং চরম অহংকার করেছে।"',
              ar: 'قَالَ رَبِّ إِنِّي دَعَوْتُ قَوْمِي لَيْلًا وَنَهَارًا فَلَمْ يَزِدْهُمْ دُعَائِي إِلَّا فِرَارًا وَإِنِّي كُلَّمَا دَعَوْتُهُمْ لِتَغْفِرَ لَهُمْ جَعَلُوا أَصَابِعَهُمْ فِي آذَانِهِمْ وَاسْتَغْشَوْا ثِيَابَهُمْ وَأَصَرُّوا وَاسْتَكْبَرُوا اسْتِكْبَارًا'
            }
          }
        ]
      },
      {
        id: 'nuh-ch02-p03',
        text: 'The leaders of Nuh\'s people raised three main objections. First, they dismissed him as merely a human like themselves: "We do not see you but as a man like ourselves." Second, they looked down on his followers, saying only the lowest and poorest of society believed in him. Third, they accused him of seeking power and wealth. But Nuh responded with the humility of a true prophet: "O my people, I do not ask you for wealth. My reward is only from Allah. And I am not one to drive away those who have believed." Nuh also used the blessings of Allah as motivation, urging them: "Ask forgiveness of your Lord. Indeed, He is ever a Perpetual Forgiver. He will send rain to you in abundance, give you increase in wealth and children, and provide for you gardens and rivers."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 27,
            ayahEnd: 29,
            arabicText: 'وَمَا أَنَا بِطَارِدِ الَّذِينَ آمَنُوا',
            translation: {
              en: '"And I am not one to drive away those who have believed. Indeed, they will meet their Lord, but I see that you are a people behaving ignorantly."',
              bn: '"আর আমি মুমিনদের তাড়িয়ে দেওয়ার মতো নই। তারা অবশ্যই তাদের রবের সাথে সাক্ষাৎ করবে, কিন্তু আমি দেখছি তোমরা এক মূর্খ সম্প্রদায়।"',
              ar: 'وَمَا أَنَا بِطَارِدِ الَّذِينَ آمَنُوا ۚ إِنَّهُم مُّلَاقُو رَبِّهِمْ وَلَٰكِنِّي أَرَاكُمْ قَوْمًا تَجْهَلُونَ'
            }
          },
          {
            type: 'quran',
            surah: 71,
            surahName: { en: 'Nuh', bn: 'নূহ', ar: 'نوح' },
            ayahStart: 10,
            ayahEnd: 12,
            arabicText: 'فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ وَيَجْعَل لَّكُمْ جَنَّاتٍ وَيَجْعَل لَّكُمْ أَنْهَارًا',
            translation: {
              en: 'And said, "Ask forgiveness of your Lord. Indeed, He is ever a Perpetual Forgiver. He will send rain to you in abundance, and give you increase in wealth and children, and provide for you gardens and provide for you rivers."',
              bn: 'এবং বললাম, "তোমাদের রবের কাছে ক্ষমা চাও। নিশ্চয়ই তিনি মহা ক্ষমাশীল। তিনি তোমাদের উপর মুষলধারে বৃষ্টি বর্ষণ করবেন, তোমাদের ধন-সম্পদ ও সন্তান-সন্ততি বাড়িয়ে দেবেন এবং তোমাদের জন্য বাগান ও নদী সৃষ্টি করবেন।"',
              ar: 'فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ وَيَجْعَل لَّكُمْ جَنَّاتٍ وَيَجْعَل لَّكُمْ أَنْهَارًا'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'nuh-ch-03',
    title: 'Building the Ark',
    summary: 'After centuries of rejection, Nuh prayed against his people. Allah commanded him to build a great ark under divine guidance, while his people mocked him relentlessly.',
    order: 3,
    paragraphs: [
      {
        id: 'nuh-ch03-p01',
        text: 'After 950 years of calling his people, Nuh finally turned to Allah in supplication. He said: "My Lord, do not leave upon the earth from among the disbelievers an inhabitant. Indeed, if You leave them, they will mislead Your servants and will not beget except every sinful one who is ungrateful." This was not a prayer of impatience or vengeance — it was a prayer of a prophet who had exhausted every means of guidance over nearly a millennium, and who understood through divine knowledge that no more believers would emerge from this people. Allah confirmed this revelation to Nuh: "No one will believe from your people except those who have already believed."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 71,
            surahName: { en: 'Nuh', bn: 'নূহ', ar: 'نوح' },
            ayahStart: 26,
            ayahEnd: 27,
            arabicText: 'وَقَالَ نُوحٌ رَّبِّ لَا تَذَرْ عَلَى الْأَرْضِ مِنَ الْكَافِرِينَ دَيَّارًا إِنَّكَ إِن تَذَرْهُمْ يُضِلُّوا عِبَادَكَ وَلَا يَلِدُوا إِلَّا فَاجِرًا كَفَّارًا',
            translation: {
              en: 'And Nuh said, "My Lord, do not leave upon the earth from among the disbelievers an inhabitant. Indeed, if You leave them, they will mislead Your servants and will not beget except every sinful one who is ungrateful."',
              bn: 'নূহ বলল, "হে আমার রব, পৃথিবীতে কাফিরদের কাউকে অবশিষ্ট রাখবেন না। আপনি যদি তাদের রেখে দেন, তারা আপনার বান্দাদের পথভ্রষ্ট করবে এবং কেবল পাপাচারী ও কাফির সন্তানই জন্ম দেবে।"',
              ar: 'وَقَالَ نُوحٌ رَّبِّ لَا تَذَرْ عَلَى الْأَرْضِ مِنَ الْكَافِرِينَ دَيَّارًا إِنَّكَ إِن تَذَرْهُمْ يُضِلُّوا عِبَادَكَ وَلَا يَلِدُوا إِلَّا فَاجِرًا كَفَّارًا'
            }
          },
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 36,
            arabicText: 'وَأُوحِيَ إِلَىٰ نُوحٍ أَنَّهُ لَن يُؤْمِنَ مِن قَوْمِكَ إِلَّا مَن قَدْ آمَنَ',
            translation: {
              en: 'And it was revealed to Nuh that, "No one will believe from your people except those who have already believed, so do not be distressed by what they have been doing."',
              bn: 'এবং নূহের প্রতি ওহী করা হলো, "তোমার জাতির যারা ইতিমধ্যে ঈমান এনেছে তারা ছাড়া আর কেউ ঈমান আনবে না। সুতরাং তারা যা করছে তাতে দুঃখিত হয়ো না।"',
              ar: 'وَأُوحِيَ إِلَىٰ نُوحٍ أَنَّهُ لَن يُؤْمِنَ مِن قَوْمِكَ إِلَّا مَن قَدْ آمَنَ فَلَا تَبْتَئِسْ بِمَا كَانُوا يَفْعَلُونَ'
            }
          }
        ]
      },
      {
        id: 'nuh-ch03-p02',
        text: 'Allah then commanded Nuh to build a great ark: "And construct the ship under Our eyes and Our inspiration, and do not address Me concerning those who have wronged; indeed, they are to be drowned." This was no ordinary ship — it was built under direct divine guidance and inspiration. Ibn Kathir narrates that Nuh planted trees and waited for them to grow, then cut them to build the ark. The construction took many years. Whenever the chiefs of his people passed by, they laughed at him and mocked him for building a ship on dry land, far from any ocean. They said: "You have become a carpenter now instead of a prophet!" But Nuh responded firmly: "If you ridicule us, then we will ridicule you just as you ridicule — and you are going to know."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 37,
            ayahEnd: 38,
            arabicText: 'وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا وَلَا تُخَاطِبْنِي فِي الَّذِينَ ظَلَمُوا ۚ إِنَّهُم مُّغْرَقُونَ وَيَصْنَعُ الْفُلْكَ وَكُلَّمَا مَرَّ عَلَيْهِ مَلَأٌ مِّن قَوْمِهِ سَخِرُوا مِنْهُ',
            translation: {
              en: '"And construct the ship under Our eyes and Our inspiration, and do not address Me concerning those who have wronged; indeed, they are to be drowned." And he constructed the ship, and whenever an assembly of the eminent of his people passed by him, they ridiculed him.',
              bn: '"আর আমার চোখের সামনে ও আমার ওহী অনুযায়ী নৌকা তৈরি করো। আর যারা জুলুম করেছে তাদের বিষয়ে আমাকে বলো না; তারা অবশ্যই ডুবে যাবে।" আর সে নৌকা তৈরি করতে লাগল। যখনই তার জাতির নেতারা তার পাশ দিয়ে যেত, তারা তাকে নিয়ে ঠাট্টা করত।',
              ar: 'وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا وَلَا تُخَاطِبْنِي فِي الَّذِينَ ظَلَمُوا ۚ إِنَّهُم مُّغْرَقُونَ وَيَصْنَعُ الْفُلْكَ وَكُلَّمَا مَرَّ عَلَيْهِ مَلَأٌ مِّن قَوْمِهِ سَخِرُوا مِنْهُ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'nuh-ch-04',
    title: 'The Great Flood',
    summary: 'When Allah\'s command came, water erupted from the earth and poured from the sky. Nuh boarded the ark with the believers and pairs of every creature. His own son refused to join and was among those drowned.',
    order: 4,
    paragraphs: [
      {
        id: 'nuh-ch04-p01',
        text: 'The sign for the flood\'s beginning was the overflowing of the tannur (oven). When this sign appeared, Nuh knew the time had come. Allah commanded: "Load upon the ship of each creature two mates and your family — except those about whom the word has preceded — and include whoever has believed." But tragically, very few had believed with him after nearly a millennium of preaching. The Quran states: "But none had believed with him, except a few." Ibn Kathir estimates the number of believers to have been between 10 and 80 people — a heartbreakingly small number after 950 years of effort.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 40,
            arabicText: 'حَتَّىٰ إِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ قُلْنَا احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ وَأَهْلَكَ إِلَّا مَن سَبَقَ عَلَيْهِ الْقَوْلُ وَمَنْ آمَنَ ۚ وَمَا آمَنَ مَعَهُ إِلَّا قَلِيلٌ',
            translation: {
              en: 'Until when Our command came and the oven overflowed, We said, "Load upon the ship of each creature two mates and your family, except those about whom the word has preceded, and include whoever has believed." But none had believed with him, except a few.',
              bn: 'অবশেষে যখন আমার আদেশ এলো এবং চুলা উথলে উঠল, আমি বললাম, "নৌকায় প্রতিটি প্রাণীর এক জোড়া এবং তোমার পরিবার — যাদের বিরুদ্ধে পূর্বে সিদ্ধান্ত হয়েছে তারা ব্যতীত — এবং যারা ঈমান এনেছে তাদের তুলে নাও।" কিন্তু অল্প কয়েকজন ছাড়া তাঁর সাথে কেউ ঈমান আনেনি।',
              ar: 'حَتَّىٰ إِذَا جَاءَ أَمْرُنَا وَفَارَ التَّنُّورُ قُلْنَا احْمِلْ فِيهَا مِن كُلٍّ زَوْجَيْنِ اثْنَيْنِ وَأَهْلَكَ إِلَّا مَن سَبَقَ عَلَيْهِ الْقَوْلُ وَمَنْ آمَنَ ۚ وَمَا آمَنَ مَعَهُ إِلَّا قَلِيلٌ'
            }
          }
        ]
      },
      {
        id: 'nuh-ch04-p02',
        text: 'The ark sailed through waves like mountains. In the midst of this terrifying scene came one of the most heartbreaking moments in the Quran. Nuh saw his son standing apart, refusing to board. He cried out to him: "O my son, come aboard with us and be not with the disbelievers!" But his son replied with the arrogance of his people: "I will take refuge on a mountain to protect me from the water." Nuh pleaded: "There is no protector today from the decree of Allah, except for whom He gives mercy." And a wave came between them, and his son was among the drowned. This moment teaches that faith is a personal choice — even the son of a prophet cannot be saved by lineage alone.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 42,
            ayahEnd: 43,
            arabicText: 'وَنَادَىٰ نُوحٌ ابْنَهُ وَكَانَ فِي مَعْزِلٍ يَا بُنَيَّ ارْكَب مَّعَنَا وَلَا تَكُن مَّعَ الْكَافِرِينَ قَالَ سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ ۚ قَالَ لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللَّهِ إِلَّا مَن رَّحِمَ ۚ وَحَالَ بَيْنَهُمَا الْمَوْجُ فَكَانَ مِنَ الْمُغْرَقِينَ',
            translation: {
              en: 'And Nuh called to his son who was apart [from them], "O my son, come aboard with us and be not with the disbelievers." [But] he said, "I will take refuge on a mountain to protect me from the water." [Nuh] said, "There is no protector today from the decree of Allah, except for whom He gives mercy." And the waves came between them, and he was among the drowned.',
              bn: 'নূহ তাঁর পুত্রকে ডাকলেন — সে আলাদা দাঁড়িয়ে ছিল — "হে আমার পুত্র, আমাদের সাথে নৌকায় উঠো এবং কাফিরদের সাথে থেকো না।" সে বলল, "আমি একটি পাহাড়ে আশ্রয় নেব, সেটা আমাকে পানি থেকে বাঁচাবে।" নূহ বললেন, "আজ আল্লাহর হুকুম থেকে কোনো রক্ষাকারী নেই, তবে যাকে তিনি দয়া করেন।" এবং তাদের মাঝে ঢেউ এসে গেল, আর সে ডুবে যাওয়াদের অন্তর্ভুক্ত হলো।',
              ar: 'وَنَادَىٰ نُوحٌ ابْنَهُ وَكَانَ فِي مَعْزِلٍ يَا بُنَيَّ ارْكَب مَّعَنَا وَلَا تَكُن مَّعَ الْكَافِرِينَ قَالَ سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ ۚ قَالَ لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللَّهِ إِلَّا مَن رَّحِمَ ۚ وَحَالَ بَيْنَهُمَا الْمَوْجُ فَكَانَ مِنَ الْمُغْرَقِينَ'
            }
          }
        ]
      },
      {
        id: 'nuh-ch04-p03',
        text: 'In the depths of his grief, Nuh called upon Allah: "My Lord, indeed my son is of my family; and indeed, Your promise is true." But Allah responded with a profound lesson: "O Nuh, indeed he is not of your family; indeed, he is one whose work was other than righteous, so ask Me not for that about which you have no knowledge." This divine response established a fundamental principle in Islam — that true kinship with the prophets is through faith and righteous deeds, not through blood ties. Nuh immediately submitted: "My Lord, I seek refuge in You from asking that of which I have no knowledge. And unless You forgive me and have mercy upon me, I will be among the losers."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 45,
            ayahEnd: 47,
            arabicText: 'وَنَادَىٰ نُوحٌ رَّبَّهُ فَقَالَ رَبِّ إِنَّ ابْنِي مِنْ أَهْلِي وَإِنَّ وَعْدَكَ الْحَقُّ وَأَنتَ أَحْكَمُ الْحَاكِمِينَ قَالَ يَا نُوحُ إِنَّهُ لَيْسَ مِنْ أَهْلِكَ ۖ إِنَّهُ عَمَلٌ غَيْرُ صَالِحٍ',
            translation: {
              en: 'And Nuh called to his Lord and said, "My Lord, indeed my son is of my family; and indeed, Your promise is true; and You are the most just of judges!" He said, "O Nuh, indeed he is not of your family; indeed, he is one whose work was other than righteous, so ask Me not for that about which you have no knowledge."',
              bn: 'নূহ তাঁর রবকে ডেকে বলল, "হে আমার রব, আমার পুত্র তো আমার পরিবারের; আর আপনার প্রতিশ্রুতি সত্য; আর আপনি বিচারকদের মধ্যে শ্রেষ্ঠ বিচারক!" তিনি বললেন, "হে নূহ, সে তোমার পরিবারের নয়; তার কাজ ছিল অসৎ। সুতরাং আমাকে এমন বিষয়ে জিজ্ঞাসা করো না যে বিষয়ে তোমার জ্ঞান নেই।"',
              ar: 'وَنَادَىٰ نُوحٌ رَّبَّهُ فَقَالَ رَبِّ إِنَّ ابْنِي مِنْ أَهْلِي وَإِنَّ وَعْدَكَ الْحَقُّ وَأَنتَ أَحْكَمُ الْحَاكِمِينَ قَالَ يَا نُوحُ إِنَّهُ لَيْسَ مِنْ أَهْلِكَ ۖ إِنَّهُ عَمَلٌ غَيْرُ صَالِحٍ'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'nuh-ch-05',
    title: 'A New Beginning on Mount Judi',
    summary: 'The waters receded, the ark settled on Mount Judi, and Nuh descended with the believers to begin a new chapter for humanity. Allah\'s covenant with Nuh became a sign for all generations.',
    order: 5,
    paragraphs: [
      {
        id: 'nuh-ch05-p01',
        text: 'When Allah\'s decree was fulfilled, the command came for the earth to swallow its water and for the sky to cease its rain. The waters began to recede and the ark came to rest upon Mount Judi. Allah declared: "And it was said, \'O earth, swallow your water, and O sky, withhold [your rain].\' And the water subsided, and the matter was accomplished, and the ship came to rest on the [mountain of] Judi. And it was said, \'Away with the wrongdoing people.\'" This verse is considered one of the most eloquent and majestic in the entire Quran — a single verse that captures the ending of a divine punishment, the settling of the ark, and the judgement upon the wrongdoers.',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 44,
            arabicText: 'وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ وَيَا سَمَاءُ أَقْلِعِي وَغِيضَ الْمَاءُ وَقُضِيَ الْأَمْرُ وَاسْتَوَتْ عَلَى الْجُودِيِّ ۖ وَقِيلَ بُعْدًا لِّلْقَوْمِ الظَّالِمِينَ',
            translation: {
              en: 'And it was said, "O earth, swallow your water, and O sky, withhold [your rain]." And the water subsided, and the matter was accomplished, and the ship came to rest on [Mount] Judi. And it was said, "Away with the wrongdoing people."',
              bn: 'এবং বলা হলো, "হে পৃথিবী, তোমার পানি গিলে ফেলো, এবং হে আকাশ, থামো।" আর পানি কমে গেল, বিষয়টি সম্পন্ন হলো, এবং নৌকা জুদী পর্বতে স্থির হলো। আর বলা হলো, "ধ্বংস হোক জালিম জাতি।"',
              ar: 'وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ وَيَا سَمَاءُ أَقْلِعِي وَغِيضَ الْمَاءُ وَقُضِيَ الْأَمْرُ وَاسْتَوَتْ عَلَى الْجُودِيِّ ۖ وَقِيلَ بُعْدًا لِّلْقَوْمِ الظَّالِمِينَ'
            }
          }
        ]
      },
      {
        id: 'nuh-ch05-p02',
        text: 'Nuh was then commanded to descend from the ark with peace and blessings: "It was said, \'O Nuh, disembark in security from Us and blessings upon you and upon nations [descending] from those with you.\'" This was not merely the end of a catastrophe — it was the beginning of a new human civilisation. All the people on earth today are descended from those who were on the ark with Nuh. The Prophet Muhammad (SAW) said that Nuh is called "the second father of humanity" because all subsequent generations came from his progeny. Allah made Nuh\'s story and his ark a lasting sign for humanity, as He says in Surah Al-Qamar: "And We left it as a sign, so is there any who will remember?"',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 11,
            surahName: { en: 'Hud', bn: 'হুদ', ar: 'هود' },
            ayahStart: 48,
            arabicText: 'قِيلَ يَا نُوحُ اهْبِطْ بِسَلَامٍ مِّنَّا وَبَرَكَاتٍ عَلَيْكَ وَعَلَىٰ أُمَمٍ مِّمَّن مَّعَكَ',
            translation: {
              en: 'It was said, "O Nuh, disembark in security from Us and blessings upon you and upon nations [descending] from those with you."',
              bn: 'বলা হলো, "হে নূহ, আমার পক্ষ থেকে শান্তি ও বরকত নিয়ে নেমে যাও — তোমার উপর এবং তোমার সাথে যারা আছে তাদের থেকে উদ্ভূত জাতিসমূহের উপর।"',
              ar: 'قِيلَ يَا نُوحُ اهْبِطْ بِسَلَامٍ مِّنَّا وَبَرَكَاتٍ عَلَيْكَ وَعَلَىٰ أُمَمٍ مِّمَّن مَّعَكَ'
            }
          },
          {
            type: 'quran',
            surah: 54,
            surahName: { en: 'Al-Qamar', bn: 'আল-কমার', ar: 'القمر' },
            ayahStart: 15,
            arabicText: 'وَلَقَد تَّرَكْنَاهَا آيَةً فَهَلْ مِن مُّدَّكِرٍ',
            translation: {
              en: 'And We left it as a sign, so is there any who will remember?',
              bn: 'আর আমি এটিকে নিদর্শন হিসেবে রেখে দিয়েছি। কিন্তু কে আছে যে উপদেশ গ্রহণ করবে?',
              ar: 'وَلَقَد تَّرَكْنَاهَا آيَةً فَهَلْ مِن مُّدَّكِرٍ'
            }
          }
        ]
      },
      {
        id: 'nuh-ch05-p03',
        text: 'The story of Nuh carries timeless lessons for every generation. First, it demonstrates the ultimate power of patience in the path of Allah — Nuh preached for 950 years without losing hope. Second, it teaches that truth is not determined by majority — even after centuries, only a handful believed. Third, it establishes that blood ties cannot save a person from the consequences of disbelief — Nuh\'s own son perished. Fourth, it shows that Allah\'s mercy encompasses those who believe and act righteously, regardless of their social status. And finally, it reminds us that Allah\'s word is always fulfilled — His promise of punishment to the arrogant and His promise of salvation to the faithful. Allah honoured Nuh with the title of "a grateful servant" (\'abdan shakura), as mentioned in Surah Al-Isra: "Indeed, he was a grateful servant."',
        phase: 'quran',
        references: [
          {
            type: 'quran',
            surah: 17,
            surahName: { en: 'Al-Isra', bn: 'আল-ইসরা', ar: 'الإسراء' },
            ayahStart: 3,
            arabicText: 'ذُرِّيَّةَ مَنْ حَمَلْنَا مَعَ نُوحٍ ۚ إِنَّهُ كَانَ عَبْدًا شَكُورًا',
            translation: {
              en: 'O descendants of those We carried [in the ship] with Nuh. Indeed, he was a grateful servant.',
              bn: 'হে তাদের বংশধর যাদেরকে আমি নূহের সাথে [নৌকায়] বহন করেছিলাম। নিশ্চয়ই তিনি ছিলেন কৃতজ্ঞ বান্দা।',
              ar: 'ذُرِّيَّةَ مَنْ حَمَلْنَا مَعَ نُوحٍ ۚ إِنَّهُ كَانَ عَبْدًا شَكُورًا'
            }
          }
        ]
      }
    ]
  }
];

export default chapters;
