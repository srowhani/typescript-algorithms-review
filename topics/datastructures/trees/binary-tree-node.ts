

export class BinaryTreeNode<Node extends BinaryTreeNode<Node>> {
  public left?: Node;
  public right?: Node;
  public parent: Node | null;

  constructor({ parent }: { parent: Node | null }) {
    this.parent = parent;
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

  constructor ({ parent, value }: { parent: Node | null, value: T }) {
    super({ parent });
    this.value = value;
  }

  public compareToNode (other: BinarySearchTreeNode<T, Node>) {
    return this.value > other.value;
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