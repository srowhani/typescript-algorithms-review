import { MinHeap } from "@topics/datastructures/heap/min-heap";

export class PriorityQueue<T> extends MinHeap<T> {
  private priorities: {[k: string]: number}
  constructor() {
    super((a: T, b: T) => {
        const strA = String(a);
        const strB = String(b);
    
        if (this.priorities[strA] === this.priorities[strB]) {
          return 0;
        }
    
        return this.priorities[strA] < this.priorities[strB] ? -1 : 1;
    });
    this.priorities = {};
  }

  add(item: T, priority = 0) {
    this.priorities[String(item)] = priority;
    super.add(item);

    return this;
  }

  findByValue(item: T) {
    return this.find(item, this.compareValue.bind(this));
  }

  /**
   * @param {*} item
   * @return {boolean}
   */
  hasValue(item: T) {
    return this.findByValue(item).length > 0;
  }

  /**
   * @param {*} a
   * @param {*} b
   * @return {number}
   */
  compareValue(a: T, b: T) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }
}