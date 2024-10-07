import React from "react";
import SignupHeader from "../components/headers/signupHeader.tsx";
import Input from "../components/form/input.tsx";
import Subtext from "../components/subtext.tsx";
import Button from "../components/form/button.tsx";

function ForgotPassword() {
  return (
    <main>
      <SignupHeader />
      <div className="w-[60%] m-auto p-12">
        <div className="flex flex-col mt-4 items-center place-content-center">
          <h1 className="font-bold text-2xl">Finish setting up your account</h1>
          <Subtext text="Secure your account with a strong password to get started." />
          <form className="w-[70%] my-12">
            <Input
              type="text"
              label={"New Password"}
              inputWidth="w-full"
              onChange={() => {}}
            />
            <Input
              type="password"
              label={"Confirm New Password"}
              inputWidth="w-full"
              onChange={() => {}}
              subText="Must be at least 8 characters, include a number, and a special character."
            />
            <Button text="Set Password" className="my-6" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
