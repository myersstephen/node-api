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
- Start the API server through nodemon in dev mode
  ```bash
  $ npm run dev
  ```
- Create a POST request to create a product
  ```bash
  $ curl --location --request POST 'http://localhost:3002/api/v1/product' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "name": "shirt",
    "price": 75,
    "brand": "URBN"
    }'
  ```
- Create a GET request to get all products
  ```bash
  $ curl --location --request GET 'http://localhost:3002/api/v1/product'
  ```
- Create a GET request to get a specific product by id - Note: must create product first
  ```bash
  $ curl --location --request GET 'http://localhost:3002/api/v1/product/{:id}'
  $ curl --location --request GET 'http://localhost:3002/api/v1/product/5f2c0a0ccb817374174b8fec'
  ```
- Create a PUT request to update a product by id
  ```bash
  $ curl --location --request PUT 'http://localhost:3002/api/v1/product/5f2c0a0ccb817374174b8fec' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "price": 77
    }'
  ```
- Create a DELETE request to delete a product by id
  ```bash
  $ curl --location --request DELETE 'http://localhost:3002/api/v1/product/{:id}'
  $ curl --location --request DELETE 'http://localhost:3002/api/v1/product/5f2c0a0ccb817374174b8fec'
  ```
- Stop the MongoDB Service from the terminal
  ```bash
  $ brew services stop mongodb-community@4.4
  ```
