import { BinarySearchTreeNode } from "@topics/datastructures/trees/binary-tree-node";
import { BinarySearchTree } from "@topics/datastructures/trees/binary-search-tree";
import { Nullable } from "@topics/datastructures/trees/types";

export class AVLTreeNode<T> extends BinarySearchTreeNode<T, AVLTreeNode<T>> {
  public height?: number;
}

/**
 * The AVL tree is another balanced binary search tree.
 * Namedafter (A)delson-(V)elskii, and (L)andis
 * They were the first dynamicaly balanced trees to be proposed.
 * 
 * Maintains an O(logn) search time
 * 
 * Definition
 * - The subtrees of every node differ in height by at most one
 * - Every subtree is an AVL Tree
 */
export class AVLTree<T> extends BinarySearchTree<T, AVLTreeNode<T>> {
  public height(node: Nullable<AVLTreeNode<T>>): number {
    return node !== null
      ? node.height || 0
      : 0;
  }

  public add(value: T): boolean {
    const node = new AVLTreeNode<T>({
      parent: null,
      value,
    })

    if (super.add(node)) {
      for (let tn: Nullable<AVLTreeNode<T>> = node; tn !== null; tn = tn.parent) {
        // walk back up to the root adjusting heights
        tn.height = Math.max(
          this.height(tn.left),
          this.height(tn.right)
        ) + 1;
        // TODO: Fix up the tree after adding items
      }
    }
    return true;
  }
}