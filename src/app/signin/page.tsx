import React from "react";
// import { Input } from "../components/ui/Input";
// import { auth } from "../../firebase.config";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { CgSpinner } from "react-icons/cg";
// import OtpInput from "otp-input-react";
// import { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import firebase from "firebase/compat/app";


// declare global {
//     interface Window {
//       recaptchaVerifier: firebase.auth.RecaptchaVerifier | undefined;
//     }
//   }
  
function Page() {
//   const [otp, setOtp] = useState("");
//   const [ph, setPh] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOTP, setShowOTP] = useState(false);
//   const [user, setUser] = useState(null);

//   function onCaptchVerify() {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: (response:any) => {
//             onSignup();
//           },
//           "expired-callback": () => {},
//         },
//         auth
//       );
//     }
//   }

//   function onSignup() {
//     setLoading(true);
//     onCaptchVerify();

//     const appVerifier = window.recaptchaVerifier;

//     const formatPh = "+" + ph;

//     signInWithPhoneNumber(auth, formatPh, appVerifier)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         setLoading(false);
//         setShowOTP(true);
//         toast.success("OTP sended successfully!");
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }

//   function onOTPVerify() {
//     setLoading(true);
//     window.confirmationResult
//       .confirm(otp)
//       .then(async (res) => {
//         console.log(res);
//         setUser(res.user);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }

  return (
    <div>
      sfdss
    </div>
  );
}

export default Page;
