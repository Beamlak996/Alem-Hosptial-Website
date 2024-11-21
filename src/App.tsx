import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./components/layout/default-layout";
import { HomePage } from "./pages/home-page";
import { MissionAndVisionsPage } from "./pages/mission-and-visions-page";
import { CoreValuesPage } from "./pages/core-values-page";

export default function Home() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/mission-and-visions"
          element={<MissionAndVisionsPage />}
        />
        <Route path="/core-values" element={<CoreValuesPage />} />
      </Route>
    </Routes>
  );
}
