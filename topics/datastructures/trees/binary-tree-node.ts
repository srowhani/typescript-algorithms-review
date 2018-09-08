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