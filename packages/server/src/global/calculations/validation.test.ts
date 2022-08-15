import {throwObjectTypeError, throwObjectValueEmptyError} from './validation';

describe('validation', () => {
  describe('throwObjectTypeError()', () => {
    describe('에러를 throw 하는 케이스', () => {
      it("{ foo: 123 }, { foo: 'string'}", () => {
        expect(() =>
          throwObjectTypeError(
            {foo: 123},
            {
              foo: 'string',
            }
          )
        ).toThrowError();
      });
    });

    describe('에러를 throw 하지 않는 케이스', () => {
      it("{ foo: '123' }, { foo: 'string'}", () => {
        expect(() =>
          throwObjectTypeError(
            {foo: '123'},
            {
              foo: 'string',
            }
          )
        ).not.toThrowError();
      });

      it("{ foo: '123', bar: 123, baz: true }, { foo: 'string', bar: 'number', baz: 'boolean' }", () => {
        expect(() =>
          throwObjectTypeError(
            {foo: '123', bar: 123, baz: true},
            {foo: 'string', bar: 'number', baz: 'boolean'}
          )
        ).not.toThrowError();
      });
    });
  });

  describe('throwObjectValueEmptyError()', () => {
    describe('에러를 throw 하는 케이스', () => {
      it("{ foo: '' }", () => {
        expect(() => throwObjectValueEmptyError({foo: ''})).toThrowError();
      });

      it('{ foo: null }', () => {
        expect(() => throwObjectValueEmptyError({foo: null})).toThrowError();
      });

      it('{ foo: undefined }', () => {
        expect(() =>
          throwObjectValueEmptyError({foo: undefined})
        ).toThrowError();
      });
    });

    describe('에러를 throw 하지 않는 케이스', () => {
      it("{ foo: 'foo' }", () => {
        expect(() =>
          throwObjectValueEmptyError({foo: 'foo'})
        ).not.toThrowError();
      });

      it('{ foo: 0 }', () => {
        expect(() => throwObjectValueEmptyError({foo: 0})).not.toThrowError();
      });

      it('{ foo: true }', () => {
        expect(() =>
          throwObjectValueEmptyError({foo: true})
        ).not.toThrowError();
      });

      it('{ foo: false }', () => {
        expect(() =>
          throwObjectValueEmptyError({foo: false})
        ).not.toThrowError();
      });

      it('{ foo: {} }', () => {
        expect(() => throwObjectValueEmptyError({foo: {}})).not.toThrowError();
      });

      it('{ foo: [] }', () => {
        expect(() => throwObjectValueEmptyError({foo: []})).not.toThrowError();
      });
    });
  });
});
