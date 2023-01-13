const num = Math.ceil(Math.random() * 10);
console.log(num);
const guessNum = prompt('guess the number between 1 and 10 inclusive');
if (guessNum == num)
    console.log('Matched');
else
    console.log('not matched, the number was' +guessNum);