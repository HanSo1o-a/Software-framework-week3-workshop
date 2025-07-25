const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

// 设置 www 为静态文件夹
app.use(express.static(__dirname + '/www'));

// 允许接收 JSON 与表单格式数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 加载自定义路由
require('./routes/homeroute').route(app, path);

// 启动服务器
let server = http.listen(3000, function () {
  console.log("Server running on http://localhost:3000");
});
