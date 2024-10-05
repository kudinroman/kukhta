import React, { Component } from "react";
import contact from "../../../assets/images/contact.jpg";

class RuContact extends Component {
  render() {
    return (
      <div>
        <p className="md:text-base lg:text-lg !mb-4">
          <span className="mr-2 text-sm md:text-base lg:text-lg">
            E-mail address:
          </span>
          <a
            className="font-bold"
            href="mailto:pavelkukhta@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            pavelkukhta@gmail.com
          </a>
        </p>
        <img src={contact} alt="kukhta" />
      </div>
    );
  }
}

export default RuContact;
