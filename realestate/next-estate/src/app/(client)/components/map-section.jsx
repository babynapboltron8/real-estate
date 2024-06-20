export default function MapSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container max-w-5xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Explore the Project Map
        </h2>

        {/* Display the project map image */}
        <div className="relative rounded-md shadow-md overflow-hidden mx-auto max-w-2xl border-2 border-gray-300">
          <img
            src="/images/map.png"
            alt="Project Map"
            className="w-full h-auto"
          />
        </div>

        {/* Project Description */}
        <div className="mt-12 text-center text-gray-700 max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed">
            Embark on a journey through our meticulously planned real estate
            development. Discover the perfect location for your dream home or
            investment within our expansive project map.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Ready to take the next step? Click the &quot;Reserve Now&quot;
            button below.
          </p>
        </div>

        {/* Reserve Now button */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none">
            Reserve Now
          </button>
        </div>
      </div>
    </section>
  );
}
