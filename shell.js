const shell = require('shelljs');
shell.exec('git pull');
shell.exec('git add --all');
shell.exec('git commit -m "增加shell"');
shell.exec('push');