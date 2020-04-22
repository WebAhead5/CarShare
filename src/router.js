const { LoginHandler,
  UserHandler, showCarHandler, addCarHandler, PublicHandler, errorHandler, getCarHandler, getUserHandler, passHandler, postReservationHandler, postUserCarHandler, getAvailableCarsHandler } = require('./handler.js')

const router = (request, response) => {

  var Url = request.url;
  console.log(Url)
  if (Url === '/') {
    LoginHandler(response);

  }
  else if (Url === '/User') {
    UserHandler(response)
  }
  else if (Url === '/showCar') {
    showCarHandler(response)

  }
  else if (Url === '/addCar') {
    addCarHandler(response);
  }
  else if (Url.includes('public')) {
    PublicHandler(Url, response);

  }
  else if (Url === '/getCar') {

    getCarHandler(response);

  }
  else if (Url.includes('/getUser')) {

    getUserHandler(request, response);

  }
  else if (Url.includes('/passCheck')) {

    passHandler(request, response);

  }
  else if (Url === '/postCar' && request.method === 'POST') {

    postUserCarHandler(request, response);

  }
  else if (Url.includes('/postRes') && request.method === 'POST') {

    postReservationHandler(request, response);

  }
  else if (Url === '/getAvailableCars' && request.method === 'POST') {

    getAvailableCarsHandler(request, response);

  }else if(Url === '/createReservation'){
    createReservationHandler(carId,userId,beginDate,endDate);
  }else if(Url === '/?'){

  }else {
    errorHandler(response);
  }
}


module.exports = router;


