import { useState } from "react";
import Product from "../Product";
import LoadingScreen from "./LoadingScreen";

const ProductScreen = () => {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <>
      <div className="flex justify-center w-full flex-col ">
        <div className="grid lg:grid-rows-4 md:grid-rows-4 max-sm:grid-rows-2">
          <Product />
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
