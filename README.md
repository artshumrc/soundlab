# Orpheus React Application

## Client

### Environment variables

#### Set graphql server url

```sh
// client/.env
REACT_APP_GRAPHQL_SERVER=http://localhost:3001
REACT_APP_GRAPHQL_URI=graphql
```

#### Set auth server url

```sh
// client/.env
REACT_APP_AUTH_SERVER=http://localhost:3001
REACT_APP_LOGIN_URI=login
REACT_APP_LOGOUT_URI=logout
REACT_APP_REGISTER_URI=register
```

## Server

#### Set mongodb url

```sh
// .env
DB_HOST=localhost
DB_PORT=27017
DB_NAME=orpheus
```

#### Set client app url
```sh
// .env
CLIENT_SERVER=http://localhost:3000
```
