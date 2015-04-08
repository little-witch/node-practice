var fs=require('fs');
fs.readFile("./test.txt",function (err,data){//使用/开头的形式也不行 那不是相对路径
	if(err){
		console.log("读取文件有错");
	}else{
		console.log(data);//这里打印出来的是使用buffer存储的二进制文件
	}
});
fs.readFile("./a.txt",'utf8',function (err,data){
	if(err){
		console.log(err);
		console.log("读取文件有错");
	}else{
		console.log(data.toString());//这里增加了一个参数option 要求使用utf-8形式输出 所以这里输出的是汉字
	}
});