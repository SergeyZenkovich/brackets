module.exports = function check(str, bracketsConfig) {
	const obj = Object.fromEntries(bracketsConfig);
	let temptStr = '';
	for (let i = 0; i < str.length; i++) {
		debugger
		if (temptStr === '') {
			temptStr += str[i];
		}
		else {
			if (obj.hasOwnProperty(str[i]) && obj[temptStr[temptStr.length - 1]] !== str[i] ) {
				temptStr += str[i];
			}
			else if (obj[temptStr[temptStr.length - 1]] === str[i]) {
				temptStr = temptStr.slice(0, temptStr.length - 1)
			}
		}
	}
	return !temptStr;
}

