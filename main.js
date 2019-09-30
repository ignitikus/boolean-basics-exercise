let iGetTheJoke = true;
let havingFun = true;
let learning = true;
let killingIt = true;


function returnFalse(str) {
  str = false; 
  return str;
}

function isOpposite(condition) {
  if (condition === false){
    return true;
  }
  else {
    return false;
  }
}

function both(condition1, condition2) {
  if (condition1 && condition2) {
    return true;
  }
  else {
    return false;
  }
}

function either(condition1, condition2) {
  if (condition1 || condition2) {
    return true;
  }
  else {
    return false;
  }
}

function neither(condition1, condition2) {
  if (condition1 || condition2) {
    return false;
  }
  else {
    return true;
  }
}

function itsComplicated(condition1, condition2, condition3) {

}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  neither,
  itsComplicated,
}