export function getReadingTime(str: string, wordsPerMinute: number = 250): number {
  return Math.ceil((str.match(/\b\w+\b/g) || []).length / wordsPerMinute)
}
