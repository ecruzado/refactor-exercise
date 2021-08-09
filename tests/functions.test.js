const functionDataTypes = require('../src/functions');
const userMock = require('../src/mock')

const oneUserMock = {
  email: "ebaldacco2@blog.com",
  first_name: "Ekaterina",
  id: 3,
  last_name: "Baldacco",
  random: 1628545941067,
}

beforeEach(() => {
  jest.clearAllMocks();
})


describe('Validate Data Type', () => {
  it('should validate is a function', () => {
    expect(typeof functionDataTypes.getDataType).toBe('function');
  });
  test('should return DATE', () => {
    const resultTest = functionDataTypes.getDataType(702);
    expect(resultTest).toBe('DATE');
  });
  test('should return NUMERIC', () => {
    const resultTest = functionDataTypes.getDataType(20);
    expect(resultTest).toBe('NUMERIC');
  })
  test('should return STRING', () => {
    const resultTest = functionDataTypes.getDataType();
    expect(resultTest).toBe('STRING');
  })
})

describe('Validate Result Get User', () => {
  it('should validate is a function', () => {
    expect(typeof functionDataTypes.getUsers).toBe('function');
  });
  test('should return ARRAY', async () => {
    const resultMock = await functionDataTypes.getUsers();
    const resultTest = await userMock.mockedUsers();
    expect(typeof resultMock).toBe('object')
    expect(resultTest).toEqual(
      expect.arrayContaining([    
        expect.objectContaining({  
          email: oneUserMock.email               
        })
      ])
    )
  })
})
