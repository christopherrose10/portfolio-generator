// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i=0; i < profileDataArr.length; i+=1) {
    console.log(profileDataArr[i]);
    }

    console.log('==========');

    // profileDataArr.forEach((profileItem) => {
    //     console.log(profileItem);
    // });

    profileDataArr.forEach(profileItem => console.log(profileItem));

};

printProfileData(profileDataArgs);