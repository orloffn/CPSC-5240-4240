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

## How to Deploy to Azure ##
1. Get the latest code from master
2. Make your Angular code changes in **/src** then `npm tsc`
3. When all done, `ng build` to produce the dist
4. Make your backend code changes in **/SalonSpace** then `npm tsc`
5. Open the **/SalonSpace** folder and delete the extant **/SalonSpaceAngular** dist folder
6. Go up a level to the root, open **/dist**, copy **/SalonSpaceAngular** - this was made by step 2
7. Paste that folder into **/SalonSpace**
Your code changes should be done for now
8. In a Terminal window make sure you are in **/SalonSpace**
9. `git init`, unless you have already done so
Make sure you are on the master branch
10. `git add -A`
11. Make a commit
12. `git remote add azure https://salonspace.scm.azurewebsites.net:443/salonspace.git` - if you haven't set the remote yet; change the url if need be
13. `git push azure master`
NOTE: Azure will only deploy from its master branch.
14. In the Azure portal, go to Deployment Center > Logs and check if your code deployed
15. Make sure to go up a level to root locally, and add code changes done in **/CPSC-5240-4240**, commit, and push to your branch or master on GitHub (you already pushed to Azure)