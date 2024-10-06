import React from "react";
import SignupHeader from "../components/headers/signupHeader.tsx";
import Input from "../components/form/input.tsx";
import Subtext from "../components/subtext.tsx";
import Button from "../components/form/button.tsx";

function Login() {
  return (
    <main>
      <SignupHeader />
      <div className="w-[60%] m-auto p-12">
        <div className="flex flex-col mt-4 items-center place-content-center">
          <h1 className="font-bold text-2xl">Welcome!</h1>
          <p className="font-bold text-2xl">
            Please enter your Default Email and Password
          </p>
          <form className="w-[70%] my-12">
            <Input
              type="text"
              label={"Email"}
              inputWidth="w-full"
              onChange={() => {}}
            />
            <Input
              type="password"
              label={"Password"}
              inputWidth="w-full"
              onChange={() => {}}
            />
            <Subtext text="Forgot Password?" />
            <Button text="Login to Dashboard" className="my-6" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
