var mongo = require('mongodb');
var util = require('util');
var host = "localhost";
var db = new mongo.Db('node-mongo-examples',new mongo.Server(host,'27017',{auto_reconnect:true}),{safe:true});
db.open(function(err,db){
	db.collection('users',function(err,collect){
		var food1 = {"type":"food","price":"11"};
		var food2 = {"type":"food","price":"10"};
		var food3 = {"type":"food","price":"9"};
		var foods = [food1,food2,food3];
		var stroy1={"name":"stroy1","goods":foods};

		var book1 = {"type":"book","price":"111"};
		var book2 = {"type":"book","price":"101"};
		var book3 = {"type":"book","price":"91"};
		var books = [book1,book2,book3];
		var stroy2={"name":"stroy2","goods":books};
		var arr = [stroy1,stroy2];
		 collect.insert(arr);//插入


		// collect.find({"name":"guanlingjuan","age":{$in:['25','26']}}).toArray(function(err,docs){
		// 	console.log(docs);
		// 	db.close();
		// });//与的查询


		collect.find({'goods.0.type':"book"}).toArray(function(err,docs){
			console.log(util.inspect(docs,{depth:3}));
			db.close();　//或的查询
		});


	});
});