const calc = document.querySelector(".calculate")

calc.addEventListener("click", (e) => {
    let currentDate = document.querySelector(".date");
    let enterDate = new Date(currentDate.value); // 23 / 06 / 2003

    let inputDate = {
        year : enterDate.getFullYear(), // 2003
        month : enterDate.getMonth(), //  06
        day : enterDate.getDay(), // 23
    }

    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (inputDate.day > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (inputDate.month > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    let d = d2 - inputDate.day;
    let m = m2 - inputDate.month;
    let y = y2 - inputDate.year;

    let year = (document.querySelector(".year").innerHTML = y)
    let months = (document.querySelector(".month").innerHTML = m)
    let day = (document.querySelector(".day").innerHTML = d)
})