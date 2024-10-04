import React from "react";
import { shallow } from "enzyme";
import RuGallery from "./ruGallery";

describe("RuGallery", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RuGallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
