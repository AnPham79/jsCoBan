// đợi thằng này làm rồi thằng kia mới chạy

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}


sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    })

    function taskAsynchron(a, b) {
        return new Promise(function(resolve, reject) {
            var a = 2;
            var b = 3;
            var result1 = a + b;
            resolve(result1);
        })
    }

    taskAsynchron()
    .then(function(result1) {
        return new Promise(function(resolve, reject) {
            if (result1 === 5) {
                resolve('Kết quả đúng');
            } else {
                reject('Kết quả sai');
            }
        });
    })
    .then(function(result2) {
        console.log(result2);
        return result2;
    })
    .catch(function(error) {
        console.log(error);
    });
