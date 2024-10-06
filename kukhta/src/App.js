import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { getLangFromUrl } from "./utils";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [lang, setLang] = useState(getLangFromUrl() || "en");

  useEffect(() => {
    const currentLang = getLangFromUrl(getLangFromUrl());
    if (currentLang !== lang) {
      setLang(currentLang);
    }
  }, [location.pathname, lang]);

  const menuTogglePopup = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="min-h-screen flex flex-col font-cormorant">
      <Header menuTogglePopup={menuTogglePopup} />
      <Main isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      <Footer />
    </div>
  );
}

export default App;
