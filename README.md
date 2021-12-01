# my-health-records

[![Build Status](https://app.travis-ci.com/hhm14/my-health-records.svg?branch=main)](https://app.travis-ci.com/hhm14/my-health-records)
Team Two - Allen Lu and Henry Madsen

For a demo watch our YouTube video here: https://youtu.be/yo61myCXGqQ

SEE BOTTOM FOR USAGE

Project description: My Health Records seeks to empower individuals to take an active role in their health care, and provide technology and service to make it easy and more accessible. The focus of the product is to host secure storage of a person’s records for that person’s use, as well as provide an easy to use application to facilitate viewing, sharing and updating health records.

Sprint 1 log: During sprint one Allen and I decided implementing upload, download, and share features were the most crucial to begin with. We did this by using a framework called multer to deal with uploads, express to deal with downloads, and nodemailer to facilitate sharing. During sprint 2 we plan to implement more options for users to interact with their personal document/files: the choice of sending multiple files, and a way to view the user's file without the need to download it. Additionally we realised that since we are a service that will be distributing and managing very personal information, we plan to add security measures by creating a login system.

Sprint 2 log:
During sprint two Allen and I decided implementing the ability to send multiple files, do in browser file viewing, and delete files were the most crucial to add. Furthermore we added a security measure by allowing users to create personal accounts so that they access their documentation. User accounts are saved under MongoDB, a database that keeps track of all user logins so that if the user were to shutoff the program, they would not have to re-create an account. Using a framework called nodemailer to deal with emails and express/fs to deal with deletes/viewing. By the end of the sprint we hope to have created a working prototype that is fully functional in managing user documents (upload, share, delete, view) that includes a user login for a means of security.

- Send multiple Health Records feature:
  - This feature is critical to this application because in many cases a patient will need to share multiple files. The implementation of this requred some json formatting and creating custom messages for nodemailer to send.

- View:
  - Being able to view your records is important because it eliminates any confusion about which record is which and if it can safely be deleted from the server. Additionally reduces the need to download the user file when they could view it in the browser. 
  
- Delete Health Records feature: 
  -  Being able to delete old health records in very important to eliminate outdated records so that users know they are always sharing the most current records and being able to delete helps eliminate blotage on the server/database. 

- Create an Account:
  - MyHealthRecords will hold many patients personal documentation which is why it is imperative for us to implement a login system so that we can protect user records. This was done by giving each account created, a unique ID that only that specific account is assigned to. From there, any documents or files that the user has uploaded will be labeled with that specific key/ID. For example, if we were to have John's ID to be 1234 and Anna's ID to be 4321, either patient would not be able to see each others files because they are tagged with an unique ID.

Please email henryhmadsen@gmail.com or allenlu9326@gmail.com with any questions. 
