const questions = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'C#'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again'],
  ]);
  
  //usgin the .get() method to print the question from the Map object
  console.log(questions.get('question'));
  //using the for of operator to print each option of the quiz usgin Destruct to retrieve and access each element by its keys and printing its value
  for (const [key, value] of questions) {
      typeof(key) === 'number' && console.log(`Answer ${key}: ${value}`)
  }

  //using readline to ask for the input from the user in the Terminal
  const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
  //readline printing the question to the user and calling the callback function
  readline.question('Your answer: ', answer => {
      //the callback function uses the .get() method to return the Answer value from the Map object.
      console.log(questions.get(Number(answer) === questions.get('correct')));
      readline.close();
  })