import React from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import SignupForm from "./SignupForm";
import { Link } from "react-router";
import { useState } from "react";

const Signup = () => {
  const [ isSucceed , setIsSucceed ] = useState(false);
  return (
    <div className="w-full min-h-screen bg-body flex flex-col gap-10 text-white">
      <Navbar />
      <main className="px-[28%] min-h-screen">
        <header className="h-[35vh] flex flex-col items-center justify-end mb-15">
          <img
            className="z-10 absolute top-0 w-full object-center opacity-30 mask-b-from-30%"
            src="src/assets/signup-header-banner.jpg"
            alt="header-banner"
          />

          <h1 className="z-10 text-[3.5rem] font-bold text-foreground text-amber-300">
            Join the Club
          </h1>
          <h2 className="z-10 text-paragraph-text-dark/70 text-xl">
            Become part of our growing community of developers
          </h2>
        </header>
        {/* Sign Up Form */}
        <div className="grid grid-cols-1 gap-5 bg-sidebar/30 p-8 rounded-2xl text-paragraph-text-dark">
          {isSucceed ? (
            <>
              <header className="space-y-2">
                <h2 className="text-2xl font-semibold">
                  Email Verification Required
                </h2>
                <p className="text-paragraph-text-dark/70">
                  A verification email has been sent to your registered email
                  address. Please check your inbox and follow the instructions
                  in the email to verify your account before proceeding.
                </p>
              </header>

              <p className="mt-4">
                Once your email is verified, you may continue:
              </p>
              <Link to="/login" className="text-blue-600 underline">
                Proceed to Login
              </Link>
            </>
          ) : (
            <>
              <header className="space-y-2">
                <h2 className="text-2xl font-semibold">Create Your Account</h2>
                <p className="text-paragraph-text-dark/70">
                  Fill in your details to get started. Authentication will be
                  enabled soon!
                </p>
              </header>
              <SignupForm setIsSucceed={setIsSucceed} />
              <div className="text-center">
                <p className="text-md text-muted-foreground">
                  Already have an account?{" "}
                  <Link to={"/login"} className="text-btn-hover underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
