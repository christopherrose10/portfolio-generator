// var commandLineArgs = process.argv;
// console.log(commandLineArgs);



const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));



// -------------
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// const [name, github] = profileDataArgs;

// LESSON ONE

// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     for (let i=0; i < profileDataArr.length; i+=1) {
//     console.log(profileDataArr[i]);
//     }

//     console.log('==========');

//     // profileDataArr.forEach((profileItem) => {
//     //     console.log(profileItem);
//     // });

//     profileDataArr.forEach(profileItem => console.log(profileItem));

// };

// printProfileData(profileDataArgs);

//LESSON TWO

// const generatePage = () => 'Name: Chris, Github: christopherrose10';
// -----------------





// fs.writeFile(name.toLowerCase().split(' ').join('') + '.html', pageHTML, err => {
//     if (err) throw err;
//     console.log('Portfolio complete! Check out index.html to see the output!');
// })




//-------------
// console.log(name, github);
// console.log(generatePage(name, github));
//-------------
