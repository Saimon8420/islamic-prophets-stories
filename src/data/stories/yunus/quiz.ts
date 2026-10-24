import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'yunus-q1',
    question: {
      en: 'To how many people did Allah send Yunus (AS)?',
      bn: 'আল্লাহ ইউনুস (আ.)-কে কত মানুষের কাছে পাঠিয়েছিলেন?',
      ar: 'إلى كم من الناس أرسل الله يونس عليه السلام؟',
    },
    options: [
      { en: 'About one thousand', bn: 'প্রায় এক হাজার', ar: 'نحو ألف' },
      { en: 'A hundred thousand or more', bn: 'এক লাখ বা তার চেয়ে বেশি', ar: 'مئة ألف أو يزيدون' },
      { en: 'Exactly ten thousand', bn: 'ঠিক দশ হাজার', ar: 'عشرة آلاف بالضبط' },
      { en: 'Only his own family', bn: 'শুধু নিজের পরিবার', ar: 'أهله فقط' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And We sent him to [his people of] a hundred thousand or more." [Quran 37:147]',
      bn: '"আমি তাকে এক লক্ষ বা তার চেয়ে বেশি লোকের কাছে পাঠিয়েছিলাম।" [কুরআন ৩৭:১৪৭]',
      ar: '"وَأَرْسَلْنَاهُ إِلَىٰ مِائَةِ أَلْفٍ أَوْ يَزِيدُونَ" [الصافات: 147]',
    },
  },
  {
    id: 'yunus-q2',
    question: {
      en: 'What happened to Yunus (AS) after he lost the drawing of lots on the ship?',
      bn: 'জাহাজে লটারিতে হেরে যাওয়ার পর ইউনুস (আ.)-এর কী হয়েছিল?',
      ar: 'ماذا حدث ليونس عليه السلام بعد أن خسر القرعة في السفينة؟',
    },
    options: [
      { en: 'He swam back to his city', bn: 'সাঁতরে নিজের শহরে ফিরে গেলেন', ar: 'سبح عائداً إلى مدينته' },
      { en: 'He was rescued by another ship', bn: 'আরেকটি জাহাজ তাঁকে উদ্ধার করল', ar: 'أنقذته سفينة أخرى' },
      { en: 'He landed on an island', bn: 'একটি দ্বীপে গিয়ে পৌঁছালেন', ar: 'وصل إلى جزيرة' },
      { en: 'The fish swallowed him', bn: 'মাছ তাঁকে গিলে ফেলল', ar: 'التقمه الحوت' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"He drew lots and was among the losers. Then the fish swallowed him, while he was blameworthy." [Quran 37:141-142]',
      bn: '"লটারিতে তিনি পরাজিত হলেন। অতঃপর মাছ তাঁকে গিলে ফেলল, আর তিনি ছিলেন নিন্দিত।" [কুরআন ৩৭:১৪১-১৪২]',
      ar: '"فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ" [الصافات: 141-142]',
    },
  },
  {
    id: 'yunus-q3',
    question: {
      en: 'What did Yunus (AS) call out in the darknesses?',
      bn: 'অন্ধকারের মধ্যে ইউনুস (আ.) কী বলে আল্লাহকে ডেকেছিলেন?',
      ar: 'بماذا نادى يونس عليه السلام في الظلمات؟',
    },
    options: [
      { en: '"There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."', bn: '"তুমি ছাড়া কোনো ইলাহ নেই; তুমি পবিত্র মহান। আমি তো জালিমদের অন্তর্ভুক্ত ছিলাম।"', ar: '"لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ"' },
      { en: '"My Lord, grant me a kingdom."', bn: '"হে আমার রব, আমাকে রাজত্ব দাও।"', ar: '"ربّ هب لي ملكاً"' },
      { en: '"My Lord, destroy my people."', bn: '"হে আমার রব, আমার জাতিকে ধ্বংস করো।"', ar: '"ربّ أهلك قومي"' },
      { en: '"My Lord, give me a son."', bn: '"হে আমার রব, আমাকে একটি পুত্র দাও।"', ar: '"ربّ هب لي ولداً"' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And he called out within the darknesses, \'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.\'" [Quran 21:87]',
      bn: '"তিনি অন্ধকার থেকে আহ্বান করলেন: \'তুমি ছাড়া কোনো ইলাহ নেই; তুমি পবিত্র মহান। আমি তো জালিমদের অন্তর্ভুক্ত ছিলাম।\'" [কুরআন ২১:৮৭]',
      ar: '"فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ" [الأنبياء: 87]',
    },
  },
  {
    id: 'yunus-q4',
    question: {
      en: 'What did Allah cause to grow over Yunus (AS) when he was cast onto the shore?',
      bn: 'ইউনুস (আ.)-কে তীরে ফেলার পর আল্লাহ তাঁর উপর কী গজিয়ে দিয়েছিলেন?',
      ar: 'ماذا أنبت الله على يونس عليه السلام حين نُبذ بالعراء؟',
    },
    options: [
      { en: 'A date palm', bn: 'খেজুর গাছ', ar: 'نخلة' },
      { en: 'A fig tree', bn: 'ডুমুর গাছ', ar: 'شجرة تين' },
      { en: 'A gourd plant', bn: 'লাউ গাছ', ar: 'شجرة من يقطين' },
      { en: 'An olive tree', bn: 'জলপাই গাছ', ar: 'شجرة زيتون' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"But We threw him onto the open shore while he was ill. And We caused to grow over him a gourd tree." [Quran 37:145-146]',
      bn: '"আমি তাঁকে অসুস্থ অবস্থায় খোলা তীরে নিক্ষেপ করলাম। আর তাঁর উপর আমি একটি লাউ গাছ উদ্গত করলাম।" [কুরআন ৩৭:১৪৫-১৪৬]',
      ar: '"فَنَبَذْنَاهُ بِالْعَرَاءِ وَهُوَ سَقِيمٌ وَأَنبَتْنَا عَلَيْهِ شَجَرَةً مِّن يَقْطِينٍ" [الصافات: 145-146]',
    },
  },
  {
    id: 'yunus-q5',
    question: {
      en: 'According to the Quran, what would have happened if Yunus (AS) had not been of those who glorify Allah?',
      bn: 'কুরআন অনুযায়ী, ইউনুস (আ.) যদি তাসবীহকারীদের অন্তর্ভুক্ত না হতেন তাহলে কী হতো?',
      ar: 'بحسب القرآن، ماذا كان سيحدث لو لم يكن يونس عليه السلام من المسبّحين؟',
    },
    options: [
      { en: 'He would have become a king', bn: 'তিনি রাজা হয়ে যেতেন', ar: 'لصار ملكاً' },
      { en: 'He would have remained in its belly until the Day of Resurrection', bn: 'পুনরুত্থান দিবস পর্যন্ত মাছের পেটেই থেকে যেতেন', ar: 'للبث في بطنه إلى يوم يُبعثون' },
      { en: 'He would have reached another land', bn: 'অন্য কোনো দেশে পৌঁছে যেতেন', ar: 'لوصل إلى أرض أخرى' },
      { en: 'Nothing would have been different', bn: 'কিছুই আলাদা হতো না', ar: 'لم يتغير شيء' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And had he not been of those who glorify Allah, he would have remained inside its belly until the Day they are resurrected." [Quran 37:143-144]',
      bn: '"তিনি যদি তাসবীহকারীদের অন্তর্ভুক্ত না হতেন, তাহলে পুনরুত্থান দিবস পর্যন্ত তার পেটেই থাকতেন।" [কুরআন ৩৭:১৪৩-১৪৪]',
      ar: '"فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ" [الصافات: 143-144]',
    },
  },
  {
    id: 'yunus-q6',
    question: {
      en: 'What makes the people of Yunus (AS) special in Surah Yunus 10:98?',
      bn: 'সূরা ইউনুস ১০:৯৮ অনুযায়ী ইউনুস (আ.)-এর জাতি কেন বিশেষ?',
      ar: 'ما الذي يميّز قوم يونس عليه السلام في سورة يونس الآية 98؟',
    },
    options: [
      { en: 'They built the biggest city on earth', bn: 'তারা পৃথিবীর সবচেয়ে বড় শহর বানিয়েছিল', ar: 'بنوا أكبر مدينة في الأرض' },
      { en: 'They never worshipped idols', bn: 'তারা কখনো মূর্তিপূজা করেনি', ar: 'لم يعبدوا الأصنام قط' },
      { en: 'They followed Yunus onto the ship', bn: 'তারা ইউনুসের সাথে জাহাজে উঠেছিল', ar: 'تبعوا يونس إلى السفينة' },
      { en: 'Their faith benefited them and the punishment was removed', bn: 'তাদের ঈমান কাজে এসেছিল এবং শাস্তি সরিয়ে নেওয়া হয়েছিল', ar: 'نفعهم إيمانهم فكُشف عنهم العذاب' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"Then has there not been a [single] city that believed so its faith benefited it except the people of Yunus? When they believed, We removed from them the punishment of disgrace in worldly life and gave them enjoyment for a time." [Quran 10:98]',
      bn: '"ইউনুসের সম্প্রদায় ছাড়া এমন কোনো জনপদ কি ছিল যে ঈমান এনেছে এবং তার ঈমান তার উপকারে এসেছে? যখন তারা ঈমান আনল, আমি তাদের থেকে দুনিয়ার জীবনে অপমানকর শাস্তি দূর করে দিলাম এবং তাদের কিছুকাল ভোগ করতে দিলাম।" [কুরআন ১০:৯৮]',
      ar: '"فَلَوْلَا كَانَتْ قَرْيَةٌ آمَنَتْ فَنَفَعَهَا إِيمَانُهَا إِلَّا قَوْمَ يُونُسَ لَمَّا آمَنُوا كَشَفْنَا عَنْهُمْ عَذَابَ الْخِزْيِ فِي الْحَيَاةِ الدُّنْيَا وَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ" [يونس: 98]',
    },
  },
  {
    id: 'yunus-q7',
    question: {
      en: 'What did the Prophet ﷺ say it is not befitting for a servant to say?',
      bn: 'নবী ﷺ কোন কথা বলা কোনো বান্দার জন্য উচিত নয় বলেছেন?',
      ar: 'ما الذي قال النبي ﷺ إنه لا ينبغي لعبد أن يقوله؟',
    },
    options: [
      { en: '"I am better than Yunus ibn Matta."', bn: '"আমি ইউনুস ইবন মাত্তার চেয়ে উত্তম।"', ar: '"أنا خير من يونس بن متى"' },
      { en: '"I love Yunus ibn Matta."', bn: '"আমি ইউনুস ইবন মাত্তাকে ভালোবাসি।"', ar: '"أنا أحب يونس بن متى"' },
      { en: '"Yunus was a prophet."', bn: '"ইউনুস একজন নবী ছিলেন।"', ar: '"كان يونس نبياً"' },
      { en: '"I pray like Yunus."', bn: '"আমি ইউনুসের মতো দোয়া করি।"', ar: '"أنا أدعو كما دعا يونس"' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'The Prophet ﷺ said: "It is not befitting for a servant to say: \'I am better than Yunus ibn Matta.\'" [Sahih al-Bukhari 3413]',
      bn: 'নবী ﷺ বলেছেন: "কোনো বান্দার জন্য এটা উচিত নয় যে সে বলবে: \'আমি ইউনুস ইবন মাত্তার চেয়ে উত্তম।\'" [সহীহ বুখারী ৩৪১৩]',
      ar: 'قال النبي ﷺ: "مَا يَنْبَغِي لِعَبْدٍ أَنْ يَقُولَ أَنَا خَيْرٌ مِنْ يُونُسَ بْنِ مَتَّى" [صحيح البخاري 3413]',
    },
  },
];

export default quiz;
