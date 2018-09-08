import { AVLTree } from "@topics/datastructures/trees/avl-tree/avl-tree";

describe('avl-tree', () => {
  it('instantiates', () => {
    expect(() => {
      new AVLTree<any>();
    }).not.toThrow();
  })
})