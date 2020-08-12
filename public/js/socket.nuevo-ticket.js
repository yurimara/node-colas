// conexion con el servidor
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('conectado al servidor');
});


socket.on('disconnect', function() {
    console.log('desconectado al servidor');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
    console.log('actual', resp.actual);
});

$('button').on('click', function() {
    //console.log('click');

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});