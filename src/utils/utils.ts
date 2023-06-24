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

/**
 * @param date - date string to be normalized, looks like "2023-06-23 15:15"
 */
export const getTimeFromDateString = (date: string) =>
  date.slice(date.length - 5);

/**
 * @param timeStamp - timeStamp to be coverted, looks like 1687694400, unit is second
 */
export const convertTimestampToLocalTime = (timeStamp: number) => {
  const hour = new Date(timeStamp * 1000).getHours().toString();
  const hourStr = hour.length === 2 ? hour : `0${hour}`; // add '0' if it is before 10 am
  return `${hourStr}:00`;
};
