import React from "react";
import { Link } from "react-router-dom";

export default function AdminLogIn() {
  return (
    <>
      <div className="max-w-md py-16 px-6 mx-auto">
        <h1 className="text-xl text-center font-semibold mb-4">Login</h1>

        <form className="flex text-sm flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2.5 rounded-md"
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2.5 rounded-md"
            id="password"
          />

          <button className="text-sm bg-blue-600 hover:bg-blue-500 duration-300 transition text-white p-2.5 rounded-md">
            Sign in
          </button>
          <button
            type="button"
            className="text-sm bg-green-600 hover:bg-green-500 text-white duration-300 transition p-2.5 rounded-md"
          >
            Continue with Google
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Dont have an account?</p>
          <Link to="/sign-up" className="text-blue-700">
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
