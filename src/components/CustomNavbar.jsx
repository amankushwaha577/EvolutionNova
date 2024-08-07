"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { FiHome, FiEdit, FiEye, FiUser, FiLogOut, FiLogIn, FiUserPlus } from "react-icons/fi";
import logo from "../assets/logo.png";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (
    <nav className="h-16 py-2 px-8 md:px-36 flex justify-between items-center bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="brand flex items-center">
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={40}
          className="cursor-pointer"
        />
      </div>
      <div>
        <ul className="flex space-x-5 text-sm md:text-base">
          {context.user && (
            <>
              <li>
                <Link href="/" className="flex items-center hover:text-blue-400 transition duration-300">
                  <FiHome className="mr-1 text-xl" /> Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="flex items-center hover:text-blue-400 transition duration-300">
                  <FiEdit className="mr-1 text-xl" /> Write Notes
                </Link>
              </li>
              <li>
                <Link href="/show-tasks" className="flex items-center hover:text-blue-400 transition duration-300">
                  <FiEye className="mr-1 text-xl" /> Show Notes
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3 text-sm md:text-base">
          {context.user && (
            <>
              <li className="flex items-center">
                <Link href="#!" className="flex items-center hover:text-blue-400 transition duration-300">
                  <FiUser className="mr-1 text-xl" /> {context.user.name}
                </Link>
              </li>
              <li>
                <button
                  onClick={doLogout}
                  className="px-3 py-1 bg-red-600 text-white rounded-md flex items-center hover:bg-red-500 transition duration-300"
                >
                  <FiLogOut className="mr-1 text-xl" /> Logout
                </button>
              </li>
            </>
          )}
          {!context.user && (
            <>
              <li>
                <Link href="/login" className="flex items-center hover:text-blue-400 transition duration-300">
                  <FiLogIn className="mr-1 text-xl" /> Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="flex items-center hover:text-blue-400 transition duration-300">
                  <FiUserPlus className="mr-1 text-xl" /> Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
