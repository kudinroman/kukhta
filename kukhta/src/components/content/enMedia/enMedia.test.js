import React from "react";
import { shallow } from "enzyme";
import EnMedia from "./enMedia";

describe("EnMedia", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EnMedia />);
    expect(wrapper).toMatchSnapshot();
  });
});
