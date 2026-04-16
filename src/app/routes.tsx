import { createBrowserRouter, Navigate } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Festival2026 from "./pages/Festival2026";
import Events from "./pages/Events";
import Timetable from "./pages/Timetable";
import Lineup from "./pages/Lineup";
import Soundsystems from "./pages/Soundsystems";
import Info from "./pages/Info";
import CharitySponsors from "./pages/CharitySponsors";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "festival-2026", Component: Festival2026 },
      { path: "events", Component: Events },
      { path: "timetable", Component: Timetable },
      { path: "lineup", Component: Lineup },
      {
        path: "workshops",
        Component: () => (
          <Navigate to="/timetable#festival-workshops" replace />
        ),
      },
      { path: "soundsystems", Component: Soundsystems },
      { path: "info", Component: Info },
      { path: "charity-sponsors", Component: CharitySponsors },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
