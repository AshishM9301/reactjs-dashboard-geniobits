import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../_actions/_authActions";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSignIn = () => {
    console.log(userName, password);
    dispatch(login({ userName, password }));
  };

  return (
    <div className="">
      <div className="overflow-hidden min-h-screen bg-orange-600 flex justify-center items-center relative">
        <div className="absolute w-60 h-60 rounded-xl bg-orange-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-orange-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
              Sign In
            </h1>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="User Name"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center mt-6">
            <button
              className="py-3 w-64 text-xl text-white bg-orange-600 rounded-2xl"
              onClick={() => onSignIn()}
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="w-40 h-40 absolute bg-orange-300 rounded-full top-0 right-12 hidden md:block" />
        <div className="w-20 h-40 absolute bg-orange-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </div>
  );
};

export default Login;
