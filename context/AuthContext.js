import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "../config/index.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // Register user
  const register = async (userInfo) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push(`/users/mypage`);
    } else {
      setError(data.message.error);
    }
  };

  // Login user
  const login = async ({ name, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user.user);
      router.push(`/users/mypage`);
    } else {
      setError(data.message.error);
    }
  };

  // Logout user
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser({});
      router.push("/");
    }
    setLoading(false);
  };

  // Delete user
  const remove = async () => {
    const res = await fetch(`${NEXT_URL}/api/remove`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setUser({});
      router.push("/");
    }
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    setLoading(true)
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser({});
      router.push("/users/login");
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        setError,
        register,
        login,
        logout,
        remove,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
