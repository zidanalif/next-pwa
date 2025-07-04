"use client";
import React, { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [profile, setProfile] = useState<{ email: string } | null>(null);

  const handleLogin = async () => {
    try {
      setIsLoggedIn(false);
      setLoginError("");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          credentials: "include", // Include cookies for session management
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        await response.json();
        setIsLoggedIn(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/account/profile`,
          {
            method: "GET",
            credentials: "include", // Include cookies for session management
          }
        );
        const data = await res.json();
        setProfile(data.data);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
    } catch (error: any) {
      setLoginError(error.message);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      {isLoggedIn && <p>Login successful!</p>}
      {loginError && <p>Error: {loginError}</p>}
      {profile && <div>{profile.email}</div>}
    </>
  );
}
