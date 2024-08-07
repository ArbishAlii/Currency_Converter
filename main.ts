#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("\n \t Welcome to Currency Converter Project\n"));

//defining list of currencies & their exchange rates

let exchange_rate: any = {
    "USD":  1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280
}

let user_answer = await inquirer.prompt([
    {
    name: "from_currency",
    type: "list",
    message: chalk.red("Select the currency to convert from:"),
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
}, 
{
    name: "to_currency",
    type: "list",
    message: chalk.red("Select the currency to convert into:"),
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]

},
{
    name: "amount",
    type: "input",
    message: chalk.blue("Enter the amount you need to convert:")
}
]);

//using currency conversion formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;

//formula of conversion
let base_amount = amount / from_amount
let converted_amount = amount * to_amount

//displaying converted amount
console.log(chalk.green(`Converted amount = ${converted_amount.toFixed(2)}`));
