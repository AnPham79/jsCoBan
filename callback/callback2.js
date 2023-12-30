// là hàm
// truyền qua đối số
// được gọi lại trong hàm truyền đối số

// =======================map ===================

Array.prototype.mapLmao = function(callbacks) {
    var arrayLength = this.length;

    for (var i = 0; i < arrayLength; i++) {
       $result = callbacks(this[i], i);
       console.log($result);
    }
}

var courses = ['js', 'php', 'java', 'mongoDB'];

courses.mapLmao(function(course, index) {
    return `<h2>${course}</h2>`;
})

// ================================= reduce ================================

var numbers = [1, 2, 3, 4, 5];

Array.prototype.reducePro = function(callback, results) {
    var arrayLength = this.length

    for (var i = 0; i < arrayLength; i++) {
        results = callback(results, this[i], i , this)
    }

    return results;
}


var results = numbers.reducePro(function(acculate, currentValue, currentValueIndex, originalValue) {
    return acculate  + currentValue;
}, 20)

console.log(results);

// ==================================== filter =================================

var coursesFilter = [
    {
        id : 1,
        name : 'js'
    },
    {
        id : 2,
        name : 'php'
    },
    {
        id : 3,
        name : 'ruby'
    },
    {
        id : 4,
        name : 'node js'
    }
];

Array.prototype.filterPro = function(callback) {
    var arrayLength = this.length;
    var filterResultArray = [];

    for (var i = 0; i < arrayLength; i++) {
        if (callback(this[i], i)) {
            filterResultArray.push(this[i]);
        }
    }

    return filterResultArray;
}

var filterResult = coursesFilter.filterPro(function(course, index) {
    return course.name == 'js';
})

console.log(filterResult);

// ==================================== every ======================================
var coursesEvery = [
    {
        id : 1,
        name : 'js',
        price : 200
    },
    {
        id : 2,
        name : 'php',
        price : 200
    },
    {
        id : 3,
        name : 'ruby',
        price : 200
    },
    {
        id : 4,
        name : 'node js',
        price : 200
    }
];

Array.prototype.everyPro = function(callback) {
    var arrayLength = this.length;

    for (var i = 0; i < arrayLength; i++) {
        resultEvery = callback(this[i], i);
        console.log(this[i].name);
    }

    return resultEvery;
}

var resultEvery = coursesEvery.everyPro(function(course, index) {
    return course.price === 200;
})

console.log(resultEvery);


