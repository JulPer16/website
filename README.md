# Website project for Eve Online Corporation

Collaborative website development project.

## Stack
- React.js
- Laravel
- MySQL

## Laravel project instalation

In your terminal, enter to folder named **backend**

    cd backend

You have to copy the file **.env.example**

    cp .env.example .env

Modifiy your **.env** file with your custom database credentials. You must create a empty database called **eve_forum**. Use MySQL Database Engine.

You have to install dependencies in laravel project. Run this command:

    php composer.phar install

Run this command to create database tables:

    php artisan migrate

Create authentication key for application:

    php artisan jwt:secret

Now, you have installed correctly laravel backend project.

Init server running the next command:

    php artisan serv