exports.calculate = function(num) {
    if (typeof num !== 'number') {
        throw new Error('Type of numeric is expected.');
    }
    return Math.floor(num / 2);
};
