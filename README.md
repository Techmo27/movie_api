**Project DEscription**

This project is a server-side component of a “movies” web application. The web application provides users with access to information about different
movies, directors, and genres. Users are able to sign up, update their personal information, and create a list of their favorite movies.

**Key Features**
* Returns a list of ALL movies to the user
* Returns data (description, genre, director, image URL, whether it’s featured or not) about a
single movie by title to the user
* Returns data about a genre (description) by name/title (e.g., “Thriller”)
* Returns data about a director (bio, birth year, death year) by name
* Allows new users to register
* Allows users to update their user info (username, password, email, date of birth)
* Allows users to add a movie to their list of favorites
* Allows users to remove a movie from their list of favorites
* Allows existing users to deregister

**Technical Facts**

* Node.js and Express application
* uses REST architecture, with URL endpoints corresponding to the data operations listed above
* The database is built using MongoDB
* The business logic is modeled with Mongoose
* The API provides movie information in JSON format
* The API is deployed to Heroku
