const { mockedUsers } = require('./mock')

// 1. The following function returns a data type based on a code parameter
// Do see problems witht this approach? If so, what are they?
// Make the necessary changes to enhance this code. 
const getDataType = code => {
  // const objCode = {
  //   702: 'DATE',
  //   1082: ''
  // }
  const dates = [
    702,
    1082,
    1083,
    1114,
    1184,
    1266,
    12403
  ]
  const numerics = [
    20,
    21,
    23,
    24,
    26,
    700,
    701,
    790,
    1700,
    2202,
    2203,
    2204,
    2205,
    2206,
    3734,
    3769,
    12396
  ]

  if(dates.includes(code)){
    return 'DATE'
  } else if(numerics.includes(code)){
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

    // if(false){
    //   throw new Error('Sucedió un error.')
    // }

    // serie
    // for(let user of users){
    //   user.random = new Date().getTime()
    // }

    // paralelo
    // await Promise.all(users.map(async item => ({ ...item, random: new Date().getTime() }))

    // return users
    return users.map(item => ({ ...item, random: new Date().getTime() }))
  } catch (err) {
    // handleError(err.message, err.stack)
    console.log(err)
  }

  // return mockedUsers()
  //   .then(data => data.map(item => ({ ...item, random: new Date().getTime() })))
  //   .catch(error => console.log(error))
}

// 3. Complete the code for the staircase function
// Read the instructions at /src/staircase.md
const staircase = n => {
  let result = []
  for (let i = 0; i < n; i++) {
    const leftString = ' '.repeat(n - 1 - i)
    const rightString = '#'.repeat(i + 1)
    result.push(leftString + rightString)
  }
  return result.join('\n')
}

module.exports = {
  getDataType,
  getUsers,
  staircase
}
