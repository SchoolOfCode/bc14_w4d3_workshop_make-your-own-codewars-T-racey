//👉 Write your tests below here:
import { test, expect } from "@jest/globals";
import { calculateAverageTime } from './main.js';
describe('calculateAverageTime', () => {
    // Test to verify if the function correctly calculates the average time for a given input array
    test('calculates the average time correctly', () => {
      expect(calculateAverageTime([20, 22, 24, 26, 28])).toBe('24.00');
      expect(calculateAverageTime([10, 20, 30, 40])).toBe('25.00');
      expect(calculateAverageTime([30, 50, 70])).toBe('50.00');
    });
  
    // Test to verify if the function returns 0 when the input array is empty
    test('returns 0 when the input array is empty', () => {
      expect(calculateAverageTime([])).toBe('0.00');
    });
  
    // Test to verify if the function returns the only element of the input array when it contains only one element
    test('returns the only element of the input array when it contains only one element', () => {
      expect(calculateAverageTime([10])).toBe('10.00');
    });
  
    // Test to verify if the function throws an error when the input is not an array
    test('throws an error when the input is not an array', () => {
      expect(() => calculateAverageTime('invalid input')).toThrowError('Input must be an array');
      expect(() => calculateAverageTime(123)).toThrowError('Input must be an array');
      expect(() => calculateAverageTime({})).toThrowError('Input must be an array');
    });
  
    // Test to verify if the function throws an error when the input array contains non-numeric values
    test('throws an error when the input array contains non-numeric values', () => {
      expect(() => calculateAverageTime([10, 20, '30', 40])).toThrowError('Array must contain only numeric values');
      expect(() => calculateAverageTime([10, 20, NaN, 40])).toThrowError('Array must contain only numeric values');
      expect(() => calculateAverageTime([10, 20, null, 40])).toThrowError('Array must contain only numeric values');
    });

    // Test to verify if the function throws an error when the input array contains more than 10 elements
    test('throws an error when input array contains more than 10 elements', () => {
        const input = [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];
        expect(() => calculateAverageTime(input)).toThrow('The number of riders on the team must be between 1 and 10');
      });
      
  });
  
