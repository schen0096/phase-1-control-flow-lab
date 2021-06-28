function scuberGreetingForFeet(someNumber){
  // Write your code here!

  if (someNumber <= 400) {
    return 'This one is on me!'
  }

  else if (someNumber > 2000 && someNumber < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (someNumber > 2500) {
    return 'No can do.'
  }
}

scuberGreetingForFeet(199);

scuberGreetingForFeet(2001);

scuberGreetingForFeet(2501);

function ternaryCheckCity(someCity){
  // Write your code here!
  const result = someCity === 'NYC' ? "Ok, sounds good." : "No go."
  return result
}

ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch(tip) {
    case 'generous':
      return "Thank you so much."
      break
    case 'not as generous':
      return "Thank you."
      break
    default:
      return "Bye."
  }

}

switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');

