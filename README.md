# POWER Middleware

This is a project included in the POWER project. It creates a middleware used to connect the React app and the Drupal back-end.

This project make use of Docker.

## Quick start with Docker

In order to test this profile with Docker, you need `docker`, `docker-compose` and `make` installed on your system. If your system meets the requirements, follow these steps:

    git clone git@github.com:EuropeanUniversityFoundation/power-middleware.git
    cd euf-base
    cp .env.example .env          # The .env file is ignored by version control
    nano .env                     # Edit the environment variables if necessary
    make up                       # Create and start the Docker containers
    make shell node               # Access a shell in the Node container

In alternative, if `node` is already installed in your machine, it's possible to run the project without starting a docker container.

Once the `node` container is accessible, it's possible to run the following commands:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

