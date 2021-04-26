import getBlogInfo from "./getBlogInfo";

describe("All blog fields are returned", () => {
  const results = getBlogInfo("prepare-your-property.json");

  test("title field is not undefined.", () => {
    expect(results.title).toBeDefined();
  });

  test("subtitle field is not undefined.", () => {
    expect(results.subtitle).toBeDefined();
  });

  test("intro field is not undefined.", () => {
    expect(results.intro).toBeDefined();
  });

  test("body field is not undefined.", () => {
    expect(results.body).toBeDefined();
  });
});
