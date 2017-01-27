/** 与えられた値を2で割って小数点以下を切り捨てた結果を返す関数 */
exports.calculate = function(num) {
    if (typeof num !== 'number') {
        throw new Error('Type of numeric is expected.');
    }
    return Math.floor(num / 2);
};

/** 標準入力から値を受け取り、計算結果を返す関数 */
exports.read = function() {
    var stdin = process.openStdin(); // 標準入力を開く
    stdin.on('data', function(chunk) {
        var param = parseFloat(chunk);
        var result = exports.calculate(param); // こんな参照できんの
        console.log('result: ' + result);
    });
};
