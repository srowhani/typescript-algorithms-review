import { BinarySearchTreeNode } from "@topics/datastructures/trees/binary-tree-node";
import { BinarySearchTree } from "@topics/datastructures/trees/binary-search-tree";

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
  public height(node: AVLTreeNode<T>): number {
    return node.height || 0;
  }

  public add(value: T): boolean {
    const node = new AVLTreeNode<T>({
      parent: null,
      value,
    })

    if (super.add()) {

    }
  }
}