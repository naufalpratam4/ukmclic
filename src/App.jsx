import DaftarAnggota from "./pages/DaftarAnggota";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          <Route path="/daftar-anggota" element={<DaftarAnggota />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
