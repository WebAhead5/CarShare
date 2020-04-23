
const fromDateElement = document.getElementById("begin_date");
const toDateElement = document.getElementById("end_date");
const searchButton = document.getElementById("search_button");
const reserveButton = document.getElementById("reserve_button");
var selectedCarId;
var userId;

const reserveModal = document.getElementById("reserveModal");
var message = reserveModal.getElementsByTagName('p')[0];

const closeButton = document.getElementById("close_modal");
closeButton.addEventListener('click', ()=> {
 reserveModal.style.display = "none";
 reserveModal.classList.toggle('fade');

})

searchButton.addEventListener("click", () => {
    const startDate = fromDateElement.value;
    const endDate = toDateElement.value;
    if(startDate.length <= 0){
        message.innerHTML = "Plesase select a start date";
        reserveModal.style.display = "block";
        reserveModal.classList.toggle('fade');
    }else if(endDate.length <=0 ){
        message.innerHTML = "Plesase select to date";
        reserveModal.style.display = "block";
        reserveModal.classList.toggle('fade');
    }
   getAvailableCars(startDate,endDate);
});

reserveButton.addEventListener("click", () => {
    const startDate = fromDateElement.value;
    const endDate = toDateElement.value;
    const carId = selectedCarId;
    if(startDate.length <= 0){
        message.innerHTML = "Plesase select a start date";
        reserveModal.style.display = "block";
        reserveModal.classList.toggle('fade');
    }else if(endDate.length <=0 ){
        message.innerHTML = "Plesase select to date";
        reserveModal.style.display = "block";
        reserveModal.classList.toggle('fade');
    }else if(carId === undefined){
        message.innerHTML = "Plesase select a car";
        reserveModal.style.display = "block";
        reserveModal.classList.toggle('fade');
    }else{
        setReservation(startDate,endDate,userId,selectedCarId);
    }
});


const setReservation = function (startDate,endDate,userId,selectedCarId){
    showReserveSpinner(true);
    params = `fromdate=${startDate}&todate=${endDate}&userid=${userId}&carid=${selectedCarId} `;
    var xhr = new XMLHttpRequest();
    //Send the proper header information along with the request
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            showReserveSpinner(false);
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                message.innerHTML = "The reservation was added successfully";
                reserveModal.style.display = "block";
                reserveModal.classList.toggle('fade');
            }
            else {
                console.error(xhr.responseText);
            }
        }
    }
    xhr.open('POST', '/postRes', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(params);
}

const getAllCars = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                const cars_row = document.getElementById("cars_row");
                for (let i = 0; i < cars_row.children.length; i++) {
                   cars_row.children[i].getElementsByTagName('img')[0].src = data[i].image;
                   cars_row.children[i].getElementsByTagName('p')[0].innerHTML =  data[i].make
                    + "<br /> Model: " + data[i].model
                    + "<br /> Color: " + data[i].color
                    + "<br /> Setes: " + data[i].seatsnumber
                    + "<br /> Year: " + data[i].year;
                   
                  cars_row.children[i].getElementsByTagName('small')[0].innerHTML =  "<h6>" +data[i].rate +  " Stars </h6>";
                  cars_row.children[i].getElementsByTagName('button')[0]
                   .addEventListener('click',()=>{
                    selectedCarId =data[i].id;
                    console.log(selectedCarId);
                   });
                }
                hideGallery(false);
                var gallery = document.getElementById('Lorem_Ipsum').offsetTop; //Getting Y of target element
                window.scrollTo(0, gallery)
            }
            else {
                console.error(xhr.responseText);
            }
        }
    }
    xhr.open('GET', '/getCar', true);
    xhr.send();
}

function hideGallery(hide) {
    var x = document.getElementById("Lorem_Ipsum");
    if (hide) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const getAvailableCars = function (startDate,endDate) {
    showSearchSpinner(true);
    params = `todate=${startDate}&fromdate=${endDate}`;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            showSearchSpinner(false);
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                const cars_row = document.getElementById("cars_row");
                for (let i = 0; i < cars_row.children.length; i++) {
                   cars_row.children[i].getElementsByTagName('img')[0].src = data[i].image;
                   cars_row.children[i].getElementsByTagName('p')[0].innerHTML =  data[i].make
                    + "<br /> Model: " + data[i].model
                    + "<br /> Color: " + data[i].color
                    + "<br /> Setes: " + data[i].seatsnumber
                    + "<br /> Year: " + data[i].year;
                   
                  cars_row.children[i].getElementsByTagName('small')[0].innerHTML =  "<h6>" +data[i].rate +  " Stars </h6>";
                  cars_row.children[i].getElementsByTagName('button')[0]
                   .addEventListener('click',()=>{
                    selectedCarId =data[i].id;
                    console.log(selectedCarId);
                   });
                }
                hideGallery(false);
                var gallery = document.getElementById('Lorem_Ipsum').offsetTop; //Getting Y of target element
                window.scrollTo(0, gallery)
            }
            else {
                console.error(xhr.responseText);
            }
        }
    }
    xhr.open('GET', '/getAvailableCars' +"?" + params, true);
    xhr.send();
}

function showSearchSpinner(show) {
    const searchSpinner = document.getElementById("searchspinner");
    if (show) {
        searchSpinner.style.display = "block";
    } else {
        searchSpinner.style.display = "none";
    }
}

showSearchSpinner(false);

function showReserveSpinner(show) {
    const reserveSpinner = document.getElementById("reservespinner");
    if (show) {
        reserveSpinner.style.display = "block";
    } else {
        reserveSpinner.style.display = "none";
    }
}

showReserveSpinner(false);

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
userId = queries[0].split("=")[1];
console.log("User id = " + userId);
hideGallery(true);
