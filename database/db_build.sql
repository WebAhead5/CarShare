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
year INTEGER NOT NULL,
color VARCHAR (50)  NOT NULL,
seatsnumber VARCHAR (15) NOT NULL,
rate VARCHAR (15) NOT NULL,
image VARCHAR (500) NOT NULL
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
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Ford', 'Tempo', 1991, 'Violet', 5, 10, 'https://cloud.leparking.fr/2018/11/08/04/48/ford-scorpio-ford-scorpio-1995-violet_6533340016.jpg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Mazda', 'B-Series', 1998, 'Red', 3, 1, 'https://lh3.googleusercontent.com/proxy/vuvXfE7DKgcmFeEuqFsSLnwIN9IVvrh4jUm8i9WXTzEv7DAPl6T1Avqlv9f6qBHZNY-bNeGujVBcCyymXtQrn_boA-XgO3K-Y05kVY8');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Mazda', 'RX-7', 1988, 'Green', 2, 4, 'https://pict1.reezocar.com/images/360/autotrader.nl/RZCATTNL3064E59A41E2/MAZDA-RX-7-00.jpg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('GMC', '2500', 1993, 'Turquoise', 2, 3, 'https://i.ytimg.com/vi/xnJT26NmvYQ/hqdefault.jpg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Toyota', 'Corolla', 2003, 'Turquoise', 5, 9, 'https://ae01.alicdn.com/kf/HTB1sHUGSFXXXXcPXFXXq6xXFXXXr/For-Toyota-Corolla-2003-Accessories-ABS-Chrome-Design-Door-Handle-Cover-For-Toyota-Corolla-2001-2007.jpg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('GMC', 'Savana 3500', 2005, 'Orange', 5, 7, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-gmc-savana-mmp-1-1579110268.jpg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Lotus', 'Exige', 2010, 'Fuscia', 5, 3, 'https://www.minishrine.com/registry/pictures/200862/2010_Lotus_Exige_S_Starlight_Black_T_J_Smith_000.jpg'); 
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Audi', 'S4', 2011, 'Maroon', 4, 8, 'https://upload.wikimedia.org/wikipedia/commons/1/16/Audi_S4_B8_Kombi_front_20090412.jpg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Hyundai', 'Accent', 2009, 'Khaki', 4, 3, 'https://pict1.reezocar.com/images/660/marktplaza.nl/RZCMKPLZ88134040/HYUNDAI-ACCENT-00.jpg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Ford', 'F150', 1994, 'Mauv', 4, 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ52EtN6Ep5H8nEgEAF17cr_g7752UohI5WvD-qm2aq8Q47qPP-&usqp=CAU');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('BMW', 'X5', 2011, 'Indigo', 4, 5, 'https://www.bmw.co.il/content/dam/bmw/common/all-models/x-series/x5/2018/at-a-glance/bmw-g05-x5-onepager-exterior-interior-gallery-l-01.jpg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Nissan', 'Maxima', 1993, 'Yellow', 5, 8, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-nissan-maxima-mmp-1-copy-1565888499.jpg');
insert into cars (make, model, year, color, seatsnumber, rate, image) values ('Ford', 'E350', 2007, 'Teal', 2, 10, 'https://st.mascus.com/imagetilewm/product/sandhillsapi/ford-e350,11657906-1.jpg');
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
