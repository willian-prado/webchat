const socket = window.io();

let nickname = '';
const nicknameElement = document.querySelector('#user-nickname');

const setClientNickname = (username) => {
  nicknameElement.innerText = username;
  nickname = username;
};

const ulMessageList = document.querySelector('#message-list');
const messageForm = document.querySelector('#message-form');
const inputMessage = document.querySelector('#message-box');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const chatMessage = inputMessage.value;
  socket.emit('message', { chatMessage, nickname });
  inputMessage.value = '';
  return false;
});

const createChatMessage = (message) => {
  const li = document.createElement('li');
  li.innerText = message;
  li.setAttribute('data-testid', 'message');
  ulMessageList.appendChild(li);
};

socket.on('welcome', (_message) => {
  const randomName = socket.id.substring(0, 16);
  setClientNickname(randomName);
});

socket.on('message', (message) => createChatMessage(message));