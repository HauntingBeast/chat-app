import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
        <h1 className="text-4xl font-semibold text-center text-gray-300">
          <span className="text-gray-300"> Chatapp</span>
        </h1>
        <h1 className="text-xl label-text text-center p-2">
          Enter Login Details
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              className="w-full rounded-3xl border-none input input-bordered h-10 bg-opacity-50 px-6 py-2 text-slate-200 placeholder-slate-400 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="name"
              placeholder="Enter UserName"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full rounded-3xl border-none input input-bordered h-10 bg-opacity-50 px-6 py-2 text-slate-200 placeholder-slate-00 shadow-lg outline-none backdrop-blur-md"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl border-none h-10 bg-black bg-opacity-20 px-6 py-2  text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className=" loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
