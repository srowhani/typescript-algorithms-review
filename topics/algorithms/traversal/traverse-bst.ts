import { BinarySearchTree } from "@topics/datastructures/trees/binary-search-tree";
import { BinarySearchTreeNode } from "@topics/datastructures/trees/binary-tree-node";

export interface Traversable<Node> {
  traverse(): Iterable<Node>;
}

export enum TraversalMethod {
  PRE_ORDER,
  POST_ORDER,
  IN_ORDER,
}

export class TraverseBSTT<
  T,
  Node extends BinarySearchTreeNode<
    T,
    Node
  >
> extends BinarySearchTree<T, Node> implements Traversable<Node> {
  private traverseMethod: TraversalMethod;

  constructor ({ method }: { method: TraversalMethod }) {
    super();
    this.traverseMethod = method;
  }
  public *traverse(): Iterable<Node> {
    switch(this.traverseMethod) {
      case TraversalMethod.PRE_ORDER:
        yield* this.preOrderTraversal();
    }
  }

  private *preOrderTraversal(): Iterable<Node> {
    yield {} as Node;
  }

}
