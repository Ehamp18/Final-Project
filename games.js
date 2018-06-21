let randomNumber = () => Math.floor(Math.random() * 50 )

const checkNumber = (number) => {
  if (number === randomNumber ){
  return = 'got it', number, randomNumber;
  } else {
  return = 'guess again', number, randomNumber;
  }
}

module.exports = checkNumber
