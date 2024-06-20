import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signUpData = JSON.stringify(formData);
    console.log(signUpData);
    const res = await fetch("/client/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: signUpData,
    });
    const data = await res.json();
    console.log(data);
  };

  console.log(formData);

  return (
    <div className="max-w-md py-16 px-6 mx-auto">
      <h1 className="text-xl text-center font-semibold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex text-sm flex-col gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="border border-gray-300 p-2.5 rounded-md"
          id="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-gray-300 p-2.5 rounded-md"
          id="lastName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-2.5 rounded-md"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2.5 rounded-md"
          id="password"
          onChange={handleChange}
        />
        <button className="text-sm bg-blue-600 hover:bg-blue-500 duration-300 transition text-white p-2.5 rounded-md ">
          Sign Up
        </button>
        <button
          type="button"
          className="text-sm bg-green-600 hover:bg-green-500 duration-300 transition text-white p-2.5 rounded-md "
        >
          Continue with Google
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/login">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
