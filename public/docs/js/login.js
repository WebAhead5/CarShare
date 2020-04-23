
const loginButton = document.getElementById('user_log_in');
const userNmae = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');
var user ={};

const reserveModal = document.getElementById("reserveModal");
var message = reserveModal.getElementsByTagName('p')[0];

const closeButton = document.getElementById("close_modal");
closeButton.addEventListener('click', ()=> {
 reserveModal.style.display = "none";
 reserveModal.classList.toggle('fade');

})

loginButton.addEventListener('click',() => {
    event.preventDefault();
    login(userNmae.value,password.value);
})


const login = function (username,password) {
    var params = "name=" + username + "&" + "password=" +password;
    console.log(params);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                Object.assign(user,data[0]);
                if(user.id != undefined){
                    window.location = "./public/album.html" + "?userid=" + user.id;
                }else{
                    message.innerHTML = "User name or password not exisit, Please check again.To register we don't have option now, talk to Farid/Jack/Amir and maybe the will add you to the database";
                    reserveModal.style.display = "block";
                    reserveModal.classList.toggle('fade');
                }
            }else if(xhr.status === 400){
                message.innerHTML = "Error, Wrong email or password";
                reserveModal.style.display = "block";
                reserveModal.classList.toggle('fade');
            }else{

            }
        }
    }
    xhr.open('GET', '/passCheck' + "?" + params, true);
    xhr.send();
}