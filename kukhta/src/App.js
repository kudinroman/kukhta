import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("en");
  const [menu, setMenu] = useState("Home");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuPopupRef = useRef(null);

  const menuTogglePopup = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="min-h-screen flex flex-col font-cormorant">
      <Header lang={lang} setLang={setLang} menuTogglePopup={menuTogglePopup} />
      <Main
        lang={lang}
        menu={menu}
        setMenu={setMenu}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
