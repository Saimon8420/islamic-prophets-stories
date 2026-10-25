import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'harun-q1',
    question: {
      en: 'Whom did Musa (AS) ask Allah to appoint as his minister from his family?',
      bn: 'মূসা (আ.) তাঁর পরিবার থেকে কাকে সাহায্যকারী (উযীর) বানাতে আল্লাহর কাছে চেয়েছিলেন?',
      ar: 'من الذي سأل موسى عليه السلام ربه أن يجعله وزيراً له من أهله؟',
    },
    options: [
      { en: 'His father', bn: 'তাঁর পিতা', ar: 'أباه' },
      { en: 'His brother Harun', bn: 'তাঁর ভাই হারূন', ar: 'أخاه هارون' },
      { en: 'His son', bn: 'তাঁর ছেলে', ar: 'ابنه' },
      { en: 'His father-in-law', bn: 'তাঁর শ্বশুর', ar: 'صهره' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"And appoint for me a minister from my family — Harun, my brother." Allah said, "You have been granted your request, O Musa." [Quran 20:29-36]',
      bn: '"আমার পরিবার থেকে একজন সাহায্যকারী নিযুক্ত কর — আমার ভাই হারূন।" আল্লাহ বললেন, "তোমার প্রার্থনা মঞ্জুর হলো, হে মূসা।" [কুরআন ২০:২৯-৩৬]',
      ar: '"وَاجْعَل لِّي وَزِيرًا مِّنْ أَهْلِي هَارُونَ أَخِي ... قَالَ قَدْ أُوتِيتَ سُؤْلَكَ يَا مُوسَىٰ" [طه: 29-36]',
    },
  },
  {
    id: 'harun-q2',
    question: {
      en: 'According to Musa (AS), in what way was Harun better than him?',
      bn: 'মূসা (আ.)-এর কথা অনুযায়ী হারূন কোন দিক থেকে তাঁর চেয়ে এগিয়ে ছিলেন?',
      ar: 'بماذا قال موسى عليه السلام إن هارون يفوقه؟',
    },
    options: [
      { en: 'He was stronger in body', bn: 'শারীরিকভাবে বেশি শক্তিশালী', ar: 'أقوى جسداً' },
      { en: 'He was richer', bn: 'বেশি ধনী', ar: 'أكثر مالاً' },
      { en: 'He was older and wiser in war', bn: 'বয়সে বড় ও যুদ্ধে বেশি দক্ষ', ar: 'أكبر سناً وأخبر بالحرب' },
      { en: 'He was more fluent in speech', bn: 'কথায় বেশি বাকপটু', ar: 'أفصح لساناً' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And my brother Harun — he is more fluent than me in tongue, so send him with me as support, verifying me." [Quran 28:34]',
      bn: '"আমার ভাই হারূন আমার চেয়ে বাকপটু, তাই তাকে আমার সাথে সাহায্যকারী হিসেবে পাঠাও।" [কুরআন ২৮:৩৪]',
      ar: '"وَأَخِي هَارُونُ هُوَ أَفْصَحُ مِنِّي لِسَانًا فَأَرْسِلْهُ مَعِيَ رِدْءًا يُصَدِّقُنِي" [القصص: 34]',
    },
  },
  {
    id: 'harun-q3',
    question: {
      en: 'How did Allah tell Musa and Harun (AS) to speak to Pharaoh?',
      bn: 'আল্লাহ মূসা ও হারূন (আ.)-কে ফিরাউনের সাথে কীভাবে কথা বলতে বলেছিলেন?',
      ar: 'كيف أمر الله موسى وهارون عليهما السلام أن يكلّما فرعون؟',
    },
    options: [
      { en: 'With gentle speech', bn: 'নম্রভাবে', ar: 'قولاً ليّناً' },
      { en: 'With harsh threats', bn: 'কঠোর হুমকি দিয়ে', ar: 'بالتهديد الشديد' },
      { en: 'Only in writing', bn: 'শুধু লিখে', ar: 'بالكتابة فقط' },
      { en: 'Through a messenger', bn: 'একজন দূতের মাধ্যমে', ar: 'عن طريق رسول' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And speak to him with gentle speech that perhaps he may be reminded or fear [Allah]." [Quran 20:44]',
      bn: '"তার সাথে নম্রভাবে কথা বলো, হয়তো সে উপদেশ গ্রহণ করবে অথবা ভয় করবে।" [কুরআন ২০:৪৪]',
      ar: '"فَقُولَا لَهُ قَوْلًا لَّيِّنًا لَّعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَىٰ" [طه: 44]',
    },
  },
  {
    id: 'harun-q4',
    question: {
      en: 'What did Harun (AS) tell the people who began worshipping the golden calf?',
      bn: 'যারা সোনার বাছুরের পূজা শুরু করেছিল, হারূন (আ.) তাদের কী বলেছিলেন?',
      ar: 'ماذا قال هارون عليه السلام للذين عبدوا العجل؟',
    },
    options: [
      { en: '"Wait, and we will ask Pharaoh"', bn: '"অপেক্ষা করো, আমরা ফিরাউনকে জিজ্ঞেস করব"', ar: '"انتظروا حتى نسأل فرعون"' },
      { en: '"Worship it until Musa returns"', bn: '"মূসা ফেরা পর্যন্ত এর পূজা করো"', ar: '"اعبدوه حتى يرجع موسى"' },
      { en: '"You are only being tested by it; your Lord is the Most Merciful, so follow me"', bn: '"এর দ্বারা তোমাদের পরীক্ষা করা হচ্ছে; তোমাদের রব পরম দয়ালু, সুতরাং আমাকে অনুসরণ করো"', ar: '"إنما فُتنتم به وإن ربكم الرحمن فاتبعوني"' },
      { en: '"Leave the city at once"', bn: '"এখনই শহর ছেড়ে চলে যাও"', ar: '"اخرجوا من المدينة حالاً"' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"O my people, you are only being tested by it, and indeed, your Lord is the Most Merciful, so follow me and obey my command." [Quran 20:90]',
      bn: '"হে আমার জাতি, এর দ্বারা তোমাদের পরীক্ষা করা হচ্ছে। নিশ্চয়ই তোমাদের রব পরম দয়ালু, সুতরাং আমাকে অনুসরণ করো এবং আমার আদেশ মানো।" [কুরআন ২০:৯০]',
      ar: '"يَا قَوْمِ إِنَّمَا فُتِنتُم بِهِ ۖ وَإِنَّ رَبَّكُمُ الرَّحْمَٰنُ فَاتَّبِعُونِي وَأَطِيعُوا أَمْرِي" [طه: 90]',
    },
  },
  {
    id: 'harun-q5',
    question: {
      en: 'Why did Harun (AS) say he did not leave the people and follow Musa?',
      bn: 'হারূন (আ.) কেন লোকদের ছেড়ে মূসার কাছে চলে যাননি বলে জানিয়েছিলেন?',
      ar: 'لماذا قال هارون عليه السلام إنه لم يترك القوم ويلحق بموسى؟',
    },
    options: [
      { en: 'He was too ill to travel', bn: 'তিনি অসুস্থ ছিলেন, যেতে পারেননি', ar: 'كان مريضاً لا يستطيع السفر' },
      { en: 'He feared being blamed for dividing the Children of Israel', bn: 'বনী ইসরাঈলের মধ্যে বিভেদ সৃষ্টির দোষ পাওয়ার ভয়ে', ar: 'خشي أن يُلام على التفريق بين بني إسرائيل' },
      { en: 'He did not know where Musa was', bn: 'তিনি জানতেন না মূসা কোথায়', ar: 'لم يعرف أين موسى' },
      { en: 'Pharaoh had imprisoned him', bn: 'ফিরাউন তাঁকে বন্দী করেছিল', ar: 'سجنه فرعون' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"O son of my mother, do not seize me by my beard or by my head. Indeed, I feared that you would say, \'You caused division among the Children of Israel, and you did not observe my word.\'" [Quran 20:94]',
      bn: '"হে আমার মায়ের পুত্র, আমার দাড়ি বা মাথা ধরো না। আমি ভয় করেছিলাম তুমি বলবে, \'তুমি বনী ইসরাঈলের মধ্যে বিভেদ সৃষ্টি করেছ এবং আমার কথা রক্ষা করোনি।\'" [কুরআন ২০:৯৪]',
      ar: '"يَا ابْنَ أُمَّ لَا تَأْخُذْ بِلِحْيَتِي وَلَا بِرَأْسِي ۖ إِنِّي خَشِيتُ أَن تَقُولَ فَرَّقْتَ بَيْنَ بَنِي إِسْرَائِيلَ وَلَمْ تَرْقُبْ قَوْلِي" [طه: 94]',
    },
  },
  {
    id: 'harun-q6',
    question: {
      en: 'In Surah Maryam, Allah says He gave Musa his brother Harun out of His mercy as what?',
      bn: 'সূরা মারইয়ামে আল্লাহ বলেছেন, তিনি নিজের রহমতে মূসাকে তাঁর ভাই হারূনকে কী হিসেবে দান করেছেন?',
      ar: 'في سورة مريم، بماذا وهب الله لموسى أخاه هارون من رحمته؟',
    },
    options: [
      { en: 'As a king', bn: 'রাজা হিসেবে', ar: 'ملكاً' },
      { en: 'As a soldier', bn: 'সৈনিক হিসেবে', ar: 'جندياً' },
      { en: 'As a servant', bn: 'খাদেম হিসেবে', ar: 'خادماً' },
      { en: 'As a prophet', bn: 'নবী হিসেবে', ar: 'نبياً' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And We gave him out of Our mercy his brother Harun as a prophet." [Quran 19:53]',
      bn: '"আমি আমার রহমতে তাকে তার ভাই হারূনকে নবী হিসেবে দান করেছি।" [কুরআন ১৯:৫৩]',
      ar: '"وَوَهَبْنَا لَهُ مِن رَّحْمَتِنَا أَخَاهُ هَارُونَ نَبِيًّا" [مريم: 53]',
    },
  },
  {
    id: 'harun-q7',
    question: {
      en: 'To whom did Prophet Muhammad (SAW) say, "You are to me as Harun was to Musa, except that there is no prophet after me"?',
      bn: 'নবী মুহাম্মাদ ﷺ কাকে বলেছিলেন, "তুমি আমার কাছে সেই মর্যাদায় আছ যেমন হারূন ছিলেন মূসার কাছে, তবে আমার পরে কোনো নবী নেই"?',
      ar: 'لمن قال النبي ﷺ: "أنت مني بمنزلة هارون من موسى إلا أنه لا نبي بعدي"؟',
    },
    options: [
      { en: 'Abu Bakr', bn: 'আবু বকর', ar: 'أبو بكر' },
      { en: 'Umar', bn: 'উমর', ar: 'عمر' },
      { en: 'Ali ibn Abi Talib', bn: 'আলী ইবনে আবি তালিব', ar: 'علي بن أبي طالب' },
      { en: 'Uthman', bn: 'উসমান', ar: 'عثمان' },
    ],
    correctIndex: 2,
    explanation: {
      en: 'The Prophet (SAW) said to Ali, when leaving him in charge of Madinah during the expedition of Tabuk: "Are you not pleased that you are to me as Harun was to Musa, except that there is no prophet after me?" [Sahih al-Bukhari 4416]',
      bn: 'তাবুক অভিযানে মদীনার দায়িত্ব দিয়ে যাওয়ার সময় নবী ﷺ আলীকে বলেছিলেন: "তুমি কি এতে সন্তুষ্ট নও যে তুমি আমার কাছে সেই মর্যাদায় আছ যেমন হারূন ছিলেন মূসার কাছে, তবে আমার পরে কোনো নবী নেই?" [সহীহ বুখারী ৪৪১৬]',
      ar: 'قال النبي ﷺ لعلي حين خلّفه على المدينة في غزوة تبوك: "أَلَا تَرْضَى أَنْ تَكُونَ مِنِّي بِمَنْزِلَةِ هَارُونَ مِنْ مُوسَى إِلَّا أَنَّهُ لَا نَبِيَّ بَعْدِي" [صحيح البخاري 4416]',
    },
  },
];

export default quiz;
