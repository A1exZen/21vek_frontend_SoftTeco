export function getReviewsWord(count: number): string {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return 'отзывов';
  if (lastDigit === 1) return 'отзыв';
  if (lastDigit >= 2 && lastDigit <= 4) return 'отзыва';
  return 'отзывов';
}