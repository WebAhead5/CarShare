const { readFile } = require('fs');
const path = require('path');
const { getAllCars, getUser, checkPassword, postReservation, postUserCar, getAvailableCars } = require('../database/queries.js')
const url = require('url')
const querystring = require('querystring')


//HTML - Index/Login Page
const LoginHandler = response => {
    const filepath = path.join(__dirname, '..', 'index.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });
};

//HTML - User Page
const UserHandler = response => {
    const filepath = path.join(__dirname, '..', 'public', 'user.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });
};

//HTML - Add CAR page
const addCarHandler = response => {
    const filepath = path.join(__dirname, '..', 'public', 'AddCar.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });
};

//HTML - Show Cars Page
const showCarHandler = response => {

    const filepath = path.join(__dirname, '..', 'public', 'album.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });
};

//Func to extract values from GET REQUEST strings
function getParamsFromRequest(request) {
    let search = url.parse(request.url).query;

    return querystring.parse(search);
}

//####### GET REQUESTS

//GET REQUEST - CHECK PASSWORD
const passHandler = (request, response) => {   //need to get varibles from front end
    // var username = 'Cassaundra'
    // var password = 'BiwNM5eVU'

    var username = getParamsFromRequest(request).name
    var password = getParamsFromRequest(request).password

    checkPassword(username, password, (err, result) => {
        if (err) {
            response.end('sorry there is an error');
        }
        else {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end((JSON.stringify(result)));
        }
    });

}

//GET REQUEST - USERS INFO
const getUserHandler = (request, response) => {

    var name = getParamsFromRequest(request).name

    getUser(name, (err, result) => {
        if (err) {
            response.end('sorry there is an error');
        }
        else {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end((JSON.stringify(result)));
        }
    })
}

//GET REQUEST - SHOW ALL CARS
const getCarHandler = response => {

    getAllCars((err, result) => {
        if (err) {
            response.end('sorry there is an error');
        }
        else {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end((JSON.stringify(result)));
        }
    })
}


//GET REQUEST - AVAIABLE CARS
const getAvailableCarsHandler = (request, response) => {
    // var fromdate = '2020-08-01'
    // var todate = '2020-10-01'

    var todate = getParamsFromRequest(request).todate
    var fromdate = getParamsFromRequest(request).fromdate

    getAvailableCars(todate, fromdate, (err, result) => {
        if (err) {

            response.end('sorry there is an error');
        }
        else {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end((JSON.stringify(result)));
        }
    })
}





//####### POST REQUESTS

//POST REQUEST - ADD RESERVATION
const postReservationHandler = (request, response) => {

    var allTheData = '';
    request.on('data', function (chunkOfData) {
        allTheData += chunkOfData;
    });

    request.on('end', function () {
        console.log("all data", allTheData)
        var convertedData = querystring.parse(allTheData);

        var userid = convertedData.userid
        var carid = convertedData.carid
        var fromdate = convertedData.fromdate
        var todate = convertedData.todate
        console.log(userid, carid, fromdate, todate)

        //Issues with a-sync?
        postReservation(userid, carid, fromdate, todate)

        response.writeHead(303, { "Location": "/getCar" }) //send back to start
        response.end();

    })

}

//POST REQUEST - ADD CAR
const postUserCarHandler = (request, response) => {

    var allTheData = '';
    request.on('data', function (chunkOfData) {

        allTheData += chunkOfData;
    });
    request.on('end', function () {
        console.log("all data", allTheData)
        var convertedData = querystring.parse(allTheData);

        var make = convertedData.make
        var model = convertedData.model
        var year = convertedData.year
        var color = convertedData.color
        var seatnumber = convertedData.seatnuber
        var rate = convertedData.rate
        var image = convertedData.image

        //Issues with a-sync?
        postUserCar(make, model, year, color, seatnumber, rate, image)

        response.writeHead(303, { "Location": "/addCar" }) //send back to start
        response.end();

    })
}


//Public Handler
const PublicHandler = (url, response) => {
    const filepath = path.join(__dirname, '..', url);
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        const extension = url.split('.')[1];
        console.log(extension);
        const extensionType = {
            html: 'text/html',
            css: 'text/css',
            js: 'application/javascript',
            ico: 'image/x-icon',
            svg: 'image/svg+xml',
            json: 'application/json',
            png : 'image/png',
            jpg : 'image/jpg'
        };
        response.writeHead(200, { 'content-type': extensionType[extension] });
        response.end(file);
    });
};

//ERROR Handler
const errorHandler = (response) => {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>404 Page Requested Cannot be Found</h1>');
};


module.exports = {
    LoginHandler,
    UserHandler, showCarHandler, addCarHandler, PublicHandler, errorHandler, getCarHandler, getUserHandler, passHandler, getAvailableCarsHandler, postReservationHandler, postUserCarHandler
}