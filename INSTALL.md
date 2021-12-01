

HOW TO INSTALL:

You may either follow the steps below of view our tutorial for installation on YouTube here : https://youtu.be/rZPRw9f3EjQ

1. Install the latest version of node js from https://nodejs.org/en/download/ (please use v16.13.0)(you can use homebrew if on mac but this can be weird)
2. Download latest release of My Health Records
3. Navigate to top level directory of the project in your favorite IDE or your file system (go to the my-health-records directory)
4. Open a terminal at the my-health-records directory, run "npm ci" (you may have to download some packages manually although this should not happen. In this case run: "npm i ejs express filereader multer sequelize ...", and/or npm i [package] that is not download my npm i).
5. Run the project by typing "node app.js" or "npm run devStart" (this command will launch the site with nodemon) in the terminal from the my-health-records directory 
6. In your web browser go to http://localhost:8080/ to view the app and try the features
