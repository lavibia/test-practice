
function caesarCipher(string, shiftFactor) {
	let result = '';
	string.split('');
	for (let i = 0; i < string.length; i++) {
		if (string.charCodeAt(i) < 65 ||
			(string.charCodeAt(i) > 90 && string.charCodeAt(i) < 97) ||
			string.charCodeAt(i) > 122) //if the char is not a letter
		{
			result += string[i]
		} else if (string[i] === string[i].toUpperCase()) {
			result += cipherUpper(string.charCodeAt(i), shiftFactor);
		} else if (string[i] === string[i].toLowerCase()) {
			result += cipherLower(string.charCodeAt(i), shiftFactor);
		}


	}
	return result;
}
function cipherUpper(ASCIIcode, shiftFactor) {
	let shifted;
	let Z = 'Z';
	let lastUpperASCII = Z.charCodeAt(0);

	if (ASCIIcode + shiftFactor > lastUpperASCII) {
		shifted = ASCIIcode + shiftFactor - 26; //26 letters in the alphabet
	} else {
		shifted = ASCIIcode + shiftFactor;
	}
	return String.fromCharCode(shifted)
}
function cipherLower(ASCIIcode, shiftFactor) {
	let shifted;
	let z = 'z';
	let lastLowerASCII = z.charCodeAt(0);
	if (ASCIIcode + shiftFactor > lastLowerASCII) {
		shifted = ASCIIcode + shiftFactor - 26; //26 letters in the alphabet
	} else {
		shifted = ASCIIcode + shiftFactor;
	}
	return String.fromCharCode(shifted)
}
module.exports = caesarCipher;