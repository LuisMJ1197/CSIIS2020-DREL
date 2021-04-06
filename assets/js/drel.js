

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
    So, if the param dpto=admin, it will load the admin department.
*/
!(function ($) {
    "use strict";
    $(document).ready(function () {
        var personal = [];
        var param = getParameterByName("dpto");
        if (param == "drel") {
          $('#dptoname').html("Personal Dirección Regional");
          personal = drel;
        } else if (param == "asesoria") {
          $('#dptoname').html("Departamento de Asesoria Pedagógica");
          personal = asesoria;
        } else if (param == "admin") {
          $('#dptoname').html("Departamento de Servicios Administrativos y Financieros");
          personal = admin;
        }
        personal.forEach((person) => {
            $('#personal-list').append(
                `<div class="list-item p-4 d-block d-lg-flex align-items-center">
                <div class="one-third mb-4 mb-md-0">
                  <div class="list-item-header d-block d-md-flex d-flex">
                    <h5 class="text-black">${person.nombre}</h5>
                  </div>
                  <div class="personal-data" style="display: flex;">
                    <div>
                      <div class="list-item-body d-block d-md-flex">
                        <div>
                          <i class="fas fa-user"></i>
                          <span>Puesto: </span>
                          <span class="data">${person.puesto}</span>
                        </div>
                      </div>
                      <div class="list-item-body d-block d-md-flex">
                        <div><i class="fas fa-at"></i> <span>Correo: </span><span
                            class="data">${person.email}</span></div>
                      </div>
                    </div>
                    <div>
                      <div class="list-item-body d-block d-md-flex">
                        <div><i class="fas fa-phone-alt"></i> <span>Extensión: </span><span
                            class="data">${person.extension}</span></div>
                      </div>
                      <div class="list-item-body d-block d-md-flex">
                        <div><i class="fas fa-building"></i> <span>Piso: </span><span
                            class="data">${person.piso}</span></div>
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