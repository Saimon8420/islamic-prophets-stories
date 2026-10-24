import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'al-yasa-q1',
    question: {
      en: 'In Surah Sad, Al-Yasa (AS) is mentioned together with which two prophets?',
      bn: 'সূরা সোয়াদে আল-ইয়াসা (আ.)-এর নাম কোন দুই নবীর সাথে এসেছে?',
      ar: 'في سورة ص، ذُكر اليسع عليه السلام مع أيّ نبيّين؟',
    },
    options: [
      { en: 'Musa and Harun', bn: 'মূসা ও হারূন', ar: 'موسى وهارون' },
      { en: 'Dawud and Sulayman', bn: 'দাউদ ও সুলাইমান', ar: 'داود وسليمان' },
      { en: 'Ismail and Dhul-Kifl', bn: 'ইসমাঈল ও যুল-কিফল', ar: 'إسماعيل وذو الكفل' },
      { en: 'Ibrahim and Ishaq', bn: 'ইবরাহীম ও ইসহাক', ar: 'إبراهيم وإسحاق' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And remember Ismail and Al-Yasa and Dhul-Kifl, and all are among the outstanding." [Quran 38:48]',
      bn: '"আর স্মরণ করুন ইসমাঈল, আল-ইয়াসা ও যুল-কিফলকে; তারা সবাই ছিলেন সর্বোত্তমদের অন্তর্ভুক্ত।" [কুরআন ৩৮:৪৮]',
      ar: '"وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ وَذَا الْكِفْلِ ۖ وَكُلٌّ مِّنَ الْأَخْيَارِ" [ص: 48]',
    },
  },
  {
    id: 'al-yasa-q2',
    question: {
      en: 'How does Allah describe Al-Yasa (AS) and his companions in Surah Sad 38:48?',
      bn: 'সূরা সোয়াদ ৩৮:৪৮-এ আল্লাহ আল-ইয়াসা (আ.) ও তাঁর সঙ্গী নবীদের কীভাবে বর্ণনা করেছেন?',
      ar: 'بماذا وصف الله اليسع عليه السلام ومن ذُكر معه في سورة ص الآية 48؟',
    },
    options: [
      { en: 'Among the outstanding (al-akhyar)', bn: 'সর্বোত্তমদের অন্তর্ভুক্ত (আল-আখইয়ার)', ar: 'من الأخيار' },
      { en: 'Among the kings', bn: 'রাজাদের অন্তর্ভুক্ত', ar: 'من الملوك' },
      { en: 'Among the travellers', bn: 'মুসাফিরদের অন্তর্ভুক্ত', ar: 'من المسافرين' },
      { en: 'Among the warriors', bn: 'যোদ্ধাদের অন্তর্ভুক্ত', ar: 'من المحاربين' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"...and all are among the outstanding." [Quran 38:48]',
      bn: '"...তারা সবাই ছিলেন সর্বোত্তমদের অন্তর্ভুক্ত।" [কুরআন ৩৮:৪৮]',
      ar: '"وَكُلٌّ مِّنَ الْأَخْيَارِ" [ص: 48]',
    },
  },
  {
    id: 'al-yasa-q3',
    question: {
      en: 'In Surah Al-An\'am 6:86, Al-Yasa (AS) is named with which prophets?',
      bn: 'সূরা আল-আনআম ৬:৮৬-এ আল-ইয়াসা (আ.)-এর নাম কোন নবীদের সাথে এসেছে?',
      ar: 'في سورة الأنعام الآية 86، ذُكر اليسع عليه السلام مع أيّ الأنبياء؟',
    },
    options: [
      { en: 'Nuh, Hud and Salih', bn: 'নূহ, হূদ ও সালিহ', ar: 'نوح وهود وصالح' },
      { en: 'Adam, Idris and Ayyub', bn: 'আদম, ইদরীস ও আইয়ুব', ar: 'آدم وإدريس وأيوب' },
      { en: 'Yahya, Isa and Zakariya', bn: 'ইয়াহইয়া, ঈসা ও যাকারিয়া', ar: 'يحيى وعيسى وزكريا' },
      { en: 'Ismail, Yunus and Lut', bn: 'ইসমাঈল, ইউনুস ও লূত', ar: 'إسماعيل ويونس ولوط' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And Ismail and Al-Yasa and Yunus and Lut — and all [of them] We favoured over the worlds." [Quran 6:86]',
      bn: '"আর ইসমাঈল, আল-ইয়াসা, ইউনুস ও লূত — তাদের প্রত্যেককে আমি বিশ্ববাসীর উপর শ্রেষ্ঠত্ব দিয়েছি।" [কুরআন ৬:৮৬]',
      ar: '"وَإِسْمَاعِيلَ وَالْيَسَعَ وَيُونُسَ وَلُوطًا ۚ وَكُلًّا فَضَّلْنَا عَلَى الْعَالَمِينَ" [الأنعام: 86]',
    },
  },
  {
    id: 'al-yasa-q4',
    question: {
      en: 'What does Allah say He did for Al-Yasa (AS) and the prophets named with him in 6:86?',
      bn: '৬:৮৬-এ আল্লাহ বলেছেন তিনি আল-ইয়াসা (আ.) ও তাঁর সাথে উল্লিখিত নবীদের জন্য কী করেছেন?',
      ar: 'ماذا قال الله إنه فعل لليسع عليه السلام ومن ذُكر معه في الآية 86 من الأنعام؟',
    },
    options: [
      { en: 'Gave each of them a kingdom', bn: 'প্রত্যেককে রাজত্ব দিয়েছেন', ar: 'آتى كلاً منهم ملكاً' },
      { en: 'Favoured them all over the worlds', bn: 'সবাইকে বিশ্ববাসীর উপর শ্রেষ্ঠত্ব দিয়েছেন', ar: 'فضّلهم جميعاً على العالمين' },
      { en: 'Made the wind obey them', bn: 'বাতাসকে তাঁদের অধীন করেছেন', ar: 'سخّر لهم الريح' },
      { en: 'Gave them great wealth', bn: 'তাঁদের অনেক সম্পদ দিয়েছেন', ar: 'آتاهم مالاً كثيراً' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"...and all [of them] We favoured over the worlds." [Quran 6:86]',
      bn: '"...তাদের প্রত্যেককে আমি বিশ্ববাসীর উপর শ্রেষ্ঠত্ব দিয়েছি।" [কুরআন ৬:৮৬]',
      ar: '"وَكُلًّا فَضَّلْنَا عَلَى الْعَالَمِينَ" [الأنعام: 86]',
    },
  },
  {
    id: 'al-yasa-q5',
    question: {
      en: 'According to 6:88, what would happen if the prophets had associated others with Allah?',
      bn: '৬:৮৮ অনুযায়ী, নবীরা যদি আল্লাহর সাথে শিরক করতেন তাহলে কী হতো?',
      ar: 'بحسب الآية 88 من الأنعام، ماذا يحدث لو أشرك الأنبياء بالله؟',
    },
    options: [
      { en: 'They would become kings', bn: 'তাঁরা রাজা হয়ে যেতেন', ar: 'لصاروا ملوكاً' },
      { en: 'Nothing would change', bn: 'কিছুই বদলাত না', ar: 'لم يتغير شيء' },
      { en: 'Whatever they were doing would become worthless', bn: 'তাঁরা যা করতেন সব বিনষ্ট হয়ে যেত', ar: 'لحبط عنهم ما كانوا يعملون' },
      { en: 'They would be given more miracles', bn: 'তাঁদের আরও মুজিযা দেওয়া হতো', ar: 'لأُعطوا معجزات أكثر' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"That is the guidance of Allah by which He guides whomever He wills of His servants. But if they had associated others with Allah, then worthless for them would be whatever they were doing." [Quran 6:88]',
      bn: '"এটিই আল্লাহর হেদায়াত, যার মাধ্যমে তিনি তাঁর বান্দাদের মধ্যে যাকে ইচ্ছা হেদায়াত দান করেন। আর যদি তারা শিরক করত, তাহলে তারা যা করত তা সব বিনষ্ট হয়ে যেত।" [কুরআন ৬:৮৮]',
      ar: '"ذَٰلِكَ هُدَى اللَّهِ يَهْدِي بِهِ مَن يَشَاءُ مِنْ عِبَادِهِ ۚ وَلَوْ أَشْرَكُوا لَحَبِطَ عَنْهُم مَّا كَانُوا يَعْمَلُونَ" [الأنعام: 88]',
    },
  },
];

export default quiz;
