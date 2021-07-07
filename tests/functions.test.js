const getDataType = require('../src/functions')

test('getDataType', () => {
  expect(getDataType(702)).toBe('DATE')
})
