import React from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-4">

      <div className="w-full max-w-md bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Admin <span className="text-blue-600">Login</span>
        </h2>

        <form className="space-y-6">

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-slate-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-12 p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-slate-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-slate-500">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;