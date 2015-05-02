// process.stdin.on('end', function() {
//   process.stdout.write('end');
// });


// gets 函数的简单实现
// function gets(cb){
//   process.stdin.resume();
//   process.stdin.setEncoding('utf8');

//   process.stdin.on('data', function(chunk) {

//      process.stdin.pause();

//      cb(chunk);
//   });
// }

// gets(function(reuslt){
//   console.log(reuslt);
// });

function read(prompt, callback) {
    process.stdout.write(prompt + ':');
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', function(chunk) {
        process.stdin.pause();
        callback(chunk);
    });
}
read("请说",function (value){
	console.log(value);
})