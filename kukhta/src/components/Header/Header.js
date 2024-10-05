import React, { Component } from "react";
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
      <header className="text-center mx-4 lg:mx-auto lg:w-3/5 pb-4 mt-12 lg:mt-4 lg:relative border-solid border-b border-gray-200">
        <div className="absolute top-4 left-4 w-8 lg:hidden">
          <img src={menu} alt="menu" onClick={menuTogglePopup} />
        </div>
        <div className="absolute top-5 right-5 lg:top-5 lg:right-0 font-semibold text-sm md:text-base">
          <button
            onClick={() => setLang("ru")}
            className={`px-2 py-1 lg:px-3 mr-1 ${active("ru")}`}
          >
            рус
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-2 py-1 lg:px-3 ${active("en")}`}
          >
            eng
          </button>
        </div>
        <div className="font-semibold">
          <h1 className="text-4xl lg:text-6xl">{data[lang].name}</h1>
          <p className="text-base lg:text-2xl">{data[lang].speciality}</p>
        </div>
      </header>
    );
  }
}

export default Header;
