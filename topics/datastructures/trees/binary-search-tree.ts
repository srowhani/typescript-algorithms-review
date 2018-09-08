import { BinarySearchTreeNode } from "@topics/datastructures/trees/binary-tree-node";
import { Nullable } from "@topics/datastructures/trees/types";

export class BinarySearchTree<T, Node extends BinarySearchTreeNode<T,Node>> {
  protected rootNode: Nullable<Node>;
  protected treeSize: number;

  constructor () {
    this.treeSize = 0;
  }

  public add(node: Node): boolean {
    const lastNode = this.findLast(node.value)
    return this.addChild(lastNode, node);
  }

  private addChild(parent: Nullable<Node>, child: Node): boolean {
    if (parent === null) {
      this.rootNode = child;
    } else {
      const comparisonResult = child.compareToNode(parent);
      if (comparisonResult < 0) {
        parent.left = child;
      } else if (comparisonResult > 0) {
        parent.right = child;
      } else {
        return false; // child already in tree
      }
      child.parent = parent;
    }
    this.treeSize++;
    return true;
  }

  public findLast(value: T): Nullable<Node> {
    let currentNode: Nullable<Node> = this.rootNode;
    let previousNode: Nullable<Node> = null;

    while (currentNode !== null) {
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