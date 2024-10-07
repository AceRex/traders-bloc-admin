import React from "react";
// @ts-ignore
import Img from "../../assets/images/dash1.png";
import SubText from "../subtext.tsx";
import { Link } from "react-router-dom";

function DashboardCard() {
  return (
    <div>
      <div className="w-full rounded-lg overflow-hidden mb-2">
        <img src={Img} alt="img" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <h2 className="font-semibold">
          Pending KYC Review: 3 New Applications
        </h2>
        <p className="text-sm text-text_light">
          KYC reviews are required for new suppliers and buyers that you have
          invited.
        </p>
        <Link to="/">
          <SubText text="View Post" />
        </Link>
      </div>
    </div>
  );
}

export default DashboardCard;
