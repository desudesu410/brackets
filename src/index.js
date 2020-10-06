module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(element => element.join(''));
  let bracketsInStr = true;
  while (bracketsInStr){
    bracketsInStr = false;
    for (let i = 0; i < bracketsConfig.length; i++ ) 
      if (str.includes(bracketsConfig[i])) {
        str = str.replace(bracketsConfig[i], '')
        bracketsInStr = true;
      }  
  }
  return str === '' ? true : false;
}
