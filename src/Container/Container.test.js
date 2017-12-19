import React from "react";
import { shallow, mount } from "enzyme";
import { Container } from "./Container";

function setup() {
  const props = {
    items: [],
    dispatch: jest.fn()
  };
  const enzymeWrapper = mount(<Container {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("Container component", () => {
    
});


