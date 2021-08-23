const { mockedUsers } = require('./mock')

// 1. The following function returns a data type based on a code parameter
// Do see problems witht this approach? If so, what are they?
// Make the necessary changes to enhance this code.
const getDataType = code => {
  if ([702, 1082, 1083, 1114, 1184, 1266, 12403].indexOf(code)> -1)
  {
    return 'DATE'
  } else if (  [20,21, 23,24, 26, 700, 7001, 790, 1700,2202, 2203, 2204,2205, 2206, 3734, 3769,12396].indexOf(code) > -1){
    return 'NUMERIC'
  } else {
    return 'STRING'
  }
}

// 2. The getUsers method gets a list of users from a mocked database
// then adds a random property which contains the current time
// Do you see anything wrong with this approach?
// If so, make the changes that would make this better
const getUsers = async () => {
  try {
    let users = await mockedUsers()
    return users.map(item => ({ ...item, random: new Date().getTime()}))
  } catch (err) {
    throw err
  }
}

// 3. Complete the code for the staircase function
// Read the instructions at /src/staircase.md
const staircase = n => {
  console.log(n)
  let stair = '';
  for (var i = 0; i < n; i++) {
      let line = ' '.repeat(n - i - 1) + '#'.repeat(i + 1);
      if (i < n - 1) {
        line += '\n';
      }
      stair += line;
  }
  return stair
}

module.exports = {
  getDataType,
  getUsers,
  staircase
}
