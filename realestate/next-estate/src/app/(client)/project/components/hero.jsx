export default function Hero() {
  return (
    <div className="relative bg-gray-800 text-white">
      <img
        className="w-full h-96 object-cover object-center"
        src="/images/modern.jpg" // Use a suitable hero image
        alt="Hero Image"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Elegant Living in Mintal, Davao City
          </h1>
          <p className="text-lg">
            Explore our housing project here at Mintal, Davao City
          </p>
        </div>
      </div>
    </div>
  );
}
