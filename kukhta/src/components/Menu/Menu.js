import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getLangFromUrl, getComponentFromUrl } from "../../utils";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.data = {
      en: ["home", "biography", "gallery", "media", "recordings", "contact"],
      ru: ["главная", "биография", "фото", "видео", "записи", "контакты"],
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.setIsOpenMenu(false);
    }
  }

  render() {
    return (
      <div
        className={`text-center ${this.props.isOpenMenu ? "fixed inset-0 flex items-center justify-center bg-gray-200/50 lg:block" : "hidden lg:block"} `}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-6 lg:p-0 lg:pr-8 relative lg:shadow-none lg:text-xl font-semibold"
          ref={this.wrapperRef}
        >
          <button
            onClick={() => this.props.setIsOpenMenu(false)}
            className="text-gray-500 hover:text-gray-700 absolute top-2 right-4 text-2xl lg:hidden"
          >
            ×
          </button>
          <nav className="lg:mt-6">
            <ul>
              {this.data[getLangFromUrl()]?.map((item, index) => (
                <li
                  className={`mx-2 lg:mx-0 hover:bg-gray-400 hover:text-white transition-transform cursor-pointer ${this.data.en[index] === getComponentFromUrl() ? "bg-gray-200 text-black" : ""}`}
                  key={index}
                >
                  <Link
                    className="block py-1 px-8"
                    to={`/${getLangFromUrl()}/${this.data.en[index]}`}
                    onClick={() => this.props.setIsOpenMenu(false)}
                  >
                    {item.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Menu;
