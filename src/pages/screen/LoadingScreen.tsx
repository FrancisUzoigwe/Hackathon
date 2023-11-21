import { BallTriangle } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center flex-col absolute"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="w-full h-full absolute flex flex-col justify-center items-center max-sm:w-[50px] ">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass=""
          wrapperStyle={{}}
          visible={true}
        />
        <div className="font-bold mt-10">Compiling data...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
