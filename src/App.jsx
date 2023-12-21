import LandingPage from "./pages/LandingPage";
import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/divisi" element="cek" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
