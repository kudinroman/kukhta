import React from "react";
import { shallow } from "enzyme";
import RuHome from "./ruHome";

describe("RuHome", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RuHome />);
    expect(wrapper).toMatchSnapshot();
  });
});
