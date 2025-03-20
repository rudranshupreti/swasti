import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi"; // Menu icon
import { AiOutlineSearch, AiOutlineGift } from "react-icons/ai"; // Icons
import logo from "./../src/assets/logo.svg";
import image from "./../src/assets/image.svg";

const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 300); // 300px scroll hone par fix ho jayega
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     <nav className="bg-white shadow-md px-6 py-2 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      {/* Left Section (Logo + Search Bar) */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Swasti Bharat" className="h-12 w-12" />
        <span className="text-xl font-bold text-[#4C1D3D]">Swasti Bharat</span>

        {/* Search Bar - Hidden in Mobile */}
        <div className="relative hidden md:flex items-center w-[450px] h-11 px-4 py-1 ml-20  rounded-full border border-gray-300 shadow-sm">
          <AiOutlineSearch className="text-gray-900 text-xl font-bold" />
          <input
            type="text"
            placeholder="Find your instructor or course"
            className="bg-transparent outline-none text-sm w-full ml-3 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-900 font-semibold hover:text-black">
          For Experts
        </a>
        <a href="#" className="text-gray-900 font-semibold hover:text-black">
          Blog
        </a>
        <button className="flex items-center bg-black text-white px-3 py-2 rounded-[6px]">
          <AiOutlineGift className="mr-3" />
          Sign up
        </button>
        <button className="flex items-center space-x-2 p-2 border border-gray-300 rounded-full shadow-md bg-white">
          <img
            src="/profile.png"
            alt="Profile"
            className="h-6 w-6 rounded-full object-cover"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl p-2" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-40 bg-white shadow-lg rounded-md p-3 flex flex-col space-y-2 z-50">
          <a href="#" className="text-gray-700 hover:text-black">
            For Experts
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Blog
          </a>
          <button className="bg-black text-white px-4 py-2 rounded-lg w-full">
            Sign up
          </button>
        </div>
      )}
    </nav>
      {/* Privacy Policy Header */}
      <div className="w-[95%] mx-auto flex flex-col items-center justify-center bg-gradient-to-r from-[#4C1D3D] to-[#913674] text-white py-10 h-50 rounded-lg mt-20">
        <h1 className="text-3xl font-sans font-normal">Privacy policy</h1>
        <h3 className="text-xs font-sans font-light mt-2">
          Total Revenue Generated
        </h3>
      </div>

      {/* Privacy Policy Section */}
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row  mt-0 pt-0">
        {/* Left Section - Text */}
        <div className="lg:w-[60%] ">
          <h1 className="text-2xl font-medium mt-10 text-[#582147]">Privacy Policies</h1>
          <p className="text-gray-500 leading-relaxed text-base mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
          <p className="text-gray-500 leading-relaxed">
            It has survived not only five centuries, but also the leap into electronic typesetting.
          </p>
          <h1 className="text-2xl font-medium mt-5 text-[#582147]">Privacy Policies</h1>
          <p className="text-gray-500 leading-relaxed text-base mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
          <p className="text-gray-500 leading-relaxed">
            It has survived not only five centuries, but also the leap into electronic typesetting.
          </p>
          <h1 className="text-2xl font-medium mt-5 text-[#582147]">Privacy Policies</h1>
          <p className="text-gray-500 leading-relaxed text-base mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
          <p className="text-gray-500 leading-relaxed">
            It has survived not only five centuries, but also the leap into electronic typesetting.
          </p>
          <h1 className="text-2xl font-medium mt-5 text-[#582147]">Privacy Policies</h1>
          <p className="text-gray-500 leading-relaxed text-base mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry... Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
          <p className="text-gray-500 leading-relaxed">
            It has survived not only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>

        {/* Right Section - Sticky Image */}
        {/* Right Section - Sticky Image */}
<div className="lg:w-[40%] flex justify-end hidden md:block">
  <img 
    src={image} 
    alt="Privacy Policy" 
    className="w-[500px] h-auto object-cover lg:sticky lg:top-20"
  />
</div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
