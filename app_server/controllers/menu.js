const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
}

const menu = (req, res) =>{

    const path = `/api/producto`;
    
        const requestOptions = {
            url: `${apiOptions.server}${path}`,
            method: 'GET',
            json:{},
            qs:{}
        }
        request(
            requestOptions,
            (err, response, body) =>{
                if(response.statusCode === 200){
                    //console.log(body)
                    menuRender(req, res, body)
                }else if(response.statusCode === 400){
                    res.render('error', {
                        mensaje:'Error del sistema',
                        error: body
                    })
                    
                }else if(response.statusCode === 404){
                    console.log(response.statusCode)
                    res.render('error', {
                        error: body,
                        mensaje: 'Ingreso no valido'
                    })
                }
            }
        )
}

const menuRender = (req, res, objetoResultante) =>{
    console.log(objetoResultante[0].PD_foto);
    if(req.query.err){
        res.render('menu',{
            productos:objetoResultante,
            error:req.query.err,
            mensaje: 'Todos los campos son requeridos para actualizacion'
        })
    }/*else if(req.query.upd){
        res.render('menu',{
            productos:objetoResultante,
            upd:req.query.upd,
            mensaje: 'Actualizacion Exitosa'
        })
    }*/else{
        res.render('menu',{
            productos:objetoResultante,
            error: '',
            mensaje: ''
        })
    }
    
}

module.exports = {
    menu
}