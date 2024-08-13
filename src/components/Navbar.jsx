import React, { useState } from "react";
import Avatar from "react-avatar";

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";

import logo from "../../public/logo.png";
import profile from "../../public/profile.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="flex items-center justify-between fixed top-0 w-full bg-white px-4 py-2 md:px-6 shadow-md md:shadow-lg border-b border-gray-200">
      {/* Left side: Logo and Menu Icon */}
      <div className="flex items-center space-x-4 w-full md:w-auto">
        <AiOutlineMenu className="text-4xl cursor-pointer md:hidden" />
        <img src={logo} alt="Logo" className="w-24 md:w-28 cursor-pointer" />
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center w-full md:w-[50%]">
        <div className="flex items-center w-full border-[1px] border-gray-400 rounded-full shadow-sm">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 outline-none rounded-l-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
          <button
            className="px-4 py-2 border-l border-gray-400 bg-gray-100 rounded-r-full shadow-sm hover:bg-gray-200"
            onClick={() => searchQueryHandler("searchButton")}>
            <CiSearch className="text-4xl" />
          </button>
        </div>
        <IoMdMic className="ml-3 text-4xl border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200 hidden md:block shadow-sm" />
      </div>

      {/* Right side: Icons and Avatar */}
      <div className="hidden sm:flex items-center space-x-5">
        <RiVideoAddLine className="border border-gray-600 text-4xl shadow-sm hover:bg-gray-200 p-2 rounded-full" />
        <AiOutlineBell className="border border-gray-600 text-4xl shadow-sm hover:bg-gray-200 p-2 rounded-full" />
        <Avatar
          src={profile}
          size="40"
          round={true}
          className="shadow-sm border border-gray-600"
        />
      </div>
    </div>
  );
}

export default Navbar;
