"use client";

import { useState } from "react";

export default function SignUpForm() {
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

  return (
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
  );
}
