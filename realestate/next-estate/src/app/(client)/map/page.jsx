import MapSelection from "./components/map-selection";
import PriceList from "./components/price-list";

export default function Page() {
  return (
    <div className="container max-w-6xl mx-auto p-8">
      <div className=" p-8 rounded text-center">
        <div className="flex items-center gap-2">
          <span className="bg-blue-500 text-sm text-white rounded-full py-2 px-3.5">
            1
          </span>
          <h2 className="text-black font-normal text-lg">Lot Selection</h2>
        </div>
        <div className="flex flex-col-reverse gap-6 py-6 sm:grid grid-cols-2 justify-between ">
          <MapSelection />
          <div>
            <div className="mb-4">
              <img
                src="/images/map.png"
                alt="logo"
                className="w-full max-w-lg mx-auto"
              />
            </div>
            <PriceList />
            <div className="mt-4">
              <p className="text-lg font-bold">Total Price: ₱</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
