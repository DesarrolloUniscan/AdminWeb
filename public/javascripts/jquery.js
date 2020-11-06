$(document).on("click", ".openUpdate", function () {
    let x = $(this).data('id').producto;
    
    $(".modal-body #codigo").val(x.PD_codigo);
    $(".modal-body #nombre").val(x.PD_nombre);
    $(".modal-body #descripcion").val(x.PD_descripcion);
    $(".modal-body #precio").val(x.PD_precio);
    $(".modal-body #imagen").val(x.PD_foto);
});

$(document).on("click", ".openDelete", function () {
    let x = $(this).data('id').producto;
    
    $(".modal-body #codigoIn").html(x.PD_nombre);
    $(".modal-body #codigo").val(x.PD_codigo);

    
    
});

$('#uploadForm').on('submit', function(e){
    $('#uploadImage').modal('show');
})