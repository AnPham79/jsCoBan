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

function courseHandles(course) {
    // console.log(course);
    return {
        id : course.id,
        name : `Khóa học ${course.name}`,
        price : `Giá khóa ${course.price} `
    }
}

var newCourses = courses.map(courseHandles);

console.log(newCourses);