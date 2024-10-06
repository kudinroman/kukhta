import React, { Component } from "react";

class Media extends Component {
  render() {
    const urls = [
      "https://www.youtube.com/embed/_IRcfth-MSM",
      "https://www.youtube.com/embed/s676SBRd050",
      "https://www.youtube.com/embed/TOOXrBwDL_M",
      "https://www.youtube.com/embed/J1mvaPKcQd4",
      "https://www.youtube.com/embed/ZpEP4lnEvCY",
      "https://www.youtube.com/embed/BvIuG9UDtJk",
      "https://www.youtube.com/embed/SaJo_rEK4kw",
      "https://www.youtube.com/embed/hnEMubDHn-c",
      "https://www.youtube.com/embed/rxgaJUImmqU",
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {urls.map((url) => (
          <iframe
            title={url}
            className="w-full mb-4 animate-fadeIn"
            src={url}
            frameBorder="0"
            key={url}
            allowFullScreen
          ></iframe>
        ))}
      </div>
    );
  }
}

export default Media;
