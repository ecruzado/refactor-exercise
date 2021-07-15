'use strict'

const { getDataType, getUsers, staircase } = require('../src/functions')

test('getDataType', () => {
  // Type 'DATE'
  expect(getDataType(702)).toBe('DATE')

  // Type 'NUMERIC'
  expect(getDataType(20)).toBe('NUMERIC')

  // Default 'NUMERIC'
  expect(getDataType(5000)).toBe('STRING')
})

test('getUsers', async () => {
  const users = await getUsers()
})

test('staircase', () => {
  expect(staircase(3)).toBe(
    '  #\n ##\n###'
  )
})