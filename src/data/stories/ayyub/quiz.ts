import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'ayyub-q1',
    question: {
      en: 'What did Ayyub (AS) say when he called upon his Lord in his hardship?',
      bn: 'কষ্টের সময় রবকে ডেকে আইয়ূব (আ.) কী বলেছিলেন?',
      ar: 'ماذا قال أيوب عليه السلام حين نادى ربه في بلائه؟',
    },
    options: [
      { en: '"Why have You done this to me?"', bn: '"আপনি আমার সাথে এমন করলেন কেন?"', ar: '"لماذا فعلت بي هذا؟"' },
      { en: '"Indeed, adversity has touched me, and You are the Most Merciful of the merciful"', bn: '"আমাকে কষ্ট স্পর্শ করেছে এবং আপনি সর্বশ্রেষ্ঠ দয়ালু"', ar: '"أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ"' },
      { en: '"Give me back my wealth at once"', bn: '"এখনই আমার সম্পদ ফিরিয়ে দিন"', ar: '"أعد إليّ مالي الآن"' },
      { en: 'He never made any du\'a', bn: 'তিনি কোনো দোয়াই করেননি', ar: 'لم يدعُ أبداً' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And [mention] Ayyub, when he called to his Lord, \'Indeed, adversity has touched me, and You are the Most Merciful of the merciful.\'" [Quran 21:83]',
      bn: '"এবং স্মরণ কর আইয়ূবকে, যখন সে তার রবকে ডেকে বলেছিল, \'আমাকে কষ্ট স্পর্শ করেছে এবং আপনি সর্বশ্রেষ্ঠ দয়ালু।\'" [কুরআন ২১:৮৩]',
      ar: '"وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ" [الأنبياء: 83]',
    },
  },
  {
    id: 'ayyub-q2',
    question: {
      en: 'In Surah Sad, to whom did Ayyub (AS) attribute the hardship that touched him?',
      bn: 'সূরা সোয়াদে আইয়ূব (আ.) তাঁকে স্পর্শ করা কষ্টকে কার দিকে সম্পর্কিত করেছিলেন?',
      ar: 'في سورة ص، إلى من نسب أيوب عليه السلام ما مسّه من نصب وعذاب؟',
    },
    options: [
      { en: 'To his neighbours', bn: 'প্রতিবেশীদের দিকে', ar: 'إلى جيرانه' },
      { en: 'To his family', bn: 'নিজের পরিবারের দিকে', ar: 'إلى أهله' },
      { en: 'To Satan', bn: 'শয়তানের দিকে', ar: 'إلى الشيطان' },
      { en: 'To bad luck', bn: 'দুর্ভাগ্যের দিকে', ar: 'إلى سوء الحظ' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And remember Our servant Ayyub, when he called to his Lord, \'Indeed, Satan has touched me with hardship and torment.\'" — out of good manners, he did not attribute the harm to Allah. [Quran 38:41]',
      bn: '"এবং স্মরণ কর আমার বান্দা আইয়ূবকে, যখন সে তার রবকে ডেকে বলেছিল, \'নিশ্চয়ই শয়তান আমাকে কষ্ট ও যন্ত্রণা দিয়ে স্পর্শ করেছে।\'" — আদবের কারণে তিনি কষ্টকে আল্লাহর দিকে সম্পর্কিত করেননি। [কুরআন ৩৮:৪১]',
      ar: '"وَاذْكُرْ عَبْدَنَا أَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الشَّيْطَانُ بِنُصْبٍ وَعَذَابٍ" — تأدّباً مع الله لم ينسب الضرّ إليه. [ص: 41]',
    },
  },
  {
    id: 'ayyub-q3',
    question: {
      en: 'What did Allah command Ayyub (AS) to do so that he would be healed?',
      bn: 'সুস্থ হওয়ার জন্য আল্লাহ আইয়ূব (আ.)-কে কী করতে বলেছিলেন?',
      ar: 'بماذا أمر الله أيوب عليه السلام ليُشفى؟',
    },
    options: [
      { en: 'Strike the ground with his foot', bn: 'পা দিয়ে মাটিতে আঘাত করতে', ar: 'أن يركض الأرض برجله' },
      { en: 'Travel to a faraway doctor', bn: 'দূরের কোনো চিকিৎসকের কাছে যেতে', ar: 'أن يسافر إلى طبيب بعيد' },
      { en: 'Climb a high mountain', bn: 'উঁচু পাহাড়ে উঠতে', ar: 'أن يصعد جبلاً عالياً' },
      { en: 'Fast for forty days', bn: 'চল্লিশ দিন রোজা রাখতে', ar: 'أن يصوم أربعين يوماً' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"Strike the ground with your foot; this is a cool bath and drink." [Quran 38:42]',
      bn: '"তোমার পা দিয়ে মাটিতে আঘাত কর; এটি শীতল গোসলের ও পানীয়ের পানি।" [কুরআন ৩৮:৪২]',
      ar: '"ارْكُضْ بِرِجْلِكَ ۖ هَٰذَا مُغْتَسَلٌ بَارِدٌ وَشَرَابٌ" [ص: 42]',
    },
  },
  {
    id: 'ayyub-q4',
    question: {
      en: 'After Allah responded to Ayyub (AS), what did He give back to him?',
      bn: 'আল্লাহ আইয়ূব (আ.)-এর ডাকে সাড়া দেওয়ার পর তাঁকে কী ফিরিয়ে দিয়েছিলেন?',
      ar: 'بعد أن استجاب الله لأيوب عليه السلام، ماذا ردّ عليه؟',
    },
    options: [
      { en: 'A kingdom and an army', bn: 'একটি রাজ্য ও সেনাবাহিনী', ar: 'ملكاً وجيشاً' },
      { en: 'Only his health, nothing else', bn: 'শুধু স্বাস্থ্য, আর কিছু নয়', ar: 'صحته فقط لا غير' },
      { en: 'A palace of gold', bn: 'সোনার একটি প্রাসাদ', ar: 'قصراً من ذهب' },
      { en: 'His family, and the like thereof with them', bn: 'তাঁর পরিবার, এবং তাদের সাথে অনুরূপ আরও', ar: 'أهله ومثلهم معهم' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"So We responded to him and removed what afflicted him of adversity. And We gave him back his family and the like thereof with them as mercy from Us and a reminder for the worshippers of Allah." [Quran 21:84]',
      bn: '"তখন আমি তার ডাকে সাড়া দিলাম এবং তার যে কষ্ট ছিল তা দূর করলাম। আমি তাকে তার পরিবার ফিরিয়ে দিলাম এবং তাদের সাথে অনুরূপ আরও দিলাম।" [কুরআন ২১:৮৪]',
      ar: '"فَاسْتَجَبْنَا لَهُ فَكَشَفْنَا مَا بِهِ مِن ضُرٍّ ۖ وَآتَيْنَاهُ أَهْلَهُ وَمِثْلَهُم مَّعَهُمْ" [الأنبياء: 84]',
    },
  },
  {
    id: 'ayyub-q5',
    question: {
      en: 'How did Allah describe Ayyub (AS) in Surah Sad?',
      bn: 'সূরা সোয়াদে আল্লাহ আইয়ূব (আ.)-কে কীভাবে বর্ণনা করেছেন?',
      ar: 'بماذا وصف الله أيوب عليه السلام في سورة ص؟',
    },
    options: [
      { en: 'Patient, an excellent servant, always turning back to Allah', bn: 'ধৈর্যশীল, উত্তম বান্দা, বারবার আল্লাহর দিকে প্রত্যাবর্তনকারী', ar: 'صابراً، نعم العبد، أوّاباً' },
      { en: 'The richest man on earth', bn: 'পৃথিবীর সবচেয়ে ধনী মানুষ', ar: 'أغنى رجل في الأرض' },
      { en: 'A mighty king', bn: 'একজন পরাক্রমশালী রাজা', ar: 'ملكاً قوياً' },
      { en: 'A famous poet', bn: 'একজন বিখ্যাত কবি', ar: 'شاعراً مشهوراً' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"Indeed, We found him patient — an excellent servant. Indeed, he was one who repeatedly turned back [to Allah]." [Quran 38:44]',
      bn: '"নিশ্চয়ই আমি তাকে ধৈর্যশীল পেয়েছি — কতই না উত্তম বান্দা। নিশ্চয়ই সে ছিল আল্লাহর দিকে বারবার প্রত্যাবর্তনকারী।" [কুরআন ৩৮:৪৪]',
      ar: '"إِنَّا وَجَدْنَاهُ صَابِرًا ۚ نِّعْمَ الْعَبْدُ ۖ إِنَّهُ أَوَّابٌ" [ص: 44]',
    },
  },
  {
    id: 'ayyub-q6',
    question: {
      en: 'According to Surah Az-Zumar, how will the patient be rewarded?',
      bn: 'সূরা আয-যুমার অনুযায়ী ধৈর্যশীলদের কীভাবে পুরস্কার দেওয়া হবে?',
      ar: 'بحسب سورة الزمر، كيف يُجزى الصابرون؟',
    },
    options: [
      { en: 'Only in this world', bn: 'শুধু দুনিয়াতে', ar: 'في الدنيا فقط' },
      { en: 'With a small, fixed amount', bn: 'অল্প, নির্দিষ্ট পরিমাণে', ar: 'بقدر قليل محدود' },
      { en: 'Their reward will be given without account', bn: 'তাদের পুরস্কার দেওয়া হবে হিসাব ছাড়াই', ar: 'يُوفَّون أجرهم بغير حساب' },
      { en: 'They will not be rewarded', bn: 'তাদের কোনো পুরস্কার নেই', ar: 'لا أجر لهم' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"Indeed, the patient will be given their reward without account." [Quran 39:10]',
      bn: '"নিশ্চয়ই ধৈর্যশীলদের তাদের পুরস্কার দেওয়া হবে হিসাব ছাড়াই।" [কুরআন ৩৯:১০]',
      ar: '"إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ" [الزمر: 10]',
    },
  },
];

export default quiz;
