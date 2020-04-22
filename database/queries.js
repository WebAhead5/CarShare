var database=require ("./db_connection.js") 


function getAllCars(cb){

database.query('select * from cars; ',(err,res)=>
{
    if(err) cb(err)
    else   cb(null,res.rows); 
})
}




//function getAvailableCars()
/*
function getUserD()
{
    database.query('select * from cars; ',(err,res)=>

}

/*
function postUserCar(make, model, year, color, seatsnumber, rate, image){
    database.query(`insert into cars (make, model, year, color, seatsnumber, rate, image) values (${make}, ${model}, ${year},${color},${seatnumber},${rate}, ${image}`)
*/
//function postReservation()


module.exports ={getAllCars}
//function add user -regist


