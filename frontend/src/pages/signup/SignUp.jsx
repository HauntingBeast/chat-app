import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmits = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
        <h1 className="text-4xl font-semibold text-center text-gray-300">
          <span className="text-gray-300"> Sign Up</span>
        </h1>
        <h1 className="text-xl label-text text-center p-2">Enter Details</h1>

        <form onSubmit={handleSubmits}>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              className="w-full rounded-3xl border-none input input-bordered h-10 bg-opacity-50 px-6 py-2 text-slate-200 placeholder-slate-400 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="Fullname"
              placeholder="John Doe"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              className="w-full rounded-3xl border-none input input-bordered h-10 bg-opacity-50 px-6 py-2 text-slate-200 placeholder-slate-400 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="UserName"
              placeholder="Johndoe"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              className="w-full rounded-3xl border-none input input-bordered h-10 bg-opacity-50 px-6 py-2 text-slate-200 placeholder-slate-400 shadow-lg outline-none backdrop-blur-md"
              type="password"
              placeholder="Enter Password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              className="w-full rounded-3xl border-none input input-bordered h-10 bg-opacity-50 px-6 py-2 text-slate-200 placeholder-slate-400 shadow-lg outline-none backdrop-blur-md"
              type="password"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckBox}
            selectedGender={inputs.gender}
          />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl border-none h-10 bg-black bg-opacity-20 px-6 py-2 text-inherit text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="'loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
