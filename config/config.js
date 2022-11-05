require('dotenv').config();

module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DBNAME,
        host: process.env.HOST,
        dialect: process.env.DIALECT
    },
    test: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DBNAME,
        host: process.env.HOST,
        dialect: process.env.DIALECT
    },
    production: {
        "username": "zxhhfrwnslvgcw",
        "password": "2e1963d3d0c1e4a6ddb75d395aea78920ca9a4539951b7d7fa6aafcf384733b9",
        "database": "d3mjoog1rcso0r",
        "host": "ec2-44-195-132-31.compute-1.amazonaws.com",
        "dialect": "postgres",
        "dialectOptions": {
                "ssl": {
                    "require": true,
                    "rejectUnauthorized": false
                }
        }
    }
};