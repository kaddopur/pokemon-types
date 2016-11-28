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
});
