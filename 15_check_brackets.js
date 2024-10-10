let str = "((()))()()()() ";
let str2 = '(())'

function checkBrackets(str) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      counter++;
    } else {
      counter--;
    }
  }

  if (counter === 0) {
    return console.log(true);
  } else {
    return console.log(false);
  }


}




checkBrackets(str)
checkBrackets(str2)