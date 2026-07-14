import { cn } from "../../lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function GradientText({ children, className, as: Component = "span" }: GradientTextProps) {
  return (
    <Component className={cn("text-gradient-primary font-bold", className)}>
      {children}
    </Component>
  );
}
