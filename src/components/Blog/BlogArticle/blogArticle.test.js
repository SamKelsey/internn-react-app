import BlogArticle from "./BlogArticle";

import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const sampleData = {
  title: "Sample title",
  subtitle: "Here is a subtitle",
  intro: "Sample intro",
  body: [
    {
      header: "Set the scene.",
      content: "Some sample content 1",
      isNumbered: true,
    },
    {
      header: "Remove the personal.",
      content: "Some sample content 2",
      isNumbered: false,
    },
  ],
};

jest.mock("../../utilities/getBlogInfo", () => ({
  __esModule: true,
  default: () => sampleData,
}));

test("Renders correctly.", () => {
  const { baseElement } = render(
    <MemoryRouter initialEntries={["/blog/prepare-your-property"]}>
      <BlogArticle />
    </MemoryRouter>
  );

  expect(baseElement).toMatchSnapshot();
});
