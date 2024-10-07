const messageBox = document.getElementById('message');
const nameBox = document.getElementById('name');
const sendButton = document.getElementById('sendText');
const messagesContainer = document.querySelector('.messagesContainer');  // Correctly define messagesContainer
document.addEventListener("DOMContentLoaded", loadMessages);


sendButton.addEventListener("click", sendText);

function sendText() {
    const messageClone = messagesContainer.querySelector('.message').cloneNode(true);

    let messageBoxValue = messageBox.value;
    let nameBoxValue = nameBox.value;

    const newMessageText = `${nameBoxValue}: ${messageBoxValue}`;
    messageClone.innerText = newMessageText;


    messagesContainer.appendChild(messageClone);

    saveMessage(newMessageText);

    messageBox.value = '';
    nameBox.value = '';
}

function saveMessage(newMessageText) {
    let savedMessages = localStorage.getItem('messages');
    savedMessages = savedMessages ? JSON.parse(savedMessages) : [];
    
    savedMessages.push(newMessageText);
    
    localStorage.setItem('messages', JSON.stringify(savedMessages));
}

function loadMessages() {
    let savedMessages = localStorage.getItem('messages');
    savedMessages = savedMessages ? JSON.parse(savedMessages) : [];

    savedMessages.forEach(message => {
        const messageClone = document.createElement('p');
        messageClone.innerText = message;
        messagesContainer.appendChild(messageClone);
    });
}

