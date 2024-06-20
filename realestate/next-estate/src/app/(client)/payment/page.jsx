import PaymentForm from "./components/payment-form";

export default function Page() {
  return (
    <div className="container max-w-6xl mx-auto p-4 md:p-8">
      <div className="bg-white p-8">
        <div className="flex items-center gap-2">
          <span className="bg-blue-500 text-sm text-white rounded-full py-2 px-3.5">
            3
          </span>
          <h2 className="text-black font-normal text-lg">Payment</h2>
        </div>

        <PaymentForm />
      </div>
    </div>
  );
}
