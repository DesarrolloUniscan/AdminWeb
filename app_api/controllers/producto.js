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

const productUpdate = (req, res) => {
    sql.connect(config).then(() => {
        return sql.query(`UPDATE Producto SET PD_nombre = '${req.params.nombre}', PD_descripcion = '${req.params.descripcion}', 
                            PD_precio = '${req.params.precio}' WHERE PD_codigo = '${req.params.codigo}'`);
    }).then(result => {
        if(result.rowsAffected == 0){
            res
                .status(400)
                .json("Error del sistema");
        }else{
            res
                .status(200).send(result.recordset);
        }
       

    }).catch(err => {
        res
            .status(404).send(err)
    })
}

const productDelete = (req, res) => {
    console.log(req.params.codigo);
    sql.connect(config).then(() => {
        return sql.query(`DELETE FROM Producto WHERE PD_codigo = '${req.params.codigo}'`);
    }).then(result => {
        if(result.rowsAffected == 0){
            res
                .status(400)
                .json("Error del sistema");
        }else{
            res
                .status(204).send(null);
        }
       

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
    productRead,
    productUpdate,
    productDelete
}