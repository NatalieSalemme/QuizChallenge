//ask 5 questions
//keep track of the number of questions they got correct
//provide a final message after quiz to tell them how many questions they got correctly
//Rank player. 5 = gold, 3-4 silver, 1-2 bronze, 0-no crown
var correctGuess = false;
var count = 0;
var guess1 = prompt("What is 4 + 2?");
var answer1 = 6;
if(parseInt(guess1) === answer1) {
  alert('You got it right!');
  count += 1;
} else {
  alert('Sorry, that is not correct');
}
console.log(count);
var guess2 = prompt("What color is a banana?");
var answer2 = 'yellow';
if(guess2 === answer2) {
  alert('You got it right!');
  count += 1;
}else {
  alert('Sorry that is not correct');
}
var guess3 = prompt("Where does a clown work?");
var answer3 = 'circus';
if(guess3 === answer3) {
  alert('You got it right!');
  count += 1;
}else {
  alert('Sorry that is not correct');
}
var guess4 = prompt("What season comes after spring?");
var answer4 = 'summer';
if(guess4 === answer4) {
  alert('You got it right!');
  count += 1;
}else {
  alert('Sorry that is not correct');
}
var guess5 = prompt("What is the Earth mostly made out of?");
var answer5 = 'water';
if(guess5 === answer5) {
  alert('You got it right!');
  count += 1;
}else {
  alert('Sorry that is not correct');
}
document.write('The final results of the quiz is that you got ' + count + ' answers correct!');
 if(count == 5) {
  document.write(' You got a gold crown!');
} else if(count == 3 || count == 4) {
  document.write(' You got a silver crown!');
} else if(count == 1 || count == 2) {
  document.write(' You got a bronze crown!');
} else {
  document.write(' You did not get a crown');
}
