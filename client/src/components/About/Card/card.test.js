import Card from "./Card";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

test("renders correctly", () => {
  renderer.render(
    <Card icon="fas fa-users" title="test title" body="test body" />
  );
  const component = renderer.getRenderOutput();
  expect(component).toMatchSnapshot();
});
