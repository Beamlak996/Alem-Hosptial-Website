import { Outlet } from "react-router-dom";

import { Announcement } from "../general/announcement";
import { Footer } from "./footer";

export const DefaultLayout = () => {
  return (
    <div className="min-h-screen">
      <Announcement />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
