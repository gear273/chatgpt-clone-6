"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import ChatLogo from "../public/Logo.jpg";

const Login = () => {
  return (
    <div className="bg-[#16B48B] h-screen flex flex-col items-center justify-center text-center">
      <Image src={ChatLogo} height={300} width={300} alt="Logo" />
      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={() => signIn("google")}
      >
        Sign in to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
