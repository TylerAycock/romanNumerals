
const toRoman = (num) => {
  if (num >= 4000) {
    return `This number is too big for our primitive number system`;
  }

  let romanNumeral = {
    1: ["I", "V"],
    2: ["X", "L"],
    3: ["C", "D"],
    4: ["M", ""],
  };

  let numeralStr = "";
  let numArr = String(num).split("");

  while(numArr.length > 0) {
    let currentPlace = numArr.length 
    let currentNum = parseInt(numArr[0])

    if(currentNum >= 5){
        numeralStr += romanNumeral[currentPlace][1]
        currentNum -= 5
        numeralStr += romanNumeral[currentPlace][0].repeat(currentNum)
    } else {
        numeralStr += romanNumeral[currentPlace][0].repeat(currentNum)
    }
    numArr.shift()
  }

  return numeralStr
};

console.log(toRoman(2004));
//'V'

console.log(toRoman(267));
// //'CCLXVII'
