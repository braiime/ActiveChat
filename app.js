const socket = io();

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message.trim() !== '') {
        socket.emit('chat message', message);
        messageInput.value = '';
        messageInput.focus();
    }
});

socket.on('chat message', function(msg) {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    document.getElementById('messages').appendChild(messageElement);
});
