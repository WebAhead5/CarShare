var database=require ("./db_connection.js") 


function getAllCars(cb){

database.query('select * from cars; ',(err,res)=>
{
    if(err) cb(err)
    else   cb(null,res.rows); 
})
}




function getAvailableCars(fromDate, toDate, cb) {
database.query(`select * from reservations inner join cars on cars.id = reservations.carid where reservations.fromdate Not between date '${fromDate}' AND date '${toDate}' OR reservations.to
date Not between date '${fromDate}' AND date '${toDate}')`    ,(err,res)=>
{
    if(err) cb(err)
    else   cb(null,res.rows); 
})
}




function checkPassword(UserName,Password)
{
database.query(`select * from users where firstname='${UserName}' AND password='${Password}'`,(err,res)=>
{
    if(err) cb(err)
    else   cb(null,res.rows); 
})
}



function getUser(UserName, cb)
{
    database.query(`select *  from users inner join reservations on users.id = reservations.userid where firstname = '${UserName}'; `,(err,res)=>
    {
        if(err) cb(err)
        else   cb(null,res.rows); 
    })

}


function postUserCar(make, model, year, color, seatsnumber, rate, image){
    database.query(`insert into cars (make, model, year, color, seatsnumber, rate, image) values (${make}, ${model}, ${year},${color},${seatsnumber},${rate}, ${image}`)


}
function postReservation(userid, carid, fromdate,todate)
{
 database.query(`insert into reservations (userid, carid, fromdate, todate) values (${userid}, ${carid}, ${fromdate},${todate}`)


}


module.exports ={getAllCars, getUser,checkPassword, getAvailableCars, postReservation, postUserCar}
//function add user -regist


