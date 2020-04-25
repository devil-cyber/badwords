const Filter = require('../package/index');

test('String clean test', () => {
    const filter = new Filter();
    expect(filter.clean('asshole')).toBe('*******');
    expect(filter.clean('Kawacrepe is cool')).toBe('Kawacrepe is cool');
});

test('Custom list', () => {
    const filter = new Filter({list: ['test', 'github']});
    expect(filter.clean('Github is really helpfull, asshole')).toBe('****** is really helpfull, asshole');
})

test('Contain badwords', () => {
    const filter = new Filter();
    expect(filter.doesContainBadwords('asshole is a badword')).toEqual({containBadword: true, badwords: ['asshole']});
    expect(filter.doesContainBadwords('asshole is a badword and ass too')).toEqual({containBadword: true, badwords: ['asshole', 'ass']});
})

test('Placeholder changed', () => {
    const filter = new Filter({placeHolder: 'x'});
    expect(filter.clean('asshole')).toBe('xxxxxxx');
})