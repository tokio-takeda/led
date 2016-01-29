var fs = require('fs'); // fsモジュールを読み込み

fs.writeFileSync('/sys/class/gpio/export', 21); // 21番ピンを補足
fs.writeFileSync('/sys/class/gpio/gpio21/direction', 'out'); // 21番ピンを「出力先」に設定
fs.writeFileSync('/sys/class/gpio/gpio21/value', 1); // 21番ピンに「1(ON)」の信号を送る
fs.writeFileSync('/sys/class/gpio/unexport', 21); // 21番ピンを解放
