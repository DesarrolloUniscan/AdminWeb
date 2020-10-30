const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
}


const updateProduct = (req, res) => {


    const path = `/api/producto/${req.query.codigo}/${req.query.nombre}/${req.query.precio}/${req.query.descripcion}`;

    const requestOptions = { //Objeto cargado con las opciones
        url: `${apiOptions.server}${path}`,
        method: 'PUT',
        json: {},
        qs: {}

    };
    request(//modulo request que usa la API REST
        requestOptions, //Opciones
        (err, response, body) => { //Callback con sus 3 partes

            if (err) {//error - objeto con el error
                console.log(err + 'error');
            } else if (response.statusCode === 200) {
                //console.log(body);
                res.redirect('/menu');

            } else if(response.statusCode === 400){
                console.log(response.statusCode);
                
            }
            //response - respuesta completa (incluye el status)
            //body - cuerpo de la respuesta objeto(Product, Usuario, Marca)
        }

    );
}

const deleteProduct = (req, res) => {
    const path = `/api/producto/${req.query.codigo}`;

    const requestOptions = { //Objeto cargado con las opciones
        url: `${apiOptions.server}${path}`,
        method: 'DELETE',
        json: {},
        qs: {}

    };
    request(//modulo request que usa la API REST
        requestOptions, //Opciones
        (err, response, body) => { //Callback con sus 3 partes

            if (err) {//error - objeto con el error
            } else if (response.statusCode === 204) {
                res.redirect('/menu');

            } else if(response.statusCode === 400){
                console.log(response.statusCode);
                
            }
            //response - respuesta completa (incluye el status)
            //body - cuerpo de la respuesta objeto(Product, Usuario, Marca)
        }

    );
}

const nuevoProducto=(req,res)=>{
    res.render('nuevoProducto');
}

module.exports = {
    updateProduct,
    deleteProduct,
    nuevoProducto
}