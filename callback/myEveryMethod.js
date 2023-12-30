Array.prototype.everyPro = function(callbacks) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callbacks(this[index], index, this);
            if (!result) {
                return false;
                break;
            }
        }
    } 
    return true;
}



var courses = [
    {
        id: 1,
        name: 'js',
        isFinish: true,
        price : 200
    },
    {
        id: 2,
        name: 'php',
        isFinish: false,
        price : 200
    },
    {
        id: 3,
        name: 'ruby',
        isFinish: true,
        price : 200
    },
    {
        id: 4,
        name: 'node js',
        isFinish: false,
        price : 200
    }
];

var result = courses.everyPro(function (course, index, array) {
    return course.price > 188
})

console.log(result);