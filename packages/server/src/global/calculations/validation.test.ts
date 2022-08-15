import {throwObjectTypeError} from './validation';

describe('validation', () => {
  describe('throwObjectTypeError()', () => {
    it('is function', () => {
      expect(typeof throwObjectTypeError).toBe('function');
    });
  });
});
