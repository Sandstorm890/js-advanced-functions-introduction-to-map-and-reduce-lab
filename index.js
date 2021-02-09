function mapToNegativize(arr) {
    let newArray = []
    for (let e of arr) {
        newArray.push(-e)
    }
    return newArray
};

function mapToNoChange(arr) {
    return arr
};

function mapToDouble(arr) {
    let newArray = []
    for (let e of arr) {
        newArray.push(e*2)
    }
    return newArray
};

function mapToSquare(arr) {
    let newArray = []
    for (let e of arr) {
        newArray.push(e*e)
    }
    return newArray
};

function reduceToTotal(arr, start=0) {
    let x = start
    for (let e of arr) {
        x += e
    }
    return x
};

function reduceToAllTrue(arr) {
    for (let e of arr) {
        if (e == false) {
            return false
        }
    }
    return true
};

function reduceToAnyTrue(arr) {
    for (let e of arr) {
        if (e == true) {
            return true
        }
    }
    return false
};