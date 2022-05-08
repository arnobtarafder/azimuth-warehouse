import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import './SignUp.css';
import { Helmet } from 'react-helmet-async';
import Footer from "../../Footer/Footer";



const SignUp = () => {
  const [notMatchError, setNotMatchError] = useState("");
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating] = useUpdateProfile(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const ConfirmPasswordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = ConfirmPasswordRef.current.value;
    
    if (password !== confirmPassword) {
        setNotMatchError("Your two passwords did not match")
        return;
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate(from, { replace: true });
    toast("Send Verification!");
  };

  let errorElem;
  if (error) {
    return (errorElem = error?.message);
  }
  if (loading || updating) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <section>
      <div className="form-body container mx-auto">
      <Helmet>
        <title>Sign up | Azimuth Warehouse</title>
      </Helmet>

      <div className="container-main-form" id="container">

      <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>

        <div className="form-container-section log-in-container">
          <form onSubmit={handleRegister} className="form py-5">
            <h1 className="pt-5 mt-5 text-decoration-underline">Sign Up</h1>
            <SocialLogin />
            {errorElem}
            {/* <span>or create your account</span> */}
            <input
              ref={nameRef}
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              ref={passwordRef}
              type="password"
              name="password"
              placeholder="Password"
              required
            />{" "}
            
             <input
              ref={ConfirmPasswordRef}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />{" "}

            <p style={{ color: "red" }}>{notMatchError}</p>


            <Form.Group className="checkbox mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={() => setAgree(!agree)}
                className={agree ? " text-primary" : " text-secondary"}
                type="checkbox"
                label="I agree to the terms and conditions"
              />
            </Form.Group>
            <button className={!agree ? "" : "login-btn"} type="submit">
              Sign up
            </button>
            <p className="pb-5 mb-5">
              Already have an account ?{" "}
              <span>
                <Link className="text-primary" to="/signIn">
                  Sign in
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>

      <ToastContainer />


    </div>
    
      <Footer />
    </section>
  );
};

export default SignUp;