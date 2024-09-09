import React from "react";
import { shallow } from "enzyme";
import EnHome from "./enHome";

describe("EnHome", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EnHome />);
    expect(wrapper).toMatchSnapshot();
  });
});
