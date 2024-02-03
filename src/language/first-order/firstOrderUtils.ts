const binaryOperatorLogicMap = {
  '&': (p: boolean, q: boolean) => p && q,
  '|': (p: boolean, q: boolean) => p || q,
  '->': (p: boolean, q: boolean) => !p || q,
  '<->': (p: boolean, q: boolean) => p === q  
};

export {
  binaryOperatorLogicMap 
}