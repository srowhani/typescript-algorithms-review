import { BinarySearchTreeNode } from "@topics/datastructures/trees/binary-tree-node";

export class BinarySearchTree<T, Node extends BinarySearchTreeNode<T,Node>> {
  protected rootNode?: Node;

  public add(node: Node) {
    const lastNode = this.findLast(node.value)
  }

  public findLast(value: T): Node | undefined {
    let currentNode: Node | undefined = this.rootNode;
    let previousNode: Node | undefined = undefined;

    while (currentNode !== undefined) {
      previousNode = currentNode;
      const comparisonResult = currentNode.compareToValue(value);

      if (comparisonResult < 0) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return previousNode;
  }
}