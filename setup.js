const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'colorPallete',
    message: 'set your color pallete here example:"primary, secondary"'
  },
];

inquirer.prompt(questions).then(answers => {
  console.log('Answers received:', answers);
});
