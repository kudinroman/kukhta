import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { lang } = this.props;
    const data = {
      en: {
        email: "E-mail address: pavelkukhta@gmail.com",
        phone: "Phone: +375 297856459",
      },
      ru: {
        email: "Электронная почта: pavelkukhta@gmail.com",
        phone: "Телефон: +375 297856459",
      },
    };
    return (
      <footer>
        <div class="footer">
          <div class="footer_contact">
            <p>{data[lang].email}</p>
            <p>{data[lang].phone}</p>
            <img
              class="logo_savarez"
              src="i/logoSavarez.jpg"
              alt="Savarez"
              width="80"
            />
          </div>
          <div class="footer_icons">
            <a
              href="https://vk.com/id106764816"
              class="icon footer_facebook"
            ></a>
            <a
              href="https://www.facebook.com/pavel.kukhta.9"
              class="icon footer_vk"
            ></a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
