import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
        <h1 className="text-4xl font-semibold text-center text-gray-300">
          <span className="text-gray-300"> Sign Up</span>
        </h1>
        <h1 className="text-xl label-text text-center p-2">Enter Details</h1>

        <form>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              className="w-full rounded-3xl border-none input input-bordered h-10 bg-opacity-50 px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              className="w-full rounded-3xl border-none input input-bordered h-10 bg-opacity-50 px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="name"
              placeholder="Johndoe"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full rounded-3xl border-none input input-bordered h-10 bg-opacity-50 px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-3xl border-none input input-bordered h-10 bg-opacity-50 px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            />
          </div>

          <GenderCheckbox />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl border-none h-10 bg-black bg-opacity-20 px-6 py-2 text-inherit text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md mt-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
