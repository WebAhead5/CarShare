
const fromDateElement = document.getElementById("begin_date");
const toDateElement = document.getElementById("end_date");
const searchButton = document.getElementById("search_button");
const reserveButton = document.getElementById("reserve_button");



searchButton.addEventListener("click", () => {
    console.log(fromDateElement.value);
    giveResults();

});

const giveResults = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                const cars_row = document.getElementById("cars_row");
                for (let i = 0; i < cars_row.children.length; i++) {
                   cars_row.children[i].getElementsByTagName('text')[0].innerHTML = data[i].make;
                }
            }
            else {
                console.error(xhr.responseText);
            }
        }
    }
    xhr.open('GET', '/getCar', true);
    xhr.send();
}