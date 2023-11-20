import Product from "../Product";

const ProductScreen = () => {
  return (
    <div className="flex justify-center w-full flex-col ">
      <div className="grid lg:grid-rows-4 md:grid-rows-4 max-sm:grid-rows-2">
        <Product />
      </div>
    </div>
  );
};

export default ProductScreen;
