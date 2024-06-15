let first_num = Math.random() * 100;
first_num = Math.ceil(first_num);
let second_num = Math.random() * 100;
second_num = Math.ceil(second_num);
let f = document.getElementById("firstNumber").textContent = first_num;
let s = document.getElementById("secondNumber").textContent = second_num;
let result = f + s;
console.log(result);
console.log(typeof(result));

function checkRes() {
    let user_ip = document.getElementById("userInput").value;
    if (parseInt(user_ip) === result) {
        document.getElementById("gameResult").textContent = "Congratulations! you got right";
        document.getElementById("gameResult").style.backgroundColor = "green";
        document.getElementById("gameResult").style.color = "white";
    } else {
        document.getElementById("gameResult").textContent = "Please Try Again!";
        document.getElementById("gameResult").style.backgroundColor = "blue";
        document.getElementById("gameResult").style.color = "white";
    }
}

function restartGam() {
    first_num = Math.random() * 100;
    first_num = Math.ceil(first_num);
    second_num = Math.random() * 100;
    second_num = Math.ceil(second_num);
    f = document.getElementById("firstNumber").textContent = first_num;
    s = document.getElementById("secondNumber").textContent = second_num;
    result = f + s;
    let user_ip = document.getElementById("userInput").value = "";
    document.getElementById("gameResult").textContent = "";
    document.getElementById("gameResult").style.backgroundColor = "";
    document.getElementById("gameResult").style.color = "";

}