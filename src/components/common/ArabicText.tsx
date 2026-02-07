import { cn } from '../../lib/utils';

interface ArabicTextProps {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
}

export const ArabicText = ({ children, className, large }: ArabicTextProps) => {
  return (
    <span className={cn('arabic-text', large && 'arabic-large', className)}>
      {children}
    </span>
  );
};
