import brokenImage from './Assets/broken-img.png';

/** Format price by adding kr or replacing with word "Gratis" for 0 priced item */
export const formatZeroPrice = (price: number) => {
  if (price === 0) return 'Gratis';
  return price + ' kr';
};

/** Handles broken image */
export const onImageError = (e: React.MouseEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  return (target.src = brokenImage);
};
