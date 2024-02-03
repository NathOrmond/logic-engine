import type {
  AtomicArg,
  Atom, 
  Complex,
  WFF,
  Proposition,
  AtomicProposition,
  ComplexProposition,
  UnaryOperator,
  BinaryOperator
} from './firstOrderTypes';

class AtomImpl implements Atom {
  
  isAtomic: true;
  unaryOperator: UnaryOperator | undefined;
  proposition: AtomicArg;
  
  constructor( proposition: AtomicArg, unaryOperator: UnaryOperator | undefined = undefined ) {
    this.proposition = proposition;
    this.isAtomic = true;
    this.unaryOperator = unaryOperator;
  }

  toString: () => string = () => {
    return JSON.stringify( this.proposition );
  };

}

export {
  AtomImpl
}