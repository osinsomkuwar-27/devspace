# devspace

Tools Required:
1. Visual Code studio
2. Chrome
3. Node.js
4. Git
5. Github

Frontend Technologies:
1. HTML5
2. CSS
3. JS
4. React
5. Bootstrap

Backend Technologies:
1. Node.js //foundation of the project used in replicating git commands
2. Express.js //api creation,authentication
3. yargs //used for customizing console commands 

Database Configuration:
1. mongoDB

Testing Framework:
1. Jest //Testing

Deployment Platform:
1. AWS (S3, EC2, Amplify)

Planning the Project Structure
1. Console Commands: [init, add file.txt - staging/adding, commit<>, push, pull, revert - go back to previous commit]
2. Frontend Components: [Authentication, Dashboard, Repository, Issues]
3. Database Schema and Model: [User Schema, Repository Schema, Issue Schema]
4. API Endpoints: 
i. User Router[fetching all users, signup, login, fetch current logged in user, update current logged in user, delete current logged in user]
ii. Repo Router[creation of all repositories, fetching all repositories, fetching repository by id, fetching repository by name, fetching all the repositories of the logged in user, updating repositories of the logged in user, updating repositories of the logged in user, deleting repositories of the logged in user, toggle repository of the logged in user means converting public to private of an repo or vice-versa]
iii. Issue Router[Creation of issues, updation of issues, deletion of issues, fetching all issues, fetching the issues by id]
iv. Main Router[called all the routers here]