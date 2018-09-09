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
  IN_ORDER_ITER,
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
        break;
      case TraversalMethod.IN_ORDER:
        yield* this.inOrderTraversal();
        break;
      case TraversalMethod.IN_ORDER_ITER:
        yield* this.iterInOrderTraversal();
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

  private *inOrderTraversal(u: Nullable<TreeNode<T>> = this.rootNode): Iterable<TreeNode<T>> {
    if (u !== null) {
      yield* this.preOrderTraversal(u.left);
      yield u;
      yield* this.preOrderTraversal(u.right);
    } 
  }

  private *iterInOrderTraversal(): Iterable<TreeNode<T>> {
    const toVisitLater: TreeNode<T>[] = [ ];
    let u: Nullable<TreeNode<T>> = this.root;
    // there is either something to visit later, or currentNode isn't null and keep processing
    // we keep evaluation of u as falsey to cover both null case from nullable or undefined from .pop
    while (toVisitLater.length > 0 || u) {
      if (u) {
        toVisitLater.push(u);
        u = u.left;
      } else {
        // since we can't go any further left, we pop a node that we wanted to visit and try again
        u = toVisitLater.pop() as Nullable<TreeNode<T>>;
        // we now actually mark the node as visited
        if (u) {
          yield u;
          u = u.right; // then we start going right and repeat the process.
        }
      }
    }
  }

}
