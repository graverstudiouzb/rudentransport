import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'py-16 md:py-24 lg:py-32',
        className
      )}
      {...props}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'max-w-7xl mx-auto px-4 md:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
