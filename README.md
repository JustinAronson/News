# PANDA
Pragmatic Analysis of News through Dimensional Approaches

Instructions updated 5/29/2023

# Setting up the Frontend
From the home directory, go to panda file:

`cd panda`

Install dependencies via `npm install` (or `npm install --force`):

`npm i`   

# Setting up the Backend Server
First create or get an `APIKeys.py` file and make sure working OpenAI api keys are filled in.

Install python dependencies

*You may need to install dependencies like newspaper separately like this:*

`pip install newspaper3k`

*If you have multiple python instances in your computer you may have to specify which instance you're using to both install dependencies and run, e.g. with something that might look like this:*

`C:/Users/abc/AppData/Local/Microsoft/WindowsApps/python3.9.exe -m pip install newspaper3k`

# Running the Backend Server
From main directory:

`cd backend`  

Then run the server:

`flask --app server.py run`

The server should be running at http://127.0.0.1:8000/

*If your server runs somewhere else (e.g. 127.0.0.1:5000) change the fetch URL in App.js to match it*

# Running the Frontend App
First open a new terminal while the terminal running the Backend server is still running. This is needed in order to test out anything on the site involving python

From the home directory, go to panda file:

`cd panda`

Start up the website in dev mode:

`npm run start`

The website will be at: http://localhost:3000/ 

*If you already have something else running in your localhost:3000, then a specific link is provided in the terminal*
