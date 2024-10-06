import React, { Component } from "react";
import mainPhoto from "../../../assets/images/main-photo.jpg";

class EnHome extends Component {
  render() {
    return (
      <div className="lg:pr-[222px]">
        <div className="md:w-1/2 mx-auto lg:w-3/4">
          <img
            className="img animate-fadeIn"
            src={mainPhoto}
            alt="Pavel Kukhta"
          />
          <p className="text-left mt-1">Photo by Slava Dudoladov</p>
        </div>
      </div>
    );
  }
}

export default EnHome;
