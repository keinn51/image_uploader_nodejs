const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const path = require("path");

const app = express();

const publicDirectoryPath = path.join(__dirname, "");

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: publicDirectoryPath });
});

app.post("/upload", upload.single("userfile"), function (req, res) {
    res.send("Uploaded! : " + req.file); // object를 리턴함
    console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
});

app.listen(3500, () => console.log(`Server started on port ${3500}`));
