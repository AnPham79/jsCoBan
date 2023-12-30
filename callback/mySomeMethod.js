Array.prototype.ThreeSome = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                return true;
            }
        }
    }
    return false;
};

var courses = [
    {
        id: 1,
        name: 'js',
        isFinish: true
    },
    {
        id: 2,
        name: 'php',
        isFinish: false
    },
    {
        id: 3,
        name: 'ruby',
        isFinish: true
    },
    {
        id: 4,
        name: 'node js',
        isFinish: false
    }
];

var result = courses.ThreeSome(function (course) {
    return course.isFinish;
});

console.log(result);
