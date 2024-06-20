import Sidebar from "@/components/layouts/sidebar";
import EditMap from "./components/editmap";

export default function Page() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <EditMap />
        </main>
      </div>
    </div>
  );
}
