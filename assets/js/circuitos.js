

!(function ($) {
    "use strict";
    $(document).ready(function () {
        // Loads the data per circuit
        circuitosAll.forEach((circuito) => {
            $('#circuit-list').append(
                `
                <div class="list-item p-4 d-block d-lg-flex align-items-center">
                <div class="one-third mb-4 mb-md-0">
                <div class="list-item-header d-block d-md-flex d-flex">
                    <h5 class="text-black">${circuito.nombre}</h5>
                </div>
                <div class="circuito-data" style="display: flex;">
                    <div>
                        <div class="list-item-body d-block d-md-flex">
                            <div>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Cantón: </span>
                                <span class="data">${circuito.canton}</span>
                            </div>
                        </div>
                        <div class="list-item-body d-block d-md-flex">
                            <div><i class="fas fa-school"></i> <span>Cantidad de instituciones: </span><span
                                class="data">${circuito.instituciones.I_II_Ciclo.length + circuito.instituciones.III_IV_Ciclo.length}</span></div>
                        </div>
                    </div>
                    <div>
                        <div class="list-item-body d-block d-md-flex">
                            <div><i class="fas fa-phone-alt"></i> <span>Teléfono: </span><span
                                class="data">${circuito.info.telefono}</span></div>
                        </div>
                        <div class="list-item-body d-block d-md-flex">
                            <div><i class="fas fa-at"></i> <span>Email: </span><span
                                class="data">${circuito.info.email}</span></div>
                        </div>
                    </div>
                    <div>
                        <div class="list-item-body d-block d-md-flex">
                            <div>
                                <button  onclick="location.href='circuito.html?circuito=${circuito.numero}'">Ver instituciones</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                </div>
            </div>`
            );
        });
    });
})(jQuery);