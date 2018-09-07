export class NaiveDictionary<K, V> {
  private keys: K[];
  private values: V[];

  constructor () {
    this.keys = [];
    this.values = [];
  }

  put (key: K, value: V) {
    this.keys.push(key);
    this.values.push(value);
  }

  get (key: K) {
    return this.values[this.keys.findIndex((k => k === key))];
  }
}

export class HashTable<K, V> {
  static readonly MAX_BUCKETS = 10_000;
  private buckets: NaiveDictionary<K, V>[];
  
  constructor () {
    this.buckets = new Array(HashTable.MAX_BUCKETS)
      .fill(null)
      .map(() => new NaiveDictionary<K, V>());
  }

  private getBucket (key: K): NaiveDictionary<K,V> {
    return this.buckets[this.getBucketIndex(key)]
  }

  private getBucketIndex (key: K): number {
    return this._hash2(key) % this.buckets.length;
  }
  
  // implementation of a hashing function
  // a good hashing function makes use of most of the buckets allocated.
  private _hash (key: K): number {
    let _hash = 0;
    const _key = String(key);
    for (let i = 0; i < _key.length; i++) {
      _hash += (i + 1) * _key.charCodeAt(i);
    }
    return _hash;
  }

  private _hash2 (key: K): number {
    let hash = 0;
    const _key = String(key);

    for (let i = 0; i < _key.length; i++) {
        hash = (hash << 5) - hash;
        hash = hash + _key.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
    }

    return Math.abs(hash);
  }

  public get (k: K): V {
    return this.getBucket(k).get(k);
  }

  public set (k: K, v: V) {
    this.getBucket(k).put(k, v);
  }
}