describe('#damageFactor', () => {
  let damageFactor;

  beforeAll(() => {
    damageFactor = require('../damageFactor');
  });

  it('should calculate single-typed damage factor correctly', () => {
    expect(damageFactor('fight', 'normal')).toBe(2);
    expect(damageFactor('fight', 'fight')).toBe(1);
    expect(damageFactor('fight', 'flying')).toBe(0.5);
    expect(damageFactor('fight', 'ghost')).toBe(0);
  });

  it('should return NaN for invalid type', () => {
    expect(isNaN(damageFactor('foo', 'normal'))).toBe(true);
    expect(isNaN(damageFactor('fight', 'bar'))).toBe(true);
    expect(isNaN(damageFactor('foo', 'bar'))).toBe(true);
  });
});
