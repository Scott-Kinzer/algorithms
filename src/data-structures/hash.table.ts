class HashTable {
  size: number;
  table: any[][];

  constructor(size: number) {
    this.table = Array(size);
    this.size = size;
  }

  hash(key: string) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key: string, value: string) {
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = this.table[index].find((item) => item[0] === key);

      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        this.table[index].push([key, value]);
      }
    }
  }

  get(key: string) {
    const index = this.hash(key);

    return this.table[index].find((item) => item[0] === key)[1] || undefined;
  }

  remove(key: string) {
    const index = this.hash(key);

    this.table[index] = this.table[index].filter((item) => item[0] !== key);
  }

  show() {
    this.table.forEach((array) => {
      console.log(array);
    });
  }
}

const hash = new HashTable(30);

hash.set('lviv', '500');
hash.set('vilv', '500');
hash.set('kyiv', '1000');
hash.show();
hash.remove('lviv');
hash.show();
hash.get('vilv');
