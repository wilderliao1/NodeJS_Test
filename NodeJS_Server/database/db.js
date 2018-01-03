var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/blog_db";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	console.log("数据库已创建");
	var dbase = db.db("blog_db");
	dbase.createCollection("blog_user", function (err,res){
		if (err) throw err;
		console.log("创建集合");
		db.close();
	})
})
