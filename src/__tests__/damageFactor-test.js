describe('#damageFactor', () => {
  let damageFactor;

  beforeAll(() => {
    damageFactor = require('../damageFactor');
  });

  it('should calculate single-typed damage', () => {
    expect(damageFactor('fight', 'normal')).toBe(2);
    expect(damageFactor('fight', 'fight')).toBe(1);
    expect(damageFactor('fight', 'flying')).toBe(0.5);
    expect(damageFactor('fight', 'ghost')).toBe(0);
  });

  it('should calculate dual-typed damage', () => {
    expect(damageFactor('electric', ['flying', 'water'])).toBe(4);
    expect(damageFactor(['grass', 'water'], ['rock'])).toBe(4);
    expect(damageFactor(['grass', 'water'], ['rock', 'ground'])).toBe(16);
    expect(damageFactor(['grass', 'normal'], ['rock', 'ghost'])).toBe(0);
  });

  it('should return NaN for invalid type', () => {
    expect(isNaN(damageFactor('foo', 'normal'))).toBe(true);
    expect(isNaN(damageFactor('fight', 'bar'))).toBe(true);
    expect(isNaN(damageFactor('foo', 'bar'))).toBe(true);
    expect(isNaN(damageFactor(['grass', 'foo'], ['rock', 'ground']))).toBe(true);
    expect(isNaN(damageFactor(['grass', 'foo'], 'baz'))).toBe(true);
  });
});
