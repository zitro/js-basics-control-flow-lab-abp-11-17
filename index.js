// Write your code in this file!
function scuberGreetingForFeet (feet) {
if (feet <= 400) {
  return 'This one is on me!';
} else if (2000 < feet < 2500) {
  return 'That will be $30.';
} else {
  return 'No can do.';
}
}

function ternaryCheckCity (city) {
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip (tip) {
switch (tip) {
  case 'generous':
    return 'Thank you so much.';
  case 'not as generous':
    return 'Thank you.';
  default:
    return 'Bye.';
}
}
