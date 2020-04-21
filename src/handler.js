const { readFile } = require('fs');
const path = require('path');



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


const addCarHandler = response => {
    const filepath = path.join(__dirname, '..', 'public', 'AddCar.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });
};


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
    UserHandler, showCarHandler, addCarHandler, PublicHandler, errorHandler
}