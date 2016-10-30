# PyDReact

This project create for Developer who want to use Django as Backend and ReactJs as Frontend

__Note:__ This project use Django v1.10.2 support python v2.7, v3.4, v3.5 reference: [What Python version can I use with Django?](https://docs.djangoproject.com/en/1.10/faq/install/#faq-python-version-support)

## Incoming soon

 - Docker support
 - Redux support 


## How frontend work? 

In fronend of project using [Babel](https://github.com/babel/babel) and [webpack](https://github.com/webpack/webpack) as a primary worker to compile [React](https://facebook.github.io/react/), ES6 and JSX and use nodejs to run [webpack-dev-server](https://github.com/webpack/webpack-dev-server) for realtime chage on save javascript file



## How Backend work? 

I use "Django webpack loader" to get ouput of webpack run on django with [webpack-bundle-tracker](https://github.com/owais/webpack-bundle-tracker) to generate file for Django. see more about [Django webpack loader](https://github.com/owais/django-webpack-loader)



## What's inside project

 - Hot load by [react-hot-loader](https://github.com/gaearon/react-hot-loader)
 - all python need write at requirements.txt 
 - server.js to run webpack-dev-server using node 
 - webpack config for development and production 
 - simple config for eslint and use rule by airbnb
 
 
## Installation

To install django and Django webpack loader run: 
```bash
pip install -r requirements.txt
```
Then install react and dependencies

```bash
npm install
```

## Run

To run react-hot-loader and compile react to bundle file run: 

```bash
npm start
```

Then run django command to start server

```bash
./manage.py runserver
```

__Note:__ You have to run "npm start" every time you work to compile react and run webpack . you can't work with react without webpack and webpack without nodejs 

## Production 

setting app/settings.py in: 

```bash
DEBUG = False
```

Then build your frontend file with:

```bash
npm build:prod
```

Then deploy to your server!!

__Note:__ If you build success you can deploy your project without run "npm start" anymore just run python to work on server. For test your porject on local as DEBUG = False use: 

```bash
./manage.py runserver --insecure
```

## Project stucture

View template:

```bash
templates/index.html
```

React file:

```bash
public/*
```

static file in web such as CSS, JS and Image 


```bash
assets/*
```

Python setting 

```bash
app/*
```
