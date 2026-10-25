import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'zakariya-q1',
    question: {
      en: 'When Zakariya (AS) asked Maryam where her food came from, what did she say?',
      bn: 'যাকারিয়া (আ.) যখন মারইয়ামকে জিজ্ঞেস করলেন তাঁর খাবার কোথা থেকে আসে, তিনি কী বলেছিলেন?',
      ar: 'حين سأل زكريا عليه السلام مريم من أين يأتيها الرزق، ماذا قالت؟',
    },
    options: [
      { en: '"It is from Allah"', bn: '"এটা আল্লাহর পক্ষ থেকে"', ar: '"هو من عند الله"' },
      { en: '"My mother brought it"', bn: '"আমার মা এনেছেন"', ar: '"أحضرته أمي"' },
      { en: '"The people of the Temple brought it"', bn: '"মসজিদের লোকেরা এনেছে"', ar: '"أحضره أهل المعبد"' },
      { en: '"I grew it in a garden"', bn: '"আমি বাগানে ফলিয়েছি"', ar: '"زرعته في بستان"' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"She said, \'It is from Allah. Indeed, Allah provides for whom He wills without account.\'" [Quran 3:37]',
      bn: '"সে বলত, \'এটা আল্লাহর পক্ষ থেকে। নিশ্চয়ই আল্লাহ যাকে ইচ্ছা হিসাব ছাড়া রিযিক দান করেন।\'" [কুরআন ৩:৩৭]',
      ar: '"قَالَتْ هُوَ مِنْ عِندِ اللَّهِ ۖ إِنَّ اللَّهَ يَرْزُقُ مَن يَشَاءُ بِغَيْرِ حِسَابٍ" [آل عمران: 37]',
    },
  },
  {
    id: 'zakariya-q2',
    question: {
      en: 'How did Zakariya (AS) call upon his Lord, according to Surah Maryam?',
      bn: 'সূরা মারইয়াম অনুযায়ী যাকারিয়া (আ.) কীভাবে তাঁর রবকে ডেকেছিলেন?',
      ar: 'كيف نادى زكريا عليه السلام ربه كما في سورة مريم؟',
    },
    options: [
      { en: 'Loudly in front of the people', bn: 'মানুষের সামনে উঁচু গলায়', ar: 'بصوت عالٍ أمام الناس' },
      { en: 'By writing a letter', bn: 'চিঠি লিখে', ar: 'بكتابة رسالة' },
      { en: 'With a private, quiet call', bn: 'গোপনে, চুপিচুপি', ar: 'نداءً خفياً' },
      { en: 'Through another prophet', bn: 'অন্য এক নবীর মাধ্যমে', ar: 'عن طريق نبي آخر' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"When he called to his Lord a private supplication." [Quran 19:3]',
      bn: '"যখন তিনি তাঁর রবকে গোপনে ডাকলেন।" [কুরআন ১৯:৩]',
      ar: '"إِذْ نَادَىٰ رَبَّهُ نِدَاءً خَفِيًّا" [مريم: 3]',
    },
  },
  {
    id: 'zakariya-q3',
    question: {
      en: 'What was special about the name Yahya?',
      bn: 'ইয়াহইয়া নামটির বিশেষত্ব কী ছিল?',
      ar: 'ما الذي ميّز اسم يحيى؟',
    },
    options: [
      { en: 'It was the name of his grandfather', bn: 'এটা তাঁর দাদার নাম ছিল', ar: 'كان اسم جده' },
      { en: 'Zakariya chose it after a long search', bn: 'যাকারিয়া অনেক ভেবে নামটি বেছেছিলেন', ar: 'اختاره زكريا بعد بحث طويل' },
      { en: 'The people of the Temple chose it', bn: 'মসজিদের লোকেরা নামটি রেখেছিল', ar: 'اختاره أهل المعبد' },
      { en: 'Allah chose it, and no one had been given it before', bn: 'আল্লাহ নিজে নামটি দিয়েছিলেন, আর এর আগে কারো এই নাম ছিল না', ar: 'اختاره الله، ولم يُسمَّ به أحد من قبل' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"O Zakariya, indeed We give you good tidings of a boy whose name will be Yahya. We have not assigned to any before [this] name." [Quran 19:7]',
      bn: '"হে যাকারিয়া, আমি তোমাকে একটি পুত্রের সুসংবাদ দিচ্ছি, তার নাম হবে ইয়াহইয়া। এই নাম আমি এর আগে কাউকে দিইনি।" [কুরআন ১৯:৭]',
      ar: '"يَا زَكَرِيَّا إِنَّا نُبَشِّرُكَ بِغُلَامٍ اسْمُهُ يَحْيَىٰ لَمْ نَجْعَل لَّهُ مِن قَبْلُ سَمِيًّا" [مريم: 7]',
    },
  },
  {
    id: 'zakariya-q4',
    question: {
      en: 'When Zakariya (AS) wondered how he could have a son, what did Allah remind him of?',
      bn: 'যাকারিয়া (আ.) যখন ভাবলেন কীভাবে তাঁর পুত্র হবে, আল্লাহ তাঁকে কী মনে করিয়ে দিলেন?',
      ar: 'حين تعجّب زكريا عليه السلام كيف يكون له ولد، بماذا ذكّره الله؟',
    },
    options: [
      { en: 'That his wife was still young', bn: 'তাঁর স্ত্রী তখনও তরুণী', ar: 'أن زوجته ما زالت شابة' },
      { en: 'That He created Zakariya before, when he was nothing', bn: 'যাকারিয়া যখন কিছুই ছিলেন না, তখন আল্লাহই তাঁকে সৃষ্টি করেছেন', ar: 'أنه خلقه من قبل ولم يكُ شيئاً' },
      { en: 'That he would have to wait many years', bn: 'তাঁকে অনেক বছর অপেক্ষা করতে হবে', ar: 'أن عليه أن ينتظر سنوات طويلة' },
      { en: 'That the child would be adopted', bn: 'সন্তানটি দত্তক নেওয়া হবে', ar: 'أن الولد سيكون بالتبني' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"Your Lord says, \'It is easy for Me, for I created you before, while you were nothing.\'" [Quran 19:9]',
      bn: '"তোমার রব বলেন, এটা আমার জন্য সহজ, কারণ আমি তোমাকে ইতোপূর্বে সৃষ্টি করেছি যখন তুমি কিছুই ছিলে না।" [কুরআন ১৯:৯]',
      ar: '"قَالَ كَذَٰلِكَ قَالَ رَبُّكَ هُوَ عَلَيَّ هَيِّنٌ وَقَدْ خَلَقْتُكَ مِن قَبْلُ وَلَمْ تَكُ شَيْئًا" [مريم: 9]',
    },
  },
  {
    id: 'zakariya-q5',
    question: {
      en: 'What was the sign Allah gave to Zakariya (AS)?',
      bn: 'আল্লাহ যাকারিয়া (আ.)-কে কী নিদর্শন দিয়েছিলেন?',
      ar: 'ما الآية التي جعلها الله لزكريا عليه السلام؟',
    },
    options: [
      { en: 'A star appeared in the sky', bn: 'আকাশে একটি তারা দেখা দিল', ar: 'ظهر نجم في السماء' },
      { en: 'His white hair turned black', bn: 'তাঁর সাদা চুল কালো হয়ে গেল', ar: 'عاد شعره الأبيض أسود' },
      { en: 'He could not speak to people for three nights while healthy', bn: 'সুস্থ থেকেও তিন রাত মানুষের সাথে কথা বলতে পারেননি', ar: 'ألّا يكلّم الناس ثلاث ليالٍ وهو سليم' },
      { en: 'Food came down from the sky', bn: 'আকাশ থেকে খাবার নামল', ar: 'نزل طعام من السماء' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"Your sign is that you will not speak to the people for three nights, being sound." [Quran 19:10]',
      bn: '"তোমার নিদর্শন হলো তুমি তিন রাত মানুষের সাথে কথা বলতে পারবে না, অথচ তুমি সুস্থ থাকবে।" [কুরআন ১৯:১০]',
      ar: '"قَالَ آيَتُكَ أَلَّا تُكَلِّمَ النَّاسَ ثَلَاثَ لَيَالٍ سَوِيًّا" [مريم: 10]',
    },
  },
  {
    id: 'zakariya-q6',
    question: {
      en: 'When Zakariya (AS) came out of the prayer chamber, what did he signal to his people?',
      bn: 'ইবাদতের কামরা থেকে বেরিয়ে যাকারিয়া (আ.) ইশারায় লোকদের কী বলেছিলেন?',
      ar: 'حين خرج زكريا عليه السلام من المحراب، بماذا أشار إلى قومه؟',
    },
    options: [
      { en: 'To glorify Allah morning and evening', bn: 'সকাল-সন্ধ্যা আল্লাহর তাসবীহ করতে', ar: 'أن يسبّحوا بكرة وعشياً' },
      { en: 'To go home and rest', bn: 'বাড়ি গিয়ে বিশ্রাম নিতে', ar: 'أن يعودوا إلى بيوتهم ويرتاحوا' },
      { en: 'To prepare a big feast', bn: 'বড় ভোজের আয়োজন করতে', ar: 'أن يعدّوا وليمة كبيرة' },
      { en: 'To leave the city', bn: 'শহর ছেড়ে চলে যেতে', ar: 'أن يغادروا المدينة' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"So he came out to his people from the prayer chamber and signalled to them to exalt [Allah] in the morning and afternoon." [Quran 19:11]',
      bn: '"তারপর তিনি কামরা থেকে বেরিয়ে তার সম্প্রদায়ের কাছে এলেন এবং ইশারায় তাদের সকাল-সন্ধ্যায় তাসবীহ করতে বললেন।" [কুরআন ১৯:১১]',
      ar: '"فَخَرَجَ عَلَىٰ قَوْمِهِ مِنَ الْمِحْرَابِ فَأَوْحَىٰ إِلَيْهِمْ أَن سَبِّحُوا بُكْرَةً وَعَشِيًّا" [مريم: 11]',
    },
  },
];

export default quiz;
