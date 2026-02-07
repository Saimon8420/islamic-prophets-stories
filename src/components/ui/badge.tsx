import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        quran: 'border-transparent bg-islamic-green-100 text-islamic-green-800 dark:bg-islamic-green-900/50 dark:text-islamic-green-300',
        ibnKathir: 'border-transparent bg-islamic-gold-100 text-islamic-gold-800 dark:bg-islamic-gold-900/50 dark:text-islamic-gold-300',
        hadith: 'border-transparent bg-islamic-teal-100 text-islamic-teal-800 dark:bg-islamic-teal-900/50 dark:text-islamic-teal-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
