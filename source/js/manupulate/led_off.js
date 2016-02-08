var fs = require('fs'); 

fs.writeFileSync('/sys/class/gpio/export', 21);
fs.writeFileSync('/sys/class/gpio/gpio21/direction', 'out');
fs.writeFileSync('/sys/class/gpio/gpio21/value', 0);
fs.writeFileSync('/sys/class/gpio/unexport', 21);
