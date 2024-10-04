import React, { Component } from "react";
import Menu from "../Menu";
import DynamicComponent from "../DynamicComponent";

class Main extends Component {
  render() {
    const { lang, menu, setMenu, isOpenMenu, setIsOpenMenu } = this.props;
    const componentName = `${lang}${menu}`;

    return (
      <main className="lg:w-3/5 mx-4 lg:mx-auto relative lg:flex flex-grow font-openSans">
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
