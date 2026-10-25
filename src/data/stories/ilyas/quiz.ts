import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'ilyas-q1',
    question: {
      en: 'What does the Quran say about Ilyas (AS) in Surah As-Saffat?',
      bn: 'সূরা আস-সাফফাতে কুরআন ইলিয়াস (আ.) সম্পর্কে কী বলে?',
      ar: 'ماذا يقول القرآن عن إلياس عليه السلام في سورة الصافات؟',
    },
    options: [
      { en: 'He was a king of Egypt', bn: 'তিনি মিসরের রাজা ছিলেন', ar: 'كان ملكاً على مصر' },
      { en: 'He was among the messengers', bn: 'তিনি রাসূলদের একজন ছিলেন', ar: 'كان من المرسلين' },
      { en: 'He was a builder of ships', bn: 'তিনি জাহাজ নির্মাতা ছিলেন', ar: 'كان صانعاً للسفن' },
      { en: 'He was swallowed by a fish', bn: 'তাঁকে মাছ গিলে ফেলেছিল', ar: 'التقمه الحوت' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And indeed, Ilyas was among the messengers." [Quran 37:123]',
      bn: '"আর নিশ্চয়ই ইলিয়াস ছিলেন রাসূলদের একজন।" [কুরআন ৩৭:১২৩]',
      ar: '"وَإِنَّ إِلْيَاسَ لَمِنَ الْمُرْسَلِينَ" [الصافات: 123]',
    },
  },
  {
    id: 'ilyas-q2',
    question: {
      en: 'What was the name of the idol that the people of Ilyas (AS) called upon?',
      bn: 'ইলিয়াস (আ.)-এর জাতি যে মূর্তিকে ডাকত তার নাম কী ছিল?',
      ar: 'ما اسم الصنم الذي كان قوم إلياس عليه السلام يدعونه؟',
    },
    options: [
      { en: 'Wadd', bn: 'ওয়াদ্দ', ar: 'ودّ' },
      { en: 'Hubal', bn: 'হুবাল', ar: 'هُبَل' },
      { en: 'Al-Lat', bn: 'লাত', ar: 'اللات' },
      { en: 'Ba\'l', bn: 'বা\'ল', ar: 'بعل' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"Do you call upon Ba\'l and leave the Best of creators?" [Quran 37:125]',
      bn: '"তোমরা কি বা\'লকে ডাকবে এবং সর্বশ্রেষ্ঠ স্রষ্টাকে ত্যাগ করবে?" [কুরআন ৩৭:১২৫]',
      ar: '"أَتَدْعُونَ بَعْلًا وَتَذَرُونَ أَحْسَنَ الْخَالِقِينَ" [الصافات: 125]',
    },
  },
  {
    id: 'ilyas-q3',
    question: {
      en: 'What did Ilyas (AS) call Allah when he spoke to his people?',
      bn: 'জাতির সাথে কথা বলার সময় ইলিয়াস (আ.) আল্লাহকে কী বলে উল্লেখ করেছিলেন?',
      ar: 'بماذا وصف إلياس عليه السلام الله حين خاطب قومه؟',
    },
    options: [
      { en: 'The Best of creators', bn: 'সর্বশ্রেষ্ঠ স্রষ্টা', ar: 'أحسن الخالقين' },
      { en: 'The Lord of the ship', bn: 'জাহাজের রব', ar: 'ربّ السفينة' },
      { en: 'The King of the mountains', bn: 'পাহাড়ের রাজা', ar: 'ملك الجبال' },
      { en: 'The God of the sun', bn: 'সূর্যের দেবতা', ar: 'إله الشمس' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"Do you call upon Ba\'l and leave the Best of creators — Allah, your Lord and the Lord of your first forefathers?" [Quran 37:125-126]',
      bn: '"তোমরা কি বা\'লকে ডাকবে এবং সর্বশ্রেষ্ঠ স্রষ্টাকে ত্যাগ করবে — আল্লাহ, তোমাদের রব এবং তোমাদের পূর্বপুরুষদের রব?" [কুরআন ৩৭:১২৫-১২৬]',
      ar: '"أَتَدْعُونَ بَعْلًا وَتَذَرُونَ أَحْسَنَ الْخَالِقِينَ اللَّهَ رَبَّكُمْ وَرَبَّ آبَائِكُمُ الْأَوَّلِينَ" [الصافات: 125-126]',
    },
  },
  {
    id: 'ilyas-q4',
    question: {
      en: 'When his people denied Ilyas (AS), who were excepted from being brought for punishment?',
      bn: 'জাতি যখন ইলিয়াস (আ.)-কে অস্বীকার করল, তখন শাস্তির জন্য উপস্থিত করা থেকে কারা বাদ পড়েছিল?',
      ar: 'لما كذّب القوم إلياس عليه السلام، من استُثني من الإحضار للعذاب؟',
    },
    options: [
      { en: 'The rich and powerful', bn: 'ধনী ও ক্ষমতাবানরা', ar: 'الأغنياء والأقوياء' },
      { en: 'The priests of Ba\'l', bn: 'বা\'লের পুরোহিতরা', ar: 'كهنة بعل' },
      { en: 'The chosen, sincere servants of Allah', bn: 'আল্লাহর মনোনীত একনিষ্ঠ বান্দারা', ar: 'عباد الله المخلَصون' },
      { en: 'Everyone was excepted', bn: 'সবাইকেই বাদ দেওয়া হয়েছিল', ar: 'استُثني الجميع' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"But they denied him, so indeed, they will be brought [for punishment], except the chosen servants of Allah." [Quran 37:127-128]',
      bn: '"কিন্তু তারা তাঁকে অস্বীকার করল, তাই তাদের অবশ্যই উপস্থিত করা হবে [শাস্তির জন্য], আল্লাহর মনোনীত বান্দারা ব্যতীত।" [কুরআন ৩৭:১২৭-১২৮]',
      ar: '"فَكَذَّبُوهُ فَإِنَّهُمْ لَمُحْضَرُونَ إِلَّا عِبَادَ اللَّهِ الْمُخْلَصِينَ" [الصافات: 127-128]',
    },
  },
  {
    id: 'ilyas-q5',
    question: {
      en: 'What greeting did Allah leave for Ilyas (AS) among later generations?',
      bn: 'আল্লাহ পরবর্তী প্রজন্মের মধ্যে ইলিয়াস (আ.)-এর জন্য কোন অভিবাদন রেখে দিয়েছেন?',
      ar: 'ما التحية التي تركها الله لإلياس عليه السلام في الآخرين؟',
    },
    options: [
      { en: '"Welcome, O king"', bn: '"স্বাগতম, হে রাজা"', ar: '"مرحباً أيها الملك"' },
      { en: '"Blessed is the traveller"', bn: '"বরকতময় এই মুসাফির"', ar: '"مبارك هذا المسافر"' },
      { en: '"Rest, O warrior"', bn: '"বিশ্রাম নাও, হে যোদ্ধা"', ar: '"استرح أيها المحارب"' },
      { en: '"Peace be upon Ilyaseen"', bn: '"ইলিয়াসীনের প্রতি শান্তি"', ar: '"سلام على إل ياسين"' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And We left for him [favourable mention] among later generations: \'Peace be upon Ilyaseen.\' Indeed, We thus reward the doers of good." [Quran 37:129-131]',
      bn: '"আমি পরবর্তীদের মধ্যে তাঁর সুনাম রেখে দিলাম: \'ইলিয়াসীনের প্রতি শান্তি।\' নিশ্চয়ই আমি এভাবে সৎকর্মশীলদের পুরস্কৃত করি।" [কুরআন ৩৭:১২৯-১৩১]',
      ar: '"وَتَرَكْنَا عَلَيْهِ فِي الْآخِرِينَ سَلَامٌ عَلَىٰ إِلْ يَاسِينَ إِنَّا كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ" [الصافات: 129-131]',
    },
  },
  {
    id: 'ilyas-q6',
    question: {
      en: 'In Surah Al-An\'am, Ilyas (AS) is named together with which prophets as "all of the righteous"?',
      bn: 'সূরা আল-আনআমে কোন নবীদের সাথে ইলিয়াস (আ.)-এর নাম এসেছে, যেখানে বলা হয়েছে "সকলেই সৎকর্মশীল"?',
      ar: 'في سورة الأنعام ذُكر إلياس عليه السلام مع أيّ الأنبياء بأنهم "كلٌّ من الصالحين"؟',
    },
    options: [
      { en: 'Nuh, Hud and Salih', bn: 'নূহ, হূদ ও সালিহ', ar: 'نوح وهود وصالح' },
      { en: 'Zakariya, Yahya and Isa', bn: 'যাকারিয়া, ইয়াহইয়া ও ঈসা', ar: 'زكريا ويحيى وعيسى' },
      { en: 'Adam, Idris and Shith', bn: 'আদম, ইদরীস ও শীষ', ar: 'آدم وإدريس وشيث' },
      { en: 'Musa, Harun and Shu\'ayb', bn: 'মূসা, হারূন ও শুআইব', ar: 'موسى وهارون وشعيب' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And Zakariya and Yahya and Isa and Ilyas — and all were of the righteous." [Quran 6:85]',
      bn: '"আর যাকারিয়া, ইয়াহইয়া, ঈসা ও ইলিয়াস — তারা সকলেই ছিল সৎকর্মশীলদের অন্তর্ভুক্ত।" [কুরআন ৬:৮৫]',
      ar: '"وَزَكَرِيَّا وَيَحْيَىٰ وَعِيسَىٰ وَإِلْيَاسَ ۖ كُلٌّ مِّنَ الصَّالِحِينَ" [الأنعام: 85]',
    },
  },
];

export default quiz;
