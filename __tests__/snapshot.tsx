import renderer from "react-test-renderer";

import Index from "../pages/index";
import Profile from "../pages/profile";

it("renders index unchanged", () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders about unchanged", () => {
  const tree = renderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});
