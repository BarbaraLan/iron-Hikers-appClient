# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<b>Programs</b>

Welcome to our Full-Stack Application, using MERN. 

It contains an SPA frontend, built with React and a REST API backend build with ExpressJS, MONGODB and Mongoose for data rendering. Both will implement CRUD actions. 

We have six database models, sign-up, log-in and log-out functionality, with encrypted passwords and authorization. There are two repos published on GitHub and the backend deployed on Vercel. 

As for the app, it is a activity-based program allowing you to search for hikes and routes around the world, with the option to join hikers if you desire. 

First, you will need to sign-up, then log-in, to give you access to the hikes and routes. You can update your userpage with your likes and hobbies, as well as selected city, allowing other users to learn more about you. Then you can see a calender showing all of the upcoming hikes and routes in your selected city. You can choose to join hikes, or choose to create your own. Attenders (users) will be added to each route so users can see how many people and who will be hiking on said day.

The process took 8 working days, including the deployment and presentation organisation. It will be presented to a jury on the final day of the course. 

Thank you, and hope you enjoy!


<b>The Team</b>

Gavin Alexander, Barbara Lancuba, Kumar Daryanani 


FRONT END CODE


| Pages | Route | Description | Links |
| --- | --- | --- | --- |
| Dashboard Page | / | App home page. Contains:
|   |   | To see Create and Join Hikes once a user logs in | 
| Log-in Page | /login | With Username and Password |   |
| Sign-Up Page | /signin | With Username, E-mail and Password |   |
| About | /about | Photos of team members |   |
| UserPage | /user | Info. about a user's preferences |   |
| Hike Join Page | /join-hike | A calendar showing available hikes |   |
| Create Hike Page | /hikes/create | An option to add a new hike with options such as date, route, time, description |   |
| Hike ID Page | join-hike | Description of individual hikes |   |
| Hike Day Page | hike/day/date=0000-00-00 | Select a date which displays hikes created on that day |   |
| Choose City | /user | user profile page. Contains hard-coded data by default, but the user can edit it |   |
| Create Route Pages | /routes/create | An option to add a new hike with options such as date, route, time, description, map, image, comments, rating, duration, length |   |
| Route ID Pages | /routes:routeId | Description of individual routes |   |
| All Routes Page | /routes | All possible routes from the database |   |


| Components | Where | Links |
| --- | --- | --- |
| Navbar | Home, City, Routes, User|
| Footer | About, GitHub |

| Models |
| --- |
| User = {name, email, password, likes, hobbies, description, age, selected city} |
| Routes = {city, duration, difficulty, rating, description} |
| Hikes = {route, date, time, name, description, creator, attendees, comments} |
| Rating = {user, date, score, routecomment} |
| Hike Comment = {user, date, time, comment} |
| Route Comment = {user, date, time, comment, addphoto} |


| Backlog |
| An Interactive map showing available hikes around the world|
| Add more example of hikes and routes|
| Install an extension to select all countries in the world|
