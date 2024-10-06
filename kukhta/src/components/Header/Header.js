import React, { Component } from "react";
import menu from "../../assets/images/menu.svg";
import { Link } from "react-router-dom";
import { getPathByLang, getLangFromUrl } from "../../utils.js";

class Header extends Component {
  render() {
    const { menuTogglePopup } = this.props;
    const data = {
      en: {
        name: "Pavel Kukhta",
        speciality: "Classical guitar",
      },
      ru: {
        name: "Павел Кухта",
        speciality: "Классическая гитара",
      },
    };
    const active = (l) =>
      l === getLangFromUrl() ? "bg-gray-300 text-white" : "";

    return (
      <header className="text-center mx-4 lg:mx-auto lg:w-3/5 pb-4 mt-12 lg:mt-4 lg:relative border-solid border-b border-gray-200">
        <div className="absolute top-4 left-3 w-8 lg:hidden">
          <img src={menu} alt="menu" onClick={menuTogglePopup} />
        </div>
        <div className="absolute top-5 right-4 lg:top-5 lg:right-0 font-semibold text-sm md:text-base">
          <Link
            to={getPathByLang("ru")}
            className={`px-2 py-1 lg:px-3 mr-1 ${active("ru")}`}
          >
            рус
          </Link>
          <Link
            to={getPathByLang("en")}
            className={`px-2 py-1 lg:px-3 ${active("en")}`}
          >
            eng
          </Link>
        </div>
        <div className="font-semibold">
          <h1 className="text-4xl lg:text-6xl">
            {data[getLangFromUrl()]?.name}
          </h1>
          <p className="text-base lg:text-2xl">
            {data[getLangFromUrl()]?.speciality}
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
