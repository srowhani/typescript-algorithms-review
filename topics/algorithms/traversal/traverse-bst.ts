import { BinarySearchTree } from "@topics/datastructures/trees/binary-search-tree";
import { BinarySearchTreeNode } from "@topics/datastructures/trees/binary-tree-node";
import { Nullable } from "@topics/datastructures/trees/types";

export interface Traversable<Node> {
  traverse(): Iterable<Node>;
}

export enum TraversalMethod {
  PRE_ORDER,
  PRE_ORDER_ITER,
  POST_ORDER,
  IN_ORDER,
}

export class TreeNode<T> extends BinarySearchTreeNode<T, TreeNode<T>> {};

export class TraverseBSTT<T> extends BinarySearchTree<T, TreeNode<T>> implements Traversable<TreeNode<T>> {
  private traverseMethod: TraversalMethod;

  constructor ({ method }: { method: TraversalMethod }) {
    super();
    this.traverseMethod = method;
  }
  public *traverse(): Iterable<TreeNode<T>> {
    switch(this.traverseMethod) {
      case TraversalMethod.PRE_ORDER:
        yield* this.preOrderTraversal();
        break;
      case TraversalMethod.PRE_ORDER_ITER:
        yield* this.iterPreOrderTraversal();
    }
  }

  private *preOrderTraversal(u: Nullable<TreeNode<T>> = this.rootNode): Iterable<TreeNode<T>> {
    if (u !== null) {
      yield u;
      yield* this.preOrderTraversal(u.left);
      yield* this.preOrderTraversal(u.right);
    } 
  }

  private *iterPreOrderTraversal(): Iterable<TreeNode<T>> {
    if (this.root === null) {
      return;
    }

    const stack = [this.root];
    
    while (stack.length > 0) {
      let u = stack.pop();
      
      if (u) {
        yield u;

        if (u.right) {
          stack.push(u.right);
        }
        if (u.left) {
          stack.push(u.left);
        }
      }

    }
  }

}
