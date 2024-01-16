import { add } from '../src/utils/math';
import { test, expect  } from 'vitest';

// write vitest test 
test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(1, 2)).not.toBe(4);
});