import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';import { auth } from "../../../Firebase/Firebase.init";
import './EmailVerifiedAuth.css'

const EmailVerifiedAuth = () => {
  const [sendEmailVerification] =
    useSendEmailVerification(auth);
  return (
    <div className="text-center email-verified">
      <h3 className="text-danger">Your Email is not verified!!</h3>
      <h5 className="text-success"> Please Verify your email address</h5>
      <button
        className="verified-btn"
        onClick={async () => {
          await sendEmailVerification();
          toast("Sent email verification");
        }}
      >
        Send Verification Email Again
      </button>

      <ToastContainer />
    </div>
  );
};

export default EmailVerifiedAuth;