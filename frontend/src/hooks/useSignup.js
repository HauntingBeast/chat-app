import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    // Check for input errors
    const success = await handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/v1/auth/signup", {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      // console.log(data);
      if (!res.ok) {
        throw new Error(data.msg);
      }

      if (data.error) {
        throw new Error(data.error);
      }
      // Handle successful signup (e.g., redirect, show success message)
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Signup successful!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

async function handleInputErrors({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
