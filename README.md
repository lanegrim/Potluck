# Potluck
A full-CRUD recipe journaling and discovery app built by Lane Grimaud and Brandon Wright

## Technologies Used
* Server:
  * Node.JS with express
* Authentication/User Sessions:
  * bcrypt, dotenv, express-sessions
* Database:
  * Mongo DB Atlas, accessed with Mongoose
* Front-End:
  * React.JS

## Approach
We initially set out to create a full-CRUD MERN app that would allow users to journal their personal recipes and discover others'. This evolved throughout development as we implemented authentication and limited users' access to editing and deleting functionality. On the surface, Potluck remains a resource for home chefs to catalogue and share their favorite recipes. From a development standpoint, however, this app is an exercise in developing complex, dynamic forms in React, and the relationship between these forms and mongoose schemata.

## Bugs and Opportunities for Further Development
* When editing the same recipe multiple times in a row, if a user fills a text input by pasting text or autofilling and the text matches what was last entered into that input, the onChange listener does not detect the text.
* We attempted to have a successful user registration render the log-in form and remove the registration form from the page, but were unable to have the submission of the registration form perform multiple functions successfully.
* The new recipe form and edit recipe forms are linked by the React App component state such that when users enter text into one form, the other is also filled.
* while users are currently able to filter recipes by type and by their ownership, we would like users to be able to search recipes by title as well as by owner. 
* Additionally, we would like to add dietary considerations (e.g. vegetarian, vegan, gluten-free, etc.) to recipes and allow users to filter recipes by these tags.

## Visit the Deployed App
* https://thepotluck.herokuapp.com/