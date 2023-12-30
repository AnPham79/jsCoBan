var courses = [
    {
        id: 1,
        name: 'javascript',
        price: 200
    },
    {
        id: 2,
        name: 'PHP',
        price: 300
    },
    {
        id: 3,
        name: 'HTML & CSS',
        price: 200
    },
    {
        id: 4,
        name: 'PHP',
        price: 300
    }
]

// nếu k có reduce thì ta dùng vòng lặp

// biến lưu trữ
// var totalPrice = 0;

// lặp qa các phần tử
// for (var course of courses) {
    // thực hiên lưu trữ
//     totalPrice += course.price;
// }

// console.log(totalPrice);

// ======================== reduce =================
// biến lưu trữ
// thực hiện
// gán giá trị i ban đầu = 0
// accumulator Giá trị tích trữ từ các lần chạy trước của hàm = giá trị khởi tạo ban đầu bằng 0;
// khi chạy lần đầu tiên nó sẽ luôn in ra giá trị khởi tạo đã gán
// currentValue: Giá trị của phần tử hiện tại trong mảng courses đang được xử lý
// nói chung là nó sẽ in ra cái object
// currentIndex in ra cái vị trí của object đó vd object 1 thì in ra currentIndex = 0
// originalValue giá trị ban đầu đc truyền vào = với courses

var i = 0;

function priceHandler(accumulator, currentValue, currentIndex, originalValue) {
    i++;

    var total = accumulator + currentValue.price;

    console.table( {
        'lượt chạy ' : i,
        'Biến tích trữ': accumulator,
        'giá khóa học ' : currentValue.price,
        'tích trữ được ' : total
    })

    return total;
}

var totalPrice = courses.reduce(priceHandler, 0)

console.log(totalPrice);

// tóm tắt lại ==================================================================

function priceHandler(accumulator, currentValue) {
    return accumulator + currentValue.price
}

var totalPrice = courses.reduce(priceHandler, 0)

console.log(totalPrice);

//=================================== ví dụ ============================================

// tính tổng số huy chương ----------------------------------------------------------------

var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(arr) {
    return arr.reduce((acc, curva) => (acc + curva.gold), 0)
}

// Expected results:
console.log(getTotalGold(sports))