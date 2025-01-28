var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');


// 全てのドキュメントを取得
const note = await notes.find({}).toArray();

res.json(note);
})

module.exports = router;

// var express = require("express");
// var router = express.Router();
// const cors = require("cors"); // CORSミドルウェアを適用

// // 接続情報を設定
// const { MongoClient } = require("mongodb");
// const url ="mongodb+srv://2401320003hv7:7pLaGx3ds879esor@test.jf3zr.mongodb.net/?retryWrites=true&w=majority&appName=test";
// const client = new MongoClient(url);

// // CORSミドルウェアを使用
// router.use(cors());

// router.get("/", async (req, res) => {
//     // データベース、コレクションを確定
//     const database = client.db("notes");
//     const notes = database.collection("notes");

//     // すべてのドキュメントを取得
//     const note = await notes.find().toArray();

//     res.json(note);
// });

// module.exports = router;
