import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'dawud-q1',
    question: {
      en: 'Which mighty warrior did Dawud (AS) defeat by Allah\'s permission?',
      bn: 'আল্লাহর অনুমতিতে দাউদ (আ.) কোন শক্তিশালী যোদ্ধাকে পরাজিত করেছিলেন?',
      ar: 'من المحارب القوي الذي قتله داود عليه السلام بإذن الله؟',
    },
    options: [
      { en: 'Pharaoh', bn: 'ফেরাউন', ar: 'فرعون' },
      { en: 'Namrud', bn: 'নমরূদ', ar: 'النمرود' },
      { en: 'Jalut (Goliath)', bn: 'জালূত (গোলিয়াথ)', ar: 'جالوت' },
      { en: 'Qarun', bn: 'কারূন', ar: 'قارون' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"So they defeated them by permission of Allah, and Dawud killed Jalut, and Allah gave him the kingship and wisdom." [Quran 2:251]',
      bn: '"অতঃপর তারা আল্লাহর অনুমতিতে তাদের পরাজিত করল এবং দাউদ জালূতকে হত্যা করল। আল্লাহ তাকে রাজত্ব ও হিকমাত দান করলেন।" [কুরআন ২:২৫১]',
      ar: '"فَهَزَمُوهُم بِإِذْنِ اللَّهِ وَقَتَلَ دَاوُودُ جَالُوتَ وَآتَاهُ اللَّهُ الْمُلْكَ وَالْحِكْمَةَ" [البقرة: 251]',
    },
  },
  {
    id: 'dawud-q2',
    question: {
      en: 'Which book did Allah give to Dawud (AS)?',
      bn: 'আল্লাহ দাউদ (আ.)-কে কোন কিতাব দিয়েছিলেন?',
      ar: 'ما الكتاب الذي آتاه الله داود عليه السلام؟',
    },
    options: [
      { en: 'The Zabur (Psalms)', bn: 'যাবূর', ar: 'الزبور' },
      { en: 'The Tawrah (Torah)', bn: 'তাওরাত', ar: 'التوراة' },
      { en: 'The Injil (Gospel)', bn: 'ইঞ্জিল', ar: 'الإنجيل' },
      { en: 'The Quran', bn: 'কুরআন', ar: 'القرآن' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And We have made some of the prophets exceed others, and to Dawud We gave the Zabur." [Quran 17:55]',
      bn: '"আমি কিছু নবীকে অন্যদের উপর মর্যাদা দিয়েছি এবং দাউদকে যাবূর দান করেছি।" [কুরআন ১৭:৫৫]',
      ar: '"وَلَقَدْ فَضَّلْنَا بَعْضَ النَّبِيِّينَ عَلَىٰ بَعْضٍ ۖ وَآتَيْنَا دَاوُودَ زَبُورًا" [الإسراء: 55]',
    },
  },
  {
    id: 'dawud-q3',
    question: {
      en: 'Who did Allah command to glorify Him together with Dawud (AS)?',
      bn: 'আল্লাহ কাদেরকে দাউদ (আ.)-এর সাথে তাসবীহ পাঠ করার আদেশ দিয়েছিলেন?',
      ar: 'من الذي أمره الله أن يسبّح مع داود عليه السلام؟',
    },
    options: [
      { en: 'The fish and the sea', bn: 'মাছ ও সমুদ্র', ar: 'الحيتان والبحر' },
      { en: 'The stars and the moon', bn: 'তারা ও চাঁদ', ar: 'النجوم والقمر' },
      { en: 'The ants and the bees', bn: 'পিঁপড়া ও মৌমাছি', ar: 'النمل والنحل' },
      { en: 'The mountains and the birds', bn: 'পাহাড় ও পাখি', ar: 'الجبال والطير' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And We certainly gave Dawud from Us bounty. [We said], \'O mountains, repeat [Our] praises with him, and the birds [as well].\'" [Quran 34:10]',
      bn: '"আমি অবশ্যই দাউদকে আমার পক্ষ থেকে অনুগ্রহ দান করেছিলাম। [আমি বললাম], \'হে পর্বতমালা, তার সাথে আমার তাসবীহ পাঠ করো এবং পাখিরাও।\'" [কুরআন ৩৪:১০]',
      ar: '"وَلَقَدْ آتَيْنَا دَاوُودَ مِنَّا فَضْلًا ۖ يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ" [سبأ: 10]',
    },
  },
  {
    id: 'dawud-q4',
    question: {
      en: 'What did Allah make soft for Dawud (AS) so he could make coats of armour?',
      bn: 'বর্ম তৈরির জন্য আল্লাহ দাউদ (আ.)-এর জন্য কী নরম করে দিয়েছিলেন?',
      ar: 'ماذا ألان الله لداود عليه السلام ليصنع الدروع؟',
    },
    options: [
      { en: 'Stone', bn: 'পাথর', ar: 'الحجر' },
      { en: 'Iron', bn: 'লোহা', ar: 'الحديد' },
      { en: 'Gold', bn: 'সোনা', ar: 'الذهب' },
      { en: 'Wood', bn: 'কাঠ', ar: 'الخشب' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And We made pliable for him iron, [commanding], \'Make full coats of mail and calculate [precisely] the links, and work righteousness.\'" [Quran 34:10-11]',
      bn: '"আমি তার জন্য লোহা নরম করে দিলাম, [বললাম], \'পূর্ণ বর্ম তৈরি করো এবং কড়াগুলো সঠিক পরিমাপে তৈরি করো, আর সৎকর্ম করো।\'" [কুরআন ৩৪:১০-১১]',
      ar: '"وَأَلَنَّا لَهُ الْحَدِيدَ أَنِ اعْمَلْ سَابِغَاتٍ وَقَدِّرْ فِي السَّرْدِ ۖ وَاعْمَلُوا صَالِحًا" [سبأ: 10-11]',
    },
  },
  {
    id: 'dawud-q5',
    question: {
      en: 'In the dispute brought to Dawud (AS), how many ewes did one brother have while the other had only one?',
      bn: 'দাউদ (আ.)-এর কাছে আনা বিবাদে এক ভাইয়ের মাত্র একটি ভেড়া ছিল, অন্য ভাইয়ের কয়টি ছিল?',
      ar: 'في الخصومة التي عُرضت على داود عليه السلام، كم نعجة كانت لأحد الأخوين بينما للآخر نعجة واحدة؟',
    },
    options: [
      { en: 'Ten', bn: 'দশটি', ar: 'عشر' },
      { en: 'Forty', bn: 'চল্লিশটি', ar: 'أربعون' },
      { en: 'Ninety-nine', bn: 'নিরানব্বইটি', ar: 'تسع وتسعون' },
      { en: 'One hundred', bn: 'একশোটি', ar: 'مئة' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'One disputant said: "Indeed this, my brother, has ninety-nine ewes, and I have one ewe." Dawud then realised it was a test, asked forgiveness and fell in prostration. [Quran 38:23-24]',
      bn: 'একজন বিবাদকারী বলল: "এই আমার ভাই, তার আছে নিরানব্বইটি ভেড়া আর আমার আছে একটি।" তারপর দাউদ বুঝলেন যে এটি পরীক্ষা ছিল, তিনি ক্ষমা চাইলেন এবং সিজদায় লুটিয়ে পড়লেন। [কুরআন ৩৮:২৩-২৪]',
      ar: 'قال أحد الخصمين إن أخاه له تسع وتسعون نعجة وله هو نعجة واحدة. ثم أيقن داود أن الله اختبره، فاستغفر ربه وخرّ راكعاً وأناب. [ص: 23-24]',
    },
  },
  {
    id: 'dawud-q6',
    question: {
      en: 'What was the "fasting of Dawud", which the Prophet ﷺ called the most beloved fasting to Allah?',
      bn: 'নবী ﷺ যে "দাউদের রোজা"-কে আল্লাহর কাছে সবচেয়ে প্রিয় বলেছেন, সেটা কেমন ছিল?',
      ar: 'ما "صيام داود" الذي قال النبي ﷺ إنه أحب الصيام إلى الله؟',
    },
    options: [
      { en: 'Fasting one day and not fasting the next', bn: 'একদিন রোজা রাখা, পরের দিন না রাখা', ar: 'صيام يوم وإفطار يوم' },
      { en: 'Fasting every single day', bn: 'প্রতিদিন রোজা রাখা', ar: 'صيام كل يوم' },
      { en: 'Fasting only on Fridays', bn: 'শুধু শুক্রবার রোজা রাখা', ar: 'صيام يوم الجمعة فقط' },
      { en: 'Fasting three days in a row each week', bn: 'প্রতি সপ্তাহে টানা তিন দিন রোজা রাখা', ar: 'صيام ثلاثة أيام متتالية كل أسبوع' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'The Prophet ﷺ said: "The most beloved fasting to Allah is the fasting of Dawud; he used to fast one day and not fast the next." [Sahih al-Bukhari 1131]',
      bn: 'নবী ﷺ বলেছেন: "আল্লাহর কাছে সবচেয়ে প্রিয় রোযা হলো দাউদের রোযা; তিনি একদিন রোযা রাখতেন আর পরদিন রাখতেন না।" [সহীহ বুখারী ১১৩১]',
      ar: 'قال النبي ﷺ: "أَحَبُّ الصِّيَامِ إِلَى اللَّهِ صِيَامُ دَاوُدَ كَانَ يَصُومُ يَوْمًا وَيُفْطِرُ يَوْمًا" [صحيح البخاري 1131]',
    },
  },
  {
    id: 'dawud-q7',
    question: {
      en: 'Who inherited from Dawud (AS), according to the Quran?',
      bn: 'কুরআন অনুযায়ী দাউদ (আ.)-এর উত্তরাধিকারী কে হয়েছিলেন?',
      ar: 'من ورث داود عليه السلام كما في القرآن؟',
    },
    options: [
      { en: 'Talut', bn: 'তালূত', ar: 'طالوت' },
      { en: 'Sulayman (AS)', bn: 'সুলাইমান (আ.)', ar: 'سليمان عليه السلام' },
      { en: 'Yunus (AS)', bn: 'ইউনুস (আ.)', ar: 'يونس عليه السلام' },
      { en: 'Harun (AS)', bn: 'হারূন (আ.)', ar: 'هارون عليه السلام' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And Sulayman inherited Dawud." [Quran 27:16]',
      bn: '"সুলাইমান দাউদের উত্তরাধিকারী হলেন।" [কুরআন ২৭:১৬]',
      ar: '"وَوَرِثَ سُلَيْمَانُ دَاوُودَ" [النمل: 16]',
    },
  },
];

export default quiz;
