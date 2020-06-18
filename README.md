# keto-diet-capstone-client
Everything Keto app is using Spoonacular in order to help the users to search for keto recipes based on a choosen ingredient.
It will display recipes nutriment information as well as their pictures.
Also, users will be able save their favorite recipes into their account, as well as access them evertime they log in.
All the more, the app will enable users to post/update/delete comments about their own diet routine, workout routine or even share their own recipes.
It’s user-friendly, and accessible to everyone.

## Working Prototype
You can access a working prototype of the app here: !!!! WORKING PROTOTYPE HERE !!!!

## User Stories
This app is for logged-in user.

#### Landing Page
* As a visitor,
* I want to understand what I can do with this app (or sign up, or log in), 
* So I can decide if I want to use it.

#### Login Page
* As a returning register user
* I want to enter my password and username to use this app,
* So I can have access to my account.


#### Sign Up
* As a visitor
* I want to register to use this app
* So I can create a personal Keto Everything account.


#### Home Page
* As a logged-in user,
* I want to be able to preview the content of the app,
* So i can decide what section I want to navigate to.


#### About Page
* As a logged-in user,
* I want to see guidelines about the keto diet,
* So that I can start searching and gathering information about the keto diet.

#### Recipes Page
* As a logged-in user,
* I want to be able to find diversed keto recipes from the app, 
* So that I can control and monitor my eating habits.


#### Forum Page
* As a logged-in user,
* I want to be able to search and post comments about the keto experience,
* So that I can share ideas with the other members.


#### Account Page
* As a logged-in user,
* I want to be able to see my saved favorite recipes from my previous searches, as well as my previous submitted comments,
* So that I can keep track of my activity on the app.

### Wireframes
Landing/Login Page
:-------------------------:
![Landing/Login Page](/github-images/wireframes/keto-diet-capstone-client-landingpage.jpg) 
Home Page
![Home Page](/github-images/wireframes/keto-diet-capstone-client-homepage.jpg) 
Forum Page
![Forum Page](/github-images/wireframes/keto-diet-capstone-client-forumpage.jpg) 
My Posts Page
![My Posts Page](/github-images/wireframes/keto-diet-capstone-client-myposts.jpg) 
My recipes Page
![My recipes Page](/github-images/wireframes/keto-diet-capstone-client-myrecipes.jpg) 


## Screenshot
Full Page Screenshot 
:-------------------------:
![Landing Page](/github-images/screenshots/FILENAMEHERE.jpg) 

## Functionality
The app's functionality includes:
* User can sort entries by: meal (eg. dinner, dessert, snack, breakfast)

## Business Objects (back-end structure)
* User (database table)
    * Username (email validation)
    * Password (at least 8 chars, at least one alpha and a special character validation)


## Components Structure
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) - 
            * __Register.js__ (stateful) - 
        * __Navbar.js__ (stateless) - 
        * __HomePage.js__ (stateful)  - 
            * __About.js__ (stateless) - 
            * __Recipes.js__ (stateless) - 
            * __Forum.js__ (statelful) - 
        * __Account.js__ (stateful) - 
            * __MyPosts.js__ (stateful) - 
            * __MyRecipes.js__ (stateful) - 
            

## Api Documentation
* The Spoonacular api address is  https://developer.Spoonacular.com/Spoonacular-docs-recipe-api
* The endpoint url is https://api.Spoonacular.com/search

## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgress
* Development Environment: Heroku

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* More pages in order to include more search results 
* A feature that will allow the users to ??????? SOMETHING HERE ????????


## How to run it
Use command line to navigate into the project folder and run the following in terminal


### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test


### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

































































 


      m   