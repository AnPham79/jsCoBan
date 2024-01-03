// resolve : không lỗi
// reject : có lỗi

// 1: chờ thành công hay thất bại : pending
// 2: fullfilled thành công
// 3: rejected thất bại

var Promise = new Promise(function (resolve, reject) {
    // logic
    // resolve : thành công
    // reject : thất bại
    // Fake call API
    reject(error);
} )

Promise
    .then(function () {
        console.log('không có lỗi');
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function ()  {
        console.log('hoàn thành');
    })

// lí thuyết: promise là 1 khái niệm sinh ra để sử lí các thao tác bất đồng bộ
// trước khi có promis thì ta sử dụng callback sinh ra callback hell

// để tạo ra promise thì tạo ra từ khóa new Promise và truyền vào constructor 
// của nó excult function thì trong excult function có 2 tham số là resolve, reject
// resolve khi thao tác thành công và reject khi thất bại.
// ta sẽ sử dụng 2 phương thức then và catch khi dùng promise
// sẽ lọt vào then khi đúng còn catch khi sai.

// sử dụng promise khi xuất hiện những thao tác bất đồng bộ.