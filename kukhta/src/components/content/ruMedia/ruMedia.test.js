import React from "react";
import { shallow } from "enzyme";
import RuMedia from "./ruMedia";

describe("RuMedia", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RuMedia />);
    expect(wrapper).toMatchSnapshot();
  });
});
