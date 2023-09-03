const express = require("express");
const fs = require("fs");
const path = require("path");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/0/board"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
    },
});
const upload = multer({ storage: storage });
const cors = require("cors");

const app = express();

const publicDirectoryPath = path.join(__dirname, "");

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: publicDirectoryPath });
});

app.post("/upload", upload.single("userfile"), function (req, res) {
    res.send("Uploaded! : " + req.file); // object를 리턴함
    console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
});

app.use(cors());
app.use("/uploads/0/board", express.static("public/0/board"));

app.listen(3500, () => console.log(`Server started on port ${3500}`));
