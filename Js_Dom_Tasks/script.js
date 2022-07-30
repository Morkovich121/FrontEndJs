let dark = false;

function Task1() {
    var winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var nowScroll = document.documentElement.scrollTop;
    var scrolled = (nowScroll / winHeight) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
}

function Task2() {
    const form = document.forms[0];
    const formName = form.elements.names.value;
    const formMail = form.elements.mail.value;
    const formAge = form.elements.age.value;
    if (formName && formMail && formAge && 0 < formAge < 100 && formMail.indexOf("@") != -1 && formMail.indexOf(".") != -1) {
        localStorage.setItem('userName', formName);
        localStorage.setItem('mail', formMail);
        localStorage.setItem('age', formAge);
        window.open("new.html")
    }
    else {
        alert("Введены неверные данные")
    }
}

function Task3() {
    let body = document.body;
    console.log(dark);
    if (!dark) {
        dark = true;
        body.style.backgroundColor = "darkGray"
        body.style.color = "white";
        myImg = document.getElementById('theme');
        myImg.src = "images/moon.jpg"
        myImg.style.width = "3rem";
        myImg.style.height = "3rem";
    }
    else {
        body.style.backgroundColor = "lightGray"
        body.style.color = "black";
        dark = false;
        myImg = document.getElementById('theme');
        myImg.src = "images/sun.jpg"
        myImg.style.width = "4rem";
        myImg.style.height = "4rem";
    }
}

let Task5 = () => {
    let func;
    let myImg = document.getElementById('theme');
    userActive();
    document.addEventListener('mousemove', userActive);
    document.addEventListener('keypress', userActive);

    function userActive() {

        clearTimeout(func);
        //Для простоты тестирования таймер поставлен не на 5 минут, а на 1 минуту
        func = setTimeout(fn, 300000)
    }

    function fn() {
        if (!confirm("Вы еще тут?")) {
            window.open('new.html', '_self')
        }
    }
};

function Task6() {
    let browserVersion = document.getElementById("browser-version")
    let browserName = document.getElementById("browser-name")
    var browserInfo = navigator.userAgent;
    browserName.textContent = browserInfo.split(" ")[0].split("/")[0];
    browserVersion.textContent = browserInfo.split(" ")[0].split("/")[1]
}

let Task7 = () => {
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 300,
        framesCount = 20;

    anchors.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
            let scroller = setInterval(function () {
                let scrollBy = coordY / framesCount;
                if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    window.scrollBy(0, scrollBy);
                } else {
                    window.scrollTo(0, coordY);
                    clearInterval(scroller);
                }
            }, animationTime / framesCount);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    Task5();
    Task7();
});