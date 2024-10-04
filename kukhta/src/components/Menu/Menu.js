import React, { Component } from "react";
import { capitalizeFirstLetter } from "../../utils";

class Menu extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);

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
        className={`text-center ${this.props.isOpenMenu ? "fixed inset-0 flex items-center justify-center bg-gray-200/50 md:block" : "hidden md:block"} `}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-6 md:pl-0 w-72 relative md:shadow-none md:text-xl font-semibold"
          ref={this.wrapperRef}
        >
          <button
            onClick={() => this.props.setIsOpenMenu(false)}
            class="text-gray-500 hover:text-gray-700 absolute top-2 right-4 text-2xl md:hidden"
          >
            ×
          </button>
          <nav className="md:mt-4">
            <ul>
              {this.data[this.props.lang]?.map((item, index) => (
                <li
                  className={`py-1 mx-2 md:mx-0 hover:bg-gray-400 hover:text-white transition-transform cursor-pointer ${capitalizeFirstLetter(this.data.en[index]) === this.props.menu ? "bg-gray-200 text-black" : ""}`}
                >
                  <p
                    onClick={() => {
                      this.props.setIsOpenMenu(false);
                      this.props.setMenu(
                        capitalizeFirstLetter(this.data.en[index]),
                      );
                    }}
                  >
                    {item.toUpperCase()}
                  </p>
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
