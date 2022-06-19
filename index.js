// / FIRST TASK

function makeObjectDeepCopy(anyObj) {
    let newObj = {};

    for (let key in anyObj) {

        if (typeof anyObj[key] == "object" && anyObj[key] !== null) {
            newObj[key] = makeObjectDeepCopy(anyObj[key]);
        } else {
            newObj[key] = anyObj[key];
        }
    }

    return newObj;

};

// / SECOND TASK

function selectFromInterval(array, firstInterval, secondInterval) {

    let newArray = [];


    for (i in array) {
        if (typeof (array[i]) !== typeof (5)) {
            throw Error("Your array should only have numbers");
        }
    }

    if (Array.isArray(array) !== true) {
        throw Error("It is Not an array");
    }


    if (firstInterval === secondInterval && firstInterval >= array[0] && array.length >= secondInterval) {
        newArray.push(firstInterval);
        return newArray;

    }

    if (Number.isInteger(firstInterval) !== true || Number.isInteger(secondInterval) !== true) {
        throw Error("Your Intervals should be numbers");
    }

    if (firstInterval < secondInterval) {
        for (let i = 0; i <= array.length; i++) {
            if (firstInterval <= array[i] && array[i] <= secondInterval) {

                newArray.push(array[i]);
            }

        }
    }

    if (secondInterval < firstInterval) {

        for (let i = 0; i <= array.length; i++) {
            if (secondInterval <= array[i] && array[i] <= firstInterval) {

                newArray.push(array[i]);
            }

        }
    }

    return newArray;

}


/// THRID TASK

let myIterable = {
    from: 1,
    to: 5
};

myIterable[Symbol.iterator] = function () {

    if (this.to < this.from) {
        throw Error("ERROR TO < FROM");
    }

    if ('from' in myIterable !== true || 'to' in myIterable !== true) {

        throw Error("Can't Find from or to");

    }

    if (Number.isInteger(this.to) !== true || Number.isInteger(this.from) !== true) {

        throw Error("FROM OR TO IS NOT A NUMBER");
    }

    return {
        current: this.from,
        last: this.to,

        next() {

            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

