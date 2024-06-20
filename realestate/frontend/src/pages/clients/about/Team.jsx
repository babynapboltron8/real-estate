import React from "react";
import Dexter from "/src/assets/dexter.jpeg";
import Jimzon from "/src/assets/jimz.webp";
import Andre from "/src/assets/andre.webp";
import Nap from "/src/assets/nap.jpg";

export default function Team() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={Dexter}
              className="w-full h-56 object-cover object-center rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dexter Echalico</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={Jimzon}
              className="w-full h-56 object-cover object-center rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Jimzon Trangia</h3>
              <p className="text-gray-600">CEO</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={Andre}
              className="w-full h-56 object-cover object-center rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Andre Tate</h3>
              <p className="text-gray-600">Senior Developer</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={Nap}
              className="w-full h-56 object-cover object-center rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Baby Nap</h3>
              <p className="text-gray-600">Junior Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
