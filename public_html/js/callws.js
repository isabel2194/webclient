/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var getExcursionesWS = 'http://localhost:8080/excursiones/internal';
$(document).ready(function () {

//jQuery.support.cors = false;
        $.ajax({
        type: "GET",
                url: getExcursionesWS,
                data: "",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                cache: false,
                success: function (data) {

                var trHTML = '';
                        $.each(data, function (i, item) {
                        var button = '<button value=' + data[i].id + ' onclick="apuntarse(' + data[i].id + ')" >Apuntarse</button>'
                                trHTML += '<tr class="clickable-row" onclick="mostrarExcursion('+"'"+data[i].origen+"'"+','+"'"+data[i].destino+"'"+','+"'"+data[i].descripcion+"'"+')"><td>' + data[i].origen + '</td><td>' + data[i].destino + '</td><td>' + data[i].fecha + '</td><td>' + data[i].hora + '</td><td>' + button + '</td></tr>';
                        });
                        $('#excursionesDisponibles').append(trHTML);
                },
                error: function (msg) {
                    alert(msg.responseText);
                }
        });
        
});
function apuntarse(idExcursion) {
//pedimos login
//si login es correcto apuntamos
}


