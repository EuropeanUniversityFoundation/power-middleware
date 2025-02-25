# POWER middleware Node.js

A simple middleware written in NodeJS, that takes care of the authentication for API users connecting to the POWER platform from the POWER React app, that is deployed on a University website.

## Applications and platforms in the POWER project
The whole project consists of the following applications:

0. [POWER project website](https://www.power-placements.eu/): Contains general information about the project, events, applications, articles. It is independent from the platforms discussed below.


1. [POWER platform](https://power.uni-foundation.eu): Company representatives can post and Institution representatives can review placement opportunities on this site. This site stores the job offer and user data and provides the API, that exposes accepted placement opportunities to Institutions through the middleware below.
2. [POWER React App](https://github.com/EuropeanUniversityFoundation/power_react_app): The application, that Institutions can include into their websites. This application connects to the middleware, which handles authentication
3. POWER middleware: EUF provides two middleware solutions in the POWER project.
  - NodeJS based middleware: This is the repository you're currently viewing.
  - [PHP Slim based middleware](https://github.com/EuropeanUniversityFoundation/power-middleware-slim): If you'd like to use a middleware solution developed in PHP instead, visit [this project](https://github.com/EuropeanUniversityFoundation/power-middleware-slim)

## Connections and communication between applications
- POWER React App (2) is included into a University website. Code is to be hosted by the Institutions. The REACT App (2) sends requests to the POWER middleware.
- POWER middleware (3) is deployed on an Institution server reachable by the one that hosts the Institution's website. It authenticates the requests sent by the React App and forwards them to the POWER platform's (1) API.
- The POWER platform stores and exposes placement opportunity data to the middleware and through it, to the REACT App, that is shown on the University websites.

## Deployment

This app can be used as an alternative of the SlimPHP middleware.

To create the embeddable app start by deploying the code: 

    git clone https://github.com/EuropeanUniversityFoundation/power-middleware.git {PROJECT_ROOT} 

If `PROJECT_ROOT` is omitted the directory will be named `power-middleware`.

Then from the command line:

    cd {PROJECT_ROOT}
    npm install             # Install all the dependencies

The next step is to change the *Document root* and the *Application root* for the domain. The *Document root* is the location where the static assets can be found. Usually, the *Document root* is a directory inside the *Application root* directory (e.g. *public*). Moreover, the *Application root* is where the Application startup file is located (e.g. *app.js* or *index.js*).

For example:

- *Application root*: `{PROJECT_ROOT}`
- *Document root*: `{PROJECT_ROOT}/public`

### Troubleshooting

Sometimes the steps above are not enough. Therefore, you would need to enable *Phusion Passenger* for *nginx*. 

On the *nginx* settings of your server add the code written below:

    passenger_enabled on;

## Stack

Built with [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/).


## Quick start with Docker

In order to test this profile with Docker, you need `docker`, `docker-compose` and `make` installed on your system. If your system meets the requirements, follow these steps:

    git clone git@github.com:EuropeanUniversityFoundation/power-middleware.git
    cd euf-base
    cp .env.example .env          # The .env file is ignored by version control
    nano .env                     # Edit the environment variables if necessary
    make up                       # Create and start the Docker containers
    make shell node               # Access a shell in the Node container

In alternative, if `node` is already installed in your machine, it's possible to run the project without starting a `docker` container.

Once the `node` container is accessible, it's possible to run the following commands:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.
