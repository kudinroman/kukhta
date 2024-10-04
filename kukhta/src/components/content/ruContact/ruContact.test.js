import React from "react";
import { shallow } from "enzyme";
import RuContact from "./ruContact";

describe("RuContact", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RuContact />);
    expect(wrapper).toMatchSnapshot();
  });
});
