import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElem;
  const handleGoogle = () => {
    signInWithGoogle();
  };

  const handleFacebook = () => {
    signInWithFacebook();
  };

  const handleGithub = () => {
    signInWithGithub();
  };
  if (googleError || githubError || facebookError) {
    errorElem = (
      <span className="text-danger">
        {facebookError?.message} {githubError?.message} {googleError?.message}
      </span>
    );
  }
  if (googleLoading || githubLoading || facebookLoading) {
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>;
  }

  if (googleUser || githubUser || facebookUser) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <div className="social-container">
        <FcGoogle className="social" onClick={handleGoogle}></FcGoogle>
        <RiFacebookCircleLine
          className="social"
          onClick={handleFacebook}
        ></RiFacebookCircleLine>
        <BsGithub className="social" onClick={handleGithub}></BsGithub>
      </div>
      {errorElem}
    </>
  );
};

export default SocialLogin;