import { describe, expect, test } from 'vitest';
import { dateConvertor } from '@/utils/dateConvertor';

describe("dateConvertor", () => {
  test('dateConvertor should convert date with time string to format "MMM d, yyyy"', () => {
    expect(dateConvertor('2023-03-16T19:06:12.184274')).toBe('Mar 16, 2023');
  });

  test('dateConvertor should convert date without time string to format "MMM d, yyyy"', () => {
    expect(dateConvertor('2023-03-16')).toBe('Mar 16, 2023');
  });

  test('dateConvertor should return the same value if input has already been formatted', () => {
    expect(dateConvertor('Mar 16, 2023')).toBe('Mar 16, 2023');
  });

  test('dateConvertor should return info message if no date string passed as argument', () => {
    expect(dateConvertor('')).toBe('No date provided');
  });
})

