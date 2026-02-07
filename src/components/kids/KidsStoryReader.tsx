import { useState } from 'react';
import { ArrowLeft, BookOpen, HelpCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { IslamicDivider } from '../common/IslamicDivider';
import { QuizView } from './QuizView';
import { useTranslation } from '../../i18n/useTranslation';
import type { ProphetMeta, KidsChapter, QuizQuestion } from '../../types/prophet';

interface KidsStoryReaderProps {
  prophet: ProphetMeta;
  kidsChapters: KidsChapter[];
  quiz: QuizQuestion[];
  onBack: () => void;
}

export const KidsStoryReader = ({ prophet, kidsChapters, quiz, onBack }: KidsStoryReaderProps) => {
  const { t, language } = useTranslation();
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz && quiz.length > 0) {
    return <QuizView prophetName={prophet.name[language]} questions={quiz} onBack={() => setShowQuiz(false)} />;
  }

  return (
    <div className="space-y-6 fade-in max-w-2xl mx-auto">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="me-2 h-4 w-4" />
        {t('common.back')}
      </Button>

      <div className="text-center space-y-2">
        <span className="text-4xl">📖</span>
        <h1 className="text-2xl font-bold islamic-text-gradient">{prophet.name[language]}</h1>
        <p className="text-muted-foreground">{t('kids.simplifiedStory')}</p>
      </div>

      <div className="space-y-4">
        {kidsChapters.map((chapter) => (
          <Card key={chapter.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="font-bold text-lg">{chapter.title}</h2>
              </div>
              <IslamicDivider />
              <p className="mt-4 leading-relaxed text-lg">{chapter.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {quiz.length > 0 && (
        <div className="text-center">
          <Button variant="islamic" size="lg" onClick={() => setShowQuiz(true)}>
            <HelpCircle className="me-2 h-5 w-5" />
            {t('kids.quizTitle')}
          </Button>
        </div>
      )}
    </div>
  );
};
