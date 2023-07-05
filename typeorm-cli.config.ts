import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { CoffeeRefactor1688584579574 } from "src/migrations/1688584579574-CoffeeRefactor";
import { SchemaSync1688585377298 } from "src/migrations/1688585377298-SchemaSync";
import { DataSource } from "typeorm";

// Configurer dotenv
const dotenv = require('dotenv');
dotenv.config();

// Configurer variables d'environnement
const POSTGRES_PASSWORD            = process.env.POSTGRES_PASSWORD;

export default new DataSource({
    type: 'postgres',
    host: 'localhost', 
    port: 5432, 
    username: 'postgres', 
    password: POSTGRES_PASSWORD, 
    entities: [Coffee, Flavor], 
    migrations: [CoffeeRefactor1688584579574, SchemaSync1688585377298]
});