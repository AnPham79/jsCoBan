Array.prototype.forEachPro = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};

var courses = new Array();

courses.push('js', 'javascript', 'PHP', 'JSON');

courses.forEachPro(function(course, index, array) {
    console.log(course, index, array);
});
