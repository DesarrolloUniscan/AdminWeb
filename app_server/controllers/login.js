const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
}


const homePage = (req, res) =>{
    renderLogin(req, res)   
}

const doLogin=(req, res) => {
    console.log("Hace post")
   
    if(req.body.login!="" && req.body.password!=""){
        console.log("Entra validar");
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
                if(response.statusCode === 200){
                    console.log(body)
                    console.log("entraMenu")
                    req.session.userid = body.AD_usuario
                    res.redirect('/menu')
                }else if(response.statusCode === 400){
                    res.render('login', {
                        mensaje: body,
                        error: body
                    })
                    
                }else if(response.statusCode === 404){
                    console.log(response.statusCode)
                    res.render('login', {
                        error: body,
                        mensaje: body
                    })
                }
            }
        )
    
    }else{
        res.render('login',{    
            mensaje: 'Todos los campos son requeridos'
        })
    }

}

const renderLogin = (req, res) =>{
    res.render('login')
}





module.exports = {
    homePage,
    doLogin
    
}