import { create } from 'zustand';
import { NumberCalculator } from '../common/calculator/number.calculator';

interface CalculatorState {
  numberCalculator: NumberCalculator
}

export const useCalculatorStore = create<CalculatorState>(
  (set) => ({
    numberCalculator: new NumberCalculator(),
  }),
);
