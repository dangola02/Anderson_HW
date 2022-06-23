// ////FIRST TASK

Array.prototype.myFilter = function (callbackFunc, thisArg) {

    let context = this;

    let arrayToOject = Object(this);

    if (this == null) {
        throw new Error("Array is undefined or null");
    }

    if (typeof callbackFunc !== "function") {
        throw new Error("Don't have any callback function");
    }

    if (arguments.length > 1) {
        context = thisArg;
    }

    let len = arrayToOject.length;

    let newArray = [];

    for (let i = 0; i < len; i++) {

        if (i in arrayToOject) {
            let current = this[i];

            if (callbackFunc.call(context, current, i, arrayToOject)) {
                newArray.push(current);
            }
        }
    }

    return newArray;
};

// ///SECOND TASK

function createDebounceFunction(callbackFunc, delay) {

    let timeout;

    return function () {
        function funcCall() {
            callbackFunc.apply(this)
        }

        clearTimeout(timeout);

        timeout = setTimeout(funcCall, delay)

    }

}
