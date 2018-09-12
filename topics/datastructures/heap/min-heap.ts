import { Heap } from "@topics/datastructures/heap/heap";

export class MinHeap<T> extends Heap<T> {
  pairIsInCorrectOrder(first: T, second: T) {
    return this.compare(first, second) <= 0;
  }
}