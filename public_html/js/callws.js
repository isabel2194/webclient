/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var getExcursionesWS = 'http://localhost:8080/excursiones/internal';
$(document).ready(function () {

jQuery.support.cors = false;
        $.ajax({
        type: "GET",
                url: getExcursionesWS,
                data: "",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                cache: false,
                success: function (data) {

                var trHTML = '';
                        $.each(data.excursion, function (i, item) {
                        var button = '<button value=' + data.excursion[i].id + ' onclick="apuntarse(' + data.excursion[i].id + ')" >Apuntarse</button>'
                                trHTML += '<tr><td>' + data.excursion[i].origen + '</td><td>' + data.excursion[i].destino + '</td><td>' + data.excursion[i].fecha + '</td><td>' + data.excursion[i].hora + '</td><td>' + button + '</td></tr>';
                        });
                        $('#location').append(trHTML);
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
