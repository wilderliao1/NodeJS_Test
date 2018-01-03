//演示同步读取文件操作
// var fs = require("fs");
// var data = fs.readFileSync("input.txt");
// console.log(data.toString());
// console.log("读取文件成功");

//演示异步读取文件

var fs = require("fs");
fs.readFile("input.txt", function (err,data){
	if (err) {
		console.log(err);
	} else {
		console.log(data.toString());
	}
	console.log("2、异步读取文件结束");
});
console.log("1、开始异步读取文件");