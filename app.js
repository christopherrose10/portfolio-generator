// var commandLineArgs = process.argv;
// console.log(commandLineArgs);



const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

const propmtUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {

    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        }
);

};

propmtUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });


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
