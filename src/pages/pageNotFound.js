import React from "react";

const pageNotFound = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <h1 className="text-4xl w-full  text-center p-12 bg-pink-100 ">
        <b>Error 404:</b> Page Not Found
      </h1>
    </div>
  );
};

export default pageNotFound;
