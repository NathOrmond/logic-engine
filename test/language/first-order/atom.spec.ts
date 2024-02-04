import { AtomImpl } from '../../../src/language/first-order/atom';
import { Atom } from '../../../src/language/first-order/firstOrderTypes';

describe('AtomImpl', () => {
  // let atom: Atom;

  // beforeEach(() => {
  //   // TODO
  // });

  test('should apply unary operators', () => {
    let atom = new AtomImpl('~', true);
    expect(atom.value()).toBe(false);
    atom = new AtomImpl(undefined, true);
    expect(atom.value()).toBe(true);
  });

});

