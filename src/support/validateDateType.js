const validateTypeDate = (code) => {
  const arrayValueAccept = [
    702, 1082 , 1083 , 1114 , 1184 , 1266 , 12403
  ];
  const exists = arrayValueAccept.filter(item => item === code);
  return exists;
}

const validateTypeNumeric = (code) => {
  const arrayValueAccept = [
    20 , 21 , 23 , 24 , 26 , 700, 701 , 790 , 1700 , 2202,
    2203, 2204 , 2205 ,2206 , 3734 , 3769, 12396
  ];
  const exists = arrayValueAccept.filter(item => item === code);
  return exists;
}


module.exports = {
  validateTypeDate,
  validateTypeNumeric
}