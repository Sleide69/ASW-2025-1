import "../../../practica_3/node_modules/reflect-metadata";
import { DataSource } from "../../../practica_3/node_modules/typeorm";
import { User } from "./entity/User";
import { View } from "./entity/View";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: [User, View],
    migrations: [],
    subscribers: [],
}); 