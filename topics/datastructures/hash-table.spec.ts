// http://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html
import { NaiveDictionary, HashTable } from './hash-table';

describe('hash-table', () => {
  describe('naive keystore', () => {
    it('works correctly', () => {
      const dict = new NaiveDictionary<string, number>();
      dict.put('test', 1);
      dict.put('test2', 2);

      expect(dict.get('test')).toEqual(1);
      expect(dict.get('test2')).toEqual(2);
    });

    it('doesnt replace', () => {
      const dict = new NaiveDictionary<string, number>();
      dict.put('test', 1);
      dict.put('test', 2);

      expect(dict.get('test')).toEqual(1); // should be 2
    });
  });

  describe('hash table implementation', () => {
    it('works correctly', () => {
      const ht = new HashTable<string, { _id: number }>();
      ht.set('test', { _id : 1 });
      expect(ht.get('test')).toEqual({ _id: 1 });
    })
  });
})