import AdminFooter from "@/components/layouts/admin-footer";
import AdminHeader from "@/components/layouts/admin-header";

export default function AdminLayou({ children }) {
  return (
    <>
      <AdminHeader />
      <main>{children}</main>
      <AdminFooter />
    </>
  );
}
