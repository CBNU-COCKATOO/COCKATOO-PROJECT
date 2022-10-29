const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//app.use(express.json());
//// express에는 json 데이터를 파싱하는 모듈이 내장되어있다.
//// 하지만 json만 되고 x-www-form-urlencoded를 파싱하기 위해서 아래를 확장해야 한다.
//app.use(express.urlencoded({
//    extended: true
//}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
    <button onClick={this.sendEmail}> 전송 </button>
});


require("./app/routes/user.routes.js")(app);

// 포트넘버 설정
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
})
