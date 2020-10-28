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
                    console.log(body)
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
    res.render('menu',{
        productos:objetoResultante
    })
}

module.exports = {
    menu
}