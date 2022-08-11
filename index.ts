import { ApolloServer, gql } from 'apollo-server';
import 'reflect-metadata';
import path from 'path'
import { buildSchemaSync } from 'type-graphql'
import  UserResolver  from './src/resolvers/Resolver';

async function main() {

    const schema = await buildSchemaSync({
        resolvers: [UserResolver],
        emitSchemaFile: path.resolve(__dirname, "schema.gql")
    });

    const serve = new ApolloServer({
        schema
    });

    const { url } = await serve.listen()

    console.log(`server running on: ${url}`)
}
main();