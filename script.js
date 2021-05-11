let number = 15
let guess = 0

document.getElementById('button').addEventListener('click', random)

function random () {
  while (guess != number) {
  guess = prompt('Guess my age, Hint: The number is between 10 and 20')
  if (guess === number)
  console.log('You got it right')
} else if (guess > number) {
  console.log('You guessed too big')
} else if (guess < number) {
  console.log('You guessed too small')
} else {
  console.log('Invaid Answer')
}
}