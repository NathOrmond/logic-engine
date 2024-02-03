
type UnaryOperator = '~';

type BinaryOperator = '&' | '|' | '->' | '<->';


type AtomicArg = () => boolean;

interface Atom { 
  isAtomic: true;
  proposition: AtomicArg;
  toString: () => string;
  unaryOperator: UnaryOperator | undefined;
}

interface ComplexArg {
  args: [WFF, WFF];
  connective: BinaryOperator;  
}

interface Complex {
  isAtomic: false;
  proposition: (( arg: ComplexArg ) => boolean);
  toString: () => string;
  unaryOperator: UnaryOperator | undefined;
}

type WFF = Complex | Atom;

interface Proposition {
  wff: WFF;
  value: boolean;
}

interface AtomicProposition extends Proposition {
  wff: Atom
  value: boolean;
}

interface ComplexProposition extends Proposition {
  wff: Complex;
  value: boolean;
}

export {
  ComplexArg,
  Complex,
  AtomicArg,
  Atom,
  WFF,
  Proposition,
  AtomicProposition,
  ComplexProposition,
  UnaryOperator,
  BinaryOperator
}