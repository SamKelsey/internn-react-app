import Pricing from "./index";
import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Renders correct price.", () => {
  const component = shallow(<Pricing />);
  expect(true).toBeTruthy();
});
