# Lottereum

## Description

A lottery decentralized application (DApp) based on the Ethereum network.

## Prerequisites

- [Docker](https://docs.docker.com/engine/install/)
- [Docker compose](https://docs.docker.com/compose/install/)
- [GNU make](https://www.gnu.org/software/make/)

## Setup

To install the necessary dependencies, run the following command:

```bash
cp app/.env.example app/.env
make up
```

## Commands

- `make pull`: Pull the Docker image.
- `make build`: Build the Docker image.
- `make up`: Start the Docker container.
- `make down`: Stop and remove the Docker container.
- `make stop`: Stop the Docker container.
- `make rm`: Remove the Docker container.
- `make logs`: Show the logs of the Docker container.
- `make bash`: Access the shell of the Docker container.
- `make test`: Run the tests.
