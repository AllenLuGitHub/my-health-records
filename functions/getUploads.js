const fs = require('fs')

function getUploads(uid) {
    let directory_name = "uploads";
    
    // Function to get current filenames
    // in directory
    let filenames = fs.readdirSync(directory_name);
    var userFiles = [];
    console.log("\nFilenames in directory:");
    for (i = 0; i < filenames.length; ++i) {
      console.log("File:", filenames[i]);
  
      if (filenames[i] == ".DS_Store") {
        continue;
      }
      if (filenames[i].substr(0, 6) == uid) {
        console.log(filenames[i].substr(0, 6), uid, "User's document")
        userFiles.push(filenames[i])
      }
    }
    return userFiles;
  }
  module.exports = getUploads