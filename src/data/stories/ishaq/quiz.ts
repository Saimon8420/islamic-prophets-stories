import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'ishaq-q1',
    question: {
      en: 'Who brought the good news of Ishaq\'s birth to Ibrahim and Sarah?',
      bn: 'ইবরাহীম ও সারাকে ইসহাকের জন্মের সুসংবাদ কারা দিয়েছিলেন?',
      ar: 'من الذين بشّروا إبراهيم وسارة بمولد إسحاق؟',
    },
    options: [
      { en: 'A group of travelling merchants', bn: 'একদল ভ্রাম্যমাণ ব্যবসায়ী', ar: 'جماعة من التجار المسافرين' },
      { en: 'Angels who came as guests', bn: 'মেহমান হয়ে আসা ফেরেশতারা', ar: 'ملائكة جاؤوا ضيوفاً' },
      { en: 'Ismail (AS)', bn: 'ইসমাঈল (আ.)', ar: 'إسماعيل عليه السلام' },
      { en: 'Prophet Lut (AS)', bn: 'নবী লূত (আ.)', ar: 'النبي لوط عليه السلام' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The angels told Ibrahim, "Fear not. Indeed, we give you good tidings of a learned boy." [Quran 15:53]',
      bn: 'ফেরেশতারা ইবরাহীমকে বললেন, "ভয় পেয়ো না। নিশ্চয়ই আমরা তোমাকে একটি জ্ঞানী পুত্রের সুসংবাদ দিচ্ছি।" [কুরআন ১৫:৫৩]',
      ar: '"قَالُوا لَا تَوْجَلْ إِنَّا نُبَشِّرُكَ بِغُلَامٍ عَلِيمٍ" [الحجر: 53]',
    },
  },
  {
    id: 'ishaq-q2',
    question: {
      en: 'Along with Ishaq, who else was Sarah given good news of?',
      bn: 'ইসহাকের সাথে সারাকে আর কার সুসংবাদ দেওয়া হয়েছিল?',
      ar: 'بمن بُشّرت سارة أيضاً مع إسحاق؟',
    },
    options: [
      { en: 'Yusuf, a great-grandson', bn: 'প্রপৌত্র ইউসুফ', ar: 'يوسف، ابن الحفيد' },
      { en: 'Musa', bn: 'মূসা', ar: 'موسى' },
      { en: 'Ismail', bn: 'ইসমাঈল', ar: 'إسماعيل' },
      { en: 'Yaqub, who would come after Ishaq', bn: 'ইসহাকের পরে আসবেন যে ইয়াকুব', ar: 'يعقوب، من وراء إسحاق' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"Then We gave her good tidings of Ishaq, and after Ishaq, Yaqub." [Quran 11:71]',
      bn: '"তারপর আমি তাঁকে ইসহাকের এবং ইসহাকের পরে ইয়াকুবের সুসংবাদ দিলাম।" [কুরআন ১১:৭১]',
      ar: '"فَبَشَّرْنَاهَا بِإِسْحَاقَ وَمِن وَرَاءِ إِسْحَاقَ يَعْقُوبَ" [هود: 71]',
    },
  },
  {
    id: 'ishaq-q3',
    question: {
      en: 'How did the angels answer Sarah\'s amazement?',
      bn: 'সারার বিস্ময়ের জবাবে ফেরেশতারা কী বলেছিলেন?',
      ar: 'بماذا أجاب الملائكة تعجّب سارة؟',
    },
    options: [
      { en: '"Are you amazed at the decree of Allah?"', bn: '"তুমি কি আল্লাহর সিদ্ধান্তে বিস্মিত হচ্ছ?"', ar: '"أَتَعْجَبِينَ مِنْ أَمْرِ اللَّهِ"' },
      { en: '"You are right, it is impossible"', bn: '"ঠিকই বলেছ, এটা অসম্ভব"', ar: '"صدقتِ، هذا مستحيل"' },
      { en: '"Wait another ten years"', bn: '"আরও দশ বছর অপেক্ষা করো"', ar: '"انتظري عشر سنين أخرى"' },
      { en: 'They left without answering', bn: 'তারা উত্তর না দিয়ে চলে গেলেন', ar: 'انصرفوا دون جواب' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"They said, \'Are you amazed at the decree of Allah? May the mercy of Allah and His blessings be upon you, people of the house.\'" [Quran 11:73]',
      bn: '"তারা বলল, \'তুমি কি আল্লাহর সিদ্ধান্তে বিস্মিত হচ্ছ? তোমাদের উপর আল্লাহর রহমত ও বরকত বর্ষিত হোক, হে এই ঘরের সদস্যরা।\'" [কুরআন ১১:৭৩]',
      ar: '"قَالُوا أَتَعْجَبِينَ مِنْ أَمْرِ اللَّهِ ۖ رَحْمَتُ اللَّهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ" [هود: 73]',
    },
  },
  {
    id: 'ishaq-q4',
    question: {
      en: 'How does Allah describe Ishaq (AS) in Surah As-Saffat?',
      bn: 'সূরা আস-সাফফাতে আল্লাহ ইসহাক (আ.)-কে কীভাবে বর্ণনা করেছেন?',
      ar: 'كيف وصف الله إسحاق عليه السلام في سورة الصافات؟',
    },
    options: [
      { en: 'A king over many lands', bn: 'বহু দেশের রাজা', ar: 'ملكاً على بلاد كثيرة' },
      { en: 'A great warrior', bn: 'একজন মহান যোদ্ধা', ar: 'محارباً عظيماً' },
      { en: 'A prophet from among the righteous', bn: 'সৎকর্মশীলদের মধ্যে একজন নবী', ar: 'نبياً من الصالحين' },
      { en: 'A wealthy merchant', bn: 'একজন ধনী ব্যবসায়ী', ar: 'تاجراً غنياً' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And We gave him good tidings of Ishaq, a prophet from among the righteous." [Quran 37:112]',
      bn: '"আমি তাঁকে ইসহাকের সুসংবাদ দিলাম, সৎকর্মশীলদের মধ্যে একজন নবী।" [কুরআন ৩৭:১১২]',
      ar: '"وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ" [الصافات: 112]',
    },
  },
  {
    id: 'ishaq-q5',
    question: {
      en: 'What did Allah place among the descendants of Ibrahim, through Ishaq and Yaqub?',
      bn: 'ইসহাক ও ইয়াকুবের মাধ্যমে আল্লাহ ইবরাহীমের বংশধরদের মধ্যে কী রেখেছিলেন?',
      ar: 'ماذا جعل الله في ذرية إبراهيم بعد أن وهبه إسحاق ويعقوب؟',
    },
    options: [
      { en: 'Prophethood and scripture', bn: 'নবুওয়াত ও কিতাব', ar: 'النبوة والكتاب' },
      { en: 'Gold mines', bn: 'সোনার খনি', ar: 'مناجم الذهب' },
      { en: 'A great army', bn: 'বিশাল সেনাবাহিনী', ar: 'جيشاً عظيماً' },
      { en: 'Rule over the whole earth', bn: 'সারা পৃথিবীর শাসন', ar: 'حكم الأرض كلها' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And We bestowed upon him Ishaq and Yaqub, and We placed in his descendants prophethood and scripture." [Quran 29:27]',
      bn: '"আর আমি তাঁকে দান করলাম ইসহাক ও ইয়াকুব এবং তাঁর বংশধরদের মধ্যে নবুওয়াত ও কিতাব রাখলাম।" [কুরআন ২৯:২৭]',
      ar: '"وَوَهَبْنَا لَهُ إِسْحَاقَ وَيَعْقُوبَ وَجَعَلْنَا فِي ذُرِّيَّتِهِ النُّبُوَّةَ وَالْكِتَابَ" [العنكبوت: 27]',
    },
  },
  {
    id: 'ishaq-q6',
    question: {
      en: 'For what special quality did Allah choose Ibrahim, Ishaq and Yaqub (AS)?',
      bn: 'কোন বিশেষ গুণের জন্য আল্লাহ ইবরাহীম, ইসহাক ও ইয়াকুব (আ.)-কে মনোনীত করেছিলেন?',
      ar: 'لأي خصلة خاصة أخلص الله إبراهيم وإسحاق ويعقوب عليهم السلام؟',
    },
    options: [
      { en: 'Building great cities', bn: 'বড় বড় শহর গড়া', ar: 'بناء المدن العظيمة' },
      { en: 'Writing poetry', bn: 'কবিতা লেখা', ar: 'قول الشعر' },
      { en: 'Travelling the world', bn: 'পৃথিবী ভ্রমণ', ar: 'السفر حول العالم' },
      { en: 'Remembrance of the final Home (the Hereafter)', bn: 'পরকালের স্মরণ', ar: 'ذكرى الدار الآخرة' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"Indeed, We chose them for an exclusive quality: remembrance of the [final] Home." [Quran 38:46]',
      bn: '"নিশ্চয়ই আমি তাদের একটি বিশেষ গুণের জন্য মনোনীত করেছিলাম: পরকালের স্মরণ।" [কুরআন ৩৮:৪৬]',
      ar: '"إِنَّا أَخْلَصْنَاهُم بِخَالِصَةٍ ذِكْرَى الدَّارِ" [ص: 46]',
    },
  },
];

export default quiz;
