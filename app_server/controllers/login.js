const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
}


const homePage = (req, res) =>{
    console.log(req.body.login)
    renderLogin(req, res)
    if(req.body.login!=undefined){
       
        /*const getData ={
            AD_usuario: req.body.login,
            AD_password: req.body.password
        }*/
        const path = `/api/usuario/${req.body.login}`;
    
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
                    console.log("entraMenu")
                    res.setHeader("Content-Type", "text/html")
                    res.redirect('/menu')
                }else if(response.statusCode === 400){
                    console.log("Error")
                    
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

   
}

const renderLogin = (req, res) =>{
    res.render('login')
}





module.exports = {
    homePage
    
}