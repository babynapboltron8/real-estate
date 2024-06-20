export default function HeroSection() {
  return (
    <div className="relative bg-gray-800 text-white">
      <img
        className="w-full h-96 object-cover object-center"
        src="/images/team.jpg"
        alt="Team Image"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            About Our Company
          </h1>
          <p className="text-lg">
            Learn more about the people behind Elegant Homes.
          </p>
        </div>
      </div>
    </div>
  );
}
