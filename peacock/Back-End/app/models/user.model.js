const sql = require("./db.js");


// ������ 
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

// user Ʃ�� �߰� 
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

// user id�� ��ȸ
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

        // ����� ���� �� 
        result({ kind: "not_found" }, null);
    });
};

// user ��ü ��ȸ
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

// user id�� ����
User.updateByID = (id, customer, result) => {
    sql.query('UPDATE user SET password =?, username =?, image=?, age =?, phonenumber=?, email = ?, height = ?, weight = ? WHERE id = ? ',
        [user.password, user.username, user.image, user.age, user.phonenumber, user.email, user.height, user.weight, user.id], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.affectedRows == 0) {
                // id ����� ���� �� 
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("update customer: ", { id: id, ...customer });
            result(null, { id: id, ...customer });
        });
};

// user id�� ����
User.remove = (id, result) => {
    sql.query('DELETE FROM user WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            // id ����� ���� �� 
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted customer with id: ", id);
        result(null, res);
    });
};

// user ��ü ����
User.removeAll = result => {
    sql.query('DELETE FROM user', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            // id ����� ���� �� 
            result({ kind: "not_found" }, null);
            return;
        }

        console.log('deleted ${res.affectedRows} user');
        result(null, res);
    });
};

module.exports = User;