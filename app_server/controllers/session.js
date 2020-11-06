
require('../../sessionConfig');

const redirectLogin = (req, res, next) =>{
    if(!req.session.userid){
        res.redirect('/')
    }else{
        next();
    }
}


const redirectMenu = (req, res, next) =>{
    if(req.session.userid){
        res.redirect('/menu')
    }else{
        next();
    }
}


const logout = (req, res)=>{
    req.session.destroy(err =>{
        if(err){
            return res.redirect('/menu')
        }
        res.clearCookie('sid')
        res.redirect('/')
    })
}


module.exports = {
    redirectLogin,
    redirectMenu,
    logout
}