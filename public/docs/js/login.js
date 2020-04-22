const loginButton = document.getElementById('user_log_in');
const userNmae = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');
var user ={};

loginButton.addEventListener('click',() => {
    event.preventDefault();
    login(userNmae.value,password.value);
})


const login = function (username,password) {
    var params = "name=" + username + "&" + "password=" +password;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                Object.assign(user,data[0]);
            }else if(xhr.status === 400){
                
            }else{

            }
        }
    }
    xhr.open('GET', '/passCheck' + "?" + params, true);
    xhr.send();
}