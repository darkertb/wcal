export class NumberCalculator {

  calculate(formula: string): number {

    // eslint-disable-next-line no-eval
    return Number(eval(formula));
  }
}
