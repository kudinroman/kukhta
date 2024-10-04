import React, { Component } from "react";

class EnContact extends Component {
  render() {
    return (
      <div class="content">
        <br />
        <p>
          {" "}
          E-mail address:{" "}
          <a href="mailto:pavelkukhta@gmail.com" target="_blank">
            pavelkukhta@gmail.com
          </a>
        </p>
        <br />
        <img class="contact_img" src="i/kukhta-contact.jpg" />
      </div>
    );
  }
}

export default EnContact;
