import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'musa-q1',
    question: {
      en: 'What did Allah inspire the mother of Musa (AS) to do when she feared for him?',
      bn: 'মূসা (আ.)-এর মা যখন তাঁর জন্য ভয় পেলেন, আল্লাহ তাঁকে কী করতে ইলহাম করলেন?',
      ar: 'بماذا أوحى الله إلى أم موسى عليه السلام إذا خافت عليه؟',
    },
    options: [
      { en: 'Hide him in a cave', bn: 'তাঁকে গুহায় লুকিয়ে রাখতে', ar: 'أن تخبئه في كهف' },
      { en: 'Take him to the desert', bn: 'তাঁকে মরুভূমিতে নিয়ে যেতে', ar: 'أن تأخذه إلى الصحراء' },
      { en: 'Cast him into the river', bn: 'তাঁকে নদীতে ভাসিয়ে দিতে', ar: 'أن تلقيه في اليمّ' },
      { en: 'Give him to Pharaoh herself', bn: 'নিজেই তাঁকে ফিরাউনের হাতে দিতে', ar: 'أن تسلّمه إلى فرعون بنفسها' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"Nurse him; but when you fear for him, cast him into the river and do not fear and do not grieve. Indeed, We will return him to you and will make him one of the messengers." [Quran 28:7]',
      bn: '"তাকে দুধ পান করাও; যখন তার সম্পর্কে ভয় পাও, তাকে নদীতে ভাসিয়ে দাও এবং ভয় পেয়ো না ও দুঃখ করো না। নিশ্চয়ই আমি তাকে তোমার কাছে ফিরিয়ে দেব এবং তাকে রাসূলদের অন্তর্ভুক্ত করব।" [কুরআন ২৮:৭]',
      ar: '"أَنْ أَرْضِعِيهِ ۖ فَإِذَا خِفْتِ عَلَيْهِ فَأَلْقِيهِ فِي الْيَمِّ وَلَا تَخَافِي وَلَا تَحْزَنِي ۖ إِنَّا رَادُّوهُ إِلَيْكِ وَجَاعِلُوهُ مِنَ الْمُرْسَلِينَ" [القصص: 7]',
    },
  },
  {
    id: 'musa-q2',
    question: {
      en: 'Who said about baby Musa, "He will be a comfort of the eye for me and for you. Do not kill him"?',
      bn: 'শিশু মূসা সম্পর্কে কে বলেছিলেন, "এ শিশু আমার ও তোমার চোখের শীতলতা। তাকে হত্যা করো না"?',
      ar: 'من الذي قال عن الطفل موسى: "قرة عين لي ولك، لا تقتلوه"؟',
    },
    options: [
      { en: 'The wife of Pharaoh', bn: 'ফিরাউনের স্ত্রী', ar: 'امرأة فرعون' },
      { en: 'Musa\'s sister', bn: 'মূসার বোন', ar: 'أخت موسى' },
      { en: 'Pharaoh\'s chief minister', bn: 'ফিরাউনের প্রধান মন্ত্রী', ar: 'وزير فرعون' },
      { en: 'A palace guard', bn: 'প্রাসাদের এক প্রহরী', ar: 'أحد حراس القصر' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And the wife of Pharaoh said, \'He will be a comfort of the eye for me and for you. Do not kill him. Perhaps he may benefit us, or we may adopt him as a son.\'" [Quran 28:9]',
      bn: '"ফিরাউনের স্ত্রী বলল, \'এ শিশু আমার ও তোমার চোখের শীতলতা। তাকে হত্যা করো না। সে আমাদের উপকারে আসতে পারে অথবা আমরা তাকে পুত্র হিসেবে গ্রহণ করতে পারি।\'" [কুরআন ২৮:৯]',
      ar: '"وَقَالَتِ امْرَأَتُ فِرْعَوْنَ قُرَّتُ عَيْنٍ لِّي وَلَكَ ۖ لَا تَقْتُلُوهُ عَسَىٰ أَن يَنفَعَنَا أَوْ نَتَّخِذَهُ وَلَدًا" [القصص: 9]',
    },
  },
  {
    id: 'musa-q3',
    question: {
      en: 'After watering the two women\'s flock in Madyan, what did Musa (AS) say in his prayer?',
      bn: 'মাদইয়ানে দুই নারীর পশুগুলোকে পানি পান করানোর পর মূসা (আ.) দোয়ায় কী বলেছিলেন?',
      ar: 'بماذا دعا موسى عليه السلام بعد أن سقى للمرأتين في مدين؟',
    },
    options: [
      { en: '"My Lord, give me a kingdom"', bn: '"হে আমার রব, আমাকে একটি রাজ্য দাও"', ar: '"ربِّ هب لي ملكاً"' },
      { en: '"My Lord, punish the shepherds"', bn: '"হে আমার রব, রাখালদের শাস্তি দাও"', ar: '"ربِّ عاقب الرعاة"' },
      { en: '"My Lord, return me to Egypt"', bn: '"হে আমার রব, আমাকে মিসরে ফিরিয়ে দাও"', ar: '"ربِّ ردّني إلى مصر"' },
      { en: '"My Lord, I am in need of whatever good You send down to me"', bn: '"হে আমার রব, তুমি আমার প্রতি যে কল্যাণ নাযিল করবে, আমি তার মুখাপেক্ষী"', ar: '"ربِّ إني لما أنزلت إليّ من خير فقير"' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"So he watered [their flocks] for them; then he withdrew to the shade and said, \'My Lord, indeed I am, for whatever good You would send down to me, in need.\'" [Quran 28:24]',
      bn: '"সে তাদের জন্য পানি তুলে দিল; তারপর ছায়ায় সরে গিয়ে বলল, \'হে আমার রব, তুমি আমার প্রতি যে কল্যাণ নাযিল করবে, আমি তার মুখাপেক্ষী।\'" [কুরআন ২৮:২৪]',
      ar: '"فَسَقَىٰ لَهُمَا ثُمَّ تَوَلَّىٰ إِلَى الظِّلِّ فَقَالَ رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ" [القصص: 24]',
    },
  },
  {
    id: 'musa-q4',
    question: {
      en: 'In the sacred valley of Tuwa, what did Allah tell Musa (AS) to remove?',
      bn: 'পবিত্র উপত্যকা তুওয়ায় আল্লাহ মূসা (আ.)-কে কী খুলে ফেলতে বলেছিলেন?',
      ar: 'ماذا أمر الله موسى عليه السلام أن يخلع في الوادي المقدس طوى؟',
    },
    options: [
      { en: 'His cloak', bn: 'তাঁর চাদর', ar: 'عباءته' },
      { en: 'His sandals', bn: 'তাঁর জুতা', ar: 'نعليه' },
      { en: 'His turban', bn: 'তাঁর পাগড়ি', ar: 'عمامته' },
      { en: 'His ring', bn: 'তাঁর আংটি', ar: 'خاتمه' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"O Musa, indeed I am your Lord, so remove your sandals. Indeed, you are in the sacred valley of Tuwa." [Quran 20:11-12]',
      bn: '"হে মূসা, আমিই তোমার রব, তোমার জুতো খুলে ফেল। তুমি পবিত্র উপত্যকা তুওয়ায় আছ।" [কুরআন ২০:১১-১২]',
      ar: '"يَا مُوسَىٰ إِنِّي أَنَا رَبُّكَ فَاخْلَعْ نَعْلَيْكَ ۖ إِنَّكَ بِالْوَادِ الْمُقَدَّسِ طُوًى" [طه: 11-12]',
    },
  },
  {
    id: 'musa-q5',
    question: {
      en: 'What did Pharaoh\'s magicians do when Musa\'s staff swallowed their tricks?',
      bn: 'মূসার লাঠি যখন জাদুকরদের কারসাজি গিলে ফেলল, তখন ফিরাউনের জাদুকররা কী করল?',
      ar: 'ماذا فعل سحرة فرعون حين ابتلعت عصا موسى ما صنعوا؟',
    },
    options: [
      { en: 'They ran away from the city', bn: 'তারা শহর ছেড়ে পালিয়ে গেল', ar: 'هربوا من المدينة' },
      { en: 'They asked for a second contest', bn: 'তারা আরেকটি প্রতিযোগিতা চাইল', ar: 'طلبوا مباراة ثانية' },
      { en: 'They fell in prostration and believed in the Lord of Musa and Harun', bn: 'তারা সিজদায় পড়ে মূসা ও হারূনের রবের প্রতি ঈমান আনল', ar: 'خرّوا ساجدين وآمنوا برب موسى وهارون' },
      { en: 'They demanded a reward from Pharaoh', bn: 'তারা ফিরাউনের কাছে পুরস্কার চাইল', ar: 'طلبوا الأجر من فرعون' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And the magicians fell down in prostration. They said, \'We have believed in the Lord of the worlds, the Lord of Musa and Harun.\'" [Quran 7:120-122]',
      bn: '"যাদুকররা সিজদায় লুটিয়ে পড়ল। তারা বলল, \'আমরা বিশ্বজগতের রবের প্রতি ঈমান আনলাম, মূসা ও হারূনের রব।\'" [কুরআন ৭:১২০-১২২]',
      ar: '"وَأُلْقِيَ السَّحَرَةُ سَاجِدِينَ قَالُوا آمَنَّا بِرَبِّ الْعَالَمِينَ رَبِّ مُوسَىٰ وَهَارُونَ" [الأعراف: 120-122]',
    },
  },
  {
    id: 'musa-q6',
    question: {
      en: 'When his people cried "We are to be overtaken!" at the sea, what did Musa (AS) reply?',
      bn: 'সমুদ্রের তীরে লোকেরা যখন বলল "আমরা তো ধরা পড়ে গেছি!", মূসা (আ.) কী উত্তর দিলেন?',
      ar: 'حين قال أصحاب موسى عند البحر "إنا لمدركون"، بماذا أجاب موسى عليه السلام؟',
    },
    options: [
      { en: '"No! Indeed, with me is my Lord; He will guide me."', bn: '"কখনোই না! আমার রব আমার সাথে আছেন; তিনি আমাকে পথ দেখাবেন।"', ar: '"كلا إن معي ربي سيهدين"' },
      { en: '"Let us surrender to Pharaoh."', bn: '"চলো, ফিরাউনের কাছে আত্মসমর্পণ করি।"', ar: '"لنستسلم لفرعون"' },
      { en: '"Let us fight them with swords."', bn: '"চলো, তলোয়ার দিয়ে ওদের সাথে লড়ি।"', ar: '"لنقاتلهم بالسيوف"' },
      { en: '"Let us go back to Egypt."', bn: '"চলো, মিসরে ফিরে যাই।"', ar: '"لنرجع إلى مصر"' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"The companions of Musa said, \'Indeed, we are to be overtaken!\' He said, \'No! Indeed, with me is my Lord; He will guide me.\'" [Quran 26:61-62]',
      bn: '"মূসার সাথীরা বলল, \'আমরা তো ধরা পড়ে গেছি!\' মূসা বলল, \'কখনোই না! আমার রব আমার সাথে আছেন; তিনি আমাকে পথ দেখাবেন।\'" [কুরআন ২৬:৬১-৬২]',
      ar: '"قَالَ أَصْحَابُ مُوسَىٰ إِنَّا لَمُدْرَكُونَ قَالَ كَلَّا ۖ إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ" [الشعراء: 61-62]',
    },
  },
  {
    id: 'musa-q7',
    question: {
      en: 'How many nights in total was Musa\'s appointment with his Lord at the mountain?',
      bn: 'পাহাড়ে রবের সাথে মূসা (আ.)-এর নির্ধারিত সময় মোট কত রাত ছিল?',
      ar: 'كم ليلة كان مجموع ميقات موسى عليه السلام مع ربه؟',
    },
    options: [
      { en: 'Seven nights', bn: 'সাত রাত', ar: 'سبع ليالٍ' },
      { en: 'Ten nights', bn: 'দশ রাত', ar: 'عشر ليالٍ' },
      { en: 'Thirty nights', bn: 'ত্রিশ রাত', ar: 'ثلاثون ليلة' },
      { en: 'Forty nights', bn: 'চল্লিশ রাত', ar: 'أربعون ليلة' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And We made an appointment with Musa for thirty nights and perfected them by the addition of ten; so the term of his Lord was completed as forty nights." [Quran 7:142]',
      bn: '"আমি মূসার সাথে ত্রিশ রাতের ওয়াদা করলাম এবং আরও দশ দিয়ে তা পূর্ণ করলাম; সুতরাং তার রবের নির্ধারিত সময় চল্লিশ রাতে পূর্ণ হলো।" [কুরআন ৭:১৪২]',
      ar: '"وَوَاعَدْنَا مُوسَىٰ ثَلَاثِينَ لَيْلَةً وَأَتْمَمْنَاهَا بِعَشْرٍ فَتَمَّ مِيقَاتُ رَبِّهِ أَرْبَعِينَ لَيْلَةً" [الأعراف: 142]',
    },
  },
];

export default quiz;
