function calc() {

    let number1;
    let number2;

    number1 = new Number(document.getElementById("number1").value);
    number2 = new Number(document.getElementById("number2").value);

    let op = document.getElementById("op").value;
    let lblOutput = document.getElementById("output");



    switch (op) {
        case "+": lblOutput.innerHTML = number1 + number2;
            break;
        case "-": lblOutput.innerHTML = number1 - number2;
            break;
        case "*": lblOutput.innerHTML = number1 * number2;
            break;
        case "/": lblOutput.innerHTML = number1 / number2;
            break;

    }
    
    console.log(lblOutput);
   

}
