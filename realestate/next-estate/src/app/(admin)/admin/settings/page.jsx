import Sidebar from "@/components/layouts/sidebar";
import Settings from "./components/settings";

export default function Page() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <Settings />
        </main>
      </div>
    </div>
  );
}
