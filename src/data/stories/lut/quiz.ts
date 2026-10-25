import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'lut-q1',
    question: {
      en: 'Whose message did Lut (AS) believe in before he migrated?',
      bn: 'হিজরতের আগে লূত (আ.) কার বার্তায় ঈমান এনেছিলেন?',
      ar: 'بمن آمن لوط عليه السلام قبل أن يهاجر؟',
    },
    options: [
      { en: 'Nuh (AS)', bn: 'নূহ (আ.)', ar: 'نوح عليه السلام' },
      { en: 'Hud (AS)', bn: 'হুদ (আ.)', ar: 'هود عليه السلام' },
      { en: 'Ibrahim (AS)', bn: 'ইবরাহীম (আ.)', ar: 'إبراهيم عليه السلام' },
      { en: 'Shuayb (AS)', bn: 'শুআইব (আ.)', ar: 'شعيب عليه السلام' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And Lut believed him. [Ibrahim] said, \'Indeed, I will emigrate to [the service of] my Lord. Indeed, He is the Exalted in Might, the Wise.\'" [Quran 29:26]',
      bn: '"আর লূত তাঁর প্রতি ঈমান আনলেন। ইবরাহীম বললেন, \'আমি আমার রবের দিকে হিজরত করছি। নিশ্চয়ই তিনি মহাপরাক্রমশালী, প্রজ্ঞাময়।\'" [কুরআন ২৯:২৬]',
      ar: '"فَآمَنَ لَهُ لُوطٌ ۘ وَقَالَ إِنِّي مُهَاجِرٌ إِلَىٰ رَبِّي ۖ إِنَّهُ هُوَ الْعَزِيزُ الْحَكِيمُ" [العنكبوت: 26]',
    },
  },
  {
    id: 'lut-q2',
    question: {
      en: 'What payment did Lut (AS) ask his people for his message?',
      bn: 'বার্তা পৌঁছানোর বিনিময়ে লূত (আ.) তাঁর জাতির কাছে কী প্রতিদান চেয়েছিলেন?',
      ar: 'ما الأجر الذي طلبه لوط عليه السلام من قومه؟',
    },
    options: [
      { en: 'None — his payment was only from the Lord of the worlds', bn: 'কিছুই না — তাঁর প্রতিদান কেবল বিশ্বজগতের রবের কাছে', ar: 'لا شيء — أجره على رب العالمين' },
      { en: 'A house in the city', bn: 'শহরে একটি বাড়ি', ar: 'بيتاً في المدينة' },
      { en: 'Leadership of the town', bn: 'শহরের নেতৃত্ব', ar: 'زعامة القرية' },
      { en: 'Half of their wealth', bn: 'তাদের অর্ধেক সম্পদ', ar: 'نصف أموالهم' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"So fear Allah and obey me. And I do not ask you for it any payment. My payment is only from the Lord of the worlds." [Quran 26:163-164]',
      bn: '"সুতরাং আল্লাহকে ভয় করো এবং আমার আনুগত্য করো। আমি এর জন্য তোমাদের কাছে কোনো প্রতিদান চাই না। আমার প্রতিদান কেবল বিশ্বজগতের রবের কাছে।" [কুরআন ২৬:১৬৩-১৬৪]',
      ar: '"فَاتَّقُوا اللَّهَ وَأَطِيعُونِ وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِيَ إِلَّا عَلَىٰ رَبِّ الْعَالَمِينَ" [الشعراء: 163-164]',
    },
  },
  {
    id: 'lut-q3',
    question: {
      en: 'How did Lut\'s people answer when he warned them?',
      bn: 'লূত (আ.) সতর্ক করলে তাঁর জাতি কী উত্তর দিয়েছিল?',
      ar: 'بماذا أجاب قوم لوط حين حذّرهم؟',
    },
    options: [
      { en: '"We will repent tomorrow"', bn: '"আমরা কাল তওবা করব"', ar: '"سنتوب غداً"' },
      { en: '"Show us a she-camel as a sign"', bn: '"নিদর্শন হিসেবে একটি উটনী দেখাও"', ar: '"أرنا ناقة آية"' },
      { en: '"We will follow you"', bn: '"আমরা তোমাকে অনুসরণ করব"', ar: '"سنتبعك"' },
      { en: '"Bring us the punishment of Allah, if you should be of the truthful"', bn: '"আল্লাহর আযাব নিয়ে এসো, যদি তুমি সত্যবাদী হও"', ar: '"ائْتِنَا بِعَذَابِ اللَّهِ إِن كُنتَ مِنَ الصَّادِقِينَ"' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And the answer of his people was not but they said, \'Bring us the punishment of Allah, if you should be of the truthful.\'" [Quran 29:29]',
      bn: '"তার জাতির উত্তর কেবল এই ছিল যে তারা বলল, \'আল্লাহর আযাব নিয়ে এসো, যদি তুমি সত্যবাদী হও।\'" [কুরআন ২৯:২৯]',
      ar: '"فَمَا كَانَ جَوَابَ قَوْمِهِ إِلَّا أَن قَالُوا ائْتِنَا بِعَذَابِ اللَّهِ إِن كُنتَ مِنَ الصَّادِقِينَ" [العنكبوت: 29]',
    },
  },
  {
    id: 'lut-q4',
    question: {
      en: 'What reason did Lut\'s people give for wanting to expel his family?',
      bn: 'লূত (আ.)-এর পরিবারকে বের করে দিতে চাওয়ার পেছনে তারা কী কারণ বলেছিল?',
      ar: 'ما السبب الذي ذكره قوم لوط لإخراج آل لوط؟',
    },
    options: [
      { en: '"They are too poor"', bn: '"ওরা খুব গরিব"', ar: '"إنهم فقراء جداً"' },
      { en: '"They are people who keep themselves pure"', bn: '"তারা এমন লোক যারা পবিত্র থাকতে চায়"', ar: '"إِنَّهُمْ أُنَاسٌ يَتَطَهَّرُونَ"' },
      { en: '"They are foreigners"', bn: '"ওরা বিদেশি"', ar: '"إنهم غرباء"' },
      { en: '"They stole from us"', bn: '"ওরা আমাদের জিনিস চুরি করেছে"', ar: '"إنهم سرقونا"' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"But the answer of his people was not except that they said, \'Expel the family of Lut from your city. Indeed, they are people who keep themselves pure.\'" [Quran 27:56]',
      bn: '"কিন্তু তার জাতির উত্তর কেবল এই ছিল যে তারা বলল, \'লূতের পরিবারকে তোমাদের শহর থেকে বের করে দাও। তারা তো এমন লোক যারা পবিত্র থাকতে চায়।\'" [কুরআন ২৭:৫৬]',
      ar: '"فَمَا كَانَ جَوَابَ قَوْمِهِ إِلَّا أَن قَالُوا أَخْرِجُوا آلَ لُوطٍ مِّن قَرْيَتِكُمْ ۖ إِنَّهُمْ أُنَاسٌ يَتَطَهَّرُونَ" [النمل: 56]',
    },
  },
  {
    id: 'lut-q5',
    question: {
      en: 'What did the angels command Lut (AS) to do?',
      bn: 'ফেরেশতারা লূত (আ.)-কে কী করতে আদেশ দিয়েছিলেন?',
      ar: 'بماذا أمرت الملائكة لوطاً عليه السلام؟',
    },
    options: [
      { en: 'Fight the people of the town', bn: 'শহরের লোকদের সাথে যুদ্ধ করতে', ar: 'أن يقاتل أهل القرية' },
      { en: 'Build a ship', bn: 'একটি নৌকা বানাতে', ar: 'أن يصنع سفينة' },
      { en: 'Set out with his family during the night, and let none of them look back', bn: 'রাতের একাংশে পরিবার নিয়ে বের হতে, আর কেউ যেন পিছনে না তাকায়', ar: 'أن يسري بأهله بقطع من الليل ولا يلتفت منهم أحد' },
      { en: 'Stay inside his house for three days', bn: 'তিন দিন ঘরের ভেতরে থাকতে', ar: 'أن يبقى في بيته ثلاثة أيام' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"O Lut, indeed we are messengers of your Lord; they will never reach you. So set out with your family during a portion of the night and let not any among you look back — except your wife." [Quran 11:81]',
      bn: '"হে লূত, আমরা তোমার রবের দূত; তারা কখনো তোমার কাছে পৌঁছতে পারবে না। সুতরাং রাতের একাংশে তোমার পরিবারকে নিয়ে বের হও এবং তোমাদের কেউ যেন পিছনে না তাকায় — তোমার স্ত্রী ব্যতীত।" [কুরআন ১১:৮১]',
      ar: '"قَالُوا يَا لُوطُ إِنَّا رُسُلُ رَبِّكَ لَن يَصِلُوا إِلَيْكَ ۖ فَأَسْرِ بِأَهْلِكَ بِقِطْعٍ مِّنَ اللَّيْلِ وَلَا يَلْتَفِتْ مِنكُمْ أَحَدٌ إِلَّا امْرَأَتَكَ" [هود: 81]',
    },
  },
  {
    id: 'lut-q6',
    question: {
      en: 'Who from Lut\'s family was NOT saved?',
      bn: 'লূত (আ.)-এর পরিবারের কে রক্ষা পায়নি?',
      ar: 'من الذي لم ينجُ من أهل لوط؟',
    },
    options: [
      { en: 'His daughters', bn: 'তাঁর কন্যারা', ar: 'بناته' },
      { en: 'His guests', bn: 'তাঁর মেহমানরা', ar: 'ضيوفه' },
      { en: 'His uncle', bn: 'তাঁর চাচা', ar: 'عمه' },
      { en: 'His wife', bn: 'তাঁর স্ত্রী', ar: 'امرأته' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"So We saved him and his family, except for his wife; she was of those who remained behind." [Quran 7:83]',
      bn: '"অতঃপর আমি তাঁকে ও তাঁর পরিবারকে রক্ষা করলাম, তাঁর স্ত্রী ব্যতীত; সে ছিল পিছনে থেকে যাওয়াদের অন্তর্ভুক্ত।" [কুরআন ৭:৮৩]',
      ar: '"فَأَنجَيْنَاهُ وَأَهْلَهُ إِلَّا امْرَأَتَهُ كَانَتْ مِنَ الْغَابِرِينَ" [الأعراف: 83]',
    },
  },
  {
    id: 'lut-q7',
    question: {
      en: 'According to the Prophet ﷺ, in whom did Lut (AS) take refuge as his "strong support"?',
      bn: 'নবী ﷺ-এর কথা অনুযায়ী লূত (আ.) কার কাছে "মজবুত আশ্রয়" নিতেন?',
      ar: 'بحسب قول النبي ﷺ، إلى أي "ركن شديد" كان يأوي لوط عليه السلام؟',
    },
    options: [
      { en: 'His tribe', bn: 'তাঁর গোত্র', ar: 'قبيلته' },
      { en: 'Allah', bn: 'আল্লাহ', ar: 'الله' },
      { en: 'A strong fortress', bn: 'একটি মজবুত দুর্গ', ar: 'حصن منيع' },
      { en: 'The king of the land', bn: 'দেশের রাজা', ar: 'ملك البلاد' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The Prophet ﷺ said: "May Allah have mercy on Lut. He used to take refuge in a strong support (i.e., Allah)." [Sahih al-Bukhari 4726]',
      bn: 'নবী ﷺ বলেছেন: "আল্লাহ লূতের উপর রহম করুন। তিনি একটি শক্ত আশ্রয়ে (অর্থাৎ আল্লাহ) আশ্রয় নিতেন।" [সহীহ বুখারী ৪৭২৬]',
      ar: 'قال النبي ﷺ: "رحمة الله على لوط، لقد كان يأوي إلى ركن شديد" يعني الله. [صحيح البخاري 4726]',
    },
  },
];

export default quiz;
