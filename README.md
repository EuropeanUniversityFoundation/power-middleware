# Node Base App

This is a project for Node to be used within the EUF.

This project make use of Docker.

## Quick start with Docker

In order to test this profile with Docker, you need `docker`, `docker-compose` and `make` installed on your system. If your system meets the requirements, follow these steps:

    git clone git@github.com:EuropeanUniversityFoundation/node-base-app.git
    cd euf-base
    cp .env.example .env          # The .env file is ignored by version control
    nano .env                     # Edit the environment variables if necessary
    make up                       # Create and start the Docker containers
    make shell node               # Access a shell in the Node container

Once the `node` container is accessible, it's possible to run the following commands:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.