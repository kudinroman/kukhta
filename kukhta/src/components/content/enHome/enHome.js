import React, { Component } from "react";
import mainPhoto from "../../../assets/images/main-photo.jpg";

class EnHome extends Component {
  render() {
    return (
      <div className="md:w-1/2 mx-auto">
        <img className="img" src={mainPhoto} alt="Pavel Kukhta" />
        <p className="text-left mt-1">Photo by Slava Dudoladov</p>
      </div>
    );
  }
}

export default EnHome;
