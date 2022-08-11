const knex = require('knex')
import { Field, ID, InputType } from "type-graphql"
import User from "../resolvers/User"

@InputType()
 export default class UserService implements User {
    @Field(type => ID)
    id?: number
    @Field()
    email: String
    @Field()
    phone?: String
    @Field()
    password: String
    @Field()
    username: String
}

