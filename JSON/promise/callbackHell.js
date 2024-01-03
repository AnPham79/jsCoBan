function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// đây là cách giải quyết khi sử dụng promise

function noHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    })
}

noHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1)
    })