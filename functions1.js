function printName (){
    console.log("Salem almutairi");
}

function printAge(birth){
    const age = 2024 - birth;
    console.log(age);
}
printAge(2000);


function printAgeAndName(birth, firstName){
    const age = 2024 - birth;
    console.log(`Hello ${firstName}, you are ${age} years old`);
}
printAgeAndName(2000, "salem");

function printHello(name, language){
    if (language== "en") console.log(`Hello ${name}`);
    else if (language== "es") console.log(`Hola ${name}`);
    else if (language== "fr") console.log(`Bonjour ${name}`);
    else if (language== "tr") console.log(`Merhaba ${name}`);
}
    printHello("salem", "es");

 
function printMax(num1, num2){
    if (num1> num2) console.log (num1);
    else console.log(num2);
}
printMax(1,5);
