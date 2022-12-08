export const formatZeroPrice = (price: number) => {
  if (price === 0) return 'Gratis';
  return price + ' kr';
};
