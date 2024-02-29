# Getting Started with node server App

# About the app:

Server-side development for a web application, An online store that allows the guest to add products to the cart and registered users to save products in favorites.
Administered by an admin user who can add, edit and delete products

## Installation

Install the node_modules

```bash
npm i
```

## Available Scripts

you can run:

### `npm start`

- It will run the app with node (NODE_ENV=prod)
- The page will not reload if you make edits.
- You must have a mongoDB Atlas Cluster

### `pnpm watch`

- Runs the app with tsx (NODE_ENV=dev)
- The page will reload if you make edits
- The print at the terminal will be yellow with the message:

`App is running on http://localhost:8080`

And if there are no login errors you should see the message painted in bold blue:

`Database Connected`

## Available Routes

Here you can find API addresses that the server will respond to as well as what should be sent to them in the body of the HTTP request and what permissions are required to receive a response from a specific API

### login with Admin:

email: "admin@example.com"
password: "Ab1234Ab!"

### Users API

#### API for Register a new user

```http
  POST /api/v1/users
```

#### Request

In the request body you will need to provide an object with the following keys and values

| index    | type   | index | type | min | max | remark   |
| -------- | ------ | ----- | ---- | --- | --- | -------- |
| name     | string |       |      | 2   | 256 | required |
| email    | string |       |      | 5   | 30  | required |
| password | string |       |      | 7   |     | required |

- "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&\*-
- "email" must be a standard email

#### API for Login a user

```http
  POST /api/v1/users/login
```

### Request

In the request body you will need to provide an object with the following keys and values

| index    | type   | min | max | remark   |
| -------- | ------ | --- | --- | -------- |
| email    | string | 5   |     | required |
| password | string | 7   | 20  | required |

- "email" must be a standard email
- "password" must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&\*-

### Response

If the user is in the database and the password sent is correct, a token will be returned and the following object can be extracted from it with the help of the jwt-decode library

| index   | type    |
| ------- | ------- |
| id      | string  |
| email   | string  |
| isAdmin | boolean |

#### API for Information about all the users

```http
  GET /api/v1/users
```

### Request

- You will need to provide a token to get an answer from this api
- You will need to be Admin type user to get an answer from this api

#### API for Information about a user

```http
  GET /api/v1/users/:id
```

### Request

- You will need to provide a token to get an answer from this api
- You will need to be the registered user or Admin type user to get an answer from this api

#### API for Updating User information

```http
  PUT /api/v1/users/:id
```

### Request

In the request body you will need to provide an object with the following keys and values

| index    | type   | index | type | min | max | remark   |
| -------- | ------ | ----- | ---- | --- | --- | -------- |
| name     | string |       |      |     |     | required |
| email    | string |       |      | 5   | 30  | required |
| password | string |       |      | 7   | 20  | required |

- The user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&\*-
- "email" must be a standard email
- You will need to provide a token to get an answer from this api
- You need to be Admin to get an answer from this api

#### API for deleting a user

```http
  DELETE /api/v1/users/:id
```

- You will need to provide a token to get an answer from this api
- You will need to be the registered user or Admin to get an answer from this api

### Cards API

#### API to get all products

```http
  GET /api/v1/products/
```

#### API for get a products card of a specific by id

```http
  GET /api/v1/products/:id
```

#### API for receive favorite products

```http
  GET /api/v1/products/favorites
```

- You will need to provide a token to get an answer from this api

#### API for create a new products card

```http
  POST /api/v1/products/
```

### Request

In the request body you will need to provide an object with the following keys and values

| index       | type   | index | type   | min | max  | remark   |
| ----------- | ------ | ----- | ------ | --- | ---- | -------- |
| title       | string |       |        | 2   | 50   | required |
| description | string |       |        | 2   | 1024 | required |
| price       | number |       |        | 2   |      | required |
| image       | object |       |        |     |      | required |
|             |        | url   | string | 14  | 256  |          |
|             |        | alt   | string | 14  | 1024 |          |

- "image/url" must be a standard URL
- You will need to provide a token to get an answer from this api
- You will need to be a Business type user to get an answer from this api

#### API for updating products card information

```http
  PUT /api/v1/products/:id
```

### Request

In the request body you will need to provide an object with the following keys and values

| index       | type   | index | type   | min | max  | remark   |
| ----------- | ------ | ----- | ------ | --- | ---- | -------- |
| title       | string |       |        | 2   | 256  | required |
| description | string |       |        | 2   | 1024 | required |
| price       | number |       |        | 2   |      | required |
| image       | object |       |        |     |      | required |
|             |        | url   | string | 14  | 100  |          |
|             |        | alt   | string | 2   | 256  |          |

- "image/url" must be a standard URL
- You will need to provide a token to get an answer from this api
- You will need to be a Business type user to get an answer from this api

#### API for liking a product card

```http
	PATCH /api/v1/products/:id
```

- You will need to provide a token to get an answer from this api

#### API for deleting a product card

```http
  DELETE /api/v1/products/:id
```

- You will need to provide a token to get an answer from this api
- You must be the admin in order to delete the product card
