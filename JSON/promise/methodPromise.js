// 1 Promise.resolve
// 2 Promise.reject
// 3 Promise.all

// var Promise = Promise.resolve('không có lỗi'); // đoạn mã luôn trả về đúng
// var Promise = Promise.reject('có lỗi'); // đoạn này luôn trả về lỗi

// var Promise = new Promise(function (resolve, reject) {
//     reject('error');
// })

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([1])
    }, 1000)
})

var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([2, 4, 6, 7])
    }, 2000)
})

Promise.all([promise1, promise2])
    .then(function ([result1, result2]) {
        console.log(result1.concat(result2))
    })
    .catch(function (err) {
        console.error('Error:', err);
    });
