# Neighborhood Map (React) Project

## Table of Contents

* [About this project](#about-this-project)
* [Implementation details](#implementation-details)
* [How to run application](#how-to-run-application)
* [Local data API](#local-data-api)
* [Using third-party APIs](#using-third-party-apis)
* [Contributing](#contributing)

## About this project

It is a map of the bridges of Saint-Petersburg (Russia). This city has a rich history and incredibly beautiful architecture. Also Petersburg has a lot of rivers and therefore has a lot of beautiful bridges. Some interesting bridges you can find in my project.

## Implementation details

This project written according to the [Neighborhood Map project rubric](https://review.udacity.com/#!/rubrics/1351/view).

Project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 

## How to run application

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Local data API

The provided file [`localData.js`](api/localData.js) contains 3 methods to perform necessary operations with bridges information.

Information about more then 30 bridges hard-coded in json format in data file [`bridges.json`](data/bridges.json)

* [`getBridges`](#getbridges)
* [`searchBridges`](#searchbridges)
* [`getInfoById`](#getinfobyid)

### `getBridges`

Returns a Promise which resolves to a collection of bridge objects.

```js
getBridges()
```

### `searchBridges`

Returns a Promise which resolves to a collection of bridge objects matches the `searchString`.

```js
searchBridges(searchString) 
```

### `getInfoById`

Returns a Promise which resolves to bridge object that corresponds to `id`.

```js
getInfoById(id)
```

## Using third-party APIs

[React Components Suite for Mapbox GL JS](https://uber.github.io/react-map-gl/#/) created by [Uber](https://uber.github.io/) on base of [MapBox Maps](https://github.com/mapbox/mapbox-gl-js) was used to work with map in browser.

As a source of additional data about bridges [Wikimapia API](http://api.wikimapia.org/) was used.

## Contributing

This repository is a project in Udacity Front-End Web Developer Nanodegree Program. So I will not accept any pull requests.
