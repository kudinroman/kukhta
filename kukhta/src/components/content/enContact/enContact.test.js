import React from "react";
import { shallow } from "enzyme";
import EnContact from "./enContact";

describe("EnContact", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EnContact />);
    expect(wrapper).toMatchSnapshot();
  });
});
