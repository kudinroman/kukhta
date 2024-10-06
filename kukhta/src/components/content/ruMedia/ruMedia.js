import React, { Component } from "react";
import { Link } from "react-router-dom";

import Media from "../Media";

class RuMedia extends Component {
  render() {
    return (
      <div>
        <Media />
        <div>
          <span>Посмотреть больше на</span>
          <Link
            className="pl-2 underline underline-offset-2"
            to="https://www.youtube.com/@pavelkukhta"
            target="_blank"
          >
            youtube.com/@pavelkukhta
          </Link>
        </div>
      </div>
    );
  }
}

export default RuMedia;
