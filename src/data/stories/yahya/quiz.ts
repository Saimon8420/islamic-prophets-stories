import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'yahya-q1',
    question: {
      en: 'What did Allah command Yahya (AS) to do with the Scripture?',
      bn: 'আল্লাহ ইয়াহইয়া (আ.)-কে কিতাবের ব্যাপারে কী আদেশ দিয়েছিলেন?',
      ar: 'بماذا أمر الله يحيى عليه السلام في شأن الكتاب؟',
    },
    options: [
      { en: 'Keep it hidden in the Temple', bn: 'মসজিদে লুকিয়ে রাখতে', ar: 'أن يخفيه في المعبد' },
      { en: 'Take it with determination', bn: 'দৃঢ়ভাবে ধারণ করতে', ar: 'أن يأخذه بقوة' },
      { en: 'Read it only on special days', bn: 'শুধু বিশেষ দিনে পড়তে', ar: 'أن يقرأه في الأيام الخاصة فقط' },
      { en: 'Give it to the king', bn: 'রাজাকে দিয়ে দিতে', ar: 'أن يعطيه للملك' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"O Yahya, take the Scripture with determination." [Quran 19:12]',
      bn: '"হে ইয়াহইয়া, কিতাবকে দৃঢ়ভাবে ধারণ করো।" [কুরআন ১৯:১২]',
      ar: '"يَا يَحْيَىٰ خُذِ الْكِتَابَ بِقُوَّةٍ" [مريم: 12]',
    },
  },
  {
    id: 'yahya-q2',
    question: {
      en: 'When did Allah give Yahya (AS) judgement and wisdom?',
      bn: 'আল্লাহ ইয়াহইয়া (আ.)-কে কখন বিচারবুদ্ধি ও প্রজ্ঞা দিয়েছিলেন?',
      ar: 'متى آتى الله يحيى عليه السلام الحكم؟',
    },
    options: [
      { en: 'When he was forty years old', bn: 'চল্লিশ বছর বয়সে', ar: 'حين بلغ الأربعين' },
      { en: 'After his father passed away', bn: 'বাবার মৃত্যুর পর', ar: 'بعد وفاة أبيه' },
      { en: 'When he became a king', bn: 'রাজা হওয়ার পর', ar: 'حين صار ملكاً' },
      { en: 'While he was still a boy', bn: 'বালক অবস্থাতেই', ar: 'وهو صبي' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And We gave him judgement [while yet] a boy." [Quran 19:12]',
      bn: '"আর আমি তাকে বালক অবস্থায়ই বিচারবুদ্ধি দান করেছিলাম।" [কুরআন ১৯:১২]',
      ar: '"وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا" [مريم: 12]',
    },
  },
  {
    id: 'yahya-q3',
    question: {
      en: 'How does the Quran describe Yahya (AS) towards his parents?',
      bn: 'কুরআন পিতামাতার প্রতি ইয়াহইয়া (আ.)-এর আচরণ কীভাবে বর্ণনা করেছে?',
      ar: 'كيف وصف القرآن يحيى عليه السلام مع والديه؟',
    },
    options: [
      { en: 'Dutiful to them, and not a disobedient tyrant', bn: 'তাঁদের প্রতি অনুগত, অবাধ্য স্বেচ্ছাচারী নন', ar: 'برّاً بهما، ولم يكن جباراً عصياً' },
      { en: 'He lived far away from them', bn: 'তিনি তাঁদের থেকে দূরে থাকতেন', ar: 'كان يعيش بعيداً عنهما' },
      { en: 'He rarely spoke to them', bn: 'তাঁদের সাথে খুব কম কথা বলতেন', ar: 'كان قليل الكلام معهما' },
      { en: 'The Quran does not mention it', bn: 'কুরআনে এর উল্লেখ নেই', ar: 'لم يذكر القرآن ذلك' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And [he was] dutiful to his parents, and he was not a disobedient tyrant." [Quran 19:14]',
      bn: '"সে ছিল তার পিতামাতার প্রতি অনুগত, এবং সে ছিল না অবাধ্য স্বেচ্ছাচারী।" [কুরআন ১৯:১৪]',
      ar: '"وَبَرًّا بِوَالِدَيْهِ وَلَمْ يَكُن جَبَّارًا عَصِيًّا" [مريم: 14]',
    },
  },
  {
    id: 'yahya-q4',
    question: {
      en: 'Which qualities did the angels mention when they gave Zakariya the good news of Yahya?',
      bn: 'ইয়াহইয়ার সুসংবাদ দেওয়ার সময় ফেরেশতারা তাঁর কোন গুণগুলোর কথা বলেছিলেন?',
      ar: 'ما الصفات التي ذكرتها الملائكة حين بشّرت زكريا بيحيى؟',
    },
    options: [
      { en: 'Rich, famous and powerful', bn: 'ধনী, বিখ্যাত ও ক্ষমতাশালী', ar: 'غنياً مشهوراً قوياً' },
      { en: 'A great warrior and a king', bn: 'মহান যোদ্ধা ও রাজা', ar: 'محارباً عظيماً وملكاً' },
      { en: 'Noble, chaste, and a prophet from among the righteous', bn: 'নেতা, সংযমী এবং সৎকর্মশীলদের মধ্য থেকে একজন নবী', ar: 'سيداً وحصوراً ونبياً من الصالحين' },
      { en: 'A builder and a traveller', bn: 'নির্মাতা ও পর্যটক', ar: 'بنّاءً ورحّالة' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"Indeed, Allah gives you good tidings of Yahya, confirming a word from Allah and [who will be] noble, abstaining [from women], and a prophet from among the righteous." [Quran 3:39]',
      bn: '"নিশ্চয়ই আল্লাহ তোমাকে ইয়াহইয়ার সুসংবাদ দিচ্ছেন, যে আল্লাহর পক্ষ থেকে একটি কালিমার সত্যায়নকারী হবে, নেতা হবে, সংযমী হবে এবং সৎকর্মশীলদের মধ্য থেকে একজন নবী হবে।" [কুরআন ৩:৩৯]',
      ar: '"أَنَّ اللَّهَ يُبَشِّرُكَ بِيَحْيَىٰ مُصَدِّقًا بِكَلِمَةٍ مِّنَ اللَّهِ وَسَيِّدًا وَحَصُورًا وَنَبِيًّا مِّنَ الصَّالِحِينَ" [آل عمران: 39]',
    },
  },
  {
    id: 'yahya-q5',
    question: {
      en: 'On which three days did Allah send peace upon Yahya (AS)?',
      bn: 'আল্লাহ কোন তিন দিনে ইয়াহইয়া (আ.)-এর উপর শান্তির কথা বলেছেন?',
      ar: 'في أي الأيام الثلاثة جعل الله السلام على يحيى عليه السلام؟',
    },
    options: [
      { en: 'The days of his first prayer, fast and Hajj', bn: 'প্রথম নামাজ, রোজা ও হজের দিন', ar: 'يوم أول صلاة وصيام وحج' },
      { en: 'The day he was born, the day he dies, and the day he is raised alive', bn: 'যেদিন জন্মেছেন, যেদিন মারা যাবেন এবং যেদিন জীবিত করে ওঠানো হবে', ar: 'يوم وُلد ويوم يموت ويوم يُبعث حياً' },
      { en: 'The days he met three prophets', bn: 'যেদিন তিনি তিনজন নবীর সাথে দেখা করেন', ar: 'الأيام التي لقي فيها ثلاثة أنبياء' },
      { en: 'Every Friday of his life', bn: 'জীবনের প্রতিটি শুক্রবার', ar: 'كل يوم جمعة من حياته' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And peace be upon him the day he was born and the day he dies and the day he is raised alive." [Quran 19:15]',
      bn: '"তার উপর শান্তি — যেদিন সে জন্মগ্রহণ করেছে, যেদিন সে মৃত্যুবরণ করবে এবং যেদিন তাকে জীবিত করে উত্থিত করা হবে।" [কুরআন ১৯:১৫]',
      ar: '"وَسَلَامٌ عَلَيْهِ يَوْمَ وُلِدَ وَيَوْمَ يَمُوتُ وَيَوْمَ يُبْعَثُ حَيًّا" [مريم: 15]',
    },
  },
  {
    id: 'yahya-q6',
    question: {
      en: 'During the Night Journey, where did Prophet Muhammad ﷺ meet Yahya (AS), and who was with him?',
      bn: 'মেরাজের রাতে নবী মুহাম্মাদ ﷺ কোথায় ইয়াহইয়া (আ.)-এর সাথে দেখা করেন, আর তাঁর সাথে কে ছিলেন?',
      ar: 'في ليلة المعراج، أين لقي النبي ﷺ يحيى عليه السلام، ومن كان معه؟',
    },
    options: [
      { en: 'The first heaven, with Adam', bn: 'প্রথম আসমানে, আদমের সাথে', ar: 'السماء الأولى مع آدم' },
      { en: 'The fourth heaven, with Idris', bn: 'চতুর্থ আসমানে, ইদরীসের সাথে', ar: 'السماء الرابعة مع إدريس' },
      { en: 'The seventh heaven, with Ibrahim', bn: 'সপ্তম আসমানে, ইবরাহীমের সাথে', ar: 'السماء السابعة مع إبراهيم' },
      { en: 'The second heaven, with Isa', bn: 'দ্বিতীয় আসমানে, ঈসার সাথে', ar: 'السماء الثانية مع عيسى' },
    ],
    correctIndex: 3,
    explanation: {
      en: 'The Prophet ﷺ said: "Then I was taken to the second heaven, and there I found Yahya and Isa, the two maternal cousins." [Sahih al-Bukhari 3887]',
      bn: 'নবী ﷺ বলেছেন: "তারপর আমাকে দ্বিতীয় আসমানে নিয়ে যাওয়া হলো, সেখানে আমি ইয়াহইয়া ও ঈসাকে পেলাম, তাঁরা দুই খালাতো ভাই।" [সহীহ বুখারী ৩৮৮৭]',
      ar: 'قال النبي ﷺ: "ثُمَّ عُرِجَ بِي إِلَى السَّمَاءِ الثَّانِيَةِ فَإِذَا فِيهَا يَحْيَى وَعِيسَى وَهُمَا ابْنَا الْخَالَةِ". [صحيح البخاري 3887]',
    },
  },
];

export default quiz;
