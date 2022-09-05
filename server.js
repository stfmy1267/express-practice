
const express = require('express');
const app = express();
const PORT = 8080;
require

const userRouter = require('./routes/user');

// app.use(mylogger)

app.use(express.static('src'))
app.set('view engine','ejs');

app.get("/",(req,res) => {
  // console.log("Hello express");
  // res.send("<h1>こんにちわ</h1>");
  // res.sendStatus(404)
  // res.sendStatus(500).json({'msg':'エラーです'});
  // res.render("index",{text:"Node.js exsprss"})
  // res.sendFile(__dirname + "/index.html")
})

app.get("/user", (req,res) => {
  res.send('ユーザです')
})

app.get("/user/info", (req,res) => {
  res.send('ユーザ情報です')
})

// ルーティング
app.use("/user",userRouter)


// ミドルウェア

app.listen(PORT, ()=> console.log("サーバー起動") )
