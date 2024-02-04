const binaryOperatorToLogic = {
  '&': (a: boolean, b: boolean) => a && b,
  '|': (a: boolean, b: boolean) => a || b,
  '->': (a: boolean, b: boolean) => !a || b,
  '<->': (a: boolean, b: boolean) => a === b
};

export { binaryOperatorToLogic };