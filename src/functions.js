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

module.exports = {
  getDataType
}
