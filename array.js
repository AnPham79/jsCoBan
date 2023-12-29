var courses = [
    {
        id : 1,
        name : 'javascript',
        price : 200
    },
    {
        id : 2,
        name : 'PHP',
        price : 300
    },
    {
        id : 3,
        name : 'HTML & CSS',
        price : 200
    },
    {
        id : 4,
        name : 'PHP',
        price : 300
    }
]

// ======================== foreach ========================
courses.forEach(function(course, index) {
    console.log(index, course);
}); // call back

// ======================== every ========================
// tất cả phần tử trong mảng phải thỏa mãn 1 đk gì đó

var isFree = courses.every(function(course, index) {
    console.log(index);
    return course.price === 200;
});

console.log(isFree);

// ======================== some ========================
// 1 ông trong mảng thỏa mãn đk thì nó dừng lại vòng kiểm tra ngay => true
var isFree = courses.some(function(course, index) {
    console.log(index);
    return course.price === 200;
});

console.log(isFree);

// ======================== find ========================
// tìm và chỉ luôn trả về 1 đối tượng thôi
var lookFor = courses.find(function(course, index) {
    return course.name === ('PHP');
});

console.log(lookFor);

// ======================== filter ========================
// tìm và trả về tất đối tượng có tên như tìm
var lookFor = courses.filter(function(course, index) {
    return course.name === ('PHP');
});

console.log(lookFor);

// ======================== vidu ==========================
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(sports) {
    return sports.filter(sport => sport.like > 5);
}

console.log(getMostFavoriteSport(sports));