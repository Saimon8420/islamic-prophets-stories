import { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useTranslation } from '../../i18n/useTranslation';
import type { QuizQuestion } from '../../types/prophet';

interface QuizViewProps {
  prophetName: string;
  questions: QuizQuestion[];
  onBack: () => void;
}

export const QuizView = ({ prophetName, questions, onBack }: QuizViewProps) => {
  const { t, language } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const percent = (score / questions.length) * 100;
    const message = percent >= 80 ? t('kids.excellent') : percent >= 50 ? t('kids.good') : t('kids.keepLearning');

    return (
      <div className="space-y-6 fade-in max-w-lg mx-auto text-center">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="me-2 h-4 w-4" />
          {t('common.back')}
        </Button>

        <Card>
          <CardContent className="p-8 space-y-4">
            <span className="text-6xl">{percent >= 80 ? '🌟' : percent >= 50 ? '👍' : '📚'}</span>
            <h2 className="text-2xl font-bold">{t('kids.score')}</h2>
            <p className="text-4xl font-bold islamic-text-gradient">{score}/{questions.length}</p>
            <p className="text-lg text-muted-foreground">{message}</p>
            <div className="flex gap-3 justify-center mt-4">
              <Button variant="outline" onClick={onBack}>{t('common.back')}</Button>
              <Button variant="islamic" onClick={restart}>
                <RotateCcw className="me-2 h-4 w-4" />
                {t('kids.retakeQuiz')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in max-w-lg mx-auto">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="me-2 h-4 w-4" />
        {t('common.back')}
      </Button>

      <div className="text-center">
        <h2 className="text-xl font-bold">{t('kids.quizTitle')} — {prophetName}</h2>
        <p className="text-sm text-muted-foreground">
          {t('kids.question')} {currentIndex + 1}/{questions.length}
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">{currentQuestion.question[language]}</h3>

          <div className="space-y-2">
            {currentQuestion.options.map((option, i) => {
              const isSelected = selectedAnswer === i;
              const isCorrect = i === currentQuestion.correctIndex;
              const showResult = selectedAnswer !== null;

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    showResult && isCorrect
                      ? 'border-primary bg-primary/10'
                      : showResult && isSelected && !isCorrect
                        ? 'border-destructive bg-destructive/10'
                        : isSelected
                          ? 'border-primary bg-primary/5'
                          : 'border-input hover:border-primary/50 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {showResult && isCorrect && <CheckCircle className="h-4 w-4 text-primary shrink-0" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-destructive shrink-0" />}
                    <span>{option[language]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="space-y-3">
              <p className={`text-sm font-medium ${selectedAnswer === currentQuestion.correctIndex ? 'text-primary' : 'text-destructive'}`}>
                {selectedAnswer === currentQuestion.correctIndex ? t('kids.correct') : t('kids.incorrect')}
              </p>
              <p className="text-sm text-muted-foreground">{currentQuestion.explanation[language]}</p>
              <Button variant="islamic" className="w-full" onClick={handleNext}>
                {currentIndex < questions.length - 1 ? t('kids.nextQuestion') : t('kids.seeResults')}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
