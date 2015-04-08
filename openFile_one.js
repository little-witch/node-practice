var fs=require('fs');
fs.open("./test.txt",'r',function (err,fd){//fd代表打开文件时返回的文件描述 一个汉字三个字符 回车也算三个字符
	var buf = new Buffer(255);
	fs.read(fd,buf,0,9,9,function (err,bytesRead,buffer){
		if(err){
			console.log(err);
		}
		console.log(buffer.slice(0,bytesRead).toString());
	});
});