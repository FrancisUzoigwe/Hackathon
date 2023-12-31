import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useProduct } from "../hooks/useProduct";
import { addToCart } from "../global/redux";
import DetailProductScreen from "./screen/DetailProductScreen";
import { updateToggleProduct } from "../api/API";
import { Link } from "react-router-dom";
import AddComp from "./screen/AddComp";
import LoadingScreen from "./screen/LoadingScreen";

const Product = () => {
  let { data, mutate }: any = useProduct();
  const [loading, setLoading] = useState<boolean>(false);
//   console.log("This is data :", data);

  const load = () => {
    setLoading(!data);
  };

  let dispatch = useDispatch();
  //   let cartData = useSelector((state: any) => state.cart);

  return (
    <div>
      <AddComp />
      {loading && <LoadingScreen />}
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-wrap w-full justify-center ">
          {data &&
            data.map((props: any) => (
              <div
                key={props._id}
                className=" min-h-[250px] min-w:[300px] border m-2 flex items-center flex-col overflow-hidden rounded-xl p-1 shadow-md"
              >
                <Link to={`/detail/${props._id}`}>
                  <img
                    className="w-full h-[170px] object-contain mb-4 hover:cursor-pointer hover:scale-[1.02] duration-300 transition-all "
                    src={props.image[0]}
                    onClick={() => {
                      // console.log(dispatch(updateProductTrue(props._id)).payload);
                    }}
                  />
                </Link>

                <div className="flex items-center justify-center w-full ml-0 -mt-1 mb-1">
                  <div
                    className="flex items-center h-[40px] mx-1 text-white bg-purple-600 px-3 hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm text-[12px] text-center leading-tight font-bold"
                    onClick={() => {
                      //   mutate(`/update-toggle-product/${props._id}`, () =>
                      //     updateToggleProduct(props._id, true)
                      //   );

                      updateToggleProduct(props._id, true);
                    }}
                  >
                    View Product
                  </div>
                  {
                    props.QTYinStock > 0 ? <div
                    className="flex items-center h-[40px] mx-1 text-white bg-black px-3 hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm text-[12px] text-center leading-tight font-bold"
                    onClick={() => {
                      dispatch(addToCart(props));
                    }}
                  >
                    Add to Cart
                  </div> : <div
                    className="flex items-center h-[40px] mx-1 text-white bg-[#c0b7b7] px-3 hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm text-[12px] text-center leading-tight font-bold"
                    
                  >
                    Add to Cart
                  </div>
                  }
                </div>
                <div className="font-[650]">
                  {props.title} || {props.QTYinStock <= 0 ? "Out Of Stock": props.QTYinStock }{" "}
                </div>
                <div className="relative w-[100%] h-[20px] flex ">
                  <div className="text-[12px] absolute top-0 left-0 -z-20 ">
                    {"⭐".repeat(props.rating)}
                  </div>
                  <div className="text-[12px] absolute top-0 left-0 opacity-[0.2]">
                    {"🐸".repeat(5)}
                  </div>
                </div>
                <div className="font-bold text-red-500 py-2">₦{props.cost}</div>
                {/* <div>{props.toggle ? "true" : "false"}</div> */}

                {props.toggle && <DetailProductScreen props={props} />}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Product;
