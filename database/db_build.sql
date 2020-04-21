BEGIN ;


-- Delete Tables
DROP TABLE IF EXISTS users, reservations, cars CASCADE;


-- Create New tables
CREATE TABLE users (
id SERIAL PRIMARY KEY,
firstname VARCHAR (20) NOT NULL,
lastname VARCHAR (20) NOT NULL,
email VARCHAR (50)  NOT NULL,
password VARCHAR (15) NOT NULL
);

CREATE TABLE cars (
id SERIAL PRIMARY KEY ,
make VARCHAR (20) NOT NULL,
model VARCHAR (20) NOT NULL,
year VARCHAR (20) NOT NULL,
color VARCHAR (50)  NOT NULL,
seatsnumber VARCHAR (15) NOT NULL,
rate VARCHAR (15) NOT NULL,
image VARCHAR (120) NOT NULL
);

CREATE TABLE reservations ( 
id SERIAL PRIMARY KEY ,
userid VARCHAR (20) NOT NULL,
carid VARCHAR (20) NOT NULL,
fromdate DATE  NOT NULL,
todate DATE NOT NULL
);


insert into users (firstname, lastname, email, password) values ('Cassaundra', 'Bloxham', 'cbloxham0@tamu.edu', 'BiwNM5eVU');
insert into users (firstname, lastname, email, password) values ('Lelia', 'Retter', 'lretter1@imgur.com', 'eEiaahU');
insert into users (firstname, lastname, email, password) values ('Renee', 'Antal', 'rantal2@reuters.com', '0ZRKyK335');
insert into users (firstname, lastname, email, password) values ('Somerset', 'Bahia', 'sbahia3@marketwatch.com', 'i4A7ppCRYem');
insert into users (firstname, lastname, email, password) values ('Danny', 'Pinch', 'dpinch4@storify.com', 'GsSmn8I');
insert into users (firstname, lastname, email, password) values ('Garik', 'Chicchetto', 'gchicchetto5@economist.com', 'PUIWVfL');
insert into users (firstname, lastname, email, password) values ('Shellie', 'Pryke', 'spryke6@constantcontact.com', '196uOpFil82X');
insert into users (firstname, lastname, email, password) values ('Lexis', 'Bennell', 'lbennell7@alexa.com', 'XtWurJnVfhw');
insert into users (firstname, lastname, email, password) values ('Brade', 'Malatalant', 'bmalatalant8@mit.edu', '1CndFa');
insert into users (firstname, lastname, email, password) values ('Nadean', 'Oxbrow', 'noxbrow9@networkadvertising.org', 'IcE3160Lxct');


insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Acura', 'NSX', 2002, 'Purple', 2, 3, 'http://dummyimage.com/156x204.png/dddddd/000000');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Mitsubishi', 'Outlander', 2005, 'Maroon', 4, 4, 'http://dummyimage.com/107x215.png/5fa2dd/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('BMW', '7 Series', 1995, 'Aquamarine', 2, 9, 'http://dummyimage.com/196x198.png/dddddd/000000');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Ford', 'Tempo', 1991, 'Violet', 5, 10, 'http://dummyimage.com/188x147.png/5fa2dd/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Mazda', 'B-Series', 1998, 'Red', 3, 1, 'http://dummyimage.com/204x247.png/5fa2dd/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Mazda', 'RX-7', 1988, 'Green', 2, 4, 'http://dummyimage.com/237x191.png/cc0000/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('GMC', '2500', 1993, 'Turquoise', 2, 3, 'http://dummyimage.com/184x187.png/cc0000/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Toyota', 'Corolla', 2003, 'Turquoise', 5, 9, 'http://dummyimage.com/180x229.png/5fa2dd/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('GMC', 'Savana 3500', 2005, 'Orange', 5, 7, 'http://dummyimage.com/209x218.png/cc0000/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Lotus', 'Exige', 2010, 'Fuscia', 5, 3, 'http://dummyimage.com/141x118.png/5fa2dd/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Audi', 'S4', 2011, 'Maroon', 4, 8, 'http://dummyimage.com/216x250.png/dddddd/000000');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Hyundai', 'Accent', 2009, 'Khaki', 4, 3, 'http://dummyimage.com/159x103.png/cc0000/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Ford', 'F150', 1994, 'Mauv', 4, 3, 'http://dummyimage.com/242x192.png/5fa2dd/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('BMW', 'X5', 2011, 'Indigo', 4, 5, 'http://dummyimage.com/109x101.png/cc0000/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Nissan', 'Maxima', 1993, 'Yellow', 5, 8, 'http://dummyimage.com/250x108.png/cc0000/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Ford', 'E350', 2007, 'Teal', 2, 10, 'http://dummyimage.com/213x221.png/dddddd/000000');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Pontiac', 'GTO', 1969, 'Puce', 5, 6, 'http://dummyimage.com/169x214.png/5fa2dd/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('GMC', 'Sonoma', 2001, 'Khaki', 4, 4, 'http://dummyimage.com/212x219.png/ff4444/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Ford', 'Festiva', 1991, 'Yellow', 4, 9, 'http://dummyimage.com/174x250.png/ff4444/ffffff');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Mercedes-Benz', '300D', 1992, 'Purple', 2, 10, 'http://dummyimage.com/152x175.png/cc0000/ffffff');


insert into reservations (userid, carid, fromdate, todate) values (3, 9, '11/5/2019', '5/26/2019');
insert into reservations (userid, carid, fromdate, todate) values (10, 5, '4/22/2019', '3/4/2020');
insert into reservations (userid, carid, fromdate, todate) values (9, 17, '4/21/2019', '8/5/2019');
insert into reservations (userid, carid, fromdate, todate) values (8, 3, '1/6/2020', '6/8/2019');
insert into reservations (userid, carid, fromdate, todate) values (2, 18, '1/16/2020', '6/16/2019');
insert into reservations (userid, carid, fromdate, todate) values (2, 16, '4/27/2019', '2/19/2020');
insert into reservations (userid, carid, fromdate, todate) values (4, 11, '1/18/2020', '12/29/2019');
insert into reservations (userid, carid, fromdate, todate) values (9, 7, '5/17/2019', '6/8/2019');
insert into reservations (userid, carid, fromdate, todate) values (2, 7, '1/27/2020', '6/23/2019');
insert into reservations (userid, carid, fromdate, todate) values (4, 14, '2/15/2020', '9/1/2019');

COMMIT;