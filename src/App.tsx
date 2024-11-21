import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./components/layout/default-layout";
import { HomePage } from "./pages/home-page";
import { MissionAndVisionsPage } from "./pages/mission-and-visions-page";
import { CoreValuesPage } from "./pages/core-values-page";
import { AboutUsPage } from "./pages/about-us-page";
import { GalleryPage } from "./pages/gallery-page";
import { OurServicesPage } from "./pages/our-services-page";

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
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<OurServicesPage />} />
      </Route>
    </Routes>
  );
}
