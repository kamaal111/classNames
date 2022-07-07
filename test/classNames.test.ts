import classNames from '../src';

describe('classNames', () => {
  it('combines names', () => {
    expect(classNames('fa', 'fas', 'tas')).toEqual('fa fas tas');
  });

  it('combines names and removes disabled name', () => {
    expect(classNames('fa', 'fas', 'tas', { disabled: false })).toEqual(
      'fa fas tas'
    );
  });

  it('combines names and keeps disabled name', () => {
    expect(classNames('fa', 'fas', 'tas', { enabled: true })).toEqual(
      'fa fas tas enabled'
    );
  });

  test.each`
    input
    ${undefined}
    ${null}
    ${''}
    ${{ disabled: false }}
  `('returns a empty string', ({ input }) => {
    expect(classNames(input)).toEqual('');
  });
});
