"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'tfl_website'),
            user: env('DATABASE_USERNAME', 'mia'),
            password: env('DATABASE_PASSWORD', 'mia'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
