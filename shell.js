const shell = require('shelljs');
shell.exec('git pull');
shell.exec('git add --all');
shell.exec('git commit -m "增加shell"');
shell.exec('git push origin master');
// 自动登录服务器
shell.exec('ssh -i dengshenghui_sea root@114.67.231.71');
shell.exec('scp /Users/mac/Desktop/myproject/2017pro/pm2demo/server/views/index.ejs root@114.67.231.71:/root/nodedemo/pm2demo/server/views')