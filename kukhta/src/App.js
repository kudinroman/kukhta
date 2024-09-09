import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("en");
  const [menu, setMenu] = useState("Home");
  return (
    <div className="App">
      <Header lang={lang} setLang={setLang} />
      <Main lang={lang} menu={menu} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
