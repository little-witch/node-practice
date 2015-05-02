var net = require("net");
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(8431,'localhost',function (){
	console.log("已经成功链接到服务器！");
	
});
client.on('data',function (data){
	console.log("接收信息"+data);
	read("回复",function (value){
		client.write(value);
	})
})


function read(prompt, callback) {
    process.stdout.write(prompt + ':');
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', function(chunk) {
        // process.stdin.pause();
        callback(chunk);
    });
}
process.stdin.on('end', function() {
  process.stdout.write('end');
});
