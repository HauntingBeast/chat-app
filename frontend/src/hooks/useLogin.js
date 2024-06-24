import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (userName, password) => {
    const success = await handleInputErrors({
      userName,
      password,
    });

    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });
      const data = await res.json();
      // console.log(data);
      if (!res.ok) {
        throw new Error(data.msg);
      }

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Logged In Successfully");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  return { loading, login };
};

export default useLogin;

async function handleInputErrors({ userName, password }) {
  if (!userName || !password) {
    toast.error("Please fill in all the fields");
    return false;
  }

  return true;
}
