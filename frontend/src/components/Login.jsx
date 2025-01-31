import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { login } = useAuthStore();
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your password"
            />
            
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-600 hover:text-green-700">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
