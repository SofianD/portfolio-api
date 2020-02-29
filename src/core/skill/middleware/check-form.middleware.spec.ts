import { CheckFormMiddleware } from './check-form.middleware';

describe('CheckFormMiddleware', () => {
  it('should be defined', () => {
    expect(new CheckFormMiddleware()).toBeDefined();
  });
});
