# About this branch (fumo-back-end-express)

Decided to contribute to this project with some back-end node server programming using express, and helmet for helping protect secure the express app by setting various HTTP headers on the site, Nothing too fancy, though, but its honest work.


## Changes

I altered the npm scripts for building the mustache on the static/pages/ and scss files on static/pages/css.
I also put the fumo_data.json on the data/ folder, and changed the path to it on imgfetch.js to this new path, as i believe those paths will make the app more organized.

Also changed the links to this app's HTML pages on the mustache files and on fumo_data.json to match the routes in fumo-routes.js.
Those routes are SEO friendly.


## Instructions

When deploying the app to the site, after building the site files, set the file "server.js" as the start file on "package.json" and execute npm start or just execute "node server" on any shell on the root folder of this web app.


## About routes

Server routes are configured on fumo-routes.js.