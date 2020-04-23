# CarShare
A project for sharing cars :oncoming_automobile:	:seedling:

<b>Contents</b>
- User Story
- Website Design
- Database Design
- Server Design

Login Credentials (for code review):
 - Username: Lexis
- Password: XtWurJnVfhw

## User Story

 As a member of WebAhead who has a car I would like to share...

- I can add my car to the database 	:white_check_mark:

As a member of WebAhead who is interested in using a car...

- I can browse for available cars :heavy_check_mark:
- I can reserve a car for certain dates :heavy_check_mark:
- I can unreserve a car :x:	


Suggested additional requirements / stretch goals:

- I can login to the site :heavy_check_mark:
- I can rate the car after I've used it :x:	
- Cars can simultaneously be reserved by multiple users but for different dates :heavy_check_mark:



## Website Design

Sign in:

![sign in](https://i.ibb.co/bQVc5tV/carshare1.png)


Search for Car:

![select car](https://i.ibb.co/5xm7QSn/sharecar2.png)

<i>Add Car page and User Details page WIP</i>


## Database Design

Schema:
```
Table 1 - Users
	- id
	- first name
	- last name
	- phone number
	- email
	- password
	- image
	-------------------------
Table 2 - Cars
	- id
	- type
	- model
	- engine
	- color
	- sets number
	- raite
	- image
	-------------------------
Table 3 - Reservations (Pivot table)
	- id
	- user_id
	- car_id
	- from_date
	- to_date
	-------------------------
  ```
  
  
  MANY to MANY relationship between users and cars, where reservations links to two primary IDs
  
  
  ## Server Design
  
Routing:
 ``` 
Static:
		-------
  - Login page
  - User Info page
  - Reservation page
  - Adding Car page 

Dynamic
		-------
 GET:
 - Get All Cars
 - Get Available Cars
 - Get Password check
 - Get user details & reservations
 
 POST:
 - Post reservations
 - Post new Cars

  ```
  
  ## Conclusion
  - BIG project, SMALL team :disappointed_relieved:
  - We also put each team member on their weakest area! :frog:
  - So sadly no time for testing, hosting & security :unlock:
  - Having your own data base is a fast and useful way to store, amend & access data :file_cabinet:
  - Designing your database correctly at the start is important! :twisted_rightwards_arrows:
  

  
