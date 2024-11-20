import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./components/layout/default-layout";
import { HomePage } from "./pages/home-page";

export default function Home() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
