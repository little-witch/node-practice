var net = require("net");
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(8431,'localhost',function (){
	console.log("已经成功链接到服务器！");
	client.write("你好");
});
client.on('data',function (data){
	console.log("已经接收"+data);
})