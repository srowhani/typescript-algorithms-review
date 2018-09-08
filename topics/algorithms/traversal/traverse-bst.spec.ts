import { TraverseBSTT, TraversalMethod, TreeNode } from "./traverse-bst";
import { BinarySearchTreeNode } from "@topics/datastructures/trees/binary-tree-node";
/**
 * generates a tree as 
 *     a
 *    / \
 *   b   c
 * @param tree 
 */
function fillTree(tree: TraverseBSTT<string>) {
  const rootNode = new TreeNode({
    parent: null,
    value: 'a'
  });
  tree.add(rootNode);

  rootNode.left = new TreeNode({
    parent: rootNode,
    value: 'b',
  });

  rootNode.right = new TreeNode({
    parent: rootNode,
    value: 'c',
  });
}

describe('traverse-bst', () => {
  describe('pre-order', () => {
    const expectedOrder = ['a', 'b', 'c'];
    let _expectedOrder: string[] = [];
    
    beforeEach(() => {
      _expectedOrder = expectedOrder.slice();
    });

    it('[recursively] works', () => {
      const tree = new TraverseBSTT<string>({
        method: TraversalMethod.PRE_ORDER
      });
      fillTree(tree);
      
      const yieldedItems = [];
      for (const u of tree.traverse()) {
        yieldedItems.push(u);
        expect(u.value).toEqual(_expectedOrder.shift());
      }
      expect(yieldedItems).toHaveLength(3);
    })
    it('[iteratively] works', () => {
      const tree = new TraverseBSTT<string>({
        method: TraversalMethod.PRE_ORDER_ITER
      });
      fillTree(tree);
      
      const yieldedItems = [];
      for (const u of tree.traverse()) {
        yieldedItems.push(u);
        expect(u.value).toEqual(_expectedOrder.shift());
      }
      expect(yieldedItems).toHaveLength(3);
    });
  });
});