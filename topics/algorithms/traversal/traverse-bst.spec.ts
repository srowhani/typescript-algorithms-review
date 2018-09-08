import { TraverseBSTT, TraversalMethod, TreeNode } from "./traverse-bst";
import { BinarySearchTreeNode } from "@topics/datastructures/trees/binary-tree-node";

describe('traverse-bst', () => {
  it('adds and lists available items', () => {
    const tree = new TraverseBSTT<string>({
      method: TraversalMethod.PRE_ORDER
    });

    const expectedOrder = ['a', 'b', 'c'];

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

    const yieldedItems = [];
    for (const u of tree.traverse()) {
      yieldedItems.push(u);
      expect(u.value).toEqual(expectedOrder.shift());
    }
    expect(yieldedItems).toHaveLength(3);
    expect(tree.root).toEqual(rootNode);
  })
 
});