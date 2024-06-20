import BuyNow from "./components/buy-now";
import Gallery from "./components/gallery";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import ReservationForm from "./components/reservation-form";

export default function Page() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Gallery />
      <section className="bg-gray-200 py-16">
        <div className="container max-w-5xl mx-auto p-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Reservation Form
          </h2>
          <div className="max-w-md mx-auto">
            <ReservationForm />
          </div>
        </div>
      </section>
      <BuyNow />
    </div>
  );
}
