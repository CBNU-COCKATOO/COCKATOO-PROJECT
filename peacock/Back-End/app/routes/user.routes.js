module.exports = app => {
    const user = require("../controller/user.controller.js");

    // 튜플 생성
    app.post("/user", user.create);

    // 전체 조회 
    app.get("/user", user.findAll);

    // id로 조회
    app.get("/user/:userId", user.findOne);

    // id로 수정
    app.put("/user/:userId", user.update);

    // id로 삭제
    app.delete("/user/:userId", user.delete);

    // 전체 삭제
    app.delete("/user", user.deleteAll);

};