import ManageAccountSidebar from "../profile/components/manage-account-sidebar";
import PaymentList from "./components/payment-list";

export default function Page() {
  return (
    <div className="flex h-screen bg-gray-100">
      <ManageAccountSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Payment History - Lot 1
            </h1>
          </div>

          <PaymentList />
        </main>
      </div>
    </div>
  );
}
