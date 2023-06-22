/**
 * @param fn - function to be throttled
 * @param delay - millisecond
 * T implies the args type of the fn
 */

export function throttle<T>(fn: (...args: T[]) => void, delay: number) {
  // use a timer to check if the fn has been triggered
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<typeof fn>) => {
    if (timer) return;
    fn(...args);
    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
}
