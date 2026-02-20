import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  className = '',
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp({
    end,
    duration,
    decimals,
    suffix,
  });

  return (
    <div ref={ref} className={className}>
      {count}
    </div>
  );
}
