import { useCallback, useMemo, useState } from "react";

export function useIteration(
  initialIndex: number = 0,
  limit: number = Infinity
) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const isLast = useMemo(
    () => currentIndex + 1 === limit,
    [currentIndex, limit]
  );
  const isFirst = useMemo(() => currentIndex === 0, [currentIndex]);
  const next = useCallback(() => setCurrentIndex((i) => i + 1), []);
  const prev = useCallback(() => setCurrentIndex((i) => i - 1), []);
  return { currentIndex, isFirst, isLast, next, prev, setCurrentIndex };
}
