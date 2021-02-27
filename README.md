
# TestMax LSAT Multiple Choice Quiz Web Application

Description: A web application for LSAT multiple choice answer questions, the user has an option to choose the category or all categories. According to the selection criteria, the app displays the multiple-choice questions. The user gets to view the questions, upon he knows if he has chosen the correct answer. This app uses highlighting technique – green for the correct answer and red for incorrect answer. The user can view current scores while taking the quiz and at the end, final score is displayed. After he has done, he has an option to replay the quiz. 

Developer: Sai Lakshmi Athivarapu - athivara@usc.edu
Technology used: ReactJS 
IDE: Visual Studio Code
Deployment: AWS Amplify
Application Link:
Full Code:  https://github.com/lakshmiathivarapu/TestMaxQuizApp

# Workflow:

1.	There are two main application components – App which is for the main application and QuestionAnswer which is for displaying the questions. 
2.	The App.js and App.css includes the script for running the front-end code. Basically App.js involves multiple functions which are necessary for displaying the web content according to the selection. 
3.	Different React properties are used and the React components are rendered accordingly.
4.	Similarly, QuestionAnswer.js and QuestionAnswer.css have React components which are useful for rendering all the questions. 
5.	Also, in the main “src” folder – there is a file calls utils.js which has the utility functions to support multiple app components.  

# Running the application on Local Machine 

1.	First download nodejs from https://nodejs.org/en/download/ ReactJS needs to be installed through NPM – Node Package Manager. Choose the download type based on your OS. (App was deployed in 14.16.0 version and downloaded in windows through .msi installer)
2.	Follow the default installation steps. You must have noticed that there is a node.js application and node.js command prompt. 
3.	Method 1 - Open the node.js cmd and go the directory you wish to create a new React project and follow these steps – type one after another, by pressing enter after each statement.
  a.	npx create-react-app my-app
  b.	cd my-app
  c.	npm start

   For more information visit https://reactjs.org/docs/create-a-new-react-app.html. Now you can see the default React app loaded on a web browser. So, you can either merge this with by extracting the folders in zip file of code downloaded from git or create a new folder and perform the following steps. Copy paste the src folder and add the package files to the main app folder.
   
4.	Method 2 – Using git commands - The whole code is in master branch, so to download the code we perform the following operations, you can use cmd of your OS.
  a.	git clone https://github.com/lakshmiathivarapu/TestMaxQuizApp.git
  b.	git checkout main (to switch to main and access the application)
  c.	The application is deployed in main – with AWS Amplify as the webhook. 
  d.	In the cloned folder – you can view the project code. 
  e.	You can check with ‘dir’ command for Windows OS and ‘ls’ command for Linux
  f.	Change the directory to – TestMaxQuiz which the repo name. You can use – “cd TestMaxQuiz” as the command.
  
5.	For both the methods:
  a.	Inside this directory, you can see the source code of the application.
  b.	Here, there’s an already existing package.json file and package-lock.json which installed the node related packages necessary. Delete package-lock.json – Use “del package-lock.json” for Windows and “rm package-lock.json” for Linux.
  c.	Now run the command – “npm install”
  d.	Once the node modules are downloaded – you can do an “npm start”
6.	 Now you can view the application on your local machine – Select your category and start playing the quiz and get your scores.
