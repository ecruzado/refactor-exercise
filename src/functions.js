const { mockedUsers } = require('./mock')

// 1. The following function returns a data type based on a code parameter
// Do see problems witht this approach? If so, what are they?
// Make the necessary changes to enhance this code. 
const getDataType = code => {
  if (
    code === 702 ||
        code === 1082 ||
        code === 1083 ||
        code === 1114 ||
        code === 1184 ||
        code === 1266 ||
        code === 12403
  ) {
    return 'DATE'
  } else if (
    code === 20 ||
        code === 21 ||
        code === 23 ||
        code === 24 ||
        code === 26 ||
        code === 700 ||
        code === 701 ||
        code === 790 ||
        code === 1700 ||
        code === 2202 ||
        code === 2203 ||
        code === 2204 ||
        code === 2205 ||
        code === 2206 ||
        code === 3734 ||
        code === 3769 ||
        code === 12396
  ) {
    return 'NUMERIC'
  } else {
    return 'STRING'
  }
}

// 2. The getUsers method gets a list of users from a mocked database
// then adds a random property which contains the current time
// Do you see anything wrong with this approach?
// If so, make the changes that would make this better
const getUsers = () => {
  return mockedUsers()
    .then(data => data.map(item => ({ ...item, random: new Date().getTime() })))
    .catch(error => console.log(error))
}

// 3. Complete the code for the staircase function
// Read the instructions at /src/staircase.md
const staircase = n => {
  console.log(n)
}

module.exports = {
  getDataType,
  getUsers,
  staircase
}
