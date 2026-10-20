import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'salih-q1',
    question: {
      en: 'To which people did Allah send Salih (AS)?',
      bn: 'আল্লাহ সালিহ (আ.)-কে কোন জাতির কাছে পাঠিয়েছিলেন?',
      ar: 'إلى أي قوم أرسل الله صالحاً عليه السلام؟',
    },
    options: [
      { en: 'Thamud', bn: 'সামূদ', ar: 'ثمود' },
      { en: '\'Ad', bn: 'আদ', ar: 'عاد' },
      { en: 'The people of Madyan', bn: 'মাদইয়ানবাসী', ar: 'أهل مدين' },
      { en: 'The people of Nuh', bn: 'নূহের জাতি', ar: 'قوم نوح' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"And to Thamud [We sent] their brother Salih. He said, \'O my people, worship Allah; you have no deity other than Him.\'" [Quran 11:61]',
      bn: '"আর সামূদ জাতির কাছে তাদের ভাই সালিহকে পাঠালাম। সে বলল, \'হে আমার জাতি, তোমরা আল্লাহর ইবাদত করো; তিনি ছাড়া তোমাদের কোনো ইলাহ নেই।\'" [কুরআন ১১:৬১]',
      ar: '"وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا ۚ قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ" [هود: 61]',
    },
  },
  {
    id: 'salih-q2',
    question: {
      en: 'What were the people of Thamud famous for building?',
      bn: 'সামূদ জাতি কী বানানোর জন্য বিখ্যাত ছিল?',
      ar: 'بماذا اشتهر قوم ثمود في البناء؟',
    },
    options: [
      { en: 'Great ships', bn: 'বড় বড় জাহাজ', ar: 'السفن العظيمة' },
      { en: 'Pyramids of brick', bn: 'ইটের পিরামিড', ar: 'أهرامات من الطوب' },
      { en: 'Homes carved out of the mountains', bn: 'পাহাড় কেটে বানানো ঘর', ar: 'بيوت منحوتة من الجبال' },
      { en: 'Walls of iron and copper', bn: 'লোহা ও তামার প্রাচীর', ar: 'سدود من الحديد والنحاس' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And remember when He made you successors after \'Ad and settled you in the land, [and] you take for yourselves palaces from its plains and carve from the mountains, homes." [Quran 7:74]',
      bn: '"আর স্মরণ করো যখন তিনি তোমাদের আদ জাতির পর উত্তরাধিকারী করলেন এবং তোমাদের জমিনে বসবাসের ব্যবস্থা করলেন — তোমরা সমতল ভূমিতে প্রাসাদ তৈরি করো এবং পাহাড় কেটে ঘর বানাও।" [কুরআন ৭:৭৪]',
      ar: '"وَاذْكُرُوا إِذْ جَعَلَكُمْ خُلَفَاءَ مِن بَعْدِ عَادٍ وَبَوَّأَكُمْ فِي الْأَرْضِ تَتَّخِذُونَ مِن سُهُولِهَا قُصُورًا وَتَنْحِتُونَ الْجِبَالَ بُيُوتًا" [الأعراف: 74]',
    },
  },
  {
    id: 'salih-q3',
    question: {
      en: 'What sign did Allah send to the people of Thamud?',
      bn: 'আল্লাহ সামূদ জাতির কাছে কোন নিদর্শন পাঠিয়েছিলেন?',
      ar: 'ما الآية التي أرسلها الله إلى ثمود؟',
    },
    options: [
      { en: 'A staff that turned into a snake', bn: 'একটি লাঠি যা সাপ হয়ে যেত', ar: 'عصا تنقلب حية' },
      { en: 'The she-camel of Allah', bn: 'আল্লাহর উটনী', ar: 'ناقة الله' },
      { en: 'A table of food from the sky', bn: 'আকাশ থেকে খাবারের দস্তরখান', ar: 'مائدة من السماء' },
      { en: 'A great flood', bn: 'এক মহাপ্লাবন', ar: 'طوفان عظيم' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"There has come to you clear evidence from your Lord. This is the she-camel of Allah [sent] to you as a sign. So let her feed upon Allah\'s earth and do not touch her with harm." [Quran 7:73]',
      bn: '"তোমাদের রবের কাছ থেকে তোমাদের কাছে স্পষ্ট প্রমাণ এসেছে। এটি আল্লাহর উটনী, তোমাদের জন্য নিদর্শন। তাকে আল্লাহর জমিনে চরে খেতে দাও এবং তাকে কোনো ক্ষতি করো না।" [কুরআন ৭:৭৩]',
      ar: '"قَدْ جَاءَتْكُم بَيِّنَةٌ مِّن رَّبِّكُمْ ۖ هَٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً ۖ فَذَرُوهَا تَأْكُلْ فِي أَرْضِ اللَّهِ ۖ وَلَا تَمَسُّوهَا بِسُوءٍ" [الأعراف: 73]',
    },
  },
  {
    id: 'salih-q4',
    question: {
      en: 'How was the water to be shared between the she-camel and the people?',
      bn: 'উটনী ও মানুষের মধ্যে পানি কীভাবে ভাগ করার কথা ছিল?',
      ar: 'كيف قُسم الماء بين الناقة والقوم؟',
    },
    options: [
      { en: 'The people drank first, then the camel', bn: 'আগে মানুষ, তারপর উটনী', ar: 'يشرب القوم أولاً ثم الناقة' },
      { en: 'The camel drank only at night', bn: 'উটনী শুধু রাতে পানি খেত', ar: 'تشرب الناقة ليلاً فقط' },
      { en: 'The camel was not allowed to drink', bn: 'উটনীকে পানি খেতে দেওয়া হতো না', ar: 'لا يُسمح للناقة بالشرب' },
      { en: 'By turns — each had its own set day to drink', bn: 'পালাক্রমে — প্রত্যেকের পানি পানের দিন নির্ধারিত', ar: 'بالتناوب — لكلٍّ شِربٌ محتضر' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And inform them that the water is shared between them, each [the camel\'s and their] right to drink being established by turns." [Quran 54:28]',
      bn: '"আর তাদের জানিয়ে দাও যে পানি তাদের মধ্যে ভাগ করা — পালাক্রমে প্রত্যেকের পানি পানের অধিকার নির্ধারিত।" [কুরআন ৫৪:২৮]',
      ar: '"وَنَبِّئْهُمْ أَنَّ الْمَاءَ قِسْمَةٌ بَيْنَهُمْ ۖ كُلُّ شِرْبٍ مُّحْتَضَرٌ" [القمر: 28]',
    },
  },
  {
    id: 'salih-q5',
    question: {
      en: 'How many family heads were spreading corruption in the city of Thamud?',
      bn: 'সামূদের শহরে কতজন দলপতি বিপর্যয় সৃষ্টি করত?',
      ar: 'كم كان عدد الرهط المفسدين في مدينة ثمود؟',
    },
    options: [
      { en: 'Seven', bn: 'সাত', ar: 'سبعة' },
      { en: 'Twelve', bn: 'বারো', ar: 'اثنا عشر' },
      { en: 'Three', bn: 'তিন', ar: 'ثلاثة' },
      { en: 'Nine', bn: 'নয়', ar: 'تسعة' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"And there were in the city nine family heads causing corruption in the land and not amending." [Quran 27:48]',
      bn: '"সেই শহরে নয়জন দলপতি ছিল যারা দেশে বিপর্যয় সৃষ্টি করত এবং সংশোধন করত না।" [কুরআন ২৭:৪৮]',
      ar: '"وَكَانَ فِي الْمَدِينَةِ تِسْعَةُ رَهْطٍ يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ" [النمل: 48]',
    },
  },
  {
    id: 'salih-q6',
    question: {
      en: 'After they hamstrung the she-camel, how many days did Salih (AS) tell them to enjoy themselves before the punishment?',
      bn: 'উটনীকে হত্যার পর সালিহ (আ.) শাস্তির আগে তাদের কত দিন ভোগ করে নিতে বলেছিলেন?',
      ar: 'بعد أن عقروا الناقة، كم يوماً قال لهم صالح عليه السلام أن يتمتعوا قبل العذاب؟',
    },
    options: [
      { en: 'Seven days', bn: 'সাত দিন', ar: 'سبعة أيام' },
      { en: 'One day', bn: 'এক দিন', ar: 'يوماً واحداً' },
      { en: 'Three days', bn: 'তিন দিন', ar: 'ثلاثة أيام' },
      { en: 'Forty days', bn: 'চল্লিশ দিন', ar: 'أربعين يوماً' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"But they hamstrung her. So he said, \'Enjoy yourselves in your homes for three days. That is a promise not to be denied.\'" [Quran 11:65]',
      bn: '"কিন্তু তারা তাকে হত্যা করল। তখন সালিহ বলল, \'তোমাদের ঘরে তিন দিন ভোগ করে নাও। এটা এমন প্রতিশ্রুতি যা মিথ্যা নয়।\'" [কুরআন ১১:৬৫]',
      ar: '"فَعَقَرُوهَا فَقَالَ تَمَتَّعُوا فِي دَارِكُمْ ثَلَاثَةَ أَيَّامٍ ۖ ذَٰلِكَ وَعْدٌ غَيْرُ مَكْذُوبٍ" [هود: 65]',
    },
  },
  {
    id: 'salih-q7',
    question: {
      en: 'What did the Prophet ﷺ tell his companions when they passed by Al-Hijr, the dwellings of Thamud?',
      bn: 'সামূদের বাসস্থান আল-হিজরের পাশ দিয়ে যাওয়ার সময় নবী ﷺ সাহাবিদের কী বলেছিলেন?',
      ar: 'ماذا قال النبي ﷺ لأصحابه حين مرّوا بالحِجر ديار ثمود؟',
    },
    options: [
      { en: 'To camp there and rest', bn: 'সেখানে তাঁবু ফেলে বিশ্রাম নিতে', ar: 'أن ينزلوا فيها ويستريحوا' },
      { en: 'Not to enter except while weeping, lest what befell them befall you', bn: 'কাঁদতে কাঁদতে ছাড়া প্রবেশ না করতে, পাছে তাদের উপর যা নেমেছিল তা তোমাদের উপরও নামে', ar: 'ألا يدخلوا إلا باكين أن يصيبهم ما أصابهم' },
      { en: 'To collect stones from the houses', bn: 'ঘরগুলো থেকে পাথর সংগ্রহ করতে', ar: 'أن يجمعوا الحجارة من البيوت' },
      { en: 'To rebuild the houses', bn: 'ঘরগুলো আবার নির্মাণ করতে', ar: 'أن يعيدوا بناء البيوت' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'The Prophet ﷺ said: "Do not enter the dwellings of those who were punished unless you are weeping... lest what befell them should befall you." [Sahih al-Bukhari 3379]',
      bn: 'নবী ﷺ বলেছেন: "যারা শাস্তিপ্রাপ্ত হয়েছে তাদের বাসস্থানে প্রবেশ করো না, যদি না তোমরা কাঁদো... পাছে তাদের উপর যা নেমেছিল তা তোমাদের উপরও নেমে আসে।" [সহীহ বুখারী ৩৩৭৯]',
      ar: 'قال النبي ﷺ: "لا تدخلوا مساكن الذين ظلموا أنفسهم أن يصيبكم ما أصابهم إلا أن تكونوا باكين." [صحيح البخاري 3379]',
    },
  },
];

export default quiz;
