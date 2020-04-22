const { LoginHandler,
  UserHandler, showCarHandler, addCarHandler, PublicHandler, errorHandler, getCarHandler, getUserHandler, passHandler, postReservationHandler, postUserCarHandler, getAvailableCarsHandler } = require('./handler.js')

const router = (request, response) => {

  var Url = request.url;
  console.log(Url)
  if (Url === '/') {
    LoginHandler(response);
  }//HTML
  else if (Url === '/User') {
    UserHandler(response)
  }//HTML
  else if (Url === '/showCar') {
    showCarHandler(response)
  }//HTML
  else if (Url === '/addCar') {
    addCarHandler(response);
  }//OTHER FILES
  else if (Url.includes('public')) {
    PublicHandler(Url, response);
  }//GET REQ
  else if (Url === '/getCar') {
    getCarHandler(response);
  }//GET REQ
  else if (Url.includes('/getUser')) {
    getUserHandler(request, response);
  }//GET REQ
  else if (Url.includes('/passCheck')) {
    passHandler(request, response);
  }//POST REQ
  else if (Url.include('/postCar') && request.method === 'POST') {
    postUserCarHandler(request, response);
  }//POST REQ
  else if (Url.includes('/postRes') && request.method === 'POST') {
    postReservationHandler(request, response);
  }//GET REQ
  else if (Url.include('/getAvailableCars')) {
    getAvailableCarsHandler(request, response);
  }//ERROR
  else {
    errorHandler(response);
  }
}


module.exports = router;


