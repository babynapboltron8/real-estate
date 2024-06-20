import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/default.jsx";
import LogIn from "../pages/clients/LogIn.jsx";
import SignUp from "../pages/clients/SignUp.jsx";
import Map from "../pages/clients/Map.jsx";
import Contact from "../pages/clients/contact/Contact.jsx";
import Project from "../pages/clients/project/Project.jsx";
import InfoSheet from "../pages/clients/InfoSheet.jsx";
import About from "../pages/clients/about/About.jsx";
import Payment from "../pages/clients/Payment.jsx";
import PaymentSuccessful from "../pages/clients/PaymentSuccessful.jsx";
import Home from "../pages/clients/home/Home.jsx";
import AdminDefault from "../layouts/AdminDefault.jsx";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard.jsx";
import ClientsList from "../pages/admin/client/ClientsList.jsx";
import AddClient from "../pages/admin/client/AddClient.jsx";
import AdminMap from "../pages/admin/map/Map.jsx";
import LotSelection from "../pages/admin/map/LotSelection.jsx";
import AdminPayment from "../pages/admin/financial/Payment.jsx";
import Agents from "../pages/admin/agent/Agents.jsx";
import ClientProfile from "../pages/admin/client/ClientProfile.jsx";
import AddAgent from "../pages/admin/agent/AddAgent.jsx";
import AgentProfile from "../pages/admin/agent/AgentProfile.jsx";
import ClientSalesInfo from "../pages/admin/agent/ClientSalesInfo.jsx";
import LotSalesInfo from "../pages/admin/agent/LotSalesInfo.jsx";
import ViewMap from "../pages/admin/map/ViewMap.jsx";
import AddMap from "../pages/admin/map/AddMap.jsx";
import LotAvailability from "../pages/admin/map/LotAvailability.jsx";
import CreateMap from "../pages/admin/map/CreateMap.jsx";
import UsersList from "../pages/admin/user/UsersList.jsx";
import EditMap from "../pages/admin/map/EditMap.jsx";
import AddUser from "../pages/admin/user/AddUser.jsx";
import Profile from "../pages/clients/profile/ClientProfile.jsx";
import AdminLogIn from "../pages/clients/AdminAgentLogin.jsx";
import SingleLot from "../pages/admin/map/SingleLot.jsx";
import PriceList from "../pages/admin/financial/PriceList.jsx";
import AllInquiry from "../pages/admin/inquiry/AllInquiry.jsx";
import AddContact from "../pages/admin/inquiry/AddContact.jsx";
import ViewMessage from "../pages/admin/inquiry/ViewMessage.jsx";
import AddPriceList from "../pages/admin/financial/AddPriceList.jsx";
import AllProject from "../pages/admin/project/AllProject.jsx";
import AddProject from "../pages/admin/project/AddProject.jsx";
import PaymentHistory from "../pages/clients/profile/PaymentHistory.jsx";
import ChangePassword from "../pages/clients/profile/ChangePassword.jsx";
import Settings from "../pages/admin/settings/Settings.jsx";
import CollectionPage from "../pages/admin/financial/Collection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "info-sheet",
        element: <InfoSheet />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment-successful",
        element: <PaymentSuccessful />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "admin-login",
        element: <AdminLogIn />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDefault />,
    children: [
      { path: "/admin", element: <AdminDashboard /> },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "clients",
        element: <ClientsList />,
      },
      {
        path: "add-client",
        element: <AddClient />,
      },
      {
        path: "map",
        element: <AdminMap />,
      },
      {
        path: "lot-selection",
        element: <LotSelection />,
      },

      {
        path: "payment",
        element: <AdminPayment />,
      },
      {
        path: "agents",
        element: <Agents />,
      },
      {
        path: "client-profile",
        element: <ClientProfile />,
      },
      {
        path: "add-agent",
        element: <AddAgent />,
      },
      {
        path: "agent-profile",
        element: <AgentProfile />,
      },
      {
        path: "client-sales-info",
        element: <ClientSalesInfo />,
      },
      {
        path: "lot-sales-info",
        element: <LotSalesInfo />,
      },
      {
        path: "view-map",
        element: <ViewMap />,
      },
      {
        path: "add-map",
        element: <AddMap />,
      },
      {
        path: "lot-availability",
        element: <LotAvailability />,
      },
      {
        path: "create-map",
        element: <CreateMap />,
      },
      {
        path: "users",
        element: <UsersList />,
      },
      {
        path: "edit-map",
        element: <EditMap />,
      },
      {
        path: "add-user",
        element: <AddUser />,
      },
      {
        path: "single-lot",
        element: <SingleLot />,
      },
      {
        path: "price-list",
        element: <PriceList />,
      },
      {
        path: "single-lot",
        element: <SingleLot />,
      },
      {
        path: "all-inquiry",
        element: <AllInquiry />,
      },
      {
        path: "add-contact",
        element: <AddContact />,
      },
      {
        path: "view-message",
        element: <ViewMessage />,
      },
      {
        path: "add-price-list",
        element: <AddPriceList />,
      },
      {
        path: "projects",
        element: <AllProject />,
      },
      {
        path: "add-project",
        element: <AddProject />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "collection",
        element: <CollectionPage />,
      },
    ],
  },
]);

export default router;
