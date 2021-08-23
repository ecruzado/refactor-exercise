const { getDataType, getUsers, staircase } = require('../src/functions');

test('getDataType', () => {
  expect(getDataType(702)).toBe('DATE');
  expect(getDataType(20)).toBe('NUMERIC');
  expect(getDataType(0)).toBe('STRING');
})

var users = [{
  id: 1,
  first_name: 'Rosalyn',
  last_name: 'Linfitt',
  email: 'rlinfitt0@trellian.com'
}, {
  id: 2,
  first_name: 'Daphene',
  last_name: 'Scowcroft',
  email: 'dscowcroft1@slideshare.net'
}, {
  id: 3,
  first_name: 'Ekaterina',
  last_name: 'Baldacco',
  email: 'ebaldacco2@blog.com'
}, {
  id: 4,
  first_name: 'Hieronymus',
  last_name: 'Scamel',
  email: 'hscamel3@desdev.cn'
}, {
  id: 5,
  first_name: 'Myrle',
  last_name: 'Matteris',
  email: 'mmatteris4@uiuc.edu'
}, {
  id: 6,
  first_name: 'Cyril',
  last_name: 'Beardwood',
  email: 'cbeardwood5@businesswire.com'
}, {
  id: 7,
  first_name: 'Winthrop',
  last_name: 'Greatreax',
  email: 'wgreatreax6@wiley.com'
}, {
  id: 8,
  first_name: 'Chastity',
  last_name: 'Delacote',
  email: 'cdelacote7@wired.com'
}, {
  id: 9,
  first_name: 'Lusa',
  last_name: 'Hould',
  email: 'lhould8@cdc.gov'
}, {
  id: 10,
  first_name: 'Electra',
  last_name: 'Speir',
  email: 'espeir9@wikia.com'
}]

test('getUsers', async () => {
  let data = await getUsers();
  expect(data.length).toBe(users.length);
})

var case4 = '   #\n' + '  ##\n' + ' ###\n' + '####';

test('staircase', () =>{
  expect(staircase(4)).toBe(case4);
});