import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NoPage from "./components/404 page/NoPage";
import MainChat from "./components/chat app/MainChat";
import LandingPage from "./components/landing page/LandingPage";
import LoginPage from "./components/signing page/LoginPage";


function App() {
  return (
    <>
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<LoginPage />} />

          <Route path="chat/:username" element={<MainChat />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
      </AnimatePresence>


    </>
  );
}

export default App;
