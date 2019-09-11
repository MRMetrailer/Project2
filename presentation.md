# RAFFLE

As a team we decided we wanted to make a ticketless raffle app that could be viewed on a website or phone. This would eliminate the problem of having to distribute tickets, have the client keep part of the ticket (no lost tickets or dealing with tipsy contestants) and the inevitable waste left after the raffle. Our goal is to have the app allow an administrator enter the information needed, conduct the raffle and display the winner all while keeping track of the name and entries and only allowing a player to win once. Our raffle app will speed up the entire process and store the data.

## How to use the App 


On the Administrator Screen the user enters the Prize name and clicks the submit button. The prize name then populates underneath the form input and upon clicking takes the user to the entries screen. The user can also delete the prize name by clicking the x button.

On the Entries screen top section the name of the game is displaying weather the game is open, # of people, the points and the winner. Clicking the View Winner button starts the raffle and displays the raffle page.
In the bottom section, the user enters the contestant's name, number of entries and selects an avatar to display, then clicks the add player button and repeats the process for the number of contestants in the raffle. The administrator only has to enter the contestants once and can use the database for multiple raffles. Once all of the contestants are entered the start raffle button is clicked and the user is directed to the raffle page.

Upon loading the Raffle page a function is triggered to display all the avatars from the collected data. Roulette.js is used for the animation incorporating the avatar database and a timeout function displays the winner's name after 8 seconds. 


## The Process

First we set up the server.js with Node and Express and installed out npms.

Then created routes for the raffle, users, games and entries using get, post, put and delete. The api routes allow to select all games, create a new game, find by id, delete by id and create entries. The Html routes load pages, uses javascript to populate the pages, find and displays entries and run the raffle. 

The MySQL database and Sequelize ORM are used to create and populate the raffle database and tables. The raffle database was created in MySQL workbench with an entry, game and user data table. The models were then created: entry.js, game.js and user.js. and the proper sequelize datatypes were assigned. The Schema file was created to build the raffle database and populate the 3 tables.

Handlebars was used to template and displays in the html. We have an index, raffle, main, 404 and game detail files to display our pages and information pulled from the database. 
The main file has our cdn scrips and links to css and bootsrap.
The index file displays the raffle admin page with the prize form, submit button and link to prize page.
Game detail is built with bootstrap and displays all the raffle and entry info.
The Raffle page also uses bootstrap and displaye the winner.
404 is the error page

Javascript was used for the raffle, models and buttons and to wire everything together.
Controller functions to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.

Used CSS to style the page.

Routes - forward the supported requests (and any information encoded in request URLs) to the appropriate controller functions.

The App is deployed via Heroku

Overall setup with bootstrap, css and server with npm installs.

Prizes/ Administrtor page
has the sample raffle that has been won displayed.
Routes - 
Sequelize,Models -
Javascript -
Handlebars - displays prize form field, Submit button and then prize pulling info from the database

Entries Page
Routes - api and html
Javascript - handled requests and saves to the database, buttons (delete, save, select and start raffle) and errors
Sequelize, Models - entry.js model adds unique id, name, avatar, points and if the contestant won to the db.
Handlebars - uses bootstrap creates forms and displays the entry info (describe) and stores it with an avatar. 

Raffle Page
Routes -
Sequelize - winner name pulled from raffle db
Javascript - Roulette.js new tech
Handlebars - pulls and displays winner name starts roulett.js

Summary -
Set up a sever
We used # of routes and details
With # of Models, db tables with details
which displayed using bootstrap and handlebars for # of pages and details





## Tech Used
Node, Express, Sequelize, MySQL, Handelbars, Bootstrap, Javascript, Jquery and CSS.

## New Tech
Roulette.js used in the javascript for the slot machine reel animation.

## Future deployment
Implementing a mobile friendly image capture to take place of the avatar and adding an email or phone to gather for marketing purposes.

## Team Effots 
Mario - frontend and raffle and roulette.js
Matt - backend routes and databases
Brian - Middle Presentation
Ahmend - Presentation

## Challenges 
picking random winner code
starting raffle animation 
getting buttons working and populating databases
Git Hub