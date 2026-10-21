import type { QuizQuestion } from '../../../types/prophet';

const quiz: QuizQuestion[] = [
  {
    id: 'yaqub-q1',
    question: {
      en: 'What did Yaqub (AS) advise Yusuf after hearing his dream?',
      bn: 'ইউসুফের স্বপ্ন শুনে ইয়াকুব (আ.) তাঁকে কী উপদেশ দিয়েছিলেন?',
      ar: 'بماذا نصح يعقوبُ عليه السلام يوسفَ بعد أن سمع رؤياه؟',
    },
    options: [
      { en: 'Tell it to everyone in the town', bn: 'শহরের সবাইকে বলে দাও', ar: 'أن يحدّث بها أهل البلدة كلهم' },
      { en: 'Do not relate it to your brothers', bn: 'ভাইদের কাছে এ স্বপ্নের কথা বলো না', ar: 'ألا يقصّها على إخوته' },
      { en: 'Forget about it, it means nothing', bn: 'ভুলে যাও, এর কোনো মানে নেই', ar: 'أن ينساها فلا معنى لها' },
      { en: 'Write it down and send it to the king', bn: 'লিখে রাজার কাছে পাঠাও', ar: 'أن يكتبها ويرسلها إلى الملك' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"O my son, do not relate your vision to your brothers or they will contrive against you a plan. Indeed Satan, to man, is a manifest enemy." [Quran 12:5]',
      bn: '"হে আমার পুত্র, তোমার স্বপ্নের কথা তোমার ভাইদের বলো না, নতুবা তারা তোমার বিরুদ্ধে ষড়যন্ত্র করবে। নিশ্চয়ই শয়তান মানুষের প্রকাশ্য শত্রু।" [কুরআন ১২:৫]',
      ar: '"قَالَ يَا بُنَيَّ لَا تَقْصُصْ رُؤْيَاكَ عَلَىٰ إِخْوَتِكَ فَيَكِيدُوا لَكَ كَيْدًا ۖ إِنَّ الشَّيْطَانَ لِلْإِنسَانِ عَدُوٌّ مُّبِينٌ" [يوسف: 5]',
    },
  },
  {
    id: 'yaqub-q2',
    question: {
      en: 'What did the brothers claim had happened to Yusuf?',
      bn: 'ভাইয়েরা ইউসুফের ব্যাপারে কী দাবি করেছিল?',
      ar: 'ماذا ادّعى الإخوة أنه حدث ليوسف؟',
    },
    options: [
      { en: 'He got lost in the desert', bn: 'সে মরুভূমিতে হারিয়ে গেছে', ar: 'ضلّ في الصحراء' },
      { en: 'He ran away to Egypt', bn: 'সে মিশরে পালিয়ে গেছে', ar: 'هرب إلى مصر' },
      { en: 'A wolf ate him', bn: 'নেকড়ে তাকে খেয়ে ফেলেছে', ar: 'أكله الذئب' },
      { en: 'He fell from a mountain', bn: 'সে পাহাড় থেকে পড়ে গেছে', ar: 'سقط من جبل' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"O our father, indeed we went racing and left Yusuf with our possessions, and a wolf ate him." [Quran 12:17]',
      bn: '"হে আমাদের পিতা, আমরা দৌড়-প্রতিযোগিতা করতে গিয়েছিলাম এবং ইউসুফকে আমাদের জিনিসপত্রের কাছে রেখে গিয়েছিলাম, তখন নেকড়ে তাকে খেয়ে ফেলেছে।" [কুরআন ১২:১৭]',
      ar: '"قَالُوا يَا أَبَانَا إِنَّا ذَهَبْنَا نَسْتَبِقُ وَتَرَكْنَا يُوسُفَ عِندَ مَتَاعِنَا فَأَكَلَهُ الذِّئْبُ" [يوسف: 17]',
    },
  },
  {
    id: 'yaqub-q3',
    question: {
      en: 'What did Yaqub (AS) say when he saw through his sons\' story?',
      bn: 'ছেলেদের মিথ্যা গল্প বুঝতে পেরে ইয়াকুব (আ.) কী বলেছিলেন?',
      ar: 'ماذا قال يعقوب عليه السلام حين أدرك كذب أبنائه؟',
    },
    options: [
      { en: '"Patience is most fitting (beautiful patience), and Allah is the one sought for help"', bn: '"সবর করাই শ্রেয় (সুন্দর ধৈর্য), আর আল্লাহই সাহায্যস্থল"', ar: '"فَصَبْرٌ جَمِيلٌ ۖ وَاللَّهُ الْمُسْتَعَانُ"' },
      { en: '"Leave my house at once"', bn: '"এখনই আমার ঘর থেকে বেরিয়ে যাও"', ar: '"اخرجوا من بيتي الآن"' },
      { en: '"I will go and search for him myself"', bn: '"আমি নিজেই তাকে খুঁজতে যাব"', ar: '"سأذهب وأبحث عنه بنفسي"' },
      { en: '"Bring me the wolf"', bn: '"নেকড়েটাকে আমার কাছে নিয়ে এসো"', ar: '"ائتوني بالذئب"' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"Rather, your souls have enticed you to something, so patience is most fitting. And Allah is the one sought for help against that which you describe." [Quran 12:18]',
      bn: '"বরং তোমাদের মন তোমাদের একটি কাজ সুশোভিত করেছে। সুতরাং সবর করাই শ্রেয়। তোমরা যা বর্ণনা করছ তার বিরুদ্ধে আল্লাহই সাহায্যস্থল।" [কুরআন ১২:১৮]',
      ar: '"قَالَ بَلْ سَوَّلَتْ لَكُمْ أَنفُسُكُمْ أَمْرًا ۖ فَصَبْرٌ جَمِيلٌ ۖ وَاللَّهُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ" [يوسف: 18]',
    },
  },
  {
    id: 'yaqub-q4',
    question: {
      en: 'To whom did Yaqub (AS) complain of his grief?',
      bn: 'ইয়াকুব (আ.) নিজের দুঃখের অভিযোগ কার কাছে করতেন?',
      ar: 'إلى من كان يعقوب عليه السلام يشكو حزنه؟',
    },
    options: [
      { en: 'To his neighbours', bn: 'প্রতিবেশীদের কাছে', ar: 'إلى جيرانه' },
      { en: 'To the king of Egypt', bn: 'মিশরের রাজার কাছে', ar: 'إلى ملك مصر' },
      { en: 'To his sons', bn: 'নিজের ছেলেদের কাছে', ar: 'إلى أبنائه' },
      { en: 'Only to Allah', bn: 'শুধু আল্লাহর কাছে', ar: 'إلى الله وحده' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"I only complain of my suffering and my grief to Allah, and I know from Allah that which you do not know." [Quran 12:86]',
      bn: '"আমি কেবল আল্লাহর কাছেই আমার কষ্ট ও দুঃখের অভিযোগ করি এবং আমি আল্লাহর পক্ষ থেকে জানি যা তোমরা জানো না।" [কুরআন ১২:৮৬]',
      ar: '"قَالَ إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ وَأَعْلَمُ مِنَ اللَّهِ مَا لَا تَعْلَمُونَ" [يوسف: 86]',
    },
  },
  {
    id: 'yaqub-q5',
    question: {
      en: 'What did Yaqub (AS) tell his sons when he sent them to search for Yusuf and his brother?',
      bn: 'ইউসুফ ও তাঁর ভাইয়ের খোঁজে পাঠানোর সময় ইয়াকুব (আ.) ছেলেদের কী বলেছিলেন?',
      ar: 'ماذا قال يعقوب عليه السلام لأبنائه حين أرسلهم يتحسّسون من يوسف وأخيه؟',
    },
    options: [
      { en: '"Come back quickly, whatever happens"', bn: '"যা-ই হোক, তাড়াতাড়ি ফিরে এসো"', ar: '"عودوا سريعاً مهما حدث"' },
      { en: '"Do not despair of relief from Allah"', bn: '"আল্লাহর রহমত থেকে নিরাশ হয়ো না"', ar: '"لَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ"' },
      { en: '"Take a large army with you"', bn: '"সাথে বড় সেনাদল নিয়ে যাও"', ar: '"خذوا معكم جيشاً كبيراً"' },
      { en: '"There is no use; they are gone"', bn: '"লাভ নেই, ওরা আর নেই"', ar: '"لا فائدة، لقد ذهبا"' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"O my sons, go and find out about Yusuf and his brother and despair not of relief from Allah." [Quran 12:87]',
      bn: '"হে আমার পুত্রগণ, যাও এবং ইউসুফ ও তার ভাইয়ের খোঁজ কর। আল্লাহর রহমত থেকে নিরাশ হয়ো না।" [কুরআন ১২:৮৭]',
      ar: '"يَا بَنِيَّ اذْهَبُوا فَتَحَسَّسُوا مِن يُوسُفَ وَأَخِيهِ وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ" [يوسف: 87]',
    },
  },
  {
    id: 'yaqub-q6',
    question: {
      en: 'How did Allah restore the sight of Yaqub (AS)?',
      bn: 'আল্লাহ কীভাবে ইয়াকুব (আ.)-এর দৃষ্টিশক্তি ফিরিয়ে দিয়েছিলেন?',
      ar: 'كيف ردّ الله على يعقوب عليه السلام بصره؟',
    },
    options: [
      { en: 'With medicine from a doctor', bn: 'ডাক্তারের ওষুধে', ar: 'بدواء من طبيب' },
      { en: 'By bathing in a river', bn: 'নদীতে গোসল করে', ar: 'بالاغتسال في نهر' },
      { en: 'When Yusuf\'s shirt was cast over his face', bn: 'ইউসুফের জামা তাঁর মুখের উপর রাখা হলে', ar: 'حين أُلقي قميص يوسف على وجهه' },
      { en: 'It never came back', bn: 'আর কখনো ফেরেনি', ar: 'لم يعد إليه أبداً' },
    ],
    correctIndex: 2,
    explanation: {
      en: '"And when the bearer of good tidings arrived, he cast it over his face, and he returned to seeing." [Quran 12:96]',
      bn: '"যখন সুসংবাদবাহক এলো এবং জামাটি তার মুখে রাখল, তখন তার দৃষ্টি ফিরে এলো।" [কুরআন ১২:৯৬]',
      ar: '"فَلَمَّا أَن جَاءَ الْبَشِيرُ أَلْقَاهُ عَلَىٰ وَجْهِهِ فَارْتَدَّ بَصِيرًا" [يوسف: 96]',
    },
  },
  {
    id: 'yaqub-q7',
    question: {
      en: 'What did Yaqub (AS) ask his sons when death approached him?',
      bn: 'মৃত্যুর সময় ঘনিয়ে এলে ইয়াকুব (আ.) ছেলেদের কী জিজ্ঞেস করেছিলেন?',
      ar: 'ماذا سأل يعقوب عليه السلام أبناءه حين حضره الموت؟',
    },
    options: [
      { en: '"How will you divide my wealth?"', bn: '"আমার সম্পদ তোমরা কীভাবে ভাগ করবে?"', ar: '"كيف ستقسمون مالي؟"' },
      { en: '"Who will become king after me?"', bn: '"আমার পরে কে রাজা হবে?"', ar: '"من سيكون الملك بعدي؟"' },
      { en: '"Where will you live after me?"', bn: '"আমার পরে তোমরা কোথায় থাকবে?"', ar: '"أين ستسكنون بعدي؟"' },
      { en: '"What will you worship after me?"', bn: '"আমার পরে তোমরা কিসের ইবাদত করবে?"', ar: '"مَا تَعْبُدُونَ مِن بَعْدِي"' },
    ],
    correctIndex: 3,
    explanation: {
      en: '"When he said to his sons, \'What will you worship after me?\' They said, \'We will worship your God and the God of your fathers, Ibrahim and Ismail and Ishaq — one God.\'" [Quran 2:133]',
      bn: '"যখন সে তার পুত্রদের বলল, \'আমার পরে তোমরা কিসের ইবাদত করবে?\' তারা বলল, \'আমরা আপনার ইলাহ এবং আপনার পিতৃপুরুষ ইবরাহীম, ইসমাঈল ও ইসহাকের ইলাহের ইবাদত করব — একমাত্র ইলাহ।\'" [কুরআন ২:১৩৩]',
      ar: '"إِذْ قَالَ لِبَنِيهِ مَا تَعْبُدُونَ مِن بَعْدِي قَالُوا نَعْبُدُ إِلَٰهَكَ وَإِلَٰهَ آبَائِكَ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ إِلَٰهًا وَاحِدًا" [البقرة: 133]',
    },
  },
];

export default quiz;
