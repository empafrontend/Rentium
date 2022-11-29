const CategoryLength = () => {
  const totalItems = document.querySelectorAll('.showing');
  const totalItemsLength = totalItems.length.toString();
  console.log(totalItems);
  console.log(totalItemsLength);
  return (
    <div id="numberOfArticles" className="hidden items-center justify-center">
      <h3>Antal artiklar: ({totalItemsLength})</h3>
    </div>
  );
};

export default CategoryLength;
