export default function HeroSection() {
  return (
    <>
      <div className="relative inset-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(/images/hero-bg.webp)` }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
        </div>
        <div className="relative text-center sm:text-start justify-center p-4 text-white items-center max-w-5xl mx-auto">
          <div className="flex-1 py-32">
            <h1 className="text-white font-bold text-4xl sm:text-5xl max-w-lg">
              Your Real Estate Project Name
            </h1>
            <p className="max-w-sm py-5 pb-12">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, to error sit voluptatem.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 rounded-md px-7 py-3 text-base"
              type="button"
            >
              Reserve Now
            </button>
            <button
              className="hidden bg-green-500 hover:bg-green-600 rounded-md px-7 py-3 text-base ml-4"
              type="button"
            >
              Log In
            </button>
            <button
              className="hidden bg-gray-500 hover:bg-gray-600 rounded-md px-7 py-3 text-base ml-4"
              type="button"
            >
              Log Out
            </button>
          </div>
          <div className="flex-1"></div>
        </div>
    </div>

    </>
  );
}
