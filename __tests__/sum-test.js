const { sum, subtract, multiply } = require("../deneme");

test("adds 3 + 2 to equal 5", () => {
  const rv = sum(3, 2);

  expect(rv).toBe(5);
});

test("subtracts 3 - 2 to equal 1", () => {
  const rv = subtract(3, 2);

  expect(rv).toBe(1);
});

test("multiplies 3 * 2 to equal 6", () => {
  const rv = multiply(3, 2);

  expect(rv).toBe(6);
});
