const { getDataType, getUsers } = require('../src/functions')

test('getDataType', () => {
  expect(getDataType(702)).toBe('DATE')
})

test('getUsers', () => {
  getUsers().then(data => console.log(data))
})
