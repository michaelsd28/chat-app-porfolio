import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NoPage from "./components/404 page/NoPage";
import MainChat from "./components/chat app/MainChat";
import LandingPage from "./components/landing page/LandingPage";
import SigningPage from "./components/signing page/SigningPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<SigningPage />} />

          <Route path="chat/:username" element={<MainChat />} />
          <Route path="signing" element={<SigningPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

      <Outlet />
    </>
  );
}

export default App;
