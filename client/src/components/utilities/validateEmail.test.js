import validateEmail from "./validateEmail";

test("returns true for correct email.", () => {
  const result = validateEmail("john.smith@gmail.com");
  expect(result).toBeTruthy();
});

test("returns false for incorrect email.", () => {
  const result = validateEmail("johnsomething");
  expect(result).toBeFalsy();
});
