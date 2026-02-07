import type { ProphetId, Language, StoryChapter, KidsChapter, QuizQuestion, Lesson } from '../types/prophet';

type ChapterLoader = () => Promise<{ default: StoryChapter[] }>;
type KidsLoader = () => Promise<{ default: KidsChapter[] }>;
type QuizLoader = () => Promise<{ default: QuizQuestion[] }>;
type LessonLoader = () => Promise<{ default: Lesson[] }>;

const chapterLoaders: Record<string, ChapterLoader> = {
  'adam-en': () => import('../data/stories/adam/chapters.en'),
  'adam-bn': () => import('../data/stories/adam/chapters.bn'),
  'adam-ar': () => import('../data/stories/adam/chapters.ar'),
  'idris-en': () => import('../data/stories/idris/chapters.en'),
  'idris-bn': () => import('../data/stories/idris/chapters.bn'),
  'idris-ar': () => import('../data/stories/idris/chapters.ar'),
  'nuh-en': () => import('../data/stories/nuh/chapters.en'),
  'nuh-bn': () => import('../data/stories/nuh/chapters.bn'),
  'nuh-ar': () => import('../data/stories/nuh/chapters.ar'),
  'hud-en': () => import('../data/stories/hud/chapters.en'),
  'hud-bn': () => import('../data/stories/hud/chapters.bn'),
  'hud-ar': () => import('../data/stories/hud/chapters.ar'),
  'salih-en': () => import('../data/stories/salih/chapters.en'),
  'salih-bn': () => import('../data/stories/salih/chapters.bn'),
  'salih-ar': () => import('../data/stories/salih/chapters.ar'),
  'ibrahim-en': () => import('../data/stories/ibrahim/chapters.en'),
  'ibrahim-bn': () => import('../data/stories/ibrahim/chapters.bn'),
  'ibrahim-ar': () => import('../data/stories/ibrahim/chapters.ar'),
  'lut-en': () => import('../data/stories/lut/chapters.en'),
  'lut-bn': () => import('../data/stories/lut/chapters.bn'),
  'lut-ar': () => import('../data/stories/lut/chapters.ar'),
  'ismail-en': () => import('../data/stories/ismail/chapters.en'),
  'ismail-bn': () => import('../data/stories/ismail/chapters.bn'),
  'ismail-ar': () => import('../data/stories/ismail/chapters.ar'),
  'ishaq-en': () => import('../data/stories/ishaq/chapters.en'),
  'ishaq-bn': () => import('../data/stories/ishaq/chapters.bn'),
  'ishaq-ar': () => import('../data/stories/ishaq/chapters.ar'),
  'yaqub-en': () => import('../data/stories/yaqub/chapters.en'),
  'yaqub-bn': () => import('../data/stories/yaqub/chapters.bn'),
  'yaqub-ar': () => import('../data/stories/yaqub/chapters.ar'),
  'yusuf-en': () => import('../data/stories/yusuf/chapters.en'),
  'yusuf-bn': () => import('../data/stories/yusuf/chapters.bn'),
  'yusuf-ar': () => import('../data/stories/yusuf/chapters.ar'),
  'ayyub-en': () => import('../data/stories/ayyub/chapters.en'),
  'ayyub-bn': () => import('../data/stories/ayyub/chapters.bn'),
  'ayyub-ar': () => import('../data/stories/ayyub/chapters.ar'),
  'shuayb-en': () => import('../data/stories/shuayb/chapters.en'),
  'shuayb-bn': () => import('../data/stories/shuayb/chapters.bn'),
  'shuayb-ar': () => import('../data/stories/shuayb/chapters.ar'),
  'musa-en': () => import('../data/stories/musa/chapters.en'),
  'musa-bn': () => import('../data/stories/musa/chapters.bn'),
  'musa-ar': () => import('../data/stories/musa/chapters.ar'),
  'harun-en': () => import('../data/stories/harun/chapters.en'),
  'harun-bn': () => import('../data/stories/harun/chapters.bn'),
  'harun-ar': () => import('../data/stories/harun/chapters.ar'),
  'dhul-kifl-en': () => import('../data/stories/dhul-kifl/chapters.en'),
  'dhul-kifl-bn': () => import('../data/stories/dhul-kifl/chapters.bn'),
  'dhul-kifl-ar': () => import('../data/stories/dhul-kifl/chapters.ar'),
  'dawud-en': () => import('../data/stories/dawud/chapters.en'),
  'dawud-bn': () => import('../data/stories/dawud/chapters.bn'),
  'dawud-ar': () => import('../data/stories/dawud/chapters.ar'),
  'sulayman-en': () => import('../data/stories/sulayman/chapters.en'),
  'sulayman-bn': () => import('../data/stories/sulayman/chapters.bn'),
  'sulayman-ar': () => import('../data/stories/sulayman/chapters.ar'),
  'ilyas-en': () => import('../data/stories/ilyas/chapters.en'),
  'ilyas-bn': () => import('../data/stories/ilyas/chapters.bn'),
  'ilyas-ar': () => import('../data/stories/ilyas/chapters.ar'),
  'al-yasa-en': () => import('../data/stories/al-yasa/chapters.en'),
  'al-yasa-bn': () => import('../data/stories/al-yasa/chapters.bn'),
  'al-yasa-ar': () => import('../data/stories/al-yasa/chapters.ar'),
  'yunus-en': () => import('../data/stories/yunus/chapters.en'),
  'yunus-bn': () => import('../data/stories/yunus/chapters.bn'),
  'yunus-ar': () => import('../data/stories/yunus/chapters.ar'),
  'zakariya-en': () => import('../data/stories/zakariya/chapters.en'),
  'zakariya-bn': () => import('../data/stories/zakariya/chapters.bn'),
  'zakariya-ar': () => import('../data/stories/zakariya/chapters.ar'),
  'yahya-en': () => import('../data/stories/yahya/chapters.en'),
  'yahya-bn': () => import('../data/stories/yahya/chapters.bn'),
  'yahya-ar': () => import('../data/stories/yahya/chapters.ar'),
  'isa-en': () => import('../data/stories/isa/chapters.en'),
  'isa-bn': () => import('../data/stories/isa/chapters.bn'),
  'isa-ar': () => import('../data/stories/isa/chapters.ar'),
  'muhammad-en': () => import('../data/stories/muhammad/chapters.en'),
  'muhammad-bn': () => import('../data/stories/muhammad/chapters.bn'),
  'muhammad-ar': () => import('../data/stories/muhammad/chapters.ar'),
};

const kidsLoaders: Record<string, KidsLoader> = {
  'adam-en': () => import('../data/stories/adam/kids.en'),
  'adam-bn': () => import('../data/stories/adam/kids.bn'),
  'adam-ar': () => import('../data/stories/adam/kids.ar'),
};

const quizLoaders: Record<string, QuizLoader> = {
  'adam': () => import('../data/stories/adam/quiz'),
};

const lessonLoaders: Record<string, LessonLoader> = {
  'adam': () => import('../data/stories/adam/lessons'),
};

export async function loadProphetChapters(prophetId: ProphetId, language: Language): Promise<StoryChapter[]> {
  const key = `${prophetId}-${language}`;
  const loader = chapterLoaders[key];
  if (!loader) {
    const fallback = chapterLoaders[`${prophetId}-en`];
    if (!fallback) return [];
    const mod = await fallback();
    return mod.default;
  }
  const mod = await loader();
  return mod.default;
}

export async function loadProphetKidsChapters(prophetId: ProphetId, language: Language): Promise<KidsChapter[]> {
  const key = `${prophetId}-${language}`;
  const loader = kidsLoaders[key];
  if (!loader) {
    const fallback = kidsLoaders[`${prophetId}-en`];
    if (!fallback) return [];
    const mod = await fallback();
    return mod.default;
  }
  const mod = await loader();
  return mod.default;
}

export async function loadProphetQuiz(prophetId: ProphetId): Promise<QuizQuestion[]> {
  const loader = quizLoaders[prophetId];
  if (!loader) return [];
  const mod = await loader();
  return mod.default;
}

export async function loadProphetLessons(prophetId: ProphetId): Promise<Lesson[]> {
  const loader = lessonLoaders[prophetId];
  if (!loader) return [];
  const mod = await loader();
  return mod.default;
}
