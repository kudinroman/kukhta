import React from "react";
import { shallow } from "enzyme";
import EnRecordings from "./enRecordings";

describe("EnRecordings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EnRecordings />);
    expect(wrapper).toMatchSnapshot();
  });
});
