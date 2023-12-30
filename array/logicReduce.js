/// reduce nhận 2 đối số ( call back, initalValue: giá trị khởi tạo)

// nguyên lí hoạt động k có giá trị khởi tạo
// accument sẽ là 1 đầu của mảng, currentValue sẽ là 2 return 1 + 2 = 3
// lần lặp tiếp theo accument = 3 + curentvalue = 3

// ============================= làm trường hợp có truyền initial Value

// Array.prototype.reduce2 = function(callback, result) {
//     for ( var i = 0; i < this.length; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }

// const numbers = [1,2,3,4,5,6,6,7,7];

// const result = numbers.reduce(function (accument, currentValue, currentIndex, originalValue) {
//     return accument + currentValue;
// });

// console.log(result);

// ======================== trường hợp k truyền =================================
// Array.prototype là đối tượng cung cấp sẵn
// argurment là 1 đối tượng đặt biệt trong mỗi hàm chứa tất cả các đối số của hàm đó
// trong này nếu như ta truyền đối số thì có nghĩa là function có cả callback và giá trị khởi tạo là sẽ = 2
// nên muốn làm trường hợp k truyền thì phải làm điều kiện kiểm tra argument.lenght(kiểm tra độ dài có < 2 không)
// < 2 chứng tỏ k có init mà chỉ có callback
Array.prototype.reduce2 = function(callback, result) {
    var i = 0
    if (arguments.length < 2) {
        result = this[0];
    }
    for(; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

const numbers = [1,2,3,4,5,6];

const result = numbers.reduce(function (accumulate, currentValue, currentIndex, originalValue) {
    // console.log(accumulate, currentValue, currentIndex, originalValue)
    return accumulate + currentValue;
});

console.log(result);

// ======================== vidu =================================
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

function arrToObj(arr) {
    return arr.reduce(function(accumulate, currentValue) {
        accumulate[currentValue[0]]=currentValue[1]
        return accumulate;
    }, {})
}

console.log(arrToObj(arr));
