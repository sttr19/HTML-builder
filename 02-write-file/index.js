const fs = require('fs');
const path = require('path');
const process = require('process');
const { stdin, exit } = require('process');

const ws = fs.createWriteStream(path.join(__dirname, 'text.txt'));
console.log('Введите текст:\n');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    funcExit();
  }
  ws.write(data);
});

process.on('SIGINT', () => {
  funcExit();
});

function funcExit() {
  console.log('Спасибо! Сеанс ввода завершён!');
  exit(); 
}