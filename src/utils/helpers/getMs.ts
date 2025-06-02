export const getMs = (
  from: 'sec' | 'min' | 'hours' | 'days',
  fromValue: number,
): number => {
  const conversion: Record<string, () => number> = {
    sec: () => fromValue * 1000,
    min: () => fromValue * 60 * 1000,
    hours: () => fromValue * 60 * 60 * 1000,
    days: () => fromValue * 24 * 60 * 60 * 1000,
  };
  return conversion[from]();
};
