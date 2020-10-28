let sql = require('mssql');
const config = require('../models/db')

const productCreate = (req, res) => {
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

const productList = (req, res) => {
    sql.connect(config).then(() => {
        return sql.query("SELECT * FROM Producto");
    }).then(result => {
        res
            .status(200).send(result.recordset);

    }).catch(err => {
        res
            .status(404).send(err)
    })
}

const productRead = (req, res) => {
    
}

module.exports = {
    productCreate,
    productList,
    productRead
}