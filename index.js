// add solution here
var emptyArray = []

function theBeatlesPlay(musicians, instruments) {
  for(let i = 0; i < musicians.length; i++) {
    emptyArray[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length) {
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}