module.exports = function check(str, bracketsConfig) {
  let opens = [];
  let closes = {};
  let doubles = [];
  for(var i = 0; i<bracketsConfig.length; i++){
  	closes[bracketsConfig[i][0]] = bracketsConfig[i][1];
  	if (bracketsConfig[i][0] == bracketsConfig[i][1]){
  		doubles.push(bracketsConfig[i][0]);
  		opens.push(bracketsConfig[i][0])
  	}
  	else{
  		opens.push(bracketsConfig[i][0]);
  	}
  }
  let tempstr = '';
  	for (var i = 0; i<str.length; i++){
  		if (tempstr == "" && !opens.includes(str[i]) && !doubles.includes(str[i])){
  			return false;
  		}
  		else if(tempstr != ""  && ( (str[i] == tempstr[tempstr.length-1] && doubles.includes(str[i]))|| !opens.includes(str[i]))) {
  			let x = tempstr[tempstr.length-1];
  			if (str[i] == closes[x]){
  				tempstr = tempstr.slice(0,tempstr.length-1)
  			}
  		}
  		else if(opens.includes(str[i]) ||  doubles.includes(str[i])){
  			tempstr+=str[i];
  		}
  	}
  return !(!!(tempstr));
}

