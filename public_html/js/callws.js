/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#myModal').modal('show');

var getExcursionesWS = 'http://localhost:8080/excursiones/internal';
var reservasWS = 'http://localhost:8080/reserva';
var usuariosWS = 'http://localhost:8080/usuario';

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
                var button = '<button value=' + data[i].id + ' onclick="apuntarse(' + data[i].id + ')" data-toggle="modal" data-target="#myModal" >Apuntarse</button>'
                trHTML += '<tr class="clickable-row" onclick="mostrarExcursion(' + "'" + data[i].origen + "'" + ',' + "'" + data[i].destino + "'" + ',' + "'" + data[i].descripcion + "'" + ')"><td>' + data[i].origen + '</td><td>' + data[i].destino + '</td><td>' + data[i].fecha + '</td><td>' + data[i].hora + '</td><td>' + button + '</td></tr>';
            });
            $('#excursionesDisponibles').append(trHTML);
        },
        error: function (msg) {
            alert(msg.responseText);
        }
    });

});

let excursionID = 0;

$('#iniciarSesion').click(function () {
    var loginCorrecto = false;
    
     var usuario = {
            nombreUsuario: $("#inicioSesionForm #username").val(),
            password: $("#inicioSesionForm #password").val()
        };
    
    $.ajax({
        url: usuariosWS + "/login",
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(usuario),
        success: function (data) {
            alert(data);
            loginCorrecto = data;
        }
    });

    if (loginCorrecto) {
       /* $.ajax({
            url: reservasWS,
            type: 'post',
            dataType: 'json',
            data: $('#inicioSesionForm').serialize(),
            success: function (data) {
                alert("Reserva realizada " + data);
            }
        });*/
        alert("Apuntando a excursion");
    }else{
        alert("El usuario no existe o las credenciales son incorrectas.");
    }
});


$('#registrarse').click(function () {
    alert($('#registroForm').serialize());
    
     var usuario = {
            nombre: $("#name").val(),
            email: $("#email").val(),
            movil: $("#mobile").val(),
            nombreUsuario: $("#registroForm #username").val(),
            password: $("#registroForm #password").val()
        };

    $.ajax({
        url: usuariosWS,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(usuario),
        success: function (data) {
            alert("Registrado correctamente "+data);
        }
    });
});


function apuntarse(idExcursion) {
    this.excursionID = idExcursion;
}


