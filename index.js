// Write your code in this file!
function scuberGreetingForFeet() {
  let feet;
  if (feet <= 400) {
    feet = 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    feet = "I will gladly take your thirty bucks.";
  } else {
    feet = "No can do.";
  }
  return feet
}

function ternaryCheckCity() {
  let city;
  city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return city;
}

function switchOnCharmFromTip() {
  let charm
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
  return charm
}
