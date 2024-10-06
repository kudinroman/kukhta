import React, { Component } from "react";
import mainPhoto from "../../../assets/images/main-photo.jpg";

class RuHome extends Component {
  render() {
    return (
      <div className="md:w-1/2 mx-auto">
        <img className="img" src={mainPhoto} alt="Павел Кухта" />
        <p className="text-left mt-1">Фото: Слава Дудоладов</p>
      </div>
    );
  }
}

export default RuHome;
