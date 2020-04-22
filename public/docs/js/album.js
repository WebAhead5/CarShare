
const fromDateElement = document.getElementById("begin_date");
const toDateElement = document.getElementById("end_date");
const searchButton = document.getElementById("search_button");
const reserveButton = document.getElementById("reserve_button");
var selectedCarId;

const reserveModal = document.getElementById("reserveModal");

const closeButton = document.getElementById("close_modal");
closeButton.addEventListener('click', ()=> {
 reserveModal.style.display = "none";
 reserveModal.classList.toggle('fade');
})

searchButton.addEventListener("click", () => {
    giveResults();
});

reserveButton.addEventListener("click", () => {
    const startDate = fromDateElement.value;
    const endDate = toDateElement.value;
    const userId = 7;
    const carId = selectedCarId;
    setReservation();
});


const setReservation = function (){

    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4) {
    //         if (xhr.status === 200) {
    //             var data = JSON.parse(xhr.responseText);
    //         }
    //         else {
    //             console.error(xhr.responseText);
    //         }
    //     }
    // }
    // xhr.open('POST', '/createReservation', true);
    // xhr.send();

   
   reserveModal.style.display = "block";
   reserveModal.classList.toggle('fade');
}

const giveResults = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                const cars_row = document.getElementById("cars_row");
                for (let i = 0; i < cars_row.children.length; i++) {
                   cars_row.children[i].getElementsByTagName('text')[0].innerHTML = data[i].make;         
                   cars_row.children[i].getElementsByTagName('button')[0]
                   .addEventListener('click',()=>{
                    selectedCarId =data[i].id;
                    console.log(selectedCarId);
                   });

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

