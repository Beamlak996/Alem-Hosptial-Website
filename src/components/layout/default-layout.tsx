import { Outlet } from "react-router-dom";

import { Announcement } from "../general/announcement";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export const DefaultLayout = () => {
  return (
    <div className="min-h-screen">
      <Announcement />
      <Navbar />
      <main className="min-h-screen bg-slate-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
