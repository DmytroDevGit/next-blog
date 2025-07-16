import { describe, expect, test } from "vitest";
import { getReadingTime } from '../utils/getReadingTime';
import { shortText, longText } from './testData/getReadingTimeData';

describe('getReadingTime', () => {
  test('Test lorem text consists of 300 words', () => {
    expect(getReadingTime(longText)).toBe(2);
  });

  test('Test lorem text consists of 20 words', () => {
    expect(getReadingTime(shortText)).toBe(1);
  });

  test('Test empty string', () => {
    expect(getReadingTime('')).toBe(0);
  });
})
