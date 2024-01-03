//Promise

//sync : đồng bộ (thằng nào viết trước thằng đó chạy trước)
//async : bất đồng bộ

// pain : nổi đâu

//- lý thuyết và cách thức hoạt động
//- thực hành và ví dụ

// những thằng nhìn zô là biết bất đồng bộ
// setTimeout, setInterval, fetch, XMLHttpRequest, file reading js, ...
// request animation

setTimeout(function() {
    console.log(1)
}, 1000);

console.log(2)

setTimeout(function() {
    console.log('Dòng này sẽ in ra sau')
}, 0)
// setTimeout là tác vụ bất động bộ (async)

console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)
