const User = require("../models/user.model.js");

// 새 객체 생성
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    };

    const user = new User({
        id: req.body.id,
        password: req.body.password,
        username: req.body.username,
        image: req.body.image,
        age: req.body.age,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        height: req.body.height,
        weight: req.body.weight
    });


    // 데이터베이스에 저장
    User.create(user, (err, data) => {
        res.send('${id},${password}');
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating th User."
            });
        };
    })
};

// 전체 조회 
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        else res.send(data);
    });
};

// id로 조회
exports.findOne = (req, res) => {

    User.findByID(req.params.userID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({  
                    message: `Not found user with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.userId
                });
            }
        } else res.send(data);
    });
};

// id로 갱신
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    User.updateById(
        req.params.userId,
        new User(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found User with id ${req.params.userId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating User with id " + req.params.userId
                    });
                }
            } else res.send(data);
        }
    );
};

// id로 삭제
exports.delete = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete User with id " + req.params.userId
                });
            }
        } else res.send({ message: `User was deleted successfully!` });
    });
};

// 전체 삭제
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all user."
            });
        else res.send({ message: `All User were deleted successfully!` });
    });
};