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
    if(!dark){
        dark=true;
        body.style.backgroundColor="#000000"
        body.style.color="white";
    }
    else{
        body.style.backgroundColor="lightGray"
        body.style.color="black";
        dark=false;
    }
}