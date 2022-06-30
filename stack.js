class Stack {

    constructor(maxSize = 10) {
        if (typeof (maxSize) !== typeof (6) || maxSize === Infinity || maxSize === -Infinity || maxSize === 0) {

            throw new Error("Your stack size is invalid");
        }

        this.maxSize = maxSize;
        this.size = 0;
        this.storageofItems = {};
    }

    push(elem) {

        if (this.size >= this.maxSize) {
            throw new Error("Stack Overflow")
        }

        this.size++;

        this.storageofItems[this.size] = elem;


    }


    pop() {
        if (this.size === 0) {
            throw new Error("Stack is empty");
        }
        let lastItem = this.storageofItems[this.size];

        delete this.storageofItems[this.size];

        this.size--;

        return lastItem;
    }


    peek() {

        if (this.size === 0) {
            return null;
        }

        return this.storageofItems[this.size - (this.size - 1)];

    }


    isEmpty() {
        if (this.size === 0) {
            return true;
        } else {
            return false;
        }
    }

    toArray() {

        let newArray = Object.values(this.storageofItems);

        return newArray;

    }

    static fromIterable(iterable) {
        let stackfromIterable = new Stack();

        if (typeof (iterable[Symbol.iterator]) !== 'function') {
            throw new Error("Your Entity is not iterable")
        }

        if (iterable instanceof Map || iterable instanceof Set) {

            let iterable2 = iterable.values();

            for (let i of iterable2) {

                stackfromIterable.push(iterable2[i]);
                stackfromIterable.maxSize++
            }

            stackfromIterable.maxSize = stackfromIterable.size;

            return stackfromIterable;
        }

        for (let i of iterable) {

            stackfromIterable.push(iterable[i]);
            stackfromIterable.maxSize++
        }

        stackfromIterable.maxSize = stackfromIterable.size;

        return stackfromIterable;
    }
}

module.exports = { Stack };