var net = require("net");
var chat = net.createServer();
var clientList = [];
chat.on('error',function (err){
	console.log("产生错误了"+err);
});


chat.on('connection',function (client){

	client.on('end', function() {
        broadcast('hi,'+ client.name +' quit!\r\n',client);
        clientList.splice(clientList.indexOf(client),1);//去掉当前的客户端从List中
    });

	client.name = client.remoteAddress+':'+client.remotePort;
	broadcast('hi,'+ client.name +' join!\r\n',client);
	client.write('hi,'+ client.name +'!\r\n');
	clientList.push(client);
	
	client.on("data",function (data){
		broadcast('\r\n'+client.name+' say:'+ data+'\r\n',client);
	});

});

function broadcast(message, client) {
    var cleanup=[];
    for(var i= 0,len=clientList.length;i<len;i++){
        if(client!==clientList[i]){
            if(clientList[i].writable){
                clientList[i].write(message);
            }else{
                cleanup.push(clientList[i]);
                clientList[i].destroy();
            }
        }
    }

    for(var i= 0,len=cleanup.length;i<len;i++){
        clientList.splice(clientList.indexOf(cleanup[i]),1);//删掉当前的这个
    }
}
chat.listen(9001);
