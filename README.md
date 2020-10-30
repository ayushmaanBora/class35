# synchronousBallMovement
Ball moving synchronously
Form.js - HTML was used to create any content like a form on a page. HTML is similar to markdown in some ways. An HTML contains elements that defined the structure of a page. A simple html page contains: head - where all the scripts and stylesheets for the page is added. body - where all the content of the page is added The body of an HTML page can contain several different types of elements: h1,h2,h3: display headings of different sizes input : to collect input from the user button: to display a button This model of an HTML page is called Document object Model (or DOM) We used the p5 Dom library to create the form. We wanted to greet the player, when the player writes their name and log in. We also wanted to update the playerCount and the player name in the database. button.mousePressed() was used to trigger an action when a mouse button was pressed. It expects a function as an argument. ©


Player.js - We wrote the code for the Player Class. We wrote a function getCount() to get the playerCount and updateCount() to update the playerCount in the database. To update the player name in the database: We needed to create new entries in the database. We did this using string concatenation. If the playerCount was 1, we created a database entry for player1 and we set the name for it and so on ©


Game.js - 