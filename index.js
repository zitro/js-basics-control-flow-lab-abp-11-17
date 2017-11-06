// Write your code in this file!
function trip(scruberGreetingForFeet, ternaryCheckCity, switchOnCharmFromTip){

let scruberGreetingForFeet, ternaryCheckCity, switchOnCharmFromTip;
if (scruberGreetingForFeet <= 400){
  return 'This one is on me!'
}else if(scruberGreetingForFeet <= 2500){
  return 'It will be $30 please.';
}else if (scruberGreetingForFeet > 2500){
  return 'No go';
}

ternaryCheckCity === NYC ? letGo = 'Ok, sounds good.' : letGo = 'No go';

  switch (switchOnCharmFromTip) {
    case generous:
      return 'Thank you so much'
      break;
    case not as generous:
      return '$30'
      break;
    default:
      return 'Bye'
      break;
    }


};
