BEGIN ;


-- Delete Tables
DROP TABLE IF EXISTS users, reservations, cars CASCADE;


-- Create New tables
CREATE TABLE users (
id SERIAL PRIMARY KEY,
firstname VARCHAR (20)  UNIQUE NOT NULL ,
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
image VARCHAR (15000) NOT NULL
);

CREATE TABLE reservations ( 
id SERIAL PRIMARY KEY ,
userid INTEGER NOT NULL,
carid INTEGER NOT NULL,
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


insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Acura', 'NSX', 2002, 'Purple', 2, 3, 'https://www.wallpaperflare.com/static/751/782/488/acura-tl-2002-blue-wallpaper.jpg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Mitsubishi', 'Outlander', 2005, 'Maroon', 4, 4, 'https://lh3.googleusercontent.com/proxy/fB06D_RNJbxdUj-hu3HT3uDaRAggL5kb3TENi-KBhfillAgqWW-vD27n8z7J6TOziEDo579bJEYa9kQDGfSLBIz8dCL-_vcBpKVZ0BO8AIHIoMbQblUZBJkJFqhdkaMqhg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('BMW', '7 Series', 1995, 'Aquamarine', 2, 9, 'https://i.pinimg.com/originals/29/63/6e/29636ec142974a28dce83808473c9012.jpg');
/*insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Ford', 'Tempo', 1991, 'Violet', 5, 10, 'data:image/jpeg;base64,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');*/
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Mazda', 'B-Series', 1998, 'Red', 3, 1, 'https://lh3.googleusercontent.com/proxy/vuvXfE7DKgcmFeEuqFsSLnwIN9IVvrh4jUm8i9WXTzEv7DAPl6T1Avqlv9f6qBHZNY-bNeGujVBcCyymXtQrn_boA-XgO3K-Y05kVY8');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Mazda', 'RX-7', 1988, 'Green', 2, 4, 'https://pict1.reezocar.com/images/360/autotrader.nl/RZCATTNL3064E59A41E2/MAZDA-RX-7-00.jpg');
/*insert into cars (make, model, year, color, seatsnumber, rate, image) values ('GMC', '2500', 1993, 'Turquoise', 2, 3, 'data:image/jpeg;base64,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');*/
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Toyota', 'Corolla', 2003, 'Turquoise', 5, 9, 'https://ae01.alicdn.com/kf/HTB1sHUGSFXXXXcPXFXXq6xXFXXXr/For-Toyota-Corolla-2003-Accessories-ABS-Chrome-Design-Door-Handle-Cover-For-Toyota-Corolla-2001-2007.jpg');
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


insert into reservations (userid, carid, fromdate, todate) values (3, 9, '11/5/2020', '12/5/2020');
insert into reservations (userid, carid, fromdate, todate) values (10, 5, '1/4/2021', '2/4/2021');
insert into reservations (userid, carid, fromdate, todate) values (9, 17, '4/10/2021', '5/5/2021');
insert into reservations (userid, carid, fromdate, todate) values (8, 3, '5/6/2020', '6/8/2020');
insert into reservations (userid, carid, fromdate, todate) values (2, 18, '5/01/2020', '6/10/2020');
insert into reservations (userid, carid, fromdate, todate) values (2, 16, '4/04/2020', '5/11/2020');
insert into reservations (userid, carid, fromdate, todate) values (4, 11, '7/09/2020', '10/10/2020');
insert into reservations (userid, carid, fromdate, todate) values (9, 7, '5/06/2020', '6/8/2020');
insert into reservations (userid, carid, fromdate, todate) values (2, 7, '9/07/2020', '9/09/2020');
insert into reservations (userid, carid, fromdate, todate) values (4, 14, '8/10/2020', '9/1/2020');

COMMIT;
