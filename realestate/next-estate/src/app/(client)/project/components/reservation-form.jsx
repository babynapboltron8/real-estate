"use client";

import { useRouter } from "next/navigation";

export default function ReservationForm() {
  const router = useRouter();
  const handleReservationSubmit = (event) => {
    event.preventDefault();
    // Implement reservation submission logic here
    console.log("Reservation submitted successfully!");
    // Redirect to success page or any other page you desire
    router.push("/reservation-success");
  };

  return (
    <form onSubmit={handleReservationSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          autoComplete="name"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit Reservation
        </button>
      </div>
    </form>
  );
}
