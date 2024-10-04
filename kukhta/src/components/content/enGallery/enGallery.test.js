import React from "react";
import { shallow } from "enzyme";
import EnGallery from "./enGallery";

describe("EnGallery", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EnGallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
