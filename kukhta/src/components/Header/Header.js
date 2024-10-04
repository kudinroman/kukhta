import React, { Component } from "react";
import "./Header.css";
import menu from "../../assets/images/menu.svg";

class Header extends Component {
  render() {
    const { lang, setLang, menuTogglePopup } = this.props;
    const data = {
      en: {
        name: "Kukhta Pavel",
        speciality: "Classical guitar",
      },
      ru: {
        name: "Павел Кухта",
        speciality: "Классическая гитара",
      },
    };
    const active = (l) => (l === lang ? "bg-gray-300 text-white" : "");

    return (
      <header className="text-center w-11/12 md:w-3/5 mx-auto pb-4 mt-12 md:mt-4 md:relative border-solid border-b border-gray-200">
        <div className="absolute top-3 left-4 md:hidden">
          <img src={menu} alt="menu" onClick={menuTogglePopup} />
        </div>
        <div className="absolute top-3 right-4 md:top-5 md:right-0">
          <button
            onClick={() => setLang("ru")}
            className={`text-sm px-2 py-1 md:px-3 md:px-2 mr-1 ${active("ru")}`}
          >
            рус
          </button>
          <button
            onClick={() => setLang("en")}
            className={`text-sm px-2 py-1 md:px-3 md:px-2 ${active("en")}`}
          >
            eng
          </button>
        </div>
        <div className="font-semibold">
          <h1 className="text-4xl md:text-6xl">{data[lang].name}</h1>
          <p className="text-base md:text-2xl">{data[lang].speciality}</p>
        </div>
      </header>
    );
  }
}

export default Header;
