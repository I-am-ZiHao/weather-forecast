/**
 * @param fn - function to be throttled
 * @param delay - millisecond
 * T implies the args type of the fn
 */

import { HourDataType } from "@/types/data";

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

// to get future data
export const filterDataByHour = (hourData: HourDataType[]) => {
  const currentHour = new Date().getHours();
  return hourData.filter((data) => {
    const hour = new Date(data.time_epoch * 1000).getHours();
    return hour >= currentHour;
  });
};

/**
 * @param value - value to be normalized
 * @param decimal - decimal to be fixed, default is 1
 */

// to certain decimal
export const normalizeValue = (value: number, decimal?: number) =>
  value.toFixed(decimal || 1);
