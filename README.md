# Foonedio

### Project Overview
This project is an API service designed to retrieve fixture data from various data providers and present organized football match schedules based on leagues. The API allows users to paginate through fixtures and apply limits for more manageable data consumption.

### Features
* **Data Retrieval**: Fetches fixture data from diverse data providers.
* **League-Based Organization**: Categorizes fixtures according to football leagues.
* **Pagination**: Allows users to navigate through fixture pages.
* **Data Limiting**: Supports limiting the number of fixtures per request for efficient data handling.
* **Cache Mechanism**: Implements a caching system for optimized performance.

## Getting Started

### Clone the Project Locally

```bash
git clone git@github.com:dervisgelmez/foonedio.git
````

### Create a Configuration File
Duplicate the .env.example file and rename it to .env. Configure the file with your own settings.
```bash
cp .env.example .env
````

### Install Project Dependencies
```bash
npm install
````

### Fetch Fixture Data from Providers
To retrieve fixture data from the providers specified in the configuration, run the following command:
```bash
node command.js -c fixture
````

### Start the Project
```bash
npm run start
````

## Env file example
```bash
APP=DEV #running mode (cache response disable for DEV)
PORT=9000 #app listen port
MONGO_URL=mongodb://127.0.0.1:27017/db_name #mongodb url
REDIS_URL=redis://localhost:6379 #redis server url
````