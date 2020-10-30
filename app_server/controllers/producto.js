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

const nuevoProducto = (req, res) =>{
    res.render('nuevoProducto',{
        
    })
}

const agregarProducto = (req, res) => {
    const path = `/api/producto`;
    const postData = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
    };
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'POST',
        json: postData
    };
    if (!postData.nombre || !postData.descripcion || !postData.precio || !postData.codigo) {
        res.render('nuevoProducto', {
            mensaje: 'Todos los campos son requeridos'
        })
    } else {
        request(
            requestOptions,
            (err, response, body) => {
                if (response.statusCode === 200) {
                    res.render('nuevoProducto', {
                        mensaje: 'Producto ingresado exitosamente',
                        flag: true
                    })
                } else if (response.statusCode === 400 && body.number != 2627) {
                    //Validar Vacios
                    console.log(body.number)
                    console.log(response.statusCode);
                    res.render('nuevoProducto', {
                        error: body.name,
                        mensaje: 'Todos los campos son requeridos!',
                        flag: false
                    })
                }else if (response.statusCode === 400 && body.number == 2627) {
                    //Validar Vacios
                    console.log(response.statusCode);
                    res.render('nuevoProducto', {
                        
                        mensaje: 'El producto con codigo especificado ya existe',
                        flag: false
                    })
                }
                else {
                    console.log(response.statusCode);
                    res.render('error', {
                        error: 'Error',
                        codigo: err,
                        mensaje: 'Ups! Hubo un error :c'
                    });
                }

            }
        )
    }
};

module.exports = {
    updateProduct,
    deleteProduct,
    agregarProducto,
    nuevoProducto
}