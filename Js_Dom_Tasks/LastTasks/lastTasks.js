let doTask1 = true;

function Task1() {
    if (doTask1) {
        const task1Div = document.getElementById("move");
        let move = 100;
        if (task1Div.offsetLeft + move < document.getElementById("task1").offsetWidth) {
            left = document.getElementById("move").offsetLeft;
            newLeft = left + move;
            document.getElementById("move").style.left = newLeft + "px"
        }
        else {
            document.getElementById("move").style.left = 0 + "px";
        }
    }
    else {
        return 0;
    }
}

function stopTask1() {
    doTask1 = !doTask1;
    if (!doTask1) {
        document.getElementById("stop").textContent = "Продолжить";
    }
    else {
        document.getElementById("stop").textContent = "Остановить";
    }
}

function Task3(input) {

    if (input.split(".").length !== 3) {
        alert("Введите корректную дату")
    }
    else {
        let arr = input.split(".").map((elem) => parseInt(elem));
        let date = new Date(arr[0], arr[1] - 1, arr[2])
        let wordDay = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"]
        document.getElementById('task3Result').textContent = wordDay[date.getDay() - 1] + " має номер " + date.getDay();
    }
}

function Task4(input) {
    let arr = input.split(" ");
    let ul = document.getElementById("list");
    let aCounter = 0;
    ul.innerHTML = "";

    arr.forEach((element, index) => {
        let text = element;
        [...element].forEach(element => {
            if (element.toLowerCase() == "a" || element.toLowerCase() == 'а') aCounter++;
        })
        let li = document.createElement("li");
        if (index == 0) {
            text = element.toUpperCase();
        }
        if (index >= arr.length - 2) {
            let letters = [...text]
            letters[0] = letters[0].toLowerCase();
            text = letters.join("");
        }
        li.appendChild(document.createTextNode(text))
        ul.appendChild(li);
    });
    alert("Всего букв 'а': " + aCounter);
}