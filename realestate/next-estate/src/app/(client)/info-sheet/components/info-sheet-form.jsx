"use client";

import FormField from "./form-field";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InfoSheetForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    middleName: "",
    completeAddress: "",
    age: "",
    civilStatus: "",
    birthdate: "",
    mobileNumber: "",
    email: "",
    referralAgent: "",
  });
  const [registeredAgents, setRegisteredAgents] = useState([]);

  useEffect(() => {
    // Fetch the list of registered agents from your server or API
    // For demo purposes, I'm using a static list here
    const fakeAgentList = ["Agent 1", "Agent 2", "Agent 3"];
    setRegisteredAgents(fakeAgentList);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const isFormValid = Object.values(formData).every(
      (value) => value !== "" && value !== undefined
    );

    if (isFormValid) {
      // Form is valid, navigate to payment page
      console.log("Form submitted:", formData);
      router.push("/payment");
    } else {
      // Form is not valid, display an alert
      alert("Please fill in all required fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-10">
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-8">
        <FormField
          label="First Name"
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <FormField
          label="Surname"
          id="surname"
          name="surname"
          type="text"
          value={formData.surname}
          onChange={handleChange}
          required
        />
        <FormField
          label="Middle Name"
          id="middleName"
          name="middleName"
          type="text"
          value={formData.middleName}
          onChange={handleChange}
        />

        <FormField
          label="Civil Status"
          id="civilStatus"
          name="civilStatus"
          type="text"
          value={formData.civilStatus}
          onChange={handleChange}
        />
        <FormField
          label="Birthdate"
          id="birthdate"
          name="birthdate"
          type="date"
          value={formData.birthdate}
          onChange={handleChange}
          required
        />
        <FormField
          label="Mobile Number"
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        <FormField
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="mb-4">
          <label
            htmlFor="referralAgent"
            className="block text-sm font-medium text-gray-600"
          >
            Referral Agent
          </label>
          <select
            id="referralAgent"
            name="referralAgent"
            value={formData.referralAgent}
            onChange={handleChange}
            className="form-input bg-gray-100 border-gray-300 rounded-md p-3 w-full"
          >
            <option value="" disabled>
              Select an agent
            </option>
            {registeredAgents.map((agent, index) => (
              <option key={index} value={agent}>
                {agent}
              </option>
            ))}
          </select>
        </div>
      </div>
      <FormField
        className="mt-12"
        label="Complete Address"
        id="completeAddress"
        name="completeAddress"
        type="text"
        value={formData.completeAddress}
        onChange={handleChange}
        required
      />
      <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
