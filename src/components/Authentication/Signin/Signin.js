import React, { useRef } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import "./SignIn.css";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = <p className="text-danger">{error?.message}</p>;
  }
  if (loading || sending) {
    return <Loading />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = () => {
    navigate("/signUp");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Email Sent!");
    } else {
      toast.error("Type Your Email First!");
    }
  };

  return (
    <div className="form-body container mx-auto">
      <div className="container-main-form" id="container">
        <div className="form-container-section log-in-container">
          <form onSubmit={handleSubmit} className="form">
            <h1>Sign in</h1>
            <SocialLogin />
            {errorElement}
            <span>or use your account</span>
            <input required ref={emailRef} type="email" placeholder="Email" />
            <input
              required
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
            <p>
              Forgot Password ?{" "}
              
              <button 
			  	className="text-primary text-decoration-none pe-auto bg-white border-0 ps-1 fw-lighter fs-6"
			   	onClick={resetPassword}
			   >Reset</button>
            </p>
            <button className="login-btn" type="submit">
              Sign in
            </button>
            <p>
              New Here ?{" "}
              <span>
                <Link
                  className="text-primary"
                  to="/signUp"
                  onClick={navigateRegister}
                >Sign up
                </Link>
              </span>
            </p>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>

      </div>
        <ToastContainer closeButton={false} />

    </div>
  );
};

export default SignIn;