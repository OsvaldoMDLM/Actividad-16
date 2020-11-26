    
const GuardarLocalStorage = (email, nombre) => {
const elementoNuevos = { email, nombre }

    if (localStorage.getItem('elemento')) {
    const elemento = [...JSON.parse(localStorage.getItem('elemento')), elementoNuevos]
    localStorage.setItem('elemento', JSON.stringify(elemento))
    
    return
    }
    
    localStorage.setItem('elemento', JSON.stringify([elementoNuevos]))
}

const DatosImputs = () => {
    const email = $('#email').val()
    const nombre = $('#nombre').val()

    return { email, nombre }
}

const limpiarInputs = () => {
    $("#nombre").val("");
    $("#email").val("");
}

$(document).ready(function () {

    /*Boton guardar*/
    $('#boton-guardar').click(function () {
    const { email, nombre } = DatosImputs()

    if (email.length > 0 && nombre.length > 0) {
        GuardarLocalStorage(email, nombre)
        limpiarInputs()

        return
    }

    return alert('Necesitas rellenas todos los campos')
    });

    /*boton ver storage*/
    $('#boton-ver').click(function () {
    const elemento = JSON.parse(localStorage.getItem('elemento'))
    const salida = $('#salida')

    salida.empty()
    salida.append('<tr><th>Nombre</th><th>Correo electrónico</th></tr>')

    elemento.forEach((dato) => {
        salida.append(`
        <tr>
            <td>${dato.nombre}</td>
            <td>${dato.email}</td>
        </tr>
        `)
    })
    });

    /**Boton limpiar */
    $("#boton-limpia").click(function () {
    limpiarInputs()
    });

    /**Boton Borrar */
    $("#boton-borrar").click(function () {
        const salida = $('#salida')
        salida.empty()
        salida.append('<tr><th>Nombre</th><th>Correo electrónico</th></tr>')
        localStorage.clear();
    });
});