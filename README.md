<div align="center">
  <h1>test Credit Simulator</h1>
</div>

# Content
- [Introduction](#introduction)
- [Local deploy](#local-deploy)
    - [Prerequisites](#prerequisites)
    - [Install dependencies](#install-dependencies)
    - [Run service](#run-service)
    - [Test and coverage](#test-and-coverage)
- [End Points](#end-points)
    - [New credit simulation](#new-credit-simulation)

# Introduction

This service save the users and business on database with the data received through an enpoint.

# Local deploy

## Prerequisites

For this project it's necessary to get installed NodeJS, for this visit [https://nodejs.org/es/](https://nodejs.org/es/)


## Install dependencies

To deploy this project in a development enviroment in your local machine first you must install the dependencies.



## Run service

After the dependencies are installed, you can run the service.

```shell
$ npm i
```

```shell
$ docker volume create --name db
```

```shell
$ docker-compose up
```

```shell
$ npm run migrate
```
```shell
$ npm run dev
```
## Test and coverage

It's very important to create tests for all the code that we develop, and that it covers at least 85% of the development. To execute the tests carried out in the project, we execute the command

# End Points

## New credit simulation [POST]

```shell
http://localhost:3000/api/simulator/credit
```


## send data to the api

```json
{
  "date": "2022-09-02",
  "dues": 24,
  "uf": 4500,
  "user": {
    "name": "rick",
    "rut": "11.111.111-7",
    "last_name": "sanchez"
  }
}
```

### response


```shell
{
	"identifier": 4,
	"uf": 4500,
	"clp": "$152.334.000",
	"duesValue": "$6.347.250",
	"payment_plan": [
		"2022-10-05T03:00:00.000Z",
		"2022-11-05T03:00:00.000Z",
		"2022-12-05T03:00:00.000Z",
		"2023-01-05T03:00:00.000Z",
		"2023-02-05T03:00:00.000Z",
		"2023-03-05T03:00:00.000Z",
		"2023-04-05T04:00:00.000Z",
        ...
	]
}
```



## get clp from U.F. [GET]

```shell
http://localhost:3000/api/badges/clp/:uf
```


## put the uf quantity

ej:

http://localhost:3000/api/badges/clp/1



### response


```shell
   {
	"CLP": 33852
    } 
```



## get UF from CLP [GET]

http://localhost:3000/api/badges/uf/:quantity



### put the CLP quantity

ej:

http://localhost:3000/api/badges/uf/100000


### response

```shell
{  
	"UF": 2.954035212099728 
}
```



