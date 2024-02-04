import { WFF,  Complex, BinaryOperator } from './firstOrderTypes';
import { binaryOperatorToLogic } from './firstOrderUtils';

export class ComplexImpl implements Complex {

  left: WFF;
  unaryOperator: '~' | undefined;
  binaryOperator: BinaryOperator;
  right: WFF;

  constructor(unaryOperator: '~' | undefined, left: WFF, binaryOperator: BinaryOperator, right: WFF) {
    this.left = left;
    this.unaryOperator = unaryOperator;
    this.binaryOperator = binaryOperator;
    this.right = right;
  }

  value(): boolean {
    let rv = binaryOperatorToLogic[this.binaryOperator](this.left.value(), this.right.value());
    return (this.unaryOperator === '~') ? !rv : rv;
  }

}