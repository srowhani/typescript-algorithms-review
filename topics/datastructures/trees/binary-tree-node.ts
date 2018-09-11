import { Nullable } from "@topics/datastructures/trees/types";


export class BinaryTreeNode<Node extends BinaryTreeNode<Node>> {
  public left: Nullable<Node>;
  public right: Nullable<Node>;
  public parent: Nullable<Node>;

  constructor({ parent }: { parent: Nullable<Node> }) {
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  public removeChild(u: Node): boolean {
    return this.replaceChild(u, null);
  }

  public replaceChild(nodeToRemove: Node, childNode: Nullable<Node> ): boolean {
    if (this.left === nodeToRemove) {
      this.left = childNode;
      return true;
    }
    if (this.right === nodeToRemove) {
      this.right = childNode;
      return true;
    }

    return false;
  }

}

export class BinarySearchTreeNode<
  T,
  Node extends BinarySearchTreeNode<
    T,
    Node
  >
> extends BinaryTreeNode<Node> {
  public value: T;

  constructor ({ parent, value }: { parent: Nullable<Node>, value: T }) {
    super({ parent });
    this.value = value;
  }

  public compareToNode (other: BinarySearchTreeNode<T, Node>) {
    return Number(this.value) - Number(other.value);
  }
  /**
   * Basic compareTo function. Will only work for numbers lol sh dont
   * tell anyone
   * @param value 
   */
  public compareToValue(value: T) {
    return Number(this.value) - Number(value);
  }
}