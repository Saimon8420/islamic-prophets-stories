// The lineage chart (shajara). Each link says how we know it:
//   quran      — stated in the Quran or an authentic hadith
//   historian  — reported by historians such as Ibn Kathir (Qasas al-Anbiya)
//   descent    — a descendant, with many unnamed generations between
// Hadith collections are named without numbers where the exact number has not
// been verified on sunnah.com.

import type { ProphetId, TrilingualText } from '../types/prophet';

export type LinkKind = 'quran' | 'historian' | 'descent';

export interface LineageNode {
  id: string;
  name: TrilingualText;
  x: number;
  y: number;
  prophetId?: ProphetId; // set for prophets (opens their story)
  last?: boolean; // Muhammad ﷺ
}

export interface LineageLink {
  from: string;
  to: string;
  kind: LinkKind;
  source: TrilingualText;
}

const t = (en: string, bn: string, ar: string): TrilingualText => ({ en, bn, ar });

export const LINEAGE_NODES: LineageNode[] = [
  { id: 'adam', name: t('Adam', 'আদম', 'آدم'), x: 550, y: 80, prophetId: 'adam' },
  { id: 'shith', name: t('Shith', 'শীস', 'شيث'), x: 550, y: 205 },
  { id: 'idris', name: t('Idris', 'ইদরীস', 'إدريس'), x: 550, y: 330, prophetId: 'idris' },
  { id: 'nuh', name: t('Nuh', 'নূহ', 'نوح'), x: 550, y: 455, prophetId: 'nuh' },
  { id: 'sam', name: t('Sam', 'সাম', 'سام'), x: 550, y: 575 },
  { id: 'hud', name: t('Hud', 'হূদ', 'هود'), x: 200, y: 700, prophetId: 'hud' },
  { id: 'salih', name: t('Salih', 'সালিহ', 'صالح'), x: 360, y: 700, prophetId: 'salih' },
  { id: 'azar', name: t('Azar', 'আযর', 'آزر'), x: 660, y: 700 },
  { id: 'ibrahim', name: t('Ibrahim', 'ইবরাহীম', 'إبراهيم'), x: 560, y: 830, prophetId: 'ibrahim' },
  { id: 'haran', name: t('Haran', 'হারান', 'هاران'), x: 820, y: 830 },
  { id: 'lut', name: t('Lut', 'লূত', 'لوط'), x: 820, y: 955, prophetId: 'lut' },
  { id: 'ismail', name: t('Ismail', 'ইসমাঈল', 'إسماعيل'), x: 330, y: 975, prophetId: 'ismail' },
  { id: 'ishaq', name: t('Ishaq', 'ইসহাক', 'إسحاق'), x: 640, y: 975, prophetId: 'ishaq' },
  { id: 'shuayb', name: t("Shu'ayb", 'শুআইব', 'شعيب'), x: 1000, y: 975, prophetId: 'shuayb' },
  { id: 'yaqub', name: t('Yaqub', 'ইয়াকুব', 'يعقوب'), x: 700, y: 1110, prophetId: 'yaqub' },
  { id: 'ayyub', name: t('Ayyub', 'আইয়ূব', 'أيوب'), x: 500, y: 1110, prophetId: 'ayyub' },
  { id: 'yusuf', name: t('Yusuf', 'ইউসুফ', 'يوسف'), x: 560, y: 1250, prophetId: 'yusuf' },
  { id: 'lawi', name: t('Lawi', 'লাবী', 'لاوي'), x: 760, y: 1250 },
  { id: 'yahuda', name: t('Yahudha', 'ইয়াহুদা', 'يهوذا'), x: 960, y: 1250 },
  { id: 'musa', name: t('Musa', 'মূসা', 'موسى'), x: 700, y: 1390, prophetId: 'musa' },
  { id: 'harun', name: t('Harun', 'হারূন', 'هارون'), x: 840, y: 1390, prophetId: 'harun' },
  { id: 'dawud', name: t('Dawud', 'দাউদ', 'داود'), x: 990, y: 1390, prophetId: 'dawud' },
  { id: 'sulayman', name: t('Sulayman', 'সুলাইমান', 'سليمان'), x: 990, y: 1520, prophetId: 'sulayman' },
  { id: 'zakariya', name: t('Zakariya', 'যাকারিয়া', 'زكريا'), x: 560, y: 1660, prophetId: 'zakariya' },
  { id: 'imran', name: t('Imran', 'ইমরান', 'عمران'), x: 800, y: 1660 },
  { id: 'yahya', name: t('Yahya', 'ইয়াহইয়া', 'يحيى'), x: 560, y: 1790, prophetId: 'yahya' },
  { id: 'maryam', name: t('Maryam', 'মারইয়াম', 'مريم'), x: 800, y: 1790 },
  { id: 'isa', name: t('Isa', 'ঈসা', 'عيسى'), x: 800, y: 1915, prophetId: 'isa' },
  { id: 'muhammad', name: t('Muhammad', 'মুহাম্মাদ', 'محمد'), x: 230, y: 1890, prophetId: 'muhammad', last: true },
];

/** Bani Israel prophets whose exact descent is not known (drawn in a group box). */
export const LINEAGE_GROUP: LineageNode[] = [
  { id: 'ilyas', name: t('Ilyas', 'ইলিয়াস', 'إلياس'), x: 215, y: 1460, prophetId: 'ilyas' },
  { id: 'al-yasa', name: t("Al-Yasa'", 'আল-ইয়াসা', 'اليسع'), x: 305, y: 1460, prophetId: 'al-yasa' },
  { id: 'yunus', name: t('Yunus', 'ইউনুস', 'يونس'), x: 395, y: 1460, prophetId: 'yunus' },
  { id: 'dhul-kifl', name: t('Dhul-Kifl', 'যুল-কিফল', 'ذو الكفل'), x: 305, y: 1515, prophetId: 'dhul-kifl' },
];

const IK = t('Ibn Kathir, Qasas al-Anbiya', 'ইবনে কাসীর, কাসাসুল আম্বিয়া', 'ابن كثير، قصص الأنبياء');
const ik = (en: string, bn: string, ar: string) => t(`${en} (${IK.en}).`, `${bn} (${IK.bn})।`, `${ar} (${IK.ar}).`);

export const LINEAGE_LINKS: LineageLink[] = [
  { from: 'adam', to: 'shith', kind: 'historian', source: ik('Shith is reported as a son of Adam', 'শীস আদম (আ.)-এর পুত্র বলে বর্ণিত', 'يُروى أن شيثًا ابن آدم') },
  { from: 'shith', to: 'idris', kind: 'descent', source: ik('Idris is reported among the descendants of Shith', 'ইদরীস (আ.) শীসের বংশধর বলে বর্ণিত', 'يُروى أن إدريس من ذرية شيث') },
  { from: 'idris', to: 'nuh', kind: 'descent', source: ik("Nuh's line is traced back to Idris", 'নূহ (আ.)-এর বংশ ইদরীস (আ.) পর্যন্ত পৌঁছায় বলে বর্ণিত', 'يُرفع نسب نوح إلى إدريس') },
  { from: 'nuh', to: 'sam', kind: 'historian', source: ik("Sam is named as a son of Nuh; the Quran says Nuh's descendants were the ones who remained (37:77)", 'সাম নূহ (আ.)-এর পুত্র বলে বর্ণিত; কুরআন বলে নূহের বংশধরদেরই অবশিষ্ট রাখা হয় (৩৭:৭৭)', 'يُذكر سام ابنًا لنوح، والقرآن يذكر أن ذريته هم الباقون (٣٧:٧٧)') },
  { from: 'sam', to: 'hud', kind: 'descent', source: ik("'Ad, the people of Hud, are traced to Sam", 'হূদ (আ.)-এর জাতি আদ সামের বংশধর বলে বর্ণিত', 'يُنسب قوم عاد إلى سام') },
  { from: 'sam', to: 'salih', kind: 'descent', source: ik('Thamud, the people of Salih, are traced to Sam', 'সালিহ (আ.)-এর জাতি সামূদ সামের বংশধর বলে বর্ণিত', 'يُنسب قوم ثمود إلى سام') },
  { from: 'sam', to: 'azar', kind: 'descent', source: ik("Ibrahim's ancestry is traced to Sam", 'ইবরাহীম (আ.)-এর পূর্বপুরুষ সাম পর্যন্ত পৌঁছায় বলে বর্ণিত', 'يُرفع نسب إبراهيم إلى سام') },
  { from: 'azar', to: 'ibrahim', kind: 'quran', source: t('"Ibrahim said to his father Azar…" (Quran 6:74).', '"যখন ইবরাহীম তাঁর পিতা আযরকে বললেন…" (সূরা আল-আনআম ৬:৭৪)।', '﴿وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِيهِ آزَرَ﴾ (الأنعام ٦:٧٤).') },
  { from: 'azar', to: 'haran', kind: 'historian', source: ik('Haran is reported as a brother of Ibrahim', 'হারান ইবরাহীম (আ.)-এর ভাই বলে বর্ণিত', 'يُروى أن هاران أخو إبراهيم') },
  { from: 'haran', to: 'lut', kind: 'historian', source: ik("Lut is reported as Haran's son, Ibrahim's nephew. The Quran says Lut believed in Ibrahim (29:26)", 'লূত (আ.) হারানের পুত্র, ইবরাহীম (আ.)-এর ভাতিজা বলে বর্ণিত। কুরআন বলে লূত ইবরাহীমের প্রতি ঈমান আনেন (২৯:২৬)', 'يُروى أن لوطًا ابن هاران، ابن أخي إبراهيم، والقرآن يذكر أنه آمن له (٢٩:٢٦)') },
  { from: 'ibrahim', to: 'ismail', kind: 'quran', source: t('"Praise be to Allah, who granted me in old age Ismail and Ishaq" (Quran 14:39).', '"সব প্রশংসা আল্লাহর, যিনি বার্ধক্যে আমাকে ইসমাঈল ও ইসহাককে দান করেছেন" (সূরা ইবরাহীম ১৪:৩৯)।', '﴿الْحَمْدُ لِلَّهِ الَّذِي وَهَبَ لِي عَلَى الْكِبَرِ إِسْمَاعِيلَ وَإِسْحَاقَ﴾ (إبراهيم ١٤:٣٩).') },
  { from: 'ibrahim', to: 'ishaq', kind: 'quran', source: t('"…who granted me in old age Ismail and Ishaq" (Quran 14:39).', '"…যিনি বার্ধক্যে আমাকে ইসমাঈল ও ইসহাককে দান করেছেন" (সূরা ইবরাহীম ১৪:৩৯)।', '﴿وَهَبَ لِي عَلَى الْكِبَرِ إِسْمَاعِيلَ وَإِسْحَاقَ﴾ (إبراهيم ١٤:٣٩).') },
  { from: 'ibrahim', to: 'shuayb', kind: 'descent', source: ik("Madyan, the people of Shu'ayb, are traced to Ibrahim", 'শুআইব (আ.)-এর জাতি মাদইয়ান ইবরাহীম (আ.)-এর বংশধর বলে বর্ণিত', 'يُنسب أهل مدين قوم شعيب إلى إبراهيم') },
  { from: 'ishaq', to: 'yaqub', kind: 'quran', source: t('"…We gave her good news of Ishaq, and after Ishaq, Yaqub" (Quran 11:71).', '"…আমি তাকে ইসহাকের এবং ইসহাকের পরে ইয়াকুবের সুসংবাদ দিলাম" (সূরা হূদ ১১:৭১)।', '﴿فَبَشَّرْنَاهَا بِإِسْحَاقَ وَمِن وَرَاءِ إِسْحَاقَ يَعْقُوبَ﴾ (هود ١١:٧١).') },
  { from: 'ishaq', to: 'ayyub', kind: 'descent', source: t("The Quran counts Ayyub among Ibrahim's descendants (6:84). Ibn Kathir traces him through Ishaq.", 'কুরআন আইয়ূব (আ.)-কে ইবরাহীম (আ.)-এর বংশধরদের মধ্যে গণ্য করে (৬:৮৪)। ইবনে কাসীর তাঁকে ইসহাকের বংশে দেখান।', 'عدّ القرآن أيوب من ذرية إبراهيم (٦:٨٤)، ونسبه ابن كثير إلى إسحاق.') },
  { from: 'yaqub', to: 'yusuf', kind: 'quran', source: t('"When Yusuf said to his father: O my father…" (Quran 12:4).', '"যখন ইউসুফ তাঁর পিতাকে বললেন: হে আমার পিতা…" (সূরা ইউসুফ ১২:৪)।', '﴿إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ﴾ (يوسف ١٢:٤).') },
  { from: 'yaqub', to: 'lawi', kind: 'historian', source: ik('Lawi is named among the twelve sons of Yaqub', 'লাবী ইয়াকুব (আ.)-এর বারো পুত্রের একজন বলে বর্ণিত', 'يُذكر لاوي من أبناء يعقوب الاثني عشر') },
  { from: 'yaqub', to: 'yahuda', kind: 'historian', source: ik('Yahudha is named among the twelve sons of Yaqub', 'ইয়াহুদা ইয়াকুব (আ.)-এর বারো পুত্রের একজন বলে বর্ণিত', 'يُذكر يهوذا من أبناء يعقوب الاثني عشر') },
  { from: 'lawi', to: 'musa', kind: 'descent', source: ik('Musa is traced to Lawi', 'মূসা (আ.) লাবীর বংশধর বলে বর্ণিত', 'يُنسب موسى إلى لاوي') },
  { from: 'lawi', to: 'harun', kind: 'descent', source: ik('Harun is traced to Lawi', 'হারূন (আ.) লাবীর বংশধর বলে বর্ণিত', 'يُنسب هارون إلى لاوي') },
  { from: 'musa', to: 'harun', kind: 'quran', source: t('"…Harun, my brother" (Quran 20:29–30).', '"…আমার ভাই হারূনকে" (সূরা ত্বা-হা ২০:২৯–৩০)।', '﴿هَارُونَ أَخِي﴾ (طه ٢٠:٢٩–٣٠).') },
  { from: 'yahuda', to: 'dawud', kind: 'descent', source: ik('Dawud is traced to Yahudha', 'দাউদ (আ.) ইয়াহুদার বংশধর বলে বর্ণিত', 'يُنسب داود إلى يهوذا') },
  { from: 'dawud', to: 'sulayman', kind: 'quran', source: t('"And We gave to Dawud, Sulayman" (Quran 38:30).', '"আর আমি দাউদকে দান করলাম সুলাইমান" (সূরা সোয়াদ ৩৮:৩০)।', '﴿وَوَهَبْنَا لِدَاوُودَ سُلَيْمَانَ﴾ (ص ٣٨:٣٠).') },
  { from: 'imran', to: 'maryam', kind: 'quran', source: t('"And Maryam, the daughter of Imran…" (Quran 66:12).', '"আর ইমরানের কন্যা মারইয়াম…" (সূরা আত-তাহরীম ৬৬:১২)।', '﴿وَمَرْيَمَ ابْنَتَ عِمْرَانَ﴾ (التحريم ٦٦:١٢).') },
  { from: 'maryam', to: 'isa', kind: 'quran', source: t('"…his name will be the Messiah, Isa, the son of Maryam" (Quran 3:45).', '"…তার নাম মাসীহ, মারইয়ামের পুত্র ঈসা" (সূরা আলে ইমরান ৩:৪৫)।', '﴿اسْمُهُ الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ﴾ (آل عمران ٣:٤٥).') },
  { from: 'zakariya', to: 'yahya', kind: 'quran', source: t('"O Zakariya, We give you good news of a boy whose name will be Yahya" (Quran 19:7).', '"হে যাকারিয়া, আমি তোমাকে এক পুত্রের সুসংবাদ দিচ্ছি, যার নাম ইয়াহইয়া" (সূরা মারইয়াম ১৯:৭)।', '﴿يَا زَكَرِيَّا إِنَّا نُبَشِّرُكَ بِغُلَامٍ اسْمُهُ يَحْيَى﴾ (مريم ١٩:٧).') },
  { from: 'zakariya', to: 'maryam', kind: 'quran', source: t('"…and He put her in the care of Zakariya" (Quran 3:37).', '"…এবং তিনি তাকে যাকারিয়ার তত্ত্বাবধানে দিলেন" (সূরা আলে ইমরান ৩:৩৭)।', '﴿وَكَفَّلَهَا زَكَرِيَّا﴾ (آل عمران ٣:٣٧).') },
  { from: 'yahya', to: 'isa', kind: 'quran', source: t('In the hadith of the Night Journey the Prophet ﷺ met "Yahya and Isa, the two cousins" (Sahih al-Bukhari).', 'মিরাজের হাদীসে নবী ﷺ "ইয়াহইয়া ও ঈসা, দুই খালাতো ভাই"-এর সাক্ষাৎ পান (সহীহ বুখারী)।', 'في حديث المعراج لقي النبي ﷺ «يحيى وعيسى وهما ابنا الخالة» (صحيح البخاري).') },
  { from: 'ismail', to: 'muhammad', kind: 'descent', source: t('"Allah chose Kinanah from the children of Ismail… and chose me from Banu Hashim" (Sahih Muslim). Many generations lie between.', '"আল্লাহ ইসমাঈলের সন্তানদের মধ্য থেকে কিনানাকে বেছে নিয়েছেন… আর বনু হাশিম থেকে আমাকে বেছে নিয়েছেন" (সহীহ মুসলিম)। মাঝে বহু প্রজন্ম।', '«إن الله اصطفى كنانة من ولد إسماعيل… واصطفاني من بني هاشم» (صحيح مسلم). وبينهما أجيال كثيرة.') },
  { from: 'yaqub', to: 'group', kind: 'descent', source: t('The Quran names them among the guided descendants (6:84–86). Their exact fathers are not given.', 'কুরআন তাঁদের হেদায়াতপ্রাপ্ত বংশধরদের মধ্যে উল্লেখ করেছে (৬:৮৪–৮৬)। নির্দিষ্ট পিতার নাম বলা নেই।', 'ذكرهم القرآن في الذرية المهتدية (٦:٨٤–٨٦) دون تسمية آبائهم.') },
  { from: 'yaqub', to: 'zakariya', kind: 'descent', source: t('Zakariya was a prophet of the Children of Israel, the descendants of Yaqub.', 'যাকারিয়া (আ.) ছিলেন বনী ইসরাঈল অর্থাৎ ইয়াকুব (আ.)-এর বংশধরদের নবী।', 'كان زكريا نبيًا من بني إسرائيل، ذرية يعقوب.') },
  { from: 'lawi', to: 'imran', kind: 'descent', source: t('Maryam is called "sister of Harun" (Quran 19:28), linking her family to the line of Harun.', 'মারইয়ামকে "হারূনের বোন" বলা হয়েছে (সূরা মারইয়াম ১৯:২৮), যা তাঁর পরিবারকে হারূনের বংশের সাথে যুক্ত করে।', 'نُوديت مريم «يا أخت هارون» (مريم ١٩:٢٨)، وفيه نسبة أسرتها إلى هارون.') },
];
