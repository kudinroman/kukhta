import React from "react";
import { shallow } from "enzyme";
import RuRecordings from "./ruRecordings";

describe("RuRecordings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RuRecordings />);
    expect(wrapper).toMatchSnapshot();
  });
});
