const socket = window.io();

const nicknameElement = document.querySelector('#user-nickname');

const setClientNickname = (nickname) => {
  nicknameElement.innerText = nickname;
};

socket.on('welcome', (_message) => {
  const nickname = socket.id.substring(0, 16);
  setClientNickname(nickname);
});