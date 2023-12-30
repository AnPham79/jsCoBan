// là hàm (function) được truyền qua đối số
// khi gọi hàm khác

// 1 là hàm
// 2 được truyền qua đối số

function myFunction(params) {
    if (typeof params === 'function') {
        console.log('phạm an học call back');
    }
}

function callbacks(value) {
    console.log("Giá trị :" , value);
}

myFunction(callbacks);