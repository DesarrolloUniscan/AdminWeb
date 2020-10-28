 
let sql = require('mssql');
//const config = require('../models/db')

const config = {
    user: 'HR1011',
    password: 'Bmet$1011',
    server: '192.168.0.113',
    port: 1433,
    database: 'VerificadorPrecios',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    parseJSON: true,
    dialect:",ssql",
    dialectOptiond:"SQLEXPRESS"
}



const userCreate = (req, res) =>{
    sql.connect(config).then(()=>{
        return sql.query(`INSERT INTO ADMIN VALUES('${req.body.AD_usuario}', '${req.body.AD_password}')`);
    }).then(result => {
        res
            .status(200)
            .json(result)
    }).catch(err =>{
        res
            .status(400)
            .json(err)
    })
}

const userList = (req, res) =>{
    sql.connect(config).then(()=>{
        return sql.query("SELECT * FROM ADMIN");
    }).then(result=>{
        res
            .status(200).send(result.recordset);
            
    }).catch(err=>{
        res
            .status(404).send(err)
    })
}

const userRead =(req, res)=> {
    sql.connect(config).then(()=>{
        console.log(req.params.usuarioid)
        return sql.query(`SELECT AD_usuario, AD_password FROM ADMIN WHERE AD_usuario='${req.params.usuarioid}'`);
    }).then(result=>{
        res
            .status(200)
            .json(result.recordset);
            
    }).catch(err=>{
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