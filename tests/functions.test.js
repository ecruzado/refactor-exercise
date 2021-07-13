const { getDataType, getUsers, staircase } = require("../src/functions");

test("getDataType", () => {
  expect(getDataType(702)).toBe("DATE");
  // try with number out of codes
  // try NUMERIC
  // try STRING
  // try different type of data
  // => try "20"=>NOT NUMERIC and 20 => NUMERIC
});

test("getUsers", () => {
  // try {
    getUsers().then((data) => console.log(data));
  // } catch (ex) {
  //   expect(ex.message).tobe("German");
  //   // expect(ex).toBeException();
  // }
  //try exception
});

test("staircase", () => {
  const stairs = staircase(2);
  console.log(stairs);
  const expected = ` #
##`;
  expect(stairs).toBe(expected);
});
