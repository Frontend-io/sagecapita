import { NumberMillionsPipe } from './number-millions.pipe';

describe('NumberMillionsPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberMillionsPipe();
    expect(pipe).toBeTruthy();
  });
});
