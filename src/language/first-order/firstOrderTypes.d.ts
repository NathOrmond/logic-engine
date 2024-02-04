
type UnaryOperator = '~';

type BinaryOperator = '&' | '|' | '->' | '<->';

type WFF  = Atom | Complex; 

interface Atom {
  unaryOperator: UnaryOperator | undefined;
  proposition: boolean | (() => boolean);
  value: () => boolean;
}

interface Complex { 
  unaryOperator: UnaryOperator | undefined;
  left: WFF;
  binaryOperator: BinaryOperator;
  right: WFF;
  value: () => boolean;
}

export { WFF, Atom, Complex, UnaryOperator, BinaryOperator };
