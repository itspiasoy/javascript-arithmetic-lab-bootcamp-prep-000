function add(a, b){
  return (a + b)
}

function subtract(a, b){
  return (a - b)
}

function multiply(a, b){
  return (a * b)
}

function divide(a, b){
  return (a / b)
}

function inc(n){
  n++
  return (n)
}

function dec(n){
  n--
  return (n)
}

function makeInt(n){
  var parsed = parseInt(n, 10)
  if (isNaN(parsed)) { return 0 }
  return parsed * 0

}

function preserveDecimal(n){
  parseFloat (n)
  return(n)
}
