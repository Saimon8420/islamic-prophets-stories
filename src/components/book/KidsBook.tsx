import { useState } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle, RotateCcw, BookOpen } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';
import { localNum } from '../../lib/num';
import { Vignette, StarRule } from './Vignette';
import type { KidsChapter, ProphetMeta, QuizQuestion } from '../../types/prophet';

function Quiz({ questions, onBack }: { questions: QuizQuestion[]; onBack: () => void }) {
  const { t, language } = useTranslation();
  const n = (x: number) => localNum(x, language);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = questions[i];

  if (done) {
    const pct = (score / questions.length) * 100;
    return (
      <div className="bk-quiz" style={{ textAlign: 'center' }}>
        <div className="bk-kid-page">
          <h2>{t('kids.score')}</h2>
          <p style={{ fontSize: 44 }}>
            {n(score)} / {n(questions.length)}
          </p>
          <StarRule />
          <p style={{ marginTop: 12 }}>{pct >= 80 ? t('kids.excellent') : pct >= 50 ? t('kids.good') : t('kids.keepLearning')}</p>
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="bk-btn gold"
            onClick={() => {
              setI(0);
              setPicked(null);
              setScore(0);
              setDone(false);
            }}
          >
            <RotateCcw className="bk-ico" />
            {t('kids.retakeQuiz')}
          </button>
          <button type="button" className="bk-btn line" onClick={onBack}>
            {t('book.backToStory')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bk-quiz">
      <p style={{ color: 'var(--bk-rubric)', fontWeight: 600, margin: 0 }}>{t('book.questionNofM', { n: n(i + 1), m: n(questions.length) })}</p>
      <p className="q">{q.question[language]}</p>
      {q.options.map((o, k) => {
        const state = picked === null ? '' : k === q.correctIndex ? ' right' : k === picked ? ' wrong' : '';
        return (
          <button
            key={k}
            type="button"
            className={`bk-opt${state}`}
            disabled={picked !== null}
            onClick={() => {
              setPicked(k);
              if (k === q.correctIndex) setScore((s) => s + 1);
            }}
          >
            <span className="k">{n(k + 1)}</span>
            {o[language]}
          </button>
        );
      })}
      {picked !== null && (
        <>
          <div className="bk-explain" role="status">
            <b>{picked === q.correctIndex ? t('kids.correct') : t('kids.incorrect')}</b> {q.explanation[language]}
          </div>
          <button
            type="button"
            className="bk-btn gold"
            onClick={() => {
              if (i < questions.length - 1) {
                setI(i + 1);
                setPicked(null);
              } else setDone(true);
            }}
          >
            {i < questions.length - 1 ? t('kids.nextQuestion') : t('kids.seeResults')}
          </button>
        </>
      )}
    </div>
  );
}

export function KidsBook({
  prophet,
  chapters,
  quiz,
  onBack,
  onFull,
}: {
  prophet: ProphetMeta;
  chapters: KidsChapter[];
  quiz: QuizQuestion[];
  onBack: () => void;
  onFull: () => void;
}) {
  const { t, language } = useTranslation();
  const [inQuiz, setInQuiz] = useState(false);
  const Back = language === 'ar' ? ChevronRight : ChevronLeft;
  return (
    <main className="bk-main">
      <div className="bk-wrap">
        <div className="bk-crumb" style={{ marginTop: 22 }}>
          <button type="button" className="bk-btn line sm" onClick={inQuiz ? () => setInQuiz(false) : onBack}>
            <Back className="bk-ico" />
            {inQuiz ? t('book.backToStory') : t('book.backToContents')}
          </button>
          <span className="bk-grow" />
          <button type="button" className="bk-btn line sm" onClick={onFull}>
            <BookOpen className="bk-ico" />
            {t('book.fullStory')}
          </button>
        </div>
        {inQuiz ? (
          <Quiz questions={quiz} onBack={() => setInQuiz(false)} />
        ) : (
          <div className="bk-kids">
            <div className="bk-title">
              <div className="v">
                <Vignette id={prophet.id} />
              </div>
              <h1>{prophet.name[language]}</h1>
              <p className="sub">{t('kids.simplifiedStory')}</p>
            </div>
            {chapters.map((c) => (
              <section className="bk-kid-page" key={c.id}>
                <h2>{c.title}</h2>
                <p>{c.content}</p>
              </section>
            ))}
            {quiz.length > 0 && (
              <div style={{ textAlign: 'center' }}>
                <button type="button" className="bk-btn gold" onClick={() => setInQuiz(true)}>
                  <HelpCircle className="bk-ico" />
                  {t('book.quiz')}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
