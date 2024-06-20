import InfoSheetForm from "./components/info-sheet-form";

export default function Page() {
  return (
    <div className="container max-w-6xl mx-auto p-8">
      <div className="p-8 rounded ">
        <div className="flex items-center gap-2">
          <span className="bg-blue-500  text-sm text-white rounded-full py-2 px-3.5">
            2
          </span>
          <h2 className="text-black font-normal text-lg">Information Sheet</h2>
        </div>
        <InfoSheetForm />
      </div>
    </div>
  );
}
