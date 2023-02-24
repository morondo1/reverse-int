module.exports = function reverse (n) {
    return n = n.toString().replace('-', '').match(/(.{1,1})/gim).reverse().join('')
}

