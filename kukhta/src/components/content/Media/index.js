import React, { Component } from "react";

class Media extends Component {
  render() {
    const urls = [
      "https://www.youtube.com/embed/h0kmYs7GrVA",
      "https://www.youtube.com/embed/TRdOsCQfWW4",
      "https://www.youtube.com/embed/_IRcfth-MSM",
      "https://www.youtube.com/embed/NcYq7MIEGao",
      "https://www.youtube.com/embed/rxgaJUImmqU",
      "https://www.youtube.com/embed/TOOXrBwDL_M",
      "https://www.youtube.com/embed/gyi85JfCLvQ",
      "https://www.youtube.com/embed/J1mvaPKcQd4",
      "https://www.youtube.com/embed/DiYm3zeezXo",
      "https://www.youtube.com/embed/ia26tE3xkdY",
      "https://www.youtube.com/embed/uRAVtJrpvog",
      "https://www.youtube.com/embed/ZpEP4lnEvCY",
      "https://www.youtube.com/embed/AXJUdMMavXk",
      "https://www.youtube.com/embed/SaJo_rEK4kw",
      "https://www.youtube.com/embed/BvIuG9UDtJk",
      "https://www.youtube.com/embed/nKebtZU8Pv0",
      "https://www.youtube.com/embed/hMv1WcN9VAA",
      "https://www.youtube.com/embed/hnEMubDHn-c",
    ];

    return (
      <div className="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {urls.map((url) => (
            <iframe
              title={url}
              className="w-full mb-4"
              src={url}
              frameborder="0"
              allowfullscreen
            ></iframe>
          ))}
        </div>
      </div>
    );
  }
}

export default Media;
