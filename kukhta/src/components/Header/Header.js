import React, { Component } from "react";

class Header extends Component {
  render() {
    const { lang, setLang } = this.props;
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

    return (
      <header>
        <div class="lang">
          <div class="box ru">
            <button onClick={() => setLang("ru")}>рус</button>
          </div>
          <div class="box eng back">
            <button onClick={() => setLang("en")}>eng</button>
          </div>
        </div>
        <div class="logo">
          <p>
            <span class="big">{data[lang].name}</span>
            <br />
            <span class="small">{data[lang].speciality}</span>
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
