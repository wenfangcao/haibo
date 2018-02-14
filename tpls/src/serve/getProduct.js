var MongoClient = require("../../node_modules/mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/hiboy";

const express = require("../../node_modules/express");
var app = express();
app.listen(3111);
//跨域设置
var cors = require("cors");
var corsOptions = {
    origin:'*',
    optionsSuccessStatus:200
}
// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Origin", "*");
//     if (req.method == 'OPTIONS') {
//         /*让options请求快速返回*/
//         res.send(200);
//     }
//     else {
//         next();
//     }
// });

//app.get("/pr",(req,res)=>{
	MongoClient.connect(url,(err,db)=>{
		if(err) throw err;
		var thisBase = db.db("hiboy");
		var collection = thisBase.collection("product");
		collection.find().toArray((err,result)=>{
			if(err) throw err;
		    res.json(result);
			console.log(1);
			db.close();
		});
	});
//});
