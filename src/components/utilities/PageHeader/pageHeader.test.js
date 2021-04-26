import PageHeader from "./PageHeader";
import ShallowRenderer from "react-test-renderer/shallow";

const renderer = new ShallowRenderer();

describe("Component renders correctly", () => {
  test("title and subtitle render correctly", () => {
    renderer.render(<PageHeader title="title" subtitle="subtitle" />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  test("no subtitle rendered if not provided in props", () => {
    renderer.render(<PageHeader title="title" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
