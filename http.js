var http = require("http");
var fs = require("fs");
var server = http.createServer( function ( req, res ) {
	if(req.url !== "/favicon.ico") {

		req.on( "data", function ( data ) {
			console.log('服务器端接到数据：');
			console.log(decodeURIComponent(data));
		});

		req.on("end", function(){
			console.log("接受数据结束！");
		});

		res.write("welcome");
	}
	res.end();
}).listen(8222,'127.0.0.1');

server.on('listening', function (){
	console.log("开始监听服务");
});
server.on("close", function (){
	console.log("服务已经关闭");
});
server.on("connection", function (socket){
	console.log("客户端建立连接");  //一旦使用浏览器访问localhost:8243之后，这里会打印两次，因为一次是请求页面，一次是请求页面的ico的。
});
server.setTimeout(60*1000);         //超时处理
server.on("timeout", function (socket){
	console.log("超时了1");
});