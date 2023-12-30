Array.prototype.filterPro = function(callback) {
    var newArray = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                newArray.push(this[index]);
            }
        }
    }
    return newArray;
};

var courses = [
    {
        id: 1,
        name: 'js'
    },
    {
        id: 2,
        name: 'php'
    },
    {
        id: 3,
        name: 'ruby'
    },
    {
        id: 4,
        name: 'node js'
    },{
        id: 5,
        name: 'js'
    }
];

var filteredCourses = courses.filterPro(function(course, index, array) {
    return course.name === 'js';
});

console.log(filteredCourses);
