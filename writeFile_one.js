var fs=require('fs');
var opt={
	flag:"a"
};
fs.writeFile("./test.txt","\r\n这是新插入的aa。\r\n这是另一个新加入的行",opt,function (err){//此处如果写一个无效地址 比如/test.test 毫无任何反映， 默认使用utf8插入
																					//	如果使第一个参数为空，err才不为空，才会提示写入出错，
																					//如果给一个有效地址但是写的不对，则会创建个新文件  这里的flag默认是m 有就写没有就新建
	if(err){
		console.log("写入出错");
		console.log(err);
	}else{
		console.log(err);
		console.log("写入成功");
	}
});
fs.appendFile("./test.txt","\r\n新的。\r\n新的追加falg为a的追加",function (err){//这里的flag 默认就是追加  a
	if(err){
		console.log("写入出错");
		console.log(err);
	}else{
		console.log("写入成功");
	}
});
