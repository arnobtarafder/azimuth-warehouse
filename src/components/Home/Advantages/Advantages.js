import React from "react";

const Advantages = () => {
  return (
    <div className="container w-100 d-flex mx-auto mt-5 mb-3 cols-12">
      <div className="row gap-2 mx-auto">


        <div className="col-lg-3 col-md-4 col-sm-12 mx-auto">
          <div className="d-flex justify-center w-75 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-25 w-25 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>

          <h2 className="text-xl text-secondary font-sm ">
            FREE SHIPPING
          </h2>
        </div>


        <div className="col-lg-3 col-md-4 col-sm-12 mx-auto">
          <div className="d-flex justify-center w-75  mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-25 w-25 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>

          <h2 className="text-xl text-secondary  font-sm ">
            100% PAYMENT SECURE
          </h2>
        </div>


        <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
          <div className="d-flex justify-center w-75  mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-25 w-25"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>

          <h2 className="text-xl text-secondary  font-sm ">
            30 DAYS GUARANTEE <span className="text-sm">(free return policy)</span>
          </h2>
        </div>


      </div>
    </div>
  );
};

export default Advantages;
