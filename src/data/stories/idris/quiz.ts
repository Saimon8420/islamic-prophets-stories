import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'idris-q1',
    question: {
      en: 'What does Allah call Idris (AS) in Surah Maryam?',
      bn: 'সূরা মারইয়ামে আল্লাহ ইদরীস (আ.)-কে কী বলে উল্লেখ করেছেন?',
      ar: 'بماذا وصف الله إدريس عليه السلام في سورة مريم؟',
    },
    options: [
      { en: 'A king and a judge', bn: 'রাজা ও বিচারক', ar: 'ملكاً وقاضياً' },
      { en: 'A man of truth and a prophet', bn: 'সত্যনিষ্ঠ ও নবী', ar: 'صدّيقاً نبياً' },
      { en: 'A messenger with a great army', bn: 'বড় সেনাবাহিনীর রাসূল', ar: 'رسولاً ذا جيش عظيم' },
      { en: 'A friend of Allah (Khalil)', bn: 'আল্লাহর বন্ধু (খলীল)', ar: 'خليل الله' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And mention in the Book, Idris. Indeed, he was a man of truth and a prophet." [Quran 19:56]',
      bn: '"আর এই কিতাবে ইদরীসের কথা স্মরণ করুন। নিশ্চয়ই তিনি ছিলেন সত্যনিষ্ঠ ও একজন নবী।" [কুরআন ১৯:৫৬]',
      ar: '"وَاذْكُرْ فِي الْكِتَابِ إِدْرِيسَ ۚ إِنَّهُ كَانَ صِدِّيقًا نَّبِيًّا" [مريم: 56]',
    },
  },
  {
    id: 'idris-q2',
    question: {
      en: 'What did Allah do for Idris (AS), according to Quran 19:57?',
      bn: 'কুরআন ১৯:৫৭ অনুযায়ী আল্লাহ ইদরীস (আ.)-এর জন্য কী করেছিলেন?',
      ar: 'ماذا فعل الله لإدريس عليه السلام كما في سورة مريم الآية 57؟',
    },
    options: [
      { en: 'Gave him a great kingdom', bn: 'তাঁকে বিশাল রাজ্য দিয়েছিলেন', ar: 'آتاه ملكاً عظيماً' },
      { en: 'Saved him from a flood', bn: 'বন্যা থেকে বাঁচিয়েছিলেন', ar: 'نجّاه من الطوفان' },
      { en: 'Raised him to a high station', bn: 'উচ্চ মর্যাদায় উন্নীত করেছিলেন', ar: 'رفعه مكاناً علياً' },
      { en: 'Made the wind obey him', bn: 'বাতাসকে তাঁর অধীন করেছিলেন', ar: 'سخّر له الريح' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And We raised him to a high station." [Quran 19:57]',
      bn: '"আর আমি তাঁকে উচ্চ মর্যাদায় উন্নীত করেছি।" [কুরআন ১৯:৫৭]',
      ar: '"وَرَفَعْنَاهُ مَكَانًا عَلِيًّا" [مريم: 57]',
    },
  },
  {
    id: 'idris-q3',
    question: {
      en: 'Which two prophets are mentioned with Idris (AS) as "of the patient" in Surah Al-Anbiya?',
      bn: 'সূরা আল-আম্বিয়ায় কোন দুই নবীর সাথে ইদরীস (আ.)-কে "ধৈর্যশীল" বলা হয়েছে?',
      ar: 'من النبيّان المذكوران مع إدريس عليه السلام بأنهم "من الصابرين" في سورة الأنبياء؟',
    },
    options: [
      { en: 'Musa and Harun', bn: 'মূসা ও হারূন', ar: 'موسى وهارون' },
      { en: 'Ismail and Dhul-Kifl', bn: 'ইসমাঈল ও যুল-কিফল', ar: 'إسماعيل وذو الكفل' },
      { en: 'Nuh and Hud', bn: 'নূহ ও হূদ', ar: 'نوح وهود' },
      { en: 'Yahya and Isa', bn: 'ইয়াহইয়া ও ঈসা', ar: 'يحيى وعيسى' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And [mention] Ismail and Idris and Dhul-Kifl; all were of the patient." [Quran 21:85]',
      bn: '"আর স্মরণ করুন ইসমাঈল, ইদরীস ও যুল-কিফলের কথা; তারা সবাই ছিলেন ধৈর্যশীল।" [কুরআন ২১:৮৫]',
      ar: '"وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ ۖ كُلٌّ مِّنَ الصَّابِرِينَ" [الأنبياء: 85]',
    },
  },
  {
    id: 'idris-q4',
    question: {
      en: 'In which heaven did Prophet Muhammad ﷺ meet Idris (AS) during the Night Journey?',
      bn: 'মেরাজের রাতে নবী মুহাম্মাদ ﷺ কোন আসমানে ইদরীস (আ.)-এর সাথে সাক্ষাৎ করেছিলেন?',
      ar: 'في أي سماء لقي النبي ﷺ إدريس عليه السلام ليلة المعراج؟',
    },
    options: [
      { en: 'The first heaven', bn: 'প্রথম আসমানে', ar: 'السماء الأولى' },
      { en: 'The second heaven', bn: 'দ্বিতীয় আসমানে', ar: 'السماء الثانية' },
      { en: 'The fourth heaven', bn: 'চতুর্থ আসমানে', ar: 'السماء الرابعة' },
      { en: 'The seventh heaven', bn: 'সপ্তম আসমানে', ar: 'السماء السابعة' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'In the hadith of the Mi\'raj, the Prophet ﷺ met Idris in the fourth heaven. [Sahih al-Bukhari 3207]',
      bn: 'মেরাজের হাদীসে নবী ﷺ চতুর্থ আসমানে ইদরীসের সাথে সাক্ষাৎ করেন। [সহীহ বুখারী ৩২০৭]',
      ar: 'في حديث المعراج لقي النبي ﷺ إدريس في السماء الرابعة. [صحيح البخاري 3207]',
    },
  },
  {
    id: 'idris-q5',
    question: {
      en: 'How did Idris (AS) welcome the Prophet ﷺ in the fourth heaven?',
      bn: 'চতুর্থ আসমানে ইদরীস (আ.) নবী ﷺ-কে কীভাবে স্বাগত জানিয়েছিলেন?',
      ar: 'بماذا رحّب إدريس عليه السلام بالنبي ﷺ في السماء الرابعة؟',
    },
    options: [
      { en: '"Welcome, O righteous son and righteous prophet"', bn: '"স্বাগতম, হে নেককার পুত্র ও নেককার নবী"', ar: '"مرحباً بالابن الصالح والنبي الصالح"' },
      { en: '"Welcome, O righteous brother and righteous prophet"', bn: '"স্বাগতম, হে নেককার ভাই ও নেককার নবী"', ar: '"مرحباً بالأخ الصالح والنبي الصالح"' },
      { en: '"Peace be upon you, O king"', bn: '"আপনার উপর শান্তি, হে রাজা"', ar: '"السلام عليك أيها الملك"' },
      { en: 'He did not speak', bn: 'তিনি কিছু বলেননি', ar: 'لم يتكلم' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Idris said, "Welcome, O righteous brother and righteous prophet." Adam and Ibrahim said "righteous son", because the Prophet ﷺ descends from them. [Sahih al-Bukhari 3207]',
      bn: 'ইদরীস বললেন, "স্বাগতম, হে নেককার ভাই ও নেককার নবী।" আদম ও ইবরাহীম বলেছিলেন "নেককার পুত্র", কারণ নবী ﷺ তাঁদের বংশধর। [সহীহ বুখারী ৩২০৭]',
      ar: 'قال إدريس: "مرحباً بالأخ الصالح والنبي الصالح". أما آدم وإبراهيم فقالا: "الابن الصالح" لأن النبي ﷺ من ذريتهما. [صحيح البخاري 3207]',
    },
  },
];

export default quiz;
