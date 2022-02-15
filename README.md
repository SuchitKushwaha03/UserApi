# UserApi
backend/config : to connect mongoDb using mongoose<br>
backend/controller: handles all the working <br>
backend/middleware: errorHandling file<br>
backend/models: contains all schema and models<br>
backend/routes: contains all the routes to different end points<br>
backend/server.js: everything starts from here<br>

# Route
GET '/' -> returs all user data in database 
<br>
POST '/' -> create data from URL and saves it in database
<br>
PUT '/:id' -> update data of given id and returns updated data
<br>
DELETE '/:id' -> delete data of given id and return deleted id
