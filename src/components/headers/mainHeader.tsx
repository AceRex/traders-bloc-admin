import { IoSearchOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/profileImg.png";
import { CiMenuBurger } from "react-icons/ci";
import React from "react";

function MainHeader() {
  const navigate = useNavigate();
  const links = [
    { title: "Home", url: "/" },
    { title: "KYC", url: "/kyc" },
    { title: "Invoice", url: "/invoice" },
    { title: "Milestone", url: "/milestone" },
    { title: "Funding", url: "/funding" },
  ];
  return (
    <div className="border-b border-b-bg-light px-12 p-4 flex flex-row items-center justify-between">
      <p className="font-extrabold text-xl tracking-tight w-[50%] lg:w-[20%]">
        Traders by bloc - Admin
      </p>
      <div className="hidden lg:block w-[50%] lg:w-[80%]">
        <ul className="flex flex-row justify-end items-center text-sm gap-6">
          {links.map(({ title, url }) => (
            <li onClick={() => navigate(`${url}`)} className="cursor-pointer">
              {title}
            </li>
          ))}
          <div className="bg-bg_light p-2 rounded-xl cursor-pointer">
            <VscBell size={17} />
          </div>
          <div
            className="bg-bg_light rounded-full cursor-pointer overflow-hidden"
            onClick={() => navigate("/profile")}
          >
            <img
              src={profileImage}
              alt="profile-image"
              className="object-contain w-[40px] h-[40px]"
            />
          </div>
        </ul>
      </div>
      <div className="lg:hidden">
        <CiMenuBurger size={18} />
      </div>
    </div>
  );
}

export default MainHeader;
