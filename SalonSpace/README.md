This directory contains one express servers:
* Server.js + App.js - Encapsulated Node/Express web server w/ Mongo Access

File content:
* Server.ts - based http server
* App.ts - express server
* DbClient.ts - mongo db client
* DB population files are stored on the createDB file

Make sure you install the node.js server and Mongo DB sofware from the side.  Ensure your path variable contains the execution path of the node.js and mongo binary.

To execute the server db and then the node server with the following commands:
-----steps to connect to mongoDB cluster 
1. mongo "mongodb+srv://SalonSpace123:SalonSpace123@cluster0.txxl6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" --username SalonSpace123

2. load ('createDB/createSalonSpaceSampleData.js.txt');

//create the db file directory
0. md db

//Starts the DB server on port 3000
1. .\start.toDoSample.cmd

//populate the DB server with sample data
2. .\startdbClient.toDoSample2.cmd
>load ('createDB/createSalonSpaceSampleData.js');
>load ('createDB/createAdminUser.js');
>exit
SalonSpace\createDB\createSalonSpaceSampleData.js
//install npm packages
3. .\startdbClient.toDoSample.cmd

4. npm install

//Compile Node/Express Server.  You may need to go to all subdirectories and compile the ts files.
4. npx tsc AppServer.ts

//Execute Node/Express server on port 8080
5. node AppServer.js 

To test server #3, try the following URL on the browser, while the server is running:
* http://localhost:8080/app/technician/
* http://localhost:8080/app/salon/
* http://localhost:8080/app/registeredUser/
