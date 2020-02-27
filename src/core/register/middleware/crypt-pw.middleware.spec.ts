import { CryptPwMiddleware } from './crypt-pw.middleware';

describe('CryptPwMiddleware', () => {
  it('should be defined', () => {
    expect(new CryptPwMiddleware()).toBeDefined();
  });
});
