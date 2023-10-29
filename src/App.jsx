// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "@/pages/root";
import LandingPage from "@/pages/landing-page";
import Moods from "@/pages/moods";
import Mood from "@/pages/mood";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="moods" element={<Moods />} />
      <Route
        path="/moods/:mood"
        element={<Mood />}
      />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
