// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
//   debugger;
// }

// Wrap  Gifts
// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow. We have ${((gifts.length - 1) - i)} gift${(((gifts.length - 1) - i) > 1 || ((gifts.length - 1) - i) === 0) ? 's' : ''} left!`)
//   }
// }
// wrapGifts(gifts);

// function writeCards(nameArray, eventName) { // while loop
//   let i = 0;
//   let cardArray = [];
//   while (i < nameArray.length) {
//     // console.log(`Thank you ${nameArray[i]}, for the wonderful ${eventName} gift!`);
//     let newCard = `Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`;
//     cardArray.push(newCard)
//     i++
//   }
//   return cardArray;
// }


function writeCards(nameArray, eventName) { // for loop (for assignment)
  let cardArray = [];
  for (let i = 0; i < nameArray.length; i++) {
    // console.log(`Thank you ${nameArray[i]}, for the wonderful ${eventName} gift!`);
    let newCard = `Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`;
    cardArray.push(newCard)
  }
  return cardArray;
}

// writeCards(["Ada", "Brendan", "Ali", "Latisha", "Jerome", "Ming-Lee", "Thu"], "baby shower")


// function countDown(num) { //for loop
//   for (; num >= 0; num--) {
//     console.log(num)
//   }
// }

function countDown(num) { // while loop (for assignment)
  while (num >= 0) {
    console.log(num);
    num--
  }
}
// countDown(20);`

// Accidentally cloned original repo
// Change Git URL: https://devconnected.com/how-to-change-git-remote-origin/
