export type ProphetId =
  | 'adam' | 'idris' | 'nuh' | 'hud' | 'salih'
  | 'ibrahim' | 'lut' | 'ismail' | 'ishaq' | 'yaqub'
  | 'yusuf' | 'ayyub' | 'shuayb' | 'musa' | 'harun'
  | 'dhul-kifl' | 'dawud' | 'sulayman' | 'ilyas' | 'al-yasa'
  | 'yunus' | 'zakariya' | 'yahya' | 'isa' | 'muhammad';

export type Language = 'en' | 'bn' | 'ar';

export type ContentPhase = 'quran' | 'ibn-kathir' | 'hadith';

export interface TrilingualText {
  en: string;
  bn: string;
  ar: string;
}

export interface QuranReference {
  type: 'quran';
  surah: number;
  surahName: TrilingualText;
  ayahStart: number;
  ayahEnd?: number;
  arabicText?: string;
  translation?: TrilingualText;
}

export interface IbnKathirReference {
  type: 'ibn-kathir';
  book: string;
  chapter: string;
  section: string;
  summary: TrilingualText;
}

export interface HadithReference {
  type: 'hadith';
  collection: string;
  hadithNumber: string;
  narrator: string;
  text: TrilingualText;
  grade: 'sahih' | 'hasan' | 'daif';
}

export type Reference = QuranReference | IbnKathirReference | HadithReference;

export interface StoryParagraph {
  id: string;
  text: string;
  phase: ContentPhase;
  references: Reference[];
}

export interface StoryChapter {
  id: string;
  title: string;
  summary: string;
  order: number;
  paragraphs: StoryParagraph[];
}

export interface ProphetFamily {
  father?: string;
  mother?: string;
  spouse?: string[];
  sons?: string[];
  daughters?: string[];
  relatedProphets?: ProphetId[];
}

export interface ProphetMeta {
  id: ProphetId;
  order: number;
  name: TrilingualText;
  title: TrilingualText;
  era: TrilingualText;
  nation: TrilingualText;
  family: ProphetFamily;
  keyEvents: TrilingualText[];
  miracles: TrilingualText[];
  quranMentionCount: number;
  chapterCount: number;
}

export interface Lesson {
  id: string;
  title: TrilingualText;
  description: TrilingualText;
  references: Reference[];
}

export interface KidsChapter {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface QuizQuestion {
  id: string;
  question: TrilingualText;
  options: TrilingualText[];
  correctIndex: number;
  explanation: TrilingualText;
}

export interface ProphetStoryData {
  prophetId: ProphetId;
  chapters: StoryChapter[];
  lessons: Lesson[];
  kidsChapters: KidsChapter[];
  quiz: QuizQuestion[];
}

export interface Bookmark {
  id: string;
  prophetId: ProphetId;
  chapterId: string;
  paragraphId?: string;
  snippet: string;
  createdAt: number;
}

export interface ReadingProgress {
  completedChapters: string[];
  lastChapterId: string | null;
  lastScrollPosition: number;
}
