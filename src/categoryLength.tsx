const CategoryLength = () => {
  const shoes = document.querySelectorAll('div.shoes');
    const hats = document.querySelectorAll('div.hats');
    const tools = document.querySelectorAll('div.tools');
    const housing = document.querySelectorAll('div.housing');
    const vehicles = document.querySelectorAll('div.vehicles');
    const categorysArray = [shoes.length.toString(), hats.length.toString(), tools.length.toString(), housing.length.toString(), vehicles.length.toString()];
    let shoesLength = `Antal produkter: (${categorysArray[0]})`
  return (
      <div className='flex items-center justify-center'>
        <h3>{shoesLength}</h3>
      </div>
  );
};

export default CategoryLength;
