import React, { Component } from "react";
import Menu from "../Menu";
import DynamicComponent from "../DynamicComponent";

class Main extends Component {
  render() {
    const { lang, menu, setMenu, isOpenMenu, setIsOpenMenu } = this.props;
    const componentName = `${lang}${menu}`;

    return (
      <main className="w-11/12 md:w-3/5 mx-auto relative md:flex flex-grow font-openSans">
        <Menu
          lang={lang}
          setMenu={setMenu}
          menu={menu}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
        />
        <DynamicComponent componentName={componentName} />
      </main>
    );
  }
}

export default Main;
