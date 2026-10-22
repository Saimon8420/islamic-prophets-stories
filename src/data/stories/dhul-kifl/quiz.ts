import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'dhul-kifl-q1',
    question: {
      en: 'In which surah is Dhul-Kifl (AS) mentioned together with Ismail and Idris?',
      bn: 'কোন সূরায় যুল-কিফল (আ.)-কে ইসমাঈল ও ইদরীসের সাথে উল্লেখ করা হয়েছে?',
      ar: 'في أي سورة ذُكر ذو الكفل عليه السلام مع إسماعيل وإدريس؟',
    },
    options: [
      { en: 'Surah Yusuf', bn: 'সূরা ইউসুফ', ar: 'سورة يوسف' },
      { en: 'Surah Al-Anbiya', bn: 'সূরা আল-আম্বিয়া', ar: 'سورة الأنبياء' },
      { en: 'Surah Al-Baqarah', bn: 'সূরা আল-বাকারা', ar: 'سورة البقرة' },
      { en: 'Surah Hud', bn: 'সূরা হুদ', ar: 'سورة هود' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And [mention] Ismail and Idris and Dhul-Kifl; all were of the patient." [Quran 21:85]',
      bn: '"আর ইসমাঈল, ইদরীস ও যুল-কিফলের কথা স্মরণ করো; তারা সকলেই ছিল ধৈর্যশীলদের অন্তর্ভুক্ত।" [কুরআন ২১:৮৫]',
      ar: '"وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ ۖ كُلٌّ مِّنَ الصَّابِرِينَ" [الأنبياء: 85]',
    },
  },
  {
    id: 'dhul-kifl-q2',
    question: {
      en: 'Which quality does Allah give Dhul-Kifl, Ismail and Idris in Surah Al-Anbiya?',
      bn: 'সূরা আল-আম্বিয়ায় আল্লাহ যুল-কিফল, ইসমাঈল ও ইদরীসকে কোন গুণে গুণান্বিত বলেছেন?',
      ar: 'بأي صفة وصف الله ذا الكفل وإسماعيل وإدريس في سورة الأنبياء؟',
    },
    options: [
      { en: 'They were all kings', bn: 'তাঁরা সবাই রাজা ছিলেন', ar: 'كانوا ملوكاً' },
      { en: 'They were all rich', bn: 'তাঁরা সবাই ধনী ছিলেন', ar: 'كانوا أغنياء' },
      { en: 'They were all warriors', bn: 'তাঁরা সবাই যোদ্ধা ছিলেন', ar: 'كانوا محاربين' },
      { en: 'They were all of the patient', bn: 'তাঁরা সবাই ছিলেন ধৈর্যশীল', ar: 'كلٌّ من الصابرين' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"...all were of the patient." [Quran 21:85]',
      bn: '"...তারা সকলেই ছিল ধৈর্যশীলদের অন্তর্ভুক্ত।" [কুরআন ২১:৮৫]',
      ar: '"كُلٌّ مِّنَ الصَّابِرِينَ" [الأنبياء: 85]',
    },
  },
  {
    id: 'dhul-kifl-q3',
    question: {
      en: 'What did Allah do for these patient prophets, according to Quran 21:86?',
      bn: 'কুরআন ২১:৮৬ অনুযায়ী আল্লাহ এই ধৈর্যশীল নবীদের জন্য কী করেছিলেন?',
      ar: 'ماذا فعل الله لهؤلاء الأنبياء الصابرين كما في سورة الأنبياء الآية 86؟',
    },
    options: [
      { en: 'Admitted them into His mercy', bn: 'তাঁদের নিজের রহমতে প্রবেশ করিয়েছেন', ar: 'أدخلهم في رحمته' },
      { en: 'Gave them great palaces', bn: 'তাঁদের বড় বড় প্রাসাদ দিয়েছেন', ar: 'أعطاهم قصوراً عظيمة' },
      { en: 'Made them live for a thousand years', bn: 'তাঁদের হাজার বছর বাঁচিয়ে রেখেছেন', ar: 'أطال أعمارهم ألف سنة' },
      { en: 'Gave them armies', bn: 'তাঁদের সেনাবাহিনী দিয়েছেন', ar: 'أعطاهم جيوشاً' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And We admitted them into Our mercy. Indeed, they were of the righteous." [Quran 21:86]',
      bn: '"আমি তাদেরকে আমার রহমতে প্রবেশ করিয়েছিলাম। নিশ্চয়ই তারা ছিল সৎকর্মশীলদের অন্তর্ভুক্ত।" [কুরআন ২১:৮৬]',
      ar: '"وَأَدْخَلْنَاهُمْ فِي رَحْمَتِنَا ۖ إِنَّهُم مِّنَ الصَّالِحِينَ" [الأنبياء: 86]',
    },
  },
  {
    id: 'dhul-kifl-q4',
    question: {
      en: 'In Surah Sad, Dhul-Kifl is mentioned with Ismail and which other prophet?',
      bn: 'সূরা সোয়াদে যুল-কিফলকে ইসমাঈল এবং আর কোন নবীর সাথে উল্লেখ করা হয়েছে?',
      ar: 'في سورة ص، ذُكر ذو الكفل مع إسماعيل ومع أي نبي آخر؟',
    },
    options: [
      { en: 'Yunus', bn: 'ইউনুস', ar: 'يونس' },
      { en: 'Shu\'ayb', bn: 'শুআইব', ar: 'شعيب' },
      { en: 'Al-Yasa', bn: 'আল-ইয়াসা', ar: 'اليسع' },
      { en: 'Hud', bn: 'হূদ', ar: 'هود' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And remember Ismail, Al-Yasa, and Dhul-Kifl, and all are among the outstanding." [Quran 38:48]',
      bn: '"আর স্মরণ করো ইসমাঈল, আল-ইয়াসা ও যুল-কিফলের কথা; তারা প্রত্যেকেই ছিল শ্রেষ্ঠদের অন্তর্ভুক্ত।" [কুরআন ৩৮:৪৮]',
      ar: '"وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ وَذَا الْكِفْلِ ۖ وَكُلٌّ مِّنَ الْأَخْيَارِ" [ص: 48]',
    },
  },
  {
    id: 'dhul-kifl-q5',
    question: {
      en: 'How does Surah Sad describe Dhul-Kifl and the prophets mentioned with him?',
      bn: 'সূরা সোয়াদে যুল-কিফল ও তাঁর সাথে উল্লিখিত নবীদের কীভাবে বর্ণনা করা হয়েছে?',
      ar: 'بماذا وصفت سورة ص ذا الكفل ومن ذُكر معه من الأنبياء؟',
    },
    options: [
      { en: 'Among the wealthy', bn: 'ধনীদের অন্তর্ভুক্ত', ar: 'من الأغنياء' },
      { en: 'Among the forgetful', bn: 'ভুলোমনাদের অন্তর্ভুক্ত', ar: 'من الناسين' },
      { en: 'Among the travellers', bn: 'মুসাফিরদের অন্তর্ভুক্ত', ar: 'من المسافرين' },
      { en: 'Among the outstanding (al-akhyar)', bn: 'শ্রেষ্ঠদের (আল-আখইয়ার) অন্তর্ভুক্ত', ar: 'من الأخيار' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"...and all are among the outstanding." [Quran 38:48]',
      bn: '"...তারা প্রত্যেকেই ছিল শ্রেষ্ঠদের অন্তর্ভুক্ত।" [কুরআন ৩৮:৪৮]',
      ar: '"وَكُلٌّ مِّنَ الْأَخْيَارِ" [ص: 48]',
    },
  },
  {
    id: 'dhul-kifl-q6',
    question: {
      en: 'How many times is Dhul-Kifl (AS) mentioned by name in the Quran?',
      bn: 'কুরআনে যুল-কিফল (আ.)-এর নাম কতবার এসেছে?',
      ar: 'كم مرة ذُكر اسم ذي الكفل عليه السلام في القرآن؟',
    },
    options: [
      { en: 'Once', bn: 'একবার', ar: 'مرة واحدة' },
      { en: 'Twice', bn: 'দুইবার', ar: 'مرتين' },
      { en: 'Five times', bn: 'পাঁচবার', ar: 'خمس مرات' },
      { en: 'Ten times', bn: 'দশবার', ar: 'عشر مرات' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Dhul-Kifl is named twice: in Surah Al-Anbiya and in Surah Sad. [Quran 21:85, 38:48]',
      bn: 'যুল-কিফলের নাম দুইবার এসেছে: সূরা আল-আম্বিয়া ও সূরা সোয়াদে। [কুরআন ২১:৮৫, ৩৮:৪৮]',
      ar: 'ذُكر ذو الكفل باسمه مرتين: في سورة الأنبياء وسورة ص. [الأنبياء: 85، ص: 48]',
    },
  },
];

export default quiz;
