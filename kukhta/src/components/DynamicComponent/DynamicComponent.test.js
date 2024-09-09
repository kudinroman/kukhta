import React from "react";
import { shallow } from "enzyme";
import DynamicComponent from "./DynamicComponent";

describe("DynamicComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DynamicComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
