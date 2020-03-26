import {expect} from 'chai';
import 'mocha';

describe('Hello function', () => {
  it('2+3=5', () => {
    expect(2+3).to.equal(5);
  });

  it('Hello is a string', () => {
    expect('Hello').to.be.string;
  });

  it('age is just a number', () => {
    expect(29).equals(29);
  });
});