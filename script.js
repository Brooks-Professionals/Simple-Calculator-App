let screen = document.getElementById("screen"),
    buttons = document.querySelectorAll("button");

let screenValue = "";


for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        console.log("Button text is ", buttonText);
        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "On/c") {
            screenValue = "";
            screen.value = 0;
        } else if (buttonText == "=") {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
};