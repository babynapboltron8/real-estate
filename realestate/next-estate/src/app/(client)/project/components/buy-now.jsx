"use client";

import { useRouter } from "next/navigation";

export default function BuyNow() {
  const router = useRouter();

  const handleBuyNow = () => {
    // Redirect to the map page or any other page you desire
    router.push("/map");
  };

  return (
    <section className="bg-gray-00 py-16">
      <div className="container max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-8">Buy Now</h2>

        {/* Buy Now Button */}
        <div className="text-center bg-custom-color">
          {" "}
          {/* Replace "bg-custom-color" with your desired color class */}
          <p className="text-lg mb-4">
            Ready to make your dream home a reality? Click the button below to
            buy now!
          </p>
          <button
            onClick={handleBuyNow}
            className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
