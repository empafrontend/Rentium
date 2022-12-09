export const formatZeroPrice = (price: number) => {
  if (price === 0) return 'Gratis';
  return price + ' kr';
};

export const onImageError = (e: React.MouseEvent<HTMLImageElement>) => {
  const target = e.target as HTMLImageElement;
  return (target.src =
    'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=');
  // TODO: change image (either local or link)
};
