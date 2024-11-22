import { Outlet, useLocation } from "react-router-dom";

import { Announcement } from "../general/announcement";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export const DefaultLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      {/* Render Announcement only on the home page */}
      {location.pathname === "/" && <Announcement />}
      <Navbar />
      <main className="min-h-screen bg-slate-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
