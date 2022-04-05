import React from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <main
      className="relative w-full"
      style={{ top: "5rem", minHeight: "100vh" }}
    >
      <div className="h-screen flex justify-center">
        <div
          style={{ margin: "auto" }}
          className="h=96 w-96 p-10 shadow-2xl rounded-2xl bg-slate-900"
        >
          <h3 className="text-3xl font-normal text-center text-rose-200 mb-12">
            Sign Up
          </h3>

          <div className="input-container mb-7">
            <input
              type="text"
              id="email"
              className="input input-white-hover input-rose-focus"
              autocomplete="off"
              placeholder=" "
            />
            <label
              for="email"
              className="input-label text-rose-200 bg-slate-900"
            >
              Email
            </label>
          </div>

          <div className="input-container mb-7">
            <input
              type="text"
              id="email"
              className="input input-white-hover input-rose-focus"
              autocomplete="off"
              placeholder=" "
            />
            <label
              for="email"
              className="input-label text-rose-200 bg-slate-900"
            >
              Password
            </label>
          </div>

          <div className="flex justify-between mb-10">
            <Link
              to=""
              className="btn btn-text-underline text-rose-200 text-hover-rose-800"
            >
              Forgot Password
            </Link>
            <Link
              to="/login"
              className="btn btn-text-underline text-rose-200 text-hover-rose-800"
            >
              Login
            </Link>
          </div>

          <div className="flex">
            <div className="m-auto">
              <button className="px-4 py-1 text-lg bg-rose-500 rounded text-slate-900 bg-hover-rose-800 text-hover-rose-200">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignupPage;
