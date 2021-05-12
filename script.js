const number = 15
let guess = 0

document.getElementById('myage').addEventListener('click', myFunction)

function myFunction () {
  while (guess != number) {
    guess = prompt('Guess my age, Hint: The number is between 10 and 20')
    if (guess == number) {
      alert('You got it right')
    } else if (guess > number) {
      alert('You guessed too big, please try again')
    } else if (guess < number) {
      alert('You guessed too small, please try again')
    } else {
      alert('Invaid answer, please try again')
    }
  }
}
