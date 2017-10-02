// Write your code in this file!
function scuberGreetingForFeet() {
  let taxiResponse;
  if (feet <= 400) {
    taxiResponse = 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    taxiResponse = "I will gladly take your thirty bucks.";
  } else {
    taxiResponse = "No can do.";
  }
  return taxiResponse
}

function ternaryCheckCity() {
  let taxiResponse;
  city === 'NYC' ? taxiResponse = 'Ok, sounds good.' : taxiResponse = 'No go.';
  return taxiResponse;
}

function switchOnCharmFromTip() {
  let taxiResponse;
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
  return taxiResponse;
}
