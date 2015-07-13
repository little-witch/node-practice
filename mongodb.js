var mongo = require('mongodb');
var host = "localhost";
// var port = mongo.Connection.DEFAULT_PORT;//获取数据库运行端口号
var server = new mongo.Server(host,'27017',{auto_reconnect:true});
var db = new mongo.Db('node-mongo-examples',server,{safe:true});
 db.open(function(err,db){
	if(err){
		throw err;
	}else{
		console.log("成功连接数据库");
		db.collection('users',function(err,collect){
			collect.insert({"name":"lingjuan.guan","age":"23"},function(err,doc){
				if(err) {
					throw err;
				}else{
					console.log(doc.ops);
					db.close(false);
				}
				
			});
		});
	}
});
db.once('close',function(err,dbs){//db.close(false);的时候使用
	if(err){
		throw err;
	}else{
		db.open(function(err,db){
			db.collection('users',function(err,collect){
				collect.insert({"test":true},function(err,doc){
					if(err){
						throw err;
					}else{
						console.log(doc.ops);
			 			db.close(true);
					}
				})
			});
		});
	}
})