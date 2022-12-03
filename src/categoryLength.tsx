import { Typography } from '@mui/material';

const CategoryLength = () => {
  const totalItems = document.querySelectorAll('.showing');
  const totalItemsLength = totalItems.length.toString();
  // console.log(totalItems);
  // console.log(totalItemsLength);
  return (
    <div
      id="numberOfArticles"
      className="hidden items-center justify-center w-2/5 pl-8"
    >
      <Typography variant="body2">
        Antal artiklar: ({totalItemsLength})
      </Typography>
    </div>
  );
};

export default CategoryLength;
