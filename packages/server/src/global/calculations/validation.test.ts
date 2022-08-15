import {throwObjectTypeError} from './validation';

describe('validation', () => {
  describe('throwObjectTypeError()', () => {
    it("{ foo: 123 }, { foo: 'string'} 이면 에러를 throw 한다.", () => {
      expect(() =>
        throwObjectTypeError(
          {foo: 123},
          {
            foo: 'string',
          }
        )
      ).toThrowError();
    });

    it("{ foo: '123' }, { foo: 'string'} 이면 foo 는 string typeof 이므로 에러를 throw 하지 않는다.", () => {
      expect(() =>
        throwObjectTypeError(
          {foo: '123'},
          {
            foo: 'string',
          }
        )
      ).not.toThrowError();
    });

    it("{ foo: '123', bar: 123, baz: true }, { foo: 'string', bar: 'number', baz: 'boolean' } 이면 에러를 throw 하지 않는다.", () => {
      expect(() =>
        throwObjectTypeError(
          {foo: '123', bar: 123, baz: true},
          {foo: 'string', bar: 'number', baz: 'boolean'}
        )
      ).not.toThrowError();
    });
  });
});
