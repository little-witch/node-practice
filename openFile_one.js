var fs=require('fs');
fs.open("./test.txt",'r',function (err,fd){//fd代表打开文件时返回的文件描述
	var buf = new Buffer(255);
	fs.read(fd,buf,0,9,3,function (err,bytesRead,buffer){
		if(err){
			console.log(err);
		}
		console.log(buffer.slice(0,bytesRead).toString());
	});
});