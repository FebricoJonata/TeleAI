import React, { useEffect, useState } from "react";
import bgImage from "../assets/bgImage.svg";
import BaseTextField from "../components/BaseTextField";
import BaseButton from "../components/BaseButton";
import axios from "axios";
// import ApiService from "../services/apiService";

export default function LoginPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div
      className="flex h-screen w-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold">TeleAI</h1>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center ">
        <div className="bg-neutral-blacklow rounded-md shadow-md w-full max-w-full h-full flex flex-col items-center justify-center gap-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Register here</h2>
          <form className="w-full max-w-lg">
            <div className="mb-4 ">
              <label className="block text-white text-sm font-bold ">
                Full Name
              </label>
              <BaseTextField
                isFullWidth={true}
                value={fullName}
                onValueChanged={setFullName}
                helperText="Dont empty"
              />
              {/* <input type="text" placeholder="John Doe" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> */}
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold ">
                Email
              </label>
              <BaseTextField
                isFullWidth={true}
                value={email}
                onValueChanged={setEmail}
              />
              {/* <input type="email" placeholder="example@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> */}
            </div>
            <div className="mb-4 ">
              <label className="block text-white text-sm font-bold ">
                Password
              </label>
              <BaseTextField
                isFullWidth={true}
                type={"password"}
                value={password}
                onValueChanged={setPassword}
              />
              {/* <input type="password" placeholder="Enter your password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> */}
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold">
                Confirm Password
              </label>
              <BaseTextField
                isFullWidth={true}
                type={"password"}
                value={confirmPassword}
                onValueChanged={setConfirmPassword}
              />
              {/* <input type="password" placeholder="Enter your password again" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> */}
            </div>
            <div className="mt-10">
              {" "}
              <BaseButton
                title={"Primary"}
                // action={registAPI}

                type="submit"
                isFullWidth={true}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
