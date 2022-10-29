const sql = require("./db.js");


// 생성자 
const User = function (user) {
    this.id = user.id;
    this.password = user.password;
    this.username = user.username;
    this.image = user.image;
    this.age = user.age;
    this.phonenumber = user.phonenumber;
    this.email = user.email;
    this.height = user.height;
    this.weight = user.weight;
};

// user 튜플 추가 
User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created user: ", { id: res.inseertId, ...newUser });
        result(null, { id: res.inseertId, ...newUser });
    });
};

// user id로 조회
User.findByID = (userID, result) => {
    sql.query('SELECT * FROM user WHERE id = ?', userID, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({ kind: "not_found" }, null);
    });
};

// user 전체 조회
User.getAll = result => {
    sql.query('SELECT * FROM user', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("user: ", res);
        result(null, res);
    });
};

// user id로 수정
User.updateByID = (id, customer, result) => {
    sql.query('UPDATE user SET password =?, username =?, image=?, age =?, phonenumber=?, email = ?, height = ?, weight = ? WHERE id = ? ',
        [user.password, user.username, user.image, user.age, user.phonenumber, user.email, user.height, user.weight, user.id], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.affectedRows == 0) {
                // id 결과가 없을 시 
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("update customer: ", { id: id, ...customer });
            result(null, { id: id, ...customer });
        });
};

// user id로 삭제
User.remove = (id, result) => {
    sql.query('DELETE FROM user WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            // id 결과가 없을 시 
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted customer with id: ", id);
        result(null, res);
    });
};

// user 전체 삭제
User.removeAll = result => {
    sql.query('DELETE FROM user', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            // id 결과가 없을 시 
            result({ kind: "not_found" }, null);
            return;
        }

        console.log('deleted ${res.affectedRows} user');
        result(null, res);
    });
};

module.exports = User;