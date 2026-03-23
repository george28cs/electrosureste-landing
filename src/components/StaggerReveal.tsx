import { Children, type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  childClassName?: string;
  staggerMs?: number;
  initialDelayMs?: number;
}

const StaggerReveal = ({
  children,
  className,
  childClassName,
  staggerMs = 100,
  initialDelayMs = 0,
}: StaggerRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => (
        <div
          className={cn(
            "-translate-y-5 opacity-0 transition-all ease-out motion-reduce:translate-y-0 motion-reduce:transition-none",
            isVisible && "translate-y-0 opacity-100",
            childClassName,
          )}
          style={{
            transitionDelay: `${initialDelayMs + index * staggerMs}ms`,
            transitionDuration: "600ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggerReveal;
