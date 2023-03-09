const soal = require("./soal");

test("[1, 2, 4, 3, 5, 3, 2, 1] to be [5, 4, 3, 3, 2, 2, 1, 1]", () => {
  expect(soal.soal1([1, 2, 4, 3, 5, 3, 2, 1])).toStrictEqual([5, 4, 3, 3, 2, 2, 1, 1]);
});

test("soal2", () => {
  expect(soal.soal2([100, 200, 300, 400], 2)).toBe(700);
});

test("soal3", () => {
  expect(
    soal.soal3({
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    })
  ).toBe(6);
});
