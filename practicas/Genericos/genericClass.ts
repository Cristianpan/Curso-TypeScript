class ArrayOfNumbers {
  constructor(private collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(private collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAny<T>{
    constructor(private collection: T[]){}

    get(index: number): T {
        return this.collection[index]; 
    }

    add(value: T): void {
        this.collection.push(value); 
    }
}


const collection = new ArrayOfAny<number>([1,2,3,4,5]);

const collection2 = new ArrayOfAny(['a', 'b', 'c']);

console.log(collection); 

collection.add(12323);
console.log(collection)
console.log(collection.get(2)); 