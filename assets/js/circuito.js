/* 
    Reads parameters from url.
    Returns the value of parameter named [name]
*/
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/* 
    According to the param value, it will load the data.
    So, if the param circuito=01, it will load the data of Circuito 01
*/
!(function ($) {
    "use strict";
    $(document).ready(function () {
        // Reads the param
        var circuito = {};
        var param = getParameterByName("circuito");
        
        circuitosAll.forEach((circuitoN) => {
            if (circuitoN.numero == param) {
                circuito = circuitoN;
            }
        });

        // Sets the data of circuit
        $('#circuito-name').html(circuito.nombre);
        $('#circuito-contact').html(
            `
            <p id="circuito-tel"><strong>Teléfono de supervisión: </strong>${circuito.info.telefono}</p>
            <p id="circuito-email"><strong>Correo de supervisión: </strong>${circuito.info.email}</p>
            `
        );
        
        $('#circuito-info-details').html(
            `
            <li><strong>Supervisor: </strong>${circuito.info.supervisor}</li>
            <li><strong>Asistente de supervisión: </strong>${circuito.info.asistente}</li>
            <li><strong>Dirección de supervisión: </strong>${circuito.info.direccion}</li>
            `
        );

        // Loads the data of I and II Cycle
        $('#I_II_CantidadInst').html(circuito.instituciones.I_II_Ciclo.length + " instituciones");
        circuito.instituciones.I_II_Ciclo.forEach((inst) => {
            $('#inst-list-rows-I_II').append(
                `
                <tr class="inst-item">
                    <th scope="row" class="inst-name">${inst.nombre}</th>
                    <td class="inst-tel">${inst.telefono}</td>
                </tr>
                `
            );
        });

        // Loads the data of III and IV Cycle
        $('#III_IV_CantidadInst').html(circuito.instituciones.III_IV_Ciclo.length + " instituciones");
        circuito.instituciones.III_IV_Ciclo.forEach((inst) => {
            $('#inst-list-rows-III_IV').append(
                `
                <tr class="inst-item">
                    <th scope="row" class="inst-name">${inst.nombre}</th>
                    <td class="inst-tel">${inst.telefono}</td>
                </tr>
                `
            );
        });

        
    });
})(jQuery);