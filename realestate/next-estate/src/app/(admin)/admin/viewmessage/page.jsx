import Sidebar from "@/components/layouts/sidebar";
import ViewMessage from "./components/viewmessage";

export default function Page() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <ViewMessage />
        </main>
      </div>
    </div>
  );
}
