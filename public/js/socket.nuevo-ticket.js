//Comando para establececer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

//Conectado al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Desconectado del servidor
socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);
})

$('button').on('click', function() {
    //console.log('click');

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});