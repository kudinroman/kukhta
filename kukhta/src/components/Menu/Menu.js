import React, { Component } from "react";

class Menu extends Component {
  render() {
    const { lang } = this.props;
    const data = {
      en: ["home", "biography", "gallery", "media", "recordings", "contact"],
      ru: ["главная", "биография", "фото", "видео", "записи", "контакты"],
    };

    return (
      <div class="main">
        <div class="menu">
          <ul class="menu_list">
            {data[lang].map((item, index) => (
              <li class="menu_item">
                <a href="index.html" class="link home back">
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
