const lib = require('../index');

[0, 1, true, false, {}, [], '81345471', '8134547171', 'FR42813454717', '81345471700014'].forEach((value) => {
  test(`bad value ${JSON.stringify(value)}`, () => {
    expect(lib.isSIREN(value)).toBe(false);
  });
});

['813454717', '803417153'].forEach((value) => {
  test(`good value ${value}`, () => {
    expect(lib.isSIREN(value)).toBe(true);
  });
});
