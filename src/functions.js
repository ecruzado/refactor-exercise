
const validateDateTypes = require('./support/validateDateType')

const { mockedUsers } = require('./mock')

// 1. The following function returns a data type based on a code parameter
// Do see problems witht this approach? If so, what are they?
// Make the necessary changes to enhance this code. 
const getDataType = code => {
  const resultDataTypeDate = validateDateTypes.validateTypeDate(code);
  const resultDataTypeNumeric = validateDateTypes.validateTypeNumeric(code);
  if (resultDataTypeDate.length > 0)  return 'DATE'
  else if (resultDataTypeNumeric.length > 0) return 'NUMERIC'
  return 'STRING'
}

// 2. The getUsers method gets a list of users from a mocked database
// then adds a random property which contains the current time
// Do you see anything wrong with this approach?
// If so, make the changes that would make this better
const getUsers = async () => {
    try {
      let resultMockUser = await mockedUsers();
      resultMockUser = resultMockUser.map(item => ({
        ...item,
        random: new Date().getTime()
      }));
      return resultMockUser;
    } catch (error) {
      console.log(error)
    }
}

// 3. Complete the code for the staircase function
// Read the instructions at /src/staircase.md
const staircase = n => {
  let charString = "#";
  let charSpacing = " ";
  for(let i = 0; i < n; i++) {
    console.log(charSpacing.repeat(n - (i+1)) + charString.repeat(i + 1))
  }
}

module.exports = {
  getDataType,
  getUsers,
  staircase
}