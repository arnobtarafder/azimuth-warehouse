import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const signInGoogle = () => {
    console.log(user);
    signInWithGoogle();
  };
  return (
    <div>
      <div className="flex gap-2 items-center ">
        <div className="h-1  w-2/4 bg-slate-200 "></div>
        <div> OR </div>
        <div className="h-1 w-2/4 bg-slate-200 "></div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={signInGoogle}
          className=" flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Google sign in
        </button>
      </div>
    </div>
  );
};

export default Social;
