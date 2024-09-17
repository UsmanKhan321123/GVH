

import inquirer from "inquirer";
//BMI calculator without Inquirer :-

let weightInKg: number = 58;
let HeightInMeters: number = 1.768;
let SquareOfHeight: number = HeightInMeters ** 2;
let BMI: number = weightInKg / SquareOfHeight;
console.log(`Your BMI is : ${BMI}`);

//BMI calculator using Inquirer :-

const BMI_using_Inqurer = await inquirer.prompt([{
    message: "Please Enter Your Weight In Kg", type: "number",name:"Weight"},
    {message:"Please Enter Your Height in Meters",type:"number",name:"Height"}    
]);
let _BMI_:number = BMI_using_Inqurer.Weight / (BMI_using_Inqurer.Height * BMI_using_Inqurer.Height);
console.log(_BMI_);
