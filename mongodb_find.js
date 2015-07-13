var mongo = require('mongodb');
var host = "localhost";
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,'27017',{auto_reconnect:true}),{safe:true});
db.open(function(err,db){
	db.collection('users',function(err,collect){
		// collect.insert({"name":"lingjuan.guan","age":"28"});//插入


		// collect.find({"name":"guanlingjuan","age":{$in:['25','26']}}).toArray(function(err,docs){
		// 	console.log(docs);
		// 	db.close();
		// });//与的查询


		collect.find({"name":"lingjuan.guan",$or:[{"age":"26"},{"age":{$lt:"26"}}]}).toArray(function(err,docs){
			console.log(docs);
			db.close();　//或的查询
		});


	});
});