import React, { Component } from "react";
import contact from "../../../assets/images/contact.jpg";

class EnContact extends Component {
  render() {
    return (
      <div class="container">
        <p className="md:text-base lg:text-lg !mb-4">
          <span className="mr-2">E-mail address:</span>
          <a
            className="font-bold"
            href="mailto:pavelkukhta@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            pavelkukhta@gmail.com
          </a>
        </p>
        <img class="contact_img" src={contact} alt="kukhta" />
      </div>
    );
  }
}

export default EnContact;
