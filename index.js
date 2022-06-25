///////////TASK 1



const concatStrings = function (arg, separator) {

    let newStr = arg;

    let newSep = "";

    if (typeof (separator) === typeof ("hello")) {

        newSep = separator;
    }

    if (typeof (arg) !== typeof ("hello")) {

        return "";
    }

    const concat = function (arg2, separator2) {

        if (typeof (arg2) === typeof ("hello")) {
            newStr = `${newStr}${newSep}${arg2}`;
        } else {
            return newStr;
        }

        if (typeof (separator2) === typeof ("hello")) {
            newSep = separator2;
        }

        return concat;

    }

    return concat;
}