const tape = require("tape");
const runDbBuild = require("./db_build");
const sqlFuncs = require("../queries");
var database = require("../db_connection.js")

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});

//########Funcs to test #########
// sqlFuncs.checkPassword;
// sqlFuncs.getUser
// sqlFuncs.getAllCars;
// sqlFuncs.postReservation;
// sqlFuncs.postUserCar;

tape("checkPassword", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors

        let expected = [
            {
                id: 1,
                firstname: "Cassaundra",
                lastname: "Bloxham",
                email: "cbloxham0@tamu.edu",
                password: "BiwNM5eVU"
            }
        ];

        sqlFuncs.checkPassword("cbloxham0@tamu.edu", "BiwNM5eVU", (err, result) => {
            if (err) console.log(err);
            t.deepEqual(result, expected, "Returns expected data based on password");
            t.end();
        });
    });
});


tape("get user data & reservations", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors


        sqlFuncs.getUser("Lexis", (err, result) => {
            if (err) console.log(err);


            const expected =
            {
                id: 4,
                firstname: 'Lexis',
                lastname: 'Bennell',
                email: 'lbennell7@alexa.com',
                password: 'XtWurJnVfhw',
                userid: 8,
                carid: 3,
            }

            t.deepEqual(result.length, 1, "Returns one user");
            t.deepEqual(typeof result, "object", "Returns object");
            t.deepEqual(result[0].userid, expected.userid, "Returns expected user ID");
            t.deepEqual(result[0].carid, expected.carid, "Returns expected car ID");
            t.end();
        });
    });
});


tape("get all cars", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors


        var expected = {
            id: 1,
            make: 'Acura',
            model: 'NSX',
            year: '2002',
            color: 'Purple',
            seatsnumber: '2',
            rate: '3',
            image: 'https://www.wallpaperflare.com/static/751/782/488/acura-tl-2002-blue-wallpaper.jpg'
        }


        sqlFuncs.getAllCars((err, result) => {
            if (err) console.log(err);
            //console.log(result)
            t.deepEqual(typeof result, "object", "Returns expected data type for all cars");
            t.deepEqual(result[0].make, expected.make, "Returns first car in list is Acura");
            t.deepEqual(result[0].color, expected.color, "Returns first car in list color as purple");
            t.deepEqual(result.length, 18, "Returns expected number of cars in DB");
            t.end();
        });
    });
});


tape("get available cars", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors

        sqlFuncs.getAvailableCars('2020-08-10', '2020-10-10', (err, result) => {
            if (err) console.log(err);
            t.deepEqual(typeof result, "object", "Returns expected data for available cars");
            t.deepEqual(result.length, 6, "Returns expected data for available cars");
            t.end();
        });
    });
});

tape("post reservation", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error");

        sqlFuncs.postReservation(4, 8, "2020-08-10", "2020-10-10")
        database.query('select * from reservations; ', (err, res) => {
            if (err) cb(err)
            t.deepEqual(res.rows[10].userid, 4, "Returns the added User ID")
            t.deepEqual(res.rows[10].carid, 8, "Returns the Car ID")
            t.deepEqual(res.rows.length, 11, "Returns that extra reservation was added");
            t.end();
        });
    });
});

tape("post cars", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error");
        sqlFuncs.postUserCar("make", "model", 1990, "blue", 4, 9, "image")
        database.query('select * from cars; ', (err, res) => {
            //console.log(res)
            if (err) cb(err)
            //t.deepEqual(res.rows[18].make, "make", "Returns the new car make")
            //t.deepEqual(res.rows.length, 19, "Returns that extra car was added");
            t.end();
        });
    });
});