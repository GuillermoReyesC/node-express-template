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
    - [New credit simulation](#new-credit-simulation-post)
    - [Get credit](#get-credit-get)
    - [Edit Credit](#edit-Credit-put)
    - [Delete credit](#delete-credit-by-id-delete)
    - [get clp from uf](#get-clp-from-uf-get)
    - [get uf from clp](#get-uf-from-clp-get)

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

## Get Credit [GET]

```shell
http://localhost:3000/api/simulator/credit/:id
```

## Put the id in url to find a credit

ej: 
http://localhost:3000/api/simulator/credit/6

## response 

```json
    {
	"id": 6,
	"fk_user_id": 4,
	"uf": 500,
	"dues": 22,
	"date": "2022-09-05T00:00:00.000Z",
	"createdAt": "2022-09-02T18:30:41.123Z",
	"updatedAt": "2022-09-02T23:36:38.526Z",
	"Users": [
		{
			"id": 4,
			"name": "jhon",
			"last_name": "doe",
			"rut": "33.333.333-3",
			"createdAt": "2022-09-02T18:30:41.100Z",
			"updatedAt": "2022-09-02T18:30:41.100Z"
		}
	]
}
```




## Edit credit [PUT]

```shell
http://localhost:3000/api/simulator/credit/:id
```

## Put the id of credit in url to edit & send the data [PUT]
ej:

http://localhost:3000/api/simulator/credit/6

## send edited data
 ej:
 
```shell
{
  dues:22
}
```

## response 


```json
  {
	"credit": {
		"id": 6,
		"fk_user_id": 4,
		"uf": 500,
		"dues": 22,
		"date": "2022-09-05T00:00:00.000Z",
		"createdAt": "2022-09-02T18:30:41.123Z",
		"updatedAt": "2022-09-02T23:36:38.526Z"
	},
	"clp": "$16.926.000",
	"duesValue": "$769.364",
	"payment_plan": [
		"2022-10-05",
		"2022-11-05",
		"2022-12-05",
		"2023-01-05",
		"2023-02-05",
		"2023-03-05",
		"2023-04-05",
    ...
	]
}

```


## Delete credit by id [DELETE]

```shell
http://localhost:3000/api/simulator/credit/:id
```

## Put the id of credit in url [GET]

ej:

http://localhost:3000/api/simulator/credit/56

## response

```shell
{}
```

###

## Get clp from U.F. [GET]

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

```shell
   {
	http://localhost:3000/api/badges/uf/:quantity
    } 
```


### put the CLP quantity

ej:

http://localhost:3000/api/badges/uf/100000


### response

```shell
{  
	"UF": 2.954035212099728 
}
```



