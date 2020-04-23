var database = require("./db_connection.js")

//GET

//Get all Cars from Car Table
function getAllCars(cb) {
    database.query('select * from cars; ', (err, res) => {
        if (err) cb(err)
        else cb(null, res.rows);
    })
}

//Get Available Cars from Car Table
function getAvailableCars(fromDate, toDate, cb) {
    database.query(`select * from cars inner join reservations on cars.id = reservations.carid where reservations.fromdate Not between date '${fromDate}' AND date '${toDate}' AND reservations.todate Not between date '${fromDate}' AND date '${toDate}';`, (err, res) => {
        if (err) cb(err)
        else cb(null, res.rows);
    })
}

//Check if password is correct and return user data
function checkPassword(UserName, Password, cb) {
    database.query(`select * from users where email='${UserName}' AND password='${Password}';`, (err, res) => {
        if (err) cb(err)
        else cb(null, res.rows);
    })
}

//Get user data including reservations
function getUser(UserName, cb) {
    database.query(`select * from users inner join reservations on users.id = reservations.userid where firstname = '${UserName}'; `, (err, res) => {
        if (err) cb(err)
        else cb(null, res.rows);
    })

}

//POST

//Insert new car to database
function postUserCar(make, model, year, color, seatsnumber, rate, image) {
    console
    database.query(`insert into cars (make, model, year, color, seatsnumber, rate, image) values ('${make}', '${model}', ${year},'${color}',${seatsnumber},${rate},'${image}');`)
}

//Insert new reservation to database
function postReservation(userid, carid, fromdate, todate) {
    database.query(`insert into reservations (userid, carid, fromdate, todate) values (${userid}, ${carid}, '${fromdate}','${todate}');`)
}


module.exports = { getAllCars, getUser, checkPassword, getAvailableCars, postReservation, postUserCar }
//function add user -regist


