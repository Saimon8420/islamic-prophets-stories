import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'yusuf-q1',
    question: {
      en: 'What did young Yusuf (AS) see prostrating to him in his dream?',
      bn: 'ছোট্ট ইউসুফ (আ.) স্বপ্নে কাদের তাঁকে সিজদা করতে দেখেছিলেন?',
      ar: 'ماذا رأى يوسف عليه السلام في منامه ساجداً له وهو صغير؟',
    },
    options: [
      { en: 'Seven cows and seven ears of grain', bn: 'সাতটি গরু ও সাতটি শীষ', ar: 'سبع بقرات وسبع سنبلات' },
      { en: 'Twelve birds', bn: 'বারোটি পাখি', ar: 'اثنا عشر طائراً' },
      { en: 'Eleven stars, the sun and the moon', bn: 'এগারোটি তারা, সূর্য ও চাঁদ', ar: 'أحد عشر كوكباً والشمس والقمر' },
      { en: 'Ten mountains and a river', bn: 'দশটি পাহাড় ও একটি নদী', ar: 'عشرة جبال ونهر' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"O my father, indeed I have seen eleven stars and the sun and the moon; I saw them prostrating to me." [Quran 12:4]',
      bn: '"হে আমার পিতা, আমি এগারোটি তারা, সূর্য ও চন্দ্র দেখেছি; আমি তাদের আমাকে সিজদা করতে দেখেছি।" [কুরআন ১২:৪]',
      ar: '"يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ" [يوسف: 4]',
    },
  },
  {
    id: 'yusuf-q2',
    question: {
      en: 'What did Allah reveal to Yusuf (AS) when his brothers put him in the well?',
      bn: 'ভাইয়েরা যখন ইউসুফ (আ.)-কে কূপে ফেলল, আল্লাহ তাঁকে কী জানিয়েছিলেন?',
      ar: 'بماذا أوحى الله إلى يوسف عليه السلام حين جعله إخوته في غيابة الجب؟',
    },
    options: [
      { en: 'That he would one day inform them of what they did', bn: 'একদিন সে তাদের এই কাজের কথা তাদের জানাবে', ar: 'أنه سينبّئهم بأمرهم هذا' },
      { en: 'That he should stay silent forever', bn: 'সে যেন চিরকাল চুপ থাকে', ar: 'أن يسكت إلى الأبد' },
      { en: 'That he would become a shepherd', bn: 'সে একজন রাখাল হবে', ar: 'أنه سيصير راعياً' },
      { en: 'That his father would come to rescue him', bn: 'তার বাবা এসে তাকে উদ্ধার করবেন', ar: 'أن أباه سيأتي لإنقاذه' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"We inspired to him, \'You will surely inform them about this affair of theirs while they do not perceive.\'" [Quran 12:15]',
      bn: '"আমি তার কাছে ওহী পাঠালাম, \'তুমি অবশ্যই তাদের এই কাজের কথা তাদের জানাবে যখন তারা বুঝতে পারবে না।\'" [কুরআন ১২:১৫]',
      ar: '"وَأَوْحَيْنَا إِلَيْهِ لَتُنَبِّئَنَّهُم بِأَمْرِهِمْ هَٰذَا وَهُمْ لَا يَشْعُرُونَ" [يوسف: 15]',
    },
  },
  {
    id: 'yusuf-q3',
    question: {
      en: 'What did Yusuf (AS) say when he was invited to do wrong in the minister\'s house?',
      bn: 'মন্ত্রীর ঘরে যখন ইউসুফ (আ.)-কে অন্যায়ের দিকে ডাকা হলো, তিনি কী বলেছিলেন?',
      ar: 'ماذا قال يوسف عليه السلام حين دُعي إلى المعصية في بيت العزيز؟',
    },
    options: [
      { en: '"Let me think about it"', bn: '"আমাকে ভেবে দেখতে দিন"', ar: '"دعيني أفكر"' },
      { en: '"I seek the refuge of Allah"', bn: '"আমি আল্লাহর কাছে আশ্রয় চাই"', ar: '"مَعَاذَ اللَّهِ"' },
      { en: '"Nobody will ever know"', bn: '"কেউ তো জানবে না"', ar: '"لن يعلم أحد"' },
      { en: '"I will tell the king"', bn: '"আমি রাজাকে বলে দেব"', ar: '"سأخبر الملك"' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"He said, \'I seek the refuge of Allah. Indeed, He is my master, who has made good my residence. Indeed, wrongdoers will not succeed.\'" [Quran 12:23]',
      bn: '"সে বলল, \'আমি আল্লাহর কাছে আশ্রয় চাই। তিনি আমার প্রভু, তিনি আমার থাকার ব্যবস্থা সুন্দর করেছেন। নিশ্চয়ই জালেমরা সফল হয় না।\'" [কুরআন ১২:২৩]',
      ar: '"قَالَ مَعَاذَ اللَّهِ ۖ إِنَّهُ رَبِّي أَحْسَنَ مَثْوَايَ ۖ إِنَّهُ لَا يُفْلِحُ الظَّالِمُونَ" [يوسف: 23]',
    },
  },
  {
    id: 'yusuf-q4',
    question: {
      en: 'In prison, what did Yusuf (AS) ask his two companions before interpreting their dreams?',
      bn: 'জেলখানায় স্বপ্নের ব্যাখ্যা দেওয়ার আগে ইউসুফ (আ.) দুই সঙ্গীকে কী প্রশ্ন করেছিলেন?',
      ar: 'ماذا سأل يوسف عليه السلام صاحبَي السجن قبل أن يفسّر رؤياهما؟',
    },
    options: [
      { en: '"Why were you put in prison?"', bn: '"তোমাদের জেলে দেওয়া হলো কেন?"', ar: '"لماذا سُجنتما؟"' },
      { en: '"How much will you pay me?"', bn: '"তোমরা আমাকে কত দেবে?"', ar: '"كم ستدفعان لي؟"' },
      { en: '"Who is your king?"', bn: '"তোমাদের রাজা কে?"', ar: '"من ملككما؟"' },
      { en: '"Are many different lords better, or Allah, the One, the Prevailing?"', bn: '"বহু ভিন্ন ভিন্ন রব ভালো, নাকি এক পরাক্রমশালী আল্লাহ?"', ar: '"أَأَرْبَابٌ مُّتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ الْوَاحِدُ الْقَهَّارُ"' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"O my two companions of prison, are many different lords better, or Allah, the One, the Prevailing?" [Quran 12:39]',
      bn: '"হে আমার দুই কারাসঙ্গী, বহু ভিন্ন ভিন্ন রব ভালো, নাকি এক পরাক্রমশালী আল্লাহ?" [কুরআন ১২:৩৯]',
      ar: '"يَا صَاحِبَيِ السِّجْنِ أَأَرْبَابٌ مُّتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ الْوَاحِدُ الْقَهَّارُ" [يوسف: 39]',
    },
  },
  {
    id: 'yusuf-q5',
    question: {
      en: 'What did Yusuf (AS) advise the people to do with the harvest of the seven good years?',
      bn: 'সাতটি ভালো বছরের ফসল নিয়ে ইউসুফ (আ.) কী করার পরামর্শ দিয়েছিলেন?',
      ar: 'بماذا نصح يوسف عليه السلام الناس في حصاد السنين السبع الخصبة؟',
    },
    options: [
      { en: 'Sell it all to other countries', bn: 'সব অন্য দেশে বিক্রি করে দাও', ar: 'أن يبيعوه كله للبلاد الأخرى' },
      { en: 'Eat as much as they like', bn: 'যত খুশি খেয়ে ফেলো', ar: 'أن يأكلوا منه ما شاؤوا' },
      { en: 'Leave it in its spikes, except a little to eat', bn: 'শীষসহ রেখে দাও, শুধু অল্প পরিমাণ খাও', ar: 'أن يذروه في سنبله إلا قليلاً مما يأكلون' },
      { en: 'Throw it into the river', bn: 'নদীতে ফেলে দাও', ar: 'أن يلقوه في النهر' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"You will plant for seven years consecutively; and what you harvest, leave in its spikes, except a little from which you will eat." [Quran 12:47]',
      bn: '"তোমরা সাত বছর একনাগাড়ে চাষ করবে; যা ফসল কাটবে তা শীষসহ রেখে দেবে, শুধু অল্প পরিমাণ খাবে।" [কুরআন ১২:৪৭]',
      ar: '"قَالَ تَزْرَعُونَ سَبْعَ سِنِينَ دَأَبًا فَمَا حَصَدتُّمْ فَذَرُوهُ فِي سُنبُلِهِ إِلَّا قَلِيلًا مِّمَّا تَأْكُلُونَ" [يوسف: 47]',
    },
  },
  {
    id: 'yusuf-q6',
    question: {
      en: 'Over what did Yusuf (AS) ask the king to appoint him?',
      bn: 'ইউসুফ (আ.) রাজাকে কিসের দায়িত্ব দিতে বলেছিলেন?',
      ar: 'على أي شيء طلب يوسف عليه السلام من الملك أن يجعله؟',
    },
    options: [
      { en: 'The storehouses of the land', bn: 'দেশের খাদ্যভাণ্ডার', ar: 'خزائن الأرض' },
      { en: 'The royal army', bn: 'রাজকীয় সেনাবাহিনী', ar: 'جيش الملك' },
      { en: 'The prisons of Egypt', bn: 'মিশরের কারাগারগুলো', ar: 'سجون مصر' },
      { en: 'The king\'s palace gardens', bn: 'রাজপ্রাসাদের বাগান', ar: 'حدائق قصر الملك' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"Appoint me over the storehouses of the land. Indeed, I will be a knowing guardian." [Quran 12:55]',
      bn: '"আমাকে দেশের খাদ্যভাণ্ডারের দায়িত্বে নিযুক্ত করুন। আমি বিশ্বস্ত রক্ষণাবেক্ষণকারী।" [কুরআন ১২:৫৫]',
      ar: '"قَالَ اجْعَلْنِي عَلَىٰ خَزَائِنِ الْأَرْضِ ۖ إِنِّي حَفِيظٌ عَلِيمٌ" [يوسف: 55]',
    },
  },
  {
    id: 'yusuf-q7',
    question: {
      en: 'What did Yusuf (AS) say to his brothers after they admitted their wrong?',
      bn: 'ভাইয়েরা নিজেদের ভুল স্বীকার করার পর ইউসুফ (আ.) তাদের কী বলেছিলেন?',
      ar: 'ماذا قال يوسف عليه السلام لإخوته بعد أن اعترفوا بخطئهم؟',
    },
    options: [
      { en: '"You will all be punished"', bn: '"তোমাদের সবাইকে শাস্তি পেতে হবে"', ar: '"ستُعاقَبون جميعاً"' },
      { en: '"Go back and never return"', bn: '"ফিরে যাও, আর কখনো এসো না"', ar: '"ارجعوا ولا تعودوا أبداً"' },
      { en: '"No blame will there be upon you today. Allah will forgive you"', bn: '"আজ তোমাদের কোনো তিরস্কার নেই। আল্লাহ তোমাদের ক্ষমা করুন"', ar: '"لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ ۖ يَغْفِرُ اللَّهُ لَكُمْ"' },
      { en: '"Pay me back for what you did"', bn: '"যা করেছ তার বদলা দাও"', ar: '"ادفعوا لي ثمن ما فعلتم"' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"He said, \'No blame will there be upon you today. Allah will forgive you; and He is the most merciful of the merciful.\'" [Quran 12:92]',
      bn: '"সে বলল, \'আজ তোমাদের কোনো তিরস্কার নেই। আল্লাহ তোমাদের ক্ষমা করুন; আর তিনি সব দয়ালুর চেয়ে বড় দয়ালু।\'" [কুরআন ১২:৯২]',
      ar: '"قَالَ لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ ۖ يَغْفِرُ اللَّهُ لَكُمْ ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ" [يوسف: 92]',
    },
  },
];

export default quiz;
