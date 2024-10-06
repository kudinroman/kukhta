import React, { Component } from "react";
import Menu from "../Menu";
import { Routes, Route, Navigate } from "react-router-dom";
import content from "../content";

class Main extends Component {
  render() {
    const { isOpenMenu, setIsOpenMenu } = this.props;

    return (
      <main className="lg:w-3/5 mx-4 lg:mx-auto relative lg:flex flex-grow">
        <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />

        <div className="lg:w-3/4 container font-openSans">
          <Routes>
            <Route path="/" element={<Navigate to="/en/home" />} />
            <Route path="en">
              <Route index element={<Navigate to="/en/home" />} />
              <Route path="home" element={<content.EnHome />} />
              <Route path="biography" element={<content.EnBiography />} />
              <Route path="gallery" element={<content.EnGallery />} />
              <Route path="media" element={<content.EnMedia />} />
              <Route path="recordings" element={<content.EnRecordings />} />
              <Route path="contact" element={<content.EnContact />} />
            </Route>
            <Route path="ru">
              <Route index element={<Navigate to="/ru/home" />} />
              <Route path="home" element={<content.RuHome />} />
              <Route path="biography" element={<content.RuBiography />} />
              <Route path="gallery" element={<content.RuGallery />} />
              <Route path="media" element={<content.RuMedia />} />
              <Route path="recordings" element={<content.RuRecordings />} />
              <Route path="contact" element={<content.RuContact />} />
            </Route>
          </Routes>
        </div>
      </main>
    );
  }
}

export default Main;
