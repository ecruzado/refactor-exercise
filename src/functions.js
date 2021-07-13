const { mockedUsers } = require("./mock");
const DATE_CODES = [702, 1082, 1083, 1114, 1184, 1266, 12403];
const NUMERIC_CODES = [
  20, 21, 23, 24, 26, 700, 701, 790, 1700, 2202, 2203, 2204, 2205, 2206, 3734,
  3769, 12396,
];

// 1. The following function returns a data type based on a code parameter
// Do see problems witht this approach? If so, what are they?
// Make the necessary changes to enhance this code.
const getDataType = (code) => {
  if (DATE_CODES.includes(code)) {
    return "DATE";
  } else if (NUMERIC_CODES.includes(code)) {
    return "NUMERIC";
  } else {
    return "STRING";
  }
};

// 2. The getUsers method gets a list of users from a mocked database
// then adds a random property which contains the current time
// Do you see anything wrong with this approach?
// If so, make the changes that would make this better
const getUsers = async () => {
  const currentDate = new Date().getTime();
  // try {
  // throw Error("German");
  return await mockedUsers().then((data) =>
    data.map((item) => ({ ...item, random: currentDate }))
  );
  // } catch (ex) {
  // _logger.exception(ex);
  // const message= getMessageByExceptionCode(ex.code)
  // return BadRequest(message);

  // }

  //sync => try catch
};

// 3. Complete the code for the staircase function
// Read the instructions at /src/staircase.md
const staircase = (n) => {
  // n=4
  // loop de i=0; i<4 //levels
  // loop de j=0; j<n - i
  // print " "
  // loop de k=0; k < i
  // print "#"
  let globalStair = "";
  for (var i = 0; i < n; i++) {
    let level = "";
    for (var j = 0; j < n - i - 1; j++) {
      level = `${level} `;
    }

    // "#"
    for (var k = 0; k < i + 1; k++) {
      level = `${level}#`;
    }
    globalStair = `${globalStair}\n${level}`;
  }

  return globalStair;
};

module.exports = {
  getDataType,
  getUsers,
  staircase,
};
