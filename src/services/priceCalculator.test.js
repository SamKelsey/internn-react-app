import calculator from "./priceCalculator";

test("returns default value", () => {
  const price = calculator("Rooms...");
  expect(price).toBe("...");
});

test("returns correct price", () => {
  const price = calculator(7);
  expect(price).toBe("49.00");
});
