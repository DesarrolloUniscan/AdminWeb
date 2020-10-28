
let sql = require('mssql');
const config = require('../models/db')

const userCreate = (req, res) => {
    sql.connect(config).then(() => {
        return sql.query(`INSERT INTO ADMIN VALUES('${req.body.AD_usuario}', '${req.body.AD_password}')`);
    }).then(result => {
        res
            .status(200)
            .json(result)
    }).catch(err => {
        res
            .status(400)
            .json(err)
    })
}

const userList = (req, res) => {
    sql.connect(config).then(() => {
        return sql.query("SELECT * FROM ADMIN");
    }).then(result => {
        res
            .status(200).send(result.recordset);

    }).catch(err => {
        res
            .status(404).send(err)
    })
}

const userRead = (req, res) => {
    sql.connect(config).then(() => {
        console.log(req.params.usuarioid)
        return sql.query(`SELECT AD_usuario, AD_password FROM ADMIN WHERE AD_usuario='${req.params.usuarioid}'`);
    }).then(result => {
        if (result.recordset != "") {
            console.log(result.recordset[0].AD_password)
            if (result.recordset[0].AD_password == req.params.password) {
                res
                    .status(200)
                    .json(result.recordset);
            }else{
                res
                    .status(400)
                    .json("Contraseña Incorrecta")
            }

        } else {
            res
                .status(404)
                .json("Usuario no encontrado")
        }


    }).catch(err => {
        res
            .status(400)
            .json(err)
    })
}


module.exports = {
    userCreate,
    userList,
    userRead
}