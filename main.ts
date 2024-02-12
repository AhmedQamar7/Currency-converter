import inquirer from "inquirer";

let convertion = {
    "PKR":{
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.59,
        "GBP": 0.83,
        "USD": 1
    }
}

const answer:{
    from:"GBP" | "USD" | "PKR",
    to: "GBP" | "USD" | "PKR",
    amount:number
} =  await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR","GBP","USD"],
        message: "Select your currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR","GBP","USD"],
        message: "Select your convertion currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Select your convertion currency"
    },
]);

const{from, to, amount} = answer;

if(from && to && amount){
    let result = convertion[from][to] * amount;
    console.log(`Your convertion from ${from} to ${to} is ${result}`)
}else{
    console.log("Invalid inputs")
}