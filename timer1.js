const input = process.argv.slice(2);
const toNum = input.join(",").split(',').map(x =>+x); //changes the string type of numbers into number.

if (input.length === 0) {
  process.exit();
}

for (let seconds of toNum) {
  if (seconds > 0 && !isNaN(seconds)) { //typeof NaN is still a number
    setTimeout(() => {
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
  
}

