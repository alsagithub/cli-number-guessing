import inquirer from "inquirer";
// 1 computer will generate a rondom number -----done
//2 user input for gusseing number  --done
//3 computer user input with computer generat number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("WELCOME,to  number guesing Game");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);


if (answers.userGuessedNumber ===  randomNumber){
  console.log("congtratulation! you guessed right number.");
}
else{
    console.log("you guessed wrong number..");
}