import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'shuayb-q1',
    question: {
      en: 'To which people did Allah send Shu\'ayb (AS)?',
      bn: 'আল্লাহ শুআইব (আ.)-কে কোন জাতির কাছে পাঠিয়েছিলেন?',
      ar: 'إلى أي قوم أرسل الله شعيباً عليه السلام؟',
    },
    options: [
      { en: 'The people of Madyan', bn: 'মাদইয়ানবাসী', ar: 'أهل مدين' },
      { en: 'The people of Thamud', bn: 'সামূদ জাতি', ar: 'ثمود' },
      { en: 'The people of \'Ad', bn: 'আদ জাতি', ar: 'عاد' },
      { en: 'The people of Egypt', bn: 'মিসরবাসী', ar: 'أهل مصر' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And to Madyan [We sent] their brother Shu\'ayb. He said, \'O my people, worship Allah; you have no deity other than Him.\'" [Quran 11:84]',
      bn: '"মাদইয়ানে আমি তাদের ভাই শুআইবকে পাঠালাম। সে বলল, \'হে আমার জাতি, আল্লাহর ইবাদত কর; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই।\'" [কুরআন ১১:৮৪]',
      ar: '"وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ" [هود: 84]',
    },
  },
  {
    id: 'shuayb-q2',
    question: {
      en: 'Besides worshipping idols, what was the main wrong the people of Madyan did?',
      bn: 'মূর্তিপূজা ছাড়া মাদইয়ানবাসীর প্রধান অন্যায় কী ছিল?',
      ar: 'ما المعصية الكبرى التي كان يفعلها أهل مدين مع عبادة الأصنام؟',
    },
    options: [
      { en: 'Building idols out of stone mountains', bn: 'পাহাড় কেটে মূর্তি বানানো', ar: 'نحت الأصنام من الجبال' },
      { en: 'Killing a she-camel', bn: 'একটি উটনী হত্যা করা', ar: 'عقر الناقة' },
      { en: 'Cheating in measures and weights', bn: 'মাপে ও ওজনে কম দেওয়া', ar: 'نقص المكيال والميزان' },
      { en: 'Refusing to build an ark', bn: 'নৌকা বানাতে অস্বীকার করা', ar: 'رفض بناء السفينة' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"O my people, give full measure and weight in justice and do not deprive the people of their due." [Quran 11:85]',
      bn: '"হে আমার জাতি, ন্যায়সঙ্গতভাবে মাপ ও ওজন পূর্ণ দাও এবং মানুষকে তাদের প্রাপ্য বস্তু কম দিও না।" [কুরআন ১১:৮৫]',
      ar: '"وَيَا قَوْمِ أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ ۖ وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ" [هود: 85]',
    },
  },
  {
    id: 'shuayb-q3',
    question: {
      en: 'When the people mocked Shu\'ayb (AS), they asked whether something of his "commanded" him. What was it?',
      bn: 'শুআইব (আ.)-কে ঠাট্টা করে লোকেরা জিজ্ঞেস করেছিল, তাঁর কোন জিনিস কি তাঁকে আদেশ দেয়?',
      ar: 'حين سخر القوم من شعيب عليه السلام سألوه: هل يأمرك شيء من أمرك؟ ما هو؟',
    },
    options: [
      { en: 'His wealth', bn: 'তাঁর সম্পদ', ar: 'مالك' },
      { en: 'His prayer', bn: 'তাঁর সালাত', ar: 'صلاتك' },
      { en: 'His dream', bn: 'তাঁর স্বপ্ন', ar: 'رؤياك' },
      { en: 'His tribe', bn: 'তাঁর গোত্র', ar: 'قبيلتك' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'They said, "O Shu\'ayb, does your prayer command you that we should leave what our fathers worship or not do with our wealth what we please?" [Quran 11:87]',
      bn: 'তারা বলল, "হে শুআইব, তোমার সালাত কি তোমাকে নির্দেশ দেয় যে আমাদের পিতৃপুরুষরা যার ইবাদত করত তা ছেড়ে দিতে অথবা আমাদের সম্পদে আমরা যা ইচ্ছা তা করতে না পারি?" [কুরআন ১১:৮৭]',
      ar: '"قَالُوا يَا شُعَيْبُ أَصَلَاتُكَ تَأْمُرُكَ أَن نَّتْرُكَ مَا يَعْبُدُ آبَاؤُنَا أَوْ أَن نَّفْعَلَ فِي أَمْوَالِنَا مَا نَشَاءُ" [هود: 87]',
    },
  },
  {
    id: 'shuayb-q4',
    question: {
      en: 'What did Shu\'ayb (AS) say he wanted for his people?',
      bn: 'শুআইব (আ.) বলেছিলেন তিনি তাঁর জাতির জন্য কী চান?',
      ar: 'ماذا قال شعيب عليه السلام إنه يريد لقومه؟',
    },
    options: [
      { en: 'To become their king', bn: 'তাদের রাজা হতে', ar: 'أن يصبح ملكاً عليهم' },
      { en: 'To take a share of their wealth', bn: 'তাদের সম্পদের ভাগ নিতে', ar: 'أن يأخذ نصيباً من أموالهم' },
      { en: 'To leave their city', bn: 'তাদের শহর ছেড়ে চলে যেতে', ar: 'أن يترك مدينتهم' },
      { en: 'Only reform, as much as he was able', bn: 'শুধু সাধ্যমতো সংশোধন', ar: 'الإصلاح ما استطاع' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"I do not intend to differ from you in that which I have forbidden you; I only intend reform as much as I am able. And my success is not but through Allah." [Quran 11:88]',
      bn: '"আমি তোমাদের যা নিষেধ করি তার বিপরীত করতে চাই না। আমি কেবল সাধ্যমত সংশোধন চাই। আমার সাফল্য কেবল আল্লাহর কাছ থেকে।" [কুরআন ১১:৮৮]',
      ar: '"وَمَا أُرِيدُ أَنْ أُخَالِفَكُمْ إِلَىٰ مَا أَنْهَاكُمْ عَنْهُ ۚ إِنْ أُرِيدُ إِلَّا الْإِصْلَاحَ مَا اسْتَطَعْتُ ۚ وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ" [هود: 88]',
    },
  },
  {
    id: 'shuayb-q5',
    question: {
      en: 'Shu\'ayb (AS) warned that one destroyed people were "not far from you". Which people?',
      bn: 'শুআইব (আ.) সতর্ক করেছিলেন, একটি ধ্বংসপ্রাপ্ত জাতি "তোমাদের থেকে দূরে নয়"। কোন জাতি?',
      ar: 'حذّر شعيب عليه السلام قومه بأن قوماً هالكين "ليسوا منكم ببعيد". من هم؟',
    },
    options: [
      { en: 'The people of Nuh', bn: 'নূহের জাতি', ar: 'قوم نوح' },
      { en: 'The people of Lut', bn: 'লূতের জাতি', ar: 'قوم لوط' },
      { en: 'The people of Pharaoh', bn: 'ফিরাউনের জাতি', ar: 'قوم فرعون' },
      { en: 'The people of Saba', bn: 'সাবা জাতি', ar: 'قوم سبأ' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"...what struck the people of Nuh or the people of Hud or the people of Salih. And the people of Lut are not far from you." [Quran 11:89]',
      bn: '"...যা নূহের জাতি, হূদের জাতি বা সালিহের জাতির উপর এসেছিল। লূতের জাতি তোমাদের থেকে দূরে নয়।" [কুরআন ১১:৮৯]',
      ar: '"مِّثْلُ مَا أَصَابَ قَوْمَ نُوحٍ أَوْ قَوْمَ هُودٍ أَوْ قَوْمَ صَالِحٍ ۚ وَمَا قَوْمُ لُوطٍ مِّنكُم بِبَعِيدٍ" [هود: 89]',
    },
  },
  {
    id: 'shuayb-q6',
    question: {
      en: 'What did Shu\'ayb (AS) tell his people about his Lord when he called them to repent?',
      bn: 'তওবার দিকে ডাকার সময় শুআইব (আ.) তাঁর রব সম্পর্কে কী বলেছিলেন?',
      ar: 'بماذا وصف شعيب عليه السلام ربه حين دعا قومه إلى التوبة؟',
    },
    options: [
      { en: 'Merciful and Affectionate', bn: 'পরম দয়ালু ও অত্যন্ত স্নেহশীল', ar: 'رحيم ودود' },
      { en: 'Severe and quick to punish', bn: 'কঠোর ও দ্রুত শাস্তিদাতা', ar: 'شديد سريع العقاب' },
      { en: 'Far away and unaware', bn: 'দূরে ও অজ্ঞ', ar: 'بعيد غافل' },
      { en: 'Pleased with their trade', bn: 'তাদের ব্যবসায় খুশি', ar: 'راضٍ عن تجارتهم' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"Ask forgiveness of your Lord and then repent to Him. Indeed, my Lord is Merciful and Affectionate." [Quran 11:90]',
      bn: '"তোমাদের রবের কাছে ক্ষমা চাও এবং তাঁর কাছে তওবা কর। নিশ্চয়ই আমার রব পরম দয়ালু, অত্যন্ত স্নেহশীল।" [কুরআন ১১:৯০]',
      ar: '"وَاسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ ۚ إِنَّ رَبِّي رَحِيمٌ وَدُودٌ" [هود: 90]',
    },
  },
  {
    id: 'shuayb-q7',
    question: {
      en: 'When the punishment came, how were Shu\'ayb (AS) and the believers saved?',
      bn: 'শাস্তি আসার সময় শুআইব (আ.) ও মুমিনরা কীভাবে রক্ষা পেয়েছিলেন?',
      ar: 'كيف نجا شعيب عليه السلام والمؤمنون حين جاء العذاب؟',
    },
    options: [
      { en: 'They hid in caves', bn: 'তাঁরা গুহায় লুকিয়েছিলেন', ar: 'اختبؤوا في الكهوف' },
      { en: 'They paid a ransom', bn: 'তাঁরা মুক্তিপণ দিয়েছিলেন', ar: 'دفعوا فدية' },
      { en: 'They sailed away in a ship', bn: 'তাঁরা জাহাজে করে চলে গিয়েছিলেন', ar: 'رحلوا في سفينة' },
      { en: 'By mercy from Allah', bn: 'আল্লাহর রহমতে', ar: 'برحمة من الله' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And when Our command came, We saved Shu\'ayb and those who believed with him, by mercy from Us." [Quran 11:94]',
      bn: '"যখন আমার আদেশ আসল, আমি শুআইব ও তার সাথে যারা ঈমান এনেছিল তাদের আমার রহমতে রক্ষা করলাম।" [কুরআন ১১:৯৪]',
      ar: '"وَلَمَّا جَاءَ أَمْرُنَا نَجَّيْنَا شُعَيْبًا وَالَّذِينَ آمَنُوا مَعَهُ بِرَحْمَةٍ مِّنَّا" [هود: 94]',
    },
  },
];

export default quiz;
