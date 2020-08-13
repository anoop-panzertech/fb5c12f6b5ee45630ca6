const chalk = require('chalk');
const figlet = require('figlet');

 
const printHeader = () => {
  console.log(
    chalk.cyan(
      figlet.textSync('Toy Robot Simulator', {
        font: 'big',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
};

 
const printDescription = () => {
  console.log(chalk.cyan('\nEach command needs to be separated into a new line:\nType "REPORT" to see the current coordinate of your robot\n'));

  console.log(chalk.white('PLACE 2,3,W\nLEFT\nRIGHT\nMOVE\nREPORT\n'));

  console.log(chalk.cyan('To terminate this program, press CTRL+C (for Windows) or Command+C (for Mac) on your keyboard\n'));

  console.log(chalk.green('Start typing your commands below:\n'));
};

module.exports = { printHeader, printDescription };
