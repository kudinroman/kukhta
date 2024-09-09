import React, { Component } from "react";
import Menu from "../Menu";
import DynamicComponent from "../DynamicComponent";

class Main extends Component {
  render() {
    const { lang, menu } = this.props;
    const componentName = `${lang}${menu}`;

    return (
      <main>
        <Menu lang={lang} />
        <p>componentName: {componentName}</p>
        <DynamicComponent componentName={componentName} />
        <div>
          <img class="img" src="i/1a1.jpg" alt="" />
          <p>Photo by Pavel Korbut</p>
        </div>
      </main>
    );
  }
}

export default Main;
