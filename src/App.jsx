import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "@/components/navbar";
import LandingPage from '@/pages/landing-page';
import Moods from '@/pages/moods';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/moods" element={<Moods />} />
      </Routes>
    </Router>
  );
}
