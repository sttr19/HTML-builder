const { readdir, stat } = require('fs');
const { join, parse, extname } = require('path');
//const { stdout } = require('process');

const pathToSecretFolder = join(__dirname, 'secret-folder');

console.log('Информация о файлах:\n');

readdir(pathToSecretFolder, { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  files.forEach((item) => {
    if (item.isFile()) {
      stat(pathToSecretFolder + '/' + item.name, (err, stats) => {
        if (err) throw err;

        console.log(
          parse(item.name).name + ' ' + '-' + ' ' +
          (extname(item.name).slice(1)) + ' ' + '-' + ' ' + stats.size / 1000 + 'kb');
      });
    }
  });
});