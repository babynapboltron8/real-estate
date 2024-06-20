import Link from "next/link";

export default function PaymentSuccessful() {
  return (
    <div className="container max-w-6xl mx-auto p-4 md:p-8">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <div className="flex items-center gap-2">
          <span className="bg-blue-500 text-sm text-white rounded-full py-2 px-3.5">
            4
          </span>
          <h2 className="text-black font-normal text-lg">Payment Successful</h2>
        </div>

        <div className="mt-6">
          <p className="text-lg mb-4">
            Thank you for your payment! Your transaction was successful.
          </p>

          <p className="text-gray-700">
            You will receive a confirmation email shortly. If you have any
            questions, please contact our support team.
          </p>

          <div className="mt-6">
            <Link
              href="/"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline-blue"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
