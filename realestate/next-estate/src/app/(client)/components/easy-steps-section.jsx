export default function EasyStepsSection() {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          3 Easy Steps to Get Started
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Step 1: Lot Selection */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">1. Lot Selection</h3>
            <p className="text-gray-300">
              Explore our available lots and choose the perfect one for your
              dream home.
            </p>
          </div>

          {/* Step 2: Fill Up Information Sheet */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">
              2. Fill Up Information Sheet
            </h3>
            <p className="text-gray-300">
              Provide us with your details by filling up the information sheet.
            </p>
          </div>

          {/* Step 3: Payment */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">3. Payment</h3>
            <p className="text-gray-300">
              Complete the payment process to secure your chosen lot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
