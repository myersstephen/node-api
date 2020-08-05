# A Simple Node API for a Product Web Application

## Getting Started

Please view the API architecture diagram and prerequisites before getting started

## API Architecture Diagram

![API Architecture Diagram](/APIArchitectureDiagram.png)

### Prerequisites

- Update or Install the [Node.js & NPM](https://nodejs.org/en/download/current/)
- Update or Install the [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### Getting Started on MacOS

- Start the MongoDB Service from terminal
  ```bash
  $ brew services start mongodb-community@4.4
  ```
- start the API server through nodemon on port 3002
  ```bash
  $ npm run dev
  ```
- create a POST req from cURL
  ```bash
  $ curl --location --request POST 'http://localhost:3002/api/v1/product' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "name": "shirt",
    "price": 75,
    "brand": "URBN"
    }'
  ```
- create a GET req from cURL
  ```bash
  $ curl --location --request GET 'http://localhost:3002/api/v1/product'
  ```
- Stop the MongoDB Service from the terminal
  ```bash
  $ brew services stop mongodb-community@4.4
  ```
