const request = require('request');
const { resource } = require('../../app');

const apiOptions = {
    server: 'http://localhost:3000'
}


const homePage = (req, res) =>{
    console.log(req.body.login)
    if(req.body.login!=undefined){
        console.log(req.body.login)
        console.log("entra")
        /*const getData ={
            AD_usuario: req.body.login,
            AD_password: req.body.password
        }*/
        const path = `/api/usuario/${req.body.login}/${req.body.password}`;
    
        const requestOptions = {
            url: `${apiOptions.server}${path}`,
            method: 'GET',
            json:{},
            qs:{}
        }
        request(
            requestOptions,
            (err, response, body) =>{
                if(err){
                    console.log(err);
                }else if(response.statusCode === 200 && body){
                    console.log(body)
                    res.redirect('/menu');
                }else{
                    console.log(response.statusCode)
                    res.render('error', {
                        error: 'Error',
                        codigo:  'Codigo',
                        mensaje: 'Ingreso no valido'
                    })
                }
            }
        )
    
    }

    res.render('login');
}





module.exports = {
    homePage
    
}