function capitalize(string) {
 return string.slice(0, 1).toUpperCase().concat(string.slice(1));
}

module.exports = capitalize;