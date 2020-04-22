const { readFile } = require('fs');
const path = require('path');
const { getAllCars, getUser, checkPassword, postReservation, postUserCar, getAvailableCars } = require('../database/queries.js')
const url = require('url')
const querystring = require('querystring')



const LoginHandler = response => {
    const filepath = path.join(__dirname, '..', 'public', 'index.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });
};
const UserHandler = response => {
    const filepath = path.join(__dirname, '..', 'public', 'user.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });
};


const showCarHandler = response => {

    const filepath = path.join(__dirname, '..', 'public', 'ShowCar.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });

};

const passHandler = (request, response) => {   //need to get varibles from front end
    // var username = 'Cassaundra'
    // var password = 'BiwNM5eVU'

    console.log("REQ URL:", getParamsFromRequest(request))


    var username = getParamsFromRequest(request).name
    var password = getParamsFromRequest(request).password

    if (checkPassword(username, password, (err, result) => {
        if (err) {

            response.end('sorry there is an error');
        }
        else {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end((JSON.stringify(result)));
        }
    }));

}

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

function getParamsFromRequest(request) {
    let search = url.parse(request.url).query;

    return querystring.parse(search);
}



const getUserHandler = (request, response) => {
    // console.log("TEST1", request)


    console.log("REQ URL:", getParamsFromRequest(request))


    var name = getParamsFromRequest(request).name


    console.log("NAME:", name)

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


const addCarHandler = response => {
    const filepath = path.join(__dirname, '..', 'public', 'AddCar.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });
};



const postReservationHandler = (request, response) => {

    //need to get variables from front end

    postReservation(userid, carid, fromdate, todate)

}


const postUserCarHandler = (request, response) => {

    //need to get varibles from front end

    postUserCar(make, model, year, color, seatsnumber, rate, image)


}


const getAvailableCarsHandler = (request, response) => {
    var fromdate = '2020-08-01'
    var todate = '2020-10-01'

    getAvailableCars((err, result) => {
        if (err) {

            response.end('sorry there is an error');
        }
        else {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end((JSON.stringify(result)));
        }
    })
}



const PublicHandler = (url, response) => {
    const filepath = path.join(__dirname, '..', url);
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        const [, extension] = url.split('.');
        const extensionType = {
            html: 'text/html',
            css: 'text/css',
            js: 'application/javascript',
            ico: 'image/x-icon'
        };
        response.writeHead(200, { 'content-type': extensionType[extension] });
        response.end(file);
    });
};



const errorHandler = (response) => {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>404 Page Requested Cannot be Found</h1>');
};





module.exports = {
    LoginHandler,
    UserHandler, showCarHandler, addCarHandler, PublicHandler, errorHandler, getCarHandler, getUserHandler, passHandler, getAvailableCarsHandler, postReservationHandler, postUserCarHandler
}