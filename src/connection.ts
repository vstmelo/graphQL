import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";
import "mysql"; 
  
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + "/model/*.{js,ts}"],       
})     
    
AppDataSource.initialize()
    .then(() => { 
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })  