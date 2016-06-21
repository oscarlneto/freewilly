# FreeWilly Social Network
A Web project developed by students from Universidade de São Paulo.

## Download + Installation

`$ cd freewilly-sails`

`$ npm install`

`$ npm install sails-postgresql`

`$ npm install -g bower`

`$ cd assets`

`$ bower install`


## Setting up the database

You can either use our configuration file or set up your own config

### Our configuration file

Create a user named 'oscarneto' with password  'senha231' and grant full access to the database 'freewilly'

The commands to do that is:

- psql -d template1 -U postgres

- CREATE USER oscarneto WITH PASSWORD 'senha231';

- CREATE DATABASE freewilly;

- GRANT ALL PRIVILEGES ON DATABASE freewilly to oscarneto;

- \q

Well done. The database config is set.

### Your own configuration file

Edit the file in config/connections.js

- user: your_user_in_database

- password: your_user_password

- database: your_database

## Export database schematic and populate

To export the schematic, you should run the script named 'script.sql'

Under the root directory of the sails project, type:

psql -U your_user -d your_database -a -f script.sql

To populate the database, you should run the script named 'scriptInsere.sql'

Under the root direcoty of the sails project, type:

psql -U your_user -d your_database -a -f scriptInsere.sql

If you are using our configuration file, your_user is oscarneto and your_database is freewilly

## Usage

Under freewilly/freewilly-sails you can:

`$sails lift`

Open FIREFOX and type:

`localhost:1337/freewilly/login`


## Error checklist

Use this to look for errors.

`1- Have you run script.sql?`

`2- freewilly-sails/config/connections.js is set?`

`3- Postgresql user is ok?`

## Contact us!

Oscar C. Lima Neto  oscarneto@usp.br

Tales Prates Correia  tales.correia@usp.br

## Special thaks to

Paulo Guarnier de Mitri and Nathan Henrique Imamura, who helped us to better understand SailsJS and AngularJS.
