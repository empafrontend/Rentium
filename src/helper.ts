import brokenImage from './Assets/broken-img.png';

export const formatZeroPrice = (price: number) => {
  if (price === 0) return 'Gratis';
  return price + ' kr';
};

export const onImageError = (e: React.MouseEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  return (target.src = brokenImage);
};
