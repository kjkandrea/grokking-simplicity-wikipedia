import {throwObjectTypeError, throwObjectValueEmptyError} from './validation';

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

  describe('throwObjectValueEmptyError()', () => {
    it("{ foo: '' } 이면 에러를 throw 한다.", () => {
      expect(() => throwObjectValueEmptyError({foo: ''})).toThrowError();
    });

    it('{ foo: null } 이면 에러를 throw 한다.', () => {
      expect(() => throwObjectValueEmptyError({foo: null})).toThrowError();
    });

    it('{ foo: undefined } 이면 에러를 throw 한다.', () => {
      expect(() => throwObjectValueEmptyError({foo: undefined})).toThrowError();
    });

    it("{ foo: 'foo' } 이면 에러를 throw 하지 않는다.", () => {
      expect(() => throwObjectValueEmptyError({foo: 'foo'})).not.toThrowError();
    });

    it('{ foo: 0 } 이면 에러를 throw 하지 않는다.', () => {
      expect(() => throwObjectValueEmptyError({foo: 0})).not.toThrowError();
    });

    it('{ foo: true } 이면 에러를 throw 하지 않는다.', () => {
      expect(() => throwObjectValueEmptyError({foo: true})).not.toThrowError();
    });

    it('{ foo: false } 이면 에러를 throw 하지 않는다.', () => {
      expect(() => throwObjectValueEmptyError({foo: false})).not.toThrowError();
    });

    it('{ foo: {} } 이면 에러를 throw 하지 않는다.', () => {
      expect(() => throwObjectValueEmptyError({foo: {}})).not.toThrowError();
    });

    it('{ foo: [] } 이면 에러를 throw 하지 않는다.', () => {
      expect(() => throwObjectValueEmptyError({foo: []})).not.toThrowError();
    });
  });
});
