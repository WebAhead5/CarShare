/* eslint-disable no-unused-vars */
const test = require("tape");
const supertest = require("supertest");
const router = require("../router");

test("route to index.html", t => {
    supertest(router)
      .get("/")
      .expect(200)
      .expect("content-type", "text/html")
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });
  test("route to showCar", t => {
    supertest(router)
      .get("/showCar")
      .expect(200)
      .expect("content-type", "text/html")
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });

  //public files
  test("route to css sigin file",t => {
    supertest(router)
      .get("/public/docs/4_4/assets/css/signin.css")
      .expect(200)
      .expect("content-type", "text/css")
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });


  test("check album .html ",t => {
    supertest(router)
      .get("/public/album.html")
      .expect(200)
      .expect("content-type", "text/html")
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });

  test("check album .css ",t => {
    supertest(router)
    .get("/public/docs/4_4/assets/css/album.css")
    .expect(200)
      .expect("content-type", "text/css")
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });


  test("check album .js ",t => {
    supertest(router)
    .get("/public/docs/js/album.js")
    .expect(200)
      .expect("content-type", "application/javascript")
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });



  test("route check of getCar", t => {
    supertest(router)
      .get("/getCar")
      .expect(200)
      //.expect("content-type", "application/json")
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });



 







/*
  test("route to specific word", t => {
    supertest(app)
      .get("/posts/?string=haifa")
      .expect(200)
      .expect("content-type", "application/json")
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });

*/