import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-1 overflow-x-hidden pt-[6.75rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
